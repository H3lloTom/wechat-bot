import hotImport from 'hot-import';

async function main() {
  const hotMod = await hotImport('./index.ts');

  hotMod();

  await hotImport(null, true);
}

main();
