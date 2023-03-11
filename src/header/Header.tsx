import style from "./header.module.css";

export const Header = () => {
  return (
    <>
      <header>
        <h1>Horse Haven</h1>
        <h3>To get a closer look and more details, click on the horse image</h3>
        <div className={style.overlay}></div>
      </header>
    </>
  );
};
