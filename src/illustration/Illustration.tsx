import { useRef } from "react";
import style from "./illustration.module.css";
import Btn from "../components/Btn";

const Illustration = ({
  source,
  horseName,
}: {
  source: string;
  horseName: string;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const capitalizeFirstLetter = (name: String): String => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div>
      <img
        src={source}
        alt={horseName}
        className={style.img}
        onClick={() => dialogRef.current?.showModal()}
      />
      <dialog ref={dialogRef} className={style.modal}>
        <span onClick={() => dialogRef.current?.close()}>
          <Btn />
        </span>
        <img className={style.modalImg} src={source} alt={horseName} />
        <cite className={style.cite}>{capitalizeFirstLetter(horseName)}</cite>
      </dialog>
    </div>
  );
};

export default Illustration;
