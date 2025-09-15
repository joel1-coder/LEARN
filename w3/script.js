function runCode() {
  let editor = document.getElementById("editor");
  let output = document.getElementById("output");
  let code = editor.value;

  // Detect if the code is Python/SQL (just show as text)
  if (code.trim().startsWith("#") || code.trim().toUpperCase().includes("SELECT") || code.trim().toUpperCase().includes("CREATE")) {
    // Show code output as plain text
    output.srcdoc = <pre>${escapeHtml(code)}</pre>;
  } else {
    // HTML/CSS/JS code runs in iframe
    output.srcdoc = code;
  }
}

// Helper: escape HTML for Python/SQL display
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
