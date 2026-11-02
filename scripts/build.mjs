import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'public');
await rm(output, { recursive: true, force: true });
await cp(path.join(root, 'site'), output, { recursive: true });

// Keep links from the previous personal website useful.
const redirects = {
  'docs/About/Education': '/education/',
  'docs/education': '/education/',
  'docs/Contact': '/contact/',
  'docs/contact': '/contact/',
  docs: '/',
};
for (const [oldPath, target] of Object.entries(redirects)) {
  const directory = path.join(output, oldPath);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page moved — Everett</title><link rel="canonical" href="https://everett.moe${target}"><meta http-equiv="refresh" content="0;url=${target}"></head><body><p>This page has moved. <a href="${target}">Continue to the page</a>.</p></body></html>\n`);
}
console.log('Built personal site in public/.');
