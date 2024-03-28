import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

export default function App() {
  return (
    <div>
      <CodeMirror
        value=""
        height="200px"
        theme="dark"
        extensions={[sql({upperCaseKeywords:true,tables:[{label: "Table Name"}]})]}
        onChange={(value, viewUpdate) => {
          console.log("value:", value)
        }}
      />
    </div>
  );
}