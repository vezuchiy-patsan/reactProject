import cls from "./Loader.module.scss";
import {classNames} from "shared/lib/classNames/className";
import {LoaderShare} from "shared/ui/Loader/ui/LoaderShare";

interface LoaderProps {
    className?: string;

}

export const Loader = ({className} : LoaderProps) => {
    return (
        <div className={classNames(cls.Loader, {}, [className])}>
            <LoaderShare />
        </div>
    );
};