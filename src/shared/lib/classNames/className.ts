type Mobs = Record<string, boolean | string>;
export function classNames(cls: string, mods: Mobs, additional: string[]):string{
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}