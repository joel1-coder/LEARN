function runCode() {
  let code = document.getElementById("editor").value;
  let iframe = document.getElementById("output").contentWindow.document;
  iframe.open();
  iframe.write(code);
  iframe.close();
}