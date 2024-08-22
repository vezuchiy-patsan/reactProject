import {useTranslation} from "react-i18next";
import {BugButton} from "app/ErrorBoundary";

const MainPage = () => {
  const {t} = useTranslation("main");

  return (
      <>
          <div>
              {t('Главная страница')}
          </div>
          <BugButton/>
      </>
  );
};

export default MainPage;

