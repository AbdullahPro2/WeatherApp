import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

// make sure to install
// npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

const inputContainer = {
  display: "flex",
  position: "relative",
};

const searchIcon = {
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  color: " #555",
  fontSize: "1.3rem",
};
function SearchBar({ value, onSetValue, size, className }) {
  const [inputValue, setInputValue] = useState("");
  const searchInput = {
    padding: "8px 2.8rem",
    border: "none",
    outline: "none",
    width: size,
  };
  useEffect(
    function () {
      function handleChange(e) {
        if (e.key === "Enter") {
          onSetValue(inputValue);
        }
      }
      document.addEventListener("keydown", handleChange);
      return function () {
        document.removeEventListener("keydown", handleChange);
      };
    },
    [inputValue, onSetValue]
  );

  return (
    <div style={inputContainer}>
      <input
        type="text"
        style={searchInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={className}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} style={searchIcon} />
    </div>
  );
}

export default SearchBar;
