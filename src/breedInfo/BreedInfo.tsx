import { useEffect, useState } from "react";
import style from "./breed.module.css";
import horse from "../api/horseApi.json";
import Btn from "../components/Btn";
import Illustration from "../illustration/Illustration";

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
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        document.body.style.overflow = "visible";
      }
    };

    document.body.style.overflow = isOpen ? "hidden" : "visible";
    document.addEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const formattedBreed = breed.toLowerCase().replace(/\s+/g, "_");
  const horseSelected: any = horse.horse_breed.find(
    (item: HorseBreed) =>
      item.name.toLowerCase().replace(/\s+/g, "_") === formattedBreed
  );

  const formatStringForDisplay = (string: string) => {
    const stringWithSpaces = string.replace(/_/g, " ");
    return stringWithSpaces.charAt(0).toUpperCase() + stringWithSpaces.slice(1);
  };

  const renderHorseInfo = (
    title: string,
    value: string | number | any,
    horseName: string
  ) => {
    const imgSrc = Array.isArray(horseName)
      ? horseName.map((name) => { return require(`../img/${name.source.replace(/ /g, "_")}.jpg`) })
      : require(`../img/${horseName.replace(/ /g, "_")}.jpg`);
    const isString = typeof value === "string";
    const valueWords = isString ? value.split(" ") : [];
    const shouldInfoExpand = isString && valueWords.length > 18 && !isExpanded;

    return (
      <div className={style.container}>
        <p className={style.title}>{title}: </p>
        <div className={style.info}>
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
              {title === "Image" ? (
                <Illustration source={imgSrc} horseName={value} />
              ) : isString ? (
                formatStringForDisplay(value)
              ) : typeof value === "object" ? (
                Object.keys(value).map((key: string, index: number) => {
                  const propertyValue = value[key];
                  let colour: any[] = [];
                  if (Array.isArray(propertyValue)) {
                    const elements = [];
                    for (const element of propertyValue) {
                      elements.push(element);
                    }
                    colour.push({ [key]: elements });
                  } else {
                    colour.push({ [key]: propertyValue });
                  }
                  return (
                    <div key={index}>
                      <span>{key}: </span>
                      {colour.map((item: any, index: number) =>
                        item[Object.keys(item)[0]].map((colour: string) => {
                          return (
                            <div
                              key={colour + index}
                              style={{
                                display: "inline-block",
                                width: "1rem",
                                height: "1rem",
                                backgroundColor: `${colour}`,
                              }}
                            ></div>
                          );
                        })
                      )}
                    </div>
                  );
                })
              ) : (
                value.toString()
              )}
              {isExpanded && valueWords.length > 18 && (
                <span
                  className={style.collapse}
                  onClick={() => setIsExpanded(false)}
                ></span>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {horseSelected && isOpen && (
        <div
          className={style.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className={style.popup}>
            <div onClick={() => setIsOpen(false)}>
              <Btn />
            </div>
            <br />
            <br />
            {Object.keys(horseSelected)
              .filter((prop) => !["id", "img"].includes(prop))
              .map((prop, idx) => (
                <div key={prop}>
                  {idx > 0 && <hr />}
                  {renderHorseInfo(
                    formatStringForDisplay(prop),
                    horseSelected[prop],
                    horseSelected.image
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
