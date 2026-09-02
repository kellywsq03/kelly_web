import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import postcss from 'postcss';

const sourceDirectory = path.resolve('src');

async function cssFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return cssFiles(entryPath);
    return entry.name.endsWith('.css') ? [entryPath] : [];
  }));
  return files.flat();
}

function expandSingleLineDeclarationBlock(rule) {
  const declarations = rule.nodes?.filter((node) => node.type === 'decl') ?? [];
  const isSingleLine = rule.source?.start.line === rule.source?.end.line;

  if (!isSingleLine || declarations.length < 2) return;

  const indent = ' '.repeat((rule.source?.start.column ?? 1) - 1);
  rule.raws.between = ' ';
  rule.raws.after = `\n${indent}`;
  declarations.forEach((declaration) => {
    declaration.raws.before = `\n${indent}  `;
  });
}

for (const file of await cssFiles(sourceDirectory)) {
  const input = await readFile(file, 'utf8');
  const root = postcss.parse(input, { from: file });
  root.walkRules(expandSingleLineDeclarationBlock);
  const output = root.toString();
  if (output !== input) await writeFile(file, output);
}
