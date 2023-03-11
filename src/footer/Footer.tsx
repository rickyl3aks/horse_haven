import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h2 className={style.info}>Stay tuned for upcoming horse breeds...</h2>
      <p>
        Special thanks to{" "}
        <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
          Pixabay
        </a>{" "}
        for providing free high-quality images
      </p>
    </footer>
  );
};

export default Footer;
