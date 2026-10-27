import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, '');
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const PASSCODE = process.env.APP_PASSCODE;
const ALLOWED_KEYS = new Set(['posts']);

const dbHeaders = () => ({
  apikey: SUPABASE_KEY as string,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
});

// 503 tells the client to keep using localStorage only.
function guard(req: Request): NextResponse | null {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return NextResponse.json({ success: false, error: 'storage_not_configured' }, { status: 503 });
  }
  if (PASSCODE && req.headers.get('x-app-passcode') !== PASSCODE) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
  }
  return null;
}

export async function GET(req: Request) {
  const denied = guard(req);
  if (denied) return denied;

  const key = new URL(req.url).searchParams.get('key') || '';
  if (!ALLOWED_KEYS.has(key)) return NextResponse.json({ success: false, error: 'bad_key' }, { status: 400 });

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/app_state?key=eq.${key}&select=value,updated_at`, {
      headers: dbHeaders(),
      cache: 'no-store',
    });
    if (!res.ok) return NextResponse.json({ success: false, error: 'db_error' }, { status: 502 });
    const rows = await res.json();
    return NextResponse.json({ success: true, value: rows[0]?.value ?? null, updatedAt: rows[0]?.updated_at ?? null });
  } catch {
    return NextResponse.json({ success: false, error: 'db_unreachable' }, { status: 502 });
  }
}

export async function PUT(req: Request) {
  const denied = guard(req);
  if (denied) return denied;

  let body: { key?: string; value?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'bad_json' }, { status: 400 });
  }
  if (!body.key || !ALLOWED_KEYS.has(body.key) || !Array.isArray(body.value)) {
    return NextResponse.json({ success: false, error: 'bad_payload' }, { status: 400 });
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/app_state?on_conflict=key`, {
      method: 'POST',
      headers: { ...dbHeaders(), Prefer: 'resolution=merge-duplicates,return=minimal' },
      body: JSON.stringify({ key: body.key, value: body.value, updated_at: new Date().toISOString() }),
    });
    if (!res.ok) return NextResponse.json({ success: false, error: 'db_error' }, { status: 502 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: 'db_unreachable' }, { status: 502 });
  }
}
