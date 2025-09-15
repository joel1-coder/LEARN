function runCode() {
  let editor = document.getElementById("editor");
  let output = document.getElementById("output");
  let code = editor.value;

  // HTML/CSS/JS runs in iframe
  output.srcdoc = code;
}
