import { useState, useEffect } from "react";
import { BreedInfo } from "../breedInfo/BreedInfo";
import style from "./icon.module.css";

const images = {
  appaloosa: require("../img/appaloosa.jpg"),
  arabian: require("../img/arabian.jpg"),
  thoroughbred: require("../img/thoroughbred.jpg"),
  "american paint": require("../img/american_paint.jpg"),
  mustang: require("../img/mustang.jpg"),
};

const Icon = () => {
  const [activeBreed, setActiveBreed] = useState("");

  useEffect(() => {
    const handleEscape = (event: any) => {
      if (event.key === "Escape") {
        setActiveBreed("");
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleClick = (breed: any) => {
    setActiveBreed(breed);
  };

  const renderImages = () => {
    return Object.entries(images).map(([breed, img]) => (
      <div
        className={style.item}
        key={breed}
        onClick={() => handleClick(breed)}
      >
        <div className={style.hovered}>
          <img src={img} alt={breed} title={breed} className={style.img} />
          <div className={style.text}>{breed}</div>
        </div>
        {activeBreed === breed && <BreedInfo breed={activeBreed} />}
      </div>
    ));
  };

  return (
    <div className={style.container}>
      {renderImages()}
    </div>
  );
};

export default Icon;
