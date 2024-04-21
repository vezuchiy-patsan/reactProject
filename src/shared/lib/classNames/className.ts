type Mobs = Record<string, boolean | string>;
export function classNames(cls: string, mods: Mobs, additional: string[]):string{
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([ value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}