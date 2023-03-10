import style from "./breed.module.css";
import horse from "../api/horseApi.json";

interface HorseBreed {
  name: string;
  country: string;
  weight: string;
  body_type: string;
  life_expectancy: number;
}

interface BreedInfoProps {
  breed: string;
}

export const BreedInfo = ({ breed }: BreedInfoProps | any) => {
  const formattedBreed = breed.toLowerCase().replace(/\s+/g, "_");
  const horseSelected = horse.horse_breed.find(
    (item: HorseBreed) =>
      item.name.toLowerCase().replace(/\s+/g, "_") === formattedBreed
  );

  const renderHorseInfo = (title: string, value: string | number) => (
    <div className={style.container}>
      <p className={style.title}>{title}: </p>
      <p>{value}</p>
    </div>
  );

  return (
    <>
      {horseSelected && (
        <div className={style.overlay}>
          <div className={style.popup}>
            {renderHorseInfo("Name", horseSelected.name)}
            <hr />
            {renderHorseInfo("Country", horseSelected.country)}
            <hr />
            {renderHorseInfo("Weight", horseSelected.weight)}
            <hr />
            {renderHorseInfo("Body type", horseSelected.body_type)}
            <hr />
            {renderHorseInfo("Life Expectancy", horseSelected.life_expectancy)}
            <hr />
            {renderHorseInfo("Personality", horseSelected.personality)}
          </div>
        </div>
      )}
    </>
  );
};
