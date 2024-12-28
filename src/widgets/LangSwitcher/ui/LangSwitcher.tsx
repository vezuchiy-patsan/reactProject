import {classNames} from "shared/lib/classNames/className";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
    collapsed: boolean;
}

export const LangSwitcher = ({className, collapsed} : LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };


    return (
        <Button
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            {t(collapsed ? 'Свёрнутый язык' : 'Язык')}
        </Button>
    );
};