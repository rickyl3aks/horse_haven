import style from "./app.module.css";
import horse from "./api/horseApi.json";
import { horseType } from "./customType/type";
import { useState } from "react";

const App = () => {
  const images: any = {
    appaloosa: require("./img/appaloosa.png"),
  };
  const [expanded, setExpanded] = useState(false);

  const horseBreed: any = horse.horse_breed;

  return (
    <div className="App">
      {horseBreed.map((items: horseType) => {
        if (items.name) {
          return (
            <div key={items.id} className={style.flex}>
              <div>
                <img
                  src={images[items.name.toLowerCase()]}
                  alt={items.name}
                  className={style.img}
                />
              </div>
              <div className={style.info}>
                <p className={style.detail}>
                  <span className={style.title}>Name: </span>
                  <span className={style.rightText}>{items.name}</span>
                </p>
                <p className={style.detail}>
                  <span className={style.title}>Country of Origin: </span>
                  <span className={style.rightText}>{items.country}</span>
                </p>
                <p className={style.detail}>
                  <span className={style.title}>Weight: </span>
                  <span className={style.rightText}>{items.weight}</span>
                </p>
                <p className={style.detail}>
                  <span className={style.title}>Body Type: </span>
                  <span className={style.rightText}>{items.body_type}</span>
                </p>
                <p className={style.detail}>
                  <span className={style.title}>Life Expectancy: </span>
                  <span className={style.rightText}>
                    {items.life_expectancy}
                  </span>
                </p>
                <div
                  className={`${style.detail}`}
                  onClick={() => setExpanded(!expanded)}
                >
                  <span className={style.title}>Personality: </span>
                  <span className={style.arrow}>&#x25B6;</span>
                  <div
                    className={`${style.info} ${
                      expanded ? style.expanded : style.collapsed
                    }`}
                  >
                    {items.personality}
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default App;
