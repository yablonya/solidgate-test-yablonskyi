import { useState } from "react";
import BackButton from "../back-button/BackButton.tsx";
import MobileCheckoutInfo from "../checkout-info/mobile/MobileCheckoutInfo.tsx";
import styles from "./Header.module.scss";

const Header = () => {
  const [currentLang, setCurrentLang] = useState("uk");
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const languages = [
    { code: "en", label: "Eng" },
    { code: "uk", label: "Укр" },
  ];

  const getButtonClass = (langCode: string) =>
    `${styles["header__lang-btn"]} ${
      currentLang === langCode ? styles["header__current-lang"] : ""
    }`.trim();

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen((prev) => !prev);
  };

  const handleMobileLanguageSelect = (code: string) => {
    setCurrentLang(code);
    setIsMobileDropdownOpen(false);
  };

  return (
    <header className={styles["header"]}>
      <BackButton className={styles["header__back-btn"]} />
      <MobileCheckoutInfo />

      <div className={styles["header__mobile-lang-controls"]}>
        <button
          onClick={toggleMobileDropdown}
          className={`${styles["header__lang-btn"]} ${styles["header__current-lang"]}`}
        >
          {currentLanguage ? currentLanguage.label : "Lang"}
        </button>

        {isMobileDropdownOpen && (
          <div className={styles["header__mobile-lang-dropdown"]}>
            {languages.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => handleMobileLanguageSelect(code)}
                className={getButtonClass(code)}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles["header__desktop-lang-controls"]}>
        {languages.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => setCurrentLang(code)}
            className={getButtonClass(code)}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;