# Connecting Supabase to Cursor via MCP

This project is configured to use the **Supabase MCP server** so Cursor can talk to your Supabase project (database, types, Edge Functions, etc.) from the editor.

## What’s already done

- **`.cursor/mcp.json`** is set up with the Supabase MCP URL: `https://mcp.supabase.com/mcp`

## Steps to connect

### 1. Restart or reload Cursor

After adding or changing `mcp.json`, reload Cursor so it picks up the new MCP server:

- **Windows/Linux:** `Ctrl+Shift+P` → “Developer: Reload Window”
- **Mac:** `Cmd+Shift+P` → “Developer: Reload Window”

### 2. Log in to Supabase (OAuth)

The first time Cursor uses the Supabase MCP tools, it will open a browser so you can:

1. Log in to your Supabase account (if needed).
2. Choose the **organization** that contains your project.
3. Approve access for the MCP client.

You only need to do this once per machine (unless you revoke access or switch accounts).

### 3. Check that MCP is connected

- Open **Settings → Cursor Settings → Tools & MCP**.
- Confirm that **Supabase** appears and is connected.

### 4. Try it in chat

In Cursor chat, you can ask things like:

- *“What tables are there in the database? Use MCP tools.”*
- *“Generate TypeScript types from my Supabase schema using MCP.”*
- *“List my Edge Functions using Supabase MCP.”*

The agent will use the Supabase MCP tools when they’re relevant.

## Optional: Scope to one project

To limit the MCP server to a **single Supabase project**, add your project reference to the URL in `.cursor/mcp.json`:

1. In [Supabase Dashboard](https://supabase.com/dashboard), open your project.
2. From the URL or project settings, copy the **Project ID** (e.g. `abcdefghijklmnop`).
3. In `.cursor/mcp.json`, change the Supabase entry to:

```json
"supabase": {
  "url": "https://mcp.supabase.com/mcp?project_ref=YOUR_PROJECT_REF"
}
```

Replace `YOUR_PROJECT_REF` with your actual Project ID.

## Optional: Safer defaults

- **Read-only database:** add `&read_only=true` to the URL so all SQL runs as a read-only user:
  `https://mcp.supabase.com/mcp?project_ref=YOUR_REF&read_only=true`
- **Limit tool groups:** use `&features=database,docs` (or the list you need) to restrict which tools are available.

## Security (from Supabase docs)

- Prefer a **development** Supabase project, not production.
- Prefer **project-scoped** and **read-only** when possible.
- Review tool calls before approving them in Cursor (don’t rely on auto-run for sensitive actions).

## Tools you get with Supabase MCP

- **Database:** run SQL, list tables, apply migrations, list extensions.
- **Development:** generate TypeScript types, get API URL and anon key.
- **Edge Functions:** list, get, deploy.
- **Debugging:** advisors, service logs.
- **Docs:** search Supabase docs.

For full details and security notes, see: [Supabase MCP docs](https://supabase.com/docs/guides/getting-started/mcp).
