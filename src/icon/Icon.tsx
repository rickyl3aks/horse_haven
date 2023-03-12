import { useState, useEffect } from "react";
import { BreedInfo } from "../breedInfo/BreedInfo";
import horse from "../api/horseApi.json";
import style from "./icon.module.css";

const Icon = () => {
  const [activeBreed, setActiveBreed] = useState("");

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveBreed("");
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const formattedBreed = (breed: string): string => {
    return breed.replace(/_/g, " ");
  };

  return (
    <div className={style.container}>
      {horse.horse_breed.map(({ name }) => {
        const key = name.replace(/ /g, "_");
        const imgSrc = require(`../img/${key}.jpg`);
        return (
          <div
            className={style.item}
            key={name}
            onClick={() => setActiveBreed(name)}
          >
            <div className={style.hovered}>
              <img src={imgSrc} alt={name} title={name} className={style.img} />
              <div className={style.text}>{formattedBreed(name)}</div>
            </div>
            {activeBreed === name && <BreedInfo breed={name} />}
          </div>
        );
      })}
    </div>
  );
};

export default Icon;
