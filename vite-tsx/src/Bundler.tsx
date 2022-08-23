import { ColorScheme, ColorSchemeProvider, MantineProvider, Paper } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { App } from './pages/Home';

export function Bundler() {

    // UNCOMMENT TO USE ThemeSwitcher
    // const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    //     key: 'mantine-color-scheme',
    //     defaultValue: 'light',
    //     getInitialValueInEffect: true,
    // });

    // const toggleColorScheme = (value?: ColorScheme) =>
    //     setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    // useHotkeys([['mod+J', () => toggleColorScheme()]]);

    return (
        // <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }} >
                <App />
            </MantineProvider>
        // </ColorSchemeProvider >

    );
}