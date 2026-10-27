-- Run once in Supabase: SQL Editor > New query > paste > Run.
create table if not exists app_state (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

-- The app talks to this table only through its server route with the
-- service-role key, so block all direct access from the public API.
alter table app_state enable row level security;
