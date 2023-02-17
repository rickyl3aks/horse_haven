import style from "./app.module.css";
import { HorseBreed, horseType } from "./customType/type";
import { useState } from "react";

const App = ({ displayHorse }: any) => {
  const images: any = {
    appaloosa: require("./img/appaloosa.png"),
    arabian: require("./img/arabian.jpeg"),
    thoroughbred: require("./img/thoroughbred.jpeg"),
    "american paint": require("./img/american_paint.jpeg"),
  };
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="App">
      {displayHorse.map((items: HorseBreed) => {
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
