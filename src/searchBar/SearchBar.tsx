import React, { useEffect, useRef, useState } from "react";
import style from "./searchbar.module.css";
import horse from "../api/horseApi.json";
import App from "../App";

interface Suggestion {
  name: string;
}

const horseNames = horse.horse_breed.map((breed) => ({ name: breed.name }));
const horseBreed: any = horse.horse_breed;

const suggestions: Suggestion[] = horseNames;

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(
    []
  );
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(query.toLowerCase())
      )
    );
    setSelectedIndex(-1);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setQuery(suggestion.name);
    setFilteredSuggestions([]);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex(
        Math.min(selectedIndex + 1, filteredSuggestions.length - 1)
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex(Math.max(selectedIndex - 1, 0));
    } else if (event.key === "Enter" && selectedIndex !== -1) {
      handleSuggestionClick(filteredSuggestions[selectedIndex]);
    }
  };

  const display = horseBreed.filter((n: any) => n.name === query);

  return (
    <div>
      <div className={style.container}>
        <form>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          {query.length > 0 && filteredSuggestions.length > 0 && (
            <ul className={style.suggestionsList}>
              {filteredSuggestions.map((suggestion, idx) => (
                <li
                  key={suggestion.name}
                  className={style.suggestionItem}
                  style={{
                    cursor: "pointer",
                    backgroundColor: selectedIndex === idx ? "#ddd" : "white",
                  }}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
          <button type="submit" className={style.searchButton}></button>
        </form>
      </div>
      {display.length > 0 && <App displayHorse={display} />}
    </div>
  );
};
