export async function copySignature(html: string) {
  if (!navigator.clipboard || !("ClipboardItem" in window)) {
    await navigator.clipboard.writeText(html);
    return;
  }

  await navigator.clipboard.write([
    new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([html.replace(/<[^>]*>/g, " ")], { type: "text/plain" }),
    }),
  ]);
}

