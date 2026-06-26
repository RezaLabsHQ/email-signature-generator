export function downloadSignature(html: string) {
  const blob = new Blob([html], { type: "text/html" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "email-signature.html";
  link.click();
  URL.revokeObjectURL(link.href);
}

