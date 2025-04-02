import { useState } from "react";
import { useTranslation } from "react-i18next";
import { type SupportedLng, supportedLngs } from "../../i18n/config.ts";
import BackButton from "../back-button/BackButton.tsx";
import MobileCheckoutInfo from "../checkout-info/mobile/MobileCheckoutInfo.tsx";
import styles from "./Header.module.scss";

const Header = () => {
  const { i18n } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const getButtonClass = (langCode: string) =>
    `${styles["header__lang-btn"]} ${
      activeLocale === langCode ? styles["header__current-lang"] : ""
    }`.trim();

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen((prev) => !prev);
  };

  const handleMobileLanguageSelect = (code: string) => {
    i18n.changeLanguage(code);
    setIsMobileDropdownOpen(false);
  };

  return (
    <header className={styles["header"]}>
      <BackButton className={styles["header__back-btn"]} />
      <MobileCheckoutInfo />

      <div className={styles["header__mobile-lang-controls"]}>
        <button
          type="button"
          onClick={toggleMobileDropdown}
          className={`${styles["header__lang-btn"]} ${styles["header__current-lang"]}`}
        >
          {supportedLngs[activeLocale as SupportedLng]}
        </button>

        {isMobileDropdownOpen && (
          <div className={styles["header__mobile-lang-dropdown"]}>
            {Object.entries(supportedLngs).map(([code, label]) => (
              <button
                key={code}
                type="button"
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
        {Object.entries(supportedLngs).map(([code, label]) => (
          <button
            key={code}
            type="button"
            onClick={() => i18n.changeLanguage(code)}
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