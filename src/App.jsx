import Editor from "@monaco-editor/react";
import { MONACO } from "./constants/monaco";
import LanguageSelector from "./components/LanguageSelector";
import { useState } from "react";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    MONACO.DEFAULT_LANGUAGE
  );
  const handleLanguageChange = (languageDetails = MONACO.DEFAULT_LANGUAGE) => {
    setSelectedLanguage(languageDetails);
  };

  return (
    <section>
      <LanguageSelector
        value={selectedLanguage}
        onChange={handleLanguageChange}
      />
      <div className="flex align-top justify-between">
        <div className="basis-1/2">
          <Editor
            height="100vh"
            defaultLanguage={MONACO.DEFAULT_LANGUAGE.value}
            language={selectedLanguage.value}
            defaultValue={selectedLanguage.codesnippet || "// some comment"}
            theme="vs-dark"
            options={MONACO.options}
          />
        </div>
        <div className="basis-1/2">Output</div>
      </div>
    </section>
  );
}
