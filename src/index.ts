// The unknown type
function render(document: unknown) {
  if (typeof document === "string") {
    document.toUpperCase();
  }
}
