import cls from "./Sidebar.module.scss";
import {classNames} from "shared/lib/classNames/className";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;

}

export const Sidebar = ({className} : SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle Sidebar</button>
            <div className={cls.Switcher}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};