import solidLogo from "../../assets/solid.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <p>Powered by</p>
      <img src={solidLogo} alt="Solid logo"/>
    </footer>
  );
};

export default Footer;