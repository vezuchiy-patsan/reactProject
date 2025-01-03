import cls from "./Sidebar.module.scss";
import {classNames} from "shared/lib/classNames/className";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/main-icon.svg';
import AboutIcon from 'shared/assets/icons/adout-icon.svg';

interface SidebarProps {
    className?: string;

}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            {/*eslint i18next/no-literal-string: "off"*/}
            <Button
                data-testid={"sidebar-toggle"}
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >{collapsed ? '>' :'<'}</Button>
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>
                       {t("Главная")}
                   </span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} >
                        <AboutIcon className={cls.icon}/>
                        <span className={cls.link}>{t("Кнопка о нас")}</span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.Switcher}>
                <ThemeSwitcher/>
                <LangSwitcher collapsed={collapsed} className={cls.lang}/>
            </div>
        </div>
    );
};