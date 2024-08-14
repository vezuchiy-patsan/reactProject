import cls from "./LoaderShare.module.scss";
import {classNames} from "shared/lib/classNames/className";

interface LoaderProps {
    className?: string;

}

export const LoaderShare = ({className} : LoaderProps) => {
    return (
        <div className={classNames(cls.loaderRipple, {}, [className])}>
            <div />
            <div />
        </div>
    );
};