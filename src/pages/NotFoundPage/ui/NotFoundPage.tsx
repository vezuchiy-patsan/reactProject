import cls from "./NotFoundPage.module.scss";
import {classNames} from "shared/lib/classNames/className";
import {useTranslation} from "react-i18next";
import {FC} from "react";

interface NotFoundPageProps {
    className?: string;

}

export const NotFoundPage:FC<NotFoundPageProps> = ({className} ) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t("Страница не найдена")}
        </div>
    );
};