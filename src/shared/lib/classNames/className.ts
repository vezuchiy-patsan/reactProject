type Mobs = Record<string, boolean | string>;
export function classNames(cls: string, mods: Mobs = {}, additional: string[] = []):string{
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([ _, bool]) => Boolean(bool))
            .map(([className]) => className),
    ]
        .join(' ');
}