import {classNames} from "shared/lib/classNames/className";
import cls from "./ButButton.module.scss";
import {useEffect, useState} from "react";

interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования ErrorBoundary
export const BugButton = ({className}: BugButtonProps) => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if(error)
            throw new Error();
    } , [error]);

    return(<button onClick={onThrow} className={classNames(cls.ButButton, {}, [className])}>throw Error</button>);
};