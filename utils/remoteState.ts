// Client side of /api/state. Every call degrades to "not available" so the
// app keeps working from localStorage when no database is configured.

const PASS_KEY = 'konoha_app_passcode';

type LoadResult = { ok: true; value: unknown[] | null } | { ok: false };

function passHeader(): Record<string, string> {
  try {
    const p = localStorage.getItem(PASS_KEY);
    return p ? { 'x-app-passcode': p } : {};
  } catch {
    return {};
  }
}

async function call(init: RequestInit, query = ''): Promise<Response | null> {
  try {
    let res = await fetch(`/api/state${query}`, { ...init, headers: { ...init.headers, ...passHeader() } });
    if (res.status === 401) {
      const entered = window.prompt('Masukkan passcode redaksi:');
      if (!entered) return null;
      try {
        localStorage.setItem(PASS_KEY, entered);
      } catch {}
      res = await fetch(`/api/state${query}`, { ...init, headers: { ...init.headers, ...passHeader() } });
      if (res.status === 401) {
        try {
          localStorage.removeItem(PASS_KEY);
        } catch {}
      }
    }
    return res;
  } catch {
    return null;
  }
}

export async function loadRemote(key: string): Promise<LoadResult> {
  const res = await call({}, `?key=${key}`);
  if (!res || !res.ok) return { ok: false };
  const data = await res.json();
  return { ok: true, value: Array.isArray(data.value) ? data.value : null };
}

let timer: ReturnType<typeof setTimeout> | null = null;

export function saveRemote(key: string, value: unknown[]) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    call({ method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key, value }) });
  }, 800);
}
