export async function delay(ms: number) {
  await Promise.resolve((r) => setTimeout(r, ms));
}
