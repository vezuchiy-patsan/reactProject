import {classNames} from "./className";

describe('className', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional param', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass',  {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods param', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass',
            {hovered: true, scrollable: true},
            ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods param but one false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass',
            {hovered: true, scrollable: false},
            ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods param but one undefined', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(classNames('someClass',
            {hovered: undefined, scrollable: true},
            ['class1', 'class2']))
            .toBe(expected);
    });
});