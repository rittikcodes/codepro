import React from "react";
import loader from "@monaco-editor/loader";

function Editor() {
  var editor = loader.init().then((monaco) => {
    monaco.editor.create(document.getElementById("root"), {
      value: "// some comment",
      language: "javascript",
      fontSize: "24px",
    });
  });
}

export default Editor;
