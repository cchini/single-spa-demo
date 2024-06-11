import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@foris/avocado-suite";

import cx from "./app.module.scss"

function App() {
 const { t, i18n: {changeLanguage, language} } = useTranslation();
 const [currentLanguage, setCurrentLanguage] = useState(language)
 
 const handleChangeLanguage = () => {
   const newLanguage = currentLanguage === "en" ? "pt" : "en";
   setCurrentLanguage(newLanguage);
   changeLanguage(newLanguage);
 }
 
 return (
   <div className={cx.test}>
     <h1>
       {t('headerTitle', { appName: "App for Translations" })}
     </h1>
     <h3>
       Current Language: {currentLanguage}
     </h3>
     <Button
        color="primary"
        onClick={handleChangeLanguage}
     >
      Change Language a
     </Button>
   </div>
 );
}
export default App;