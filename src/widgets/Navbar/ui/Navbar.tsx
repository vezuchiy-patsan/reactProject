import cls from "./Navbar.module.scss";
import {classNames} from "shared/lib/classNames/className";

interface NavbarProps {
    className?: string;

}

export const Navbar = ({className} : NavbarProps) => {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
};
