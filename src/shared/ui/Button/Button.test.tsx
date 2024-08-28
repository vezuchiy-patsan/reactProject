import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from "shared/ui/Button/Button";

describe('Button', () => {
    test('Test theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Hello</Button>);
        expect(screen.getByText('Hello')).toHaveClass("clear");
        screen.debug();
    });
    test('Test render', () => {
        render(<Button>Hello</Button>);
        expect(screen.getByText('Hello')).toBeInTheDocument();
        screen.debug();
    });
});