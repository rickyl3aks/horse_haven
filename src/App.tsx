import { HorseBreed } from "./customType/type";
import style from "./app.module.css";

const App = ({ displayHorse }: any) => {
  const images: any = {
    appaloosa: require("./img/appaloosa.jpg"),
    arabian: require("./img/arabian.jpg"),
    thoroughbred: require("./img/thoroughbred.jpg"),
    "american paint": require("./img/american_paint.jpg"),
  };

  return (
    <div className={style.App}>
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
                <div className={style.detail}>
                  <span className={style.title}>Name:</span>
                  <span className={style.rightText}>{items.name}</span>
                </div>
                <div className={style.detail}>
                  <span className={style.title}>Country of Origin:</span>
                  <span className={style.rightText}>{items.country}</span>
                </div>
                <div className={style.detail}>
                  <span className={style.title}>Weight:</span>
                  <span className={style.rightText}>{items.weight}</span>
                </div>
                <div className={style.detail}>
                  <span className={style.title}>Body Type:</span>
                  <span className={style.rightText}>{items.body_type}</span>
                </div>
                <div className={style.detail}>
                  <span className={style.title}>Life Expectancy:</span>
                  <span className={style.rightText}>
                    {items.life_expectancy}
                  </span>
                </div>
                <div className={style.detail}>
                  <span className={style.title}>Personality:</span>
                  <span className={style.rightText}>{items.personality}</span>
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
