import { useState } from "@wordpress/element";
import { BaseControl } from "@wordpress/components";

const MultiLineInput = ({ label, value, onChange, help }) => {
  const [inputValue, setInputValue] = useState(value.join("\n"));

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    const newValuesArray = newValue
      .split("\n")
      .map((v) => v.trim())
      .filter((v) => v);
    onChange(newValuesArray);
  };

  return (
    <BaseControl label={label} help={help}>
      <textarea
        value={inputValue}
        onChange={handleChange}
        rows={10}
        cols={50}
        className="components-textarea-control__input"
      />
    </BaseControl>
  );
};

export default MultiLineInput;
