import React from "react";
import Select from "react-select";
import { MONACO } from "../constants/monaco";

function LanguageSelector({ onChange, value }) {
  return (
    <Select
      options={MONACO.SUPPORTED_LANGUAGES}
      value={value || MONACO.DEFAULT_LANGUAGE}
      onChange={onChange}
    />
  );
}

export default LanguageSelector;
