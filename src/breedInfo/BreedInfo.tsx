import { useState } from "react";
import style from "./breed.module.css";
import horse from "../api/horseApi.json";
import Btn from "../components/Btn";

interface HorseBreed {
  name: string;
  country: string;
  weight: string;
  body_type: string;
  longevity: number;
}

interface BreedInfoProps {
  breed: string;
}

export const BreedInfo = ({ breed }: BreedInfoProps) => {
  const [isClose, setIsClose] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);


  const formattedBreed = breed.toLowerCase().replace(/\s+/g, "_");
  const horseSelected: any = horse.horse_breed.find(
    (item: HorseBreed) =>
      item.name.toLowerCase().replace(/\s+/g, "_") === formattedBreed
  );

  const formatStringForDisplay = (string: string) => {
    const stringWithSpaces = string.replace(/_/g, " ");
    return stringWithSpaces.charAt(0).toUpperCase() + stringWithSpaces.slice(1);
  };

  const renderHorseInfo = (title: string, value: string | number) => {
    const isString = typeof value === "string";
    const valueWords = isString ? value.split(" ") : [];
    const shouldInfoExpand = isString && valueWords.length > 18 && !isExpanded;

    return (
      <div className={style.container}>
        <p className={style.title}>{title}: </p>
        <p>
          {shouldInfoExpand ? (
            <>
              {valueWords.slice(0, 7).join(" ")} ...
              <span
                className={style.expand}
                onClick={() => setIsExpanded(true)}
              ></span>
            </>
          ) : (
            <>
              {isString ? formatStringForDisplay(value) : value.toString()}
              {isExpanded && valueWords.length > 18 && (
                <span
                  className={style.collapse}
                  onClick={() => setIsExpanded(false)}
                ></span>
              )}
            </>
          )}
        </p>
      </div>
    );
  };

  return (
    <>
      {horseSelected && isClose && (
        <div className={style.overlay}>
          <div className={style.popup}>
            <div onClick={() => setIsClose(!true)}>
              <Btn />
            </div>
            <br />
            <br />
            {Object.keys(horseSelected)
              .filter(
                (prop) => prop !== "id" && prop !== "colour" && prop !== "img"
              )
              .map((prop: any, idx: number) => (
                <div key={prop}>
                  {idx > 0 && <hr />}
                  {renderHorseInfo(
                    formatStringForDisplay(prop),
                    horseSelected[prop]
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
