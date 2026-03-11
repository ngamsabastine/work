import fs from "node:fs";
import path from "node:path";

const dataDir = path.join(process.cwd(), "src", "data");
const outDir = path.join(process.cwd(), "tools", "generated-supabase-seed");

const sources = [
  { file: "peptides.json", table: "peptides" },
  { file: "steroids-injectable.json", table: "steroids_injectable" },
  { file: "steroids-oral.json", table: "steroids_oral" },
  { file: "research-chemicals.json", table: "research_chemicals" },
  { file: "accessories.json", table: "accessories" },
];

function sqlString(value) {
  if (value === null || value === undefined) return "null";
  return `'${String(value).replaceAll("'", "''")}'`;
}

function sqlJsonb(obj) {
  const json = JSON.stringify(obj);
  return `'${json.replaceAll("'", "''")}'::jsonb`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

fs.mkdirSync(outDir, { recursive: true });

for (const { file, table } of sources) {
  const fullPath = path.join(dataDir, file);
  const doc = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  const type = doc?.metadata?.category ?? null;

  const rows = [];
  for (const cat of doc?.categories ?? []) {
    const category = cat?.name ?? null;
    for (const p of cat?.products ?? []) {
      const id = p?.id ?? null;
      if (!id) continue;
      rows.push({
        id,
        name: p?.name ?? id,
        category,
        type,
        source_file: file,
        payload: p,
      });
    }
  }

  const chunks = chunk(rows, 200);
  const sqlFiles = [];

  for (let i = 0; i < chunks.length; i++) {
    const c = chunks[i];
    const values = c
      .map((r) => {
        return `(${sqlString(r.id)}, ${sqlString(r.name)}, ${sqlString(
          r.category
        )}, ${sqlString(r.type)}, ${sqlString(r.source_file)}, ${sqlJsonb(
          r.payload
        )})`;
      })
      .join(",\n");

    const sql = `insert into public.${table} (id, name, category, type, source_file, payload)\nvalues\n${values}\non conflict (id) do update set\n  name = excluded.name,\n  category = excluded.category,\n  type = excluded.type,\n  source_file = excluded.source_file,\n  payload = excluded.payload,\n  updated_at = now();\n`;

    const outFile = path.join(outDir, `${table}.${String(i + 1).padStart(3, "0")}.sql`);
    fs.writeFileSync(outFile, sql, "utf8");
    sqlFiles.push(outFile);
  }

  const manifest = {
    file,
    table,
    type,
    rows: rows.length,
    chunks: chunks.length,
    sqlFiles: sqlFiles.map((p) => path.relative(process.cwd(), p)),
  };

  fs.writeFileSync(
    path.join(outDir, `${table}.manifest.json`),
    JSON.stringify(manifest, null, 2),
    "utf8"
  );
}

console.log(`Wrote seed SQL to: ${outDir}`);
