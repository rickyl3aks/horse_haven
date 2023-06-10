import { useRef, useState } from "react";
import style from "./illustration.module.css";
import Btn from "../components/Btn";

const Illustration = ({
  source,
  horseName,
}: {
  source: any;
  horseName: string;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const capitalizeFirstLetter = (name: String): String[] | String => {
    if (Array.isArray(name)) {
      return (
        name[0].description.charAt(0).toUpperCase() +
        name[0].description.slice(1)
      );
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % source.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + source.length) % source.length
    );
  };

  console.log(source);

  return (
    <div>
      {typeof source === "object" ? (
        <img
          src={source[0]}
          alt={horseName}
          className={style.img}
          onClick={() => dialogRef.current?.showModal()}
        />
      ) : (
        <img
          src={source}
          alt={horseName}
          className={style.img}
          onClick={() => dialogRef.current?.showModal()}
        />
      )}

      <dialog ref={dialogRef} className={style.modal}>
        <span onClick={() => dialogRef.current?.close()}>
          <Btn />
        </span>
        <div className={style.container}>
          <div className={style.slides}>
            <div
              className={style.slideWrapper}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${source.length * 100}%`,
              }}
            >
              {typeof source === "object" ? (
                source.map((image: any, index: number) => {
                  return (
                    <img
                      key={index}
                      className={style.modalImg}
                      src={image}
                      alt={image.description}
                    />
                  );
                })
              ) : (
                <img className={style.modalImg} src={source} alt={horseName} />
              )}
            </div>
          </div>
          {typeof source === "object" && source.length > 1 && (
            <>
              <button className={style.prev} onClick={prevSlide}>
                ❮
              </button>
              <button className={style.next} onClick={nextSlide}>
                ❯
              </button>
            </>
          )}
        </div>
        <cite className={style.cite}>{capitalizeFirstLetter(horseName)}</cite>
      </dialog>
    </div>
  );
};

export default Illustration;
