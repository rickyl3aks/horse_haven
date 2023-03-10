import { useState, useEffect } from "react";
import { BreedInfo } from "../breedInfo/BreedInfo";
import style from "./icon.module.css";

const Icon = () => {
  const images: any = {
    appaloosa: require("../img/appaloosa.jpg"),
    arabian: require("../img/arabian.jpg"),
    thoroughbred: require("../img/thoroughbred.jpg"),
    "american paint": require("../img/american_paint.jpg"),
  };

  const [activeBreed, setActiveBreed] = useState<string>("");

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveBreed("");
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleClick = (breed: string) => {
    console.log(breed);
    setActiveBreed((prevBreed) => (prevBreed === breed ? "" : breed));
  };

  const handleClose = () => {
    setActiveBreed("");
  };

  return (
    <div className={style.container}>
      {Object.entries(images).map(([breed, img]: [string, any]) => (
        <div
          className={style.item}
          key={breed}
          onClick={() => handleClick(breed)}
        >
          <img src={img} alt={breed} title={breed} className={style.img} />
          <div className={style.text}>{breed}</div>
          {activeBreed === breed && (
            <>
              <BreedInfo breed={breed} onClose={handleClose} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Icon;
