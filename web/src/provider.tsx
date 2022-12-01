import { useState } from "react";
import { NotificationsProvider } from '@mantine/notifications';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Principal } from "./pages/Principal";
import { Register } from "./pages/Register";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

export function Provider() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'session-theme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }} >
                <NotificationsProvider position="top-center">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            <Route path="principal/*" element={<Principal />} />
                        </Routes>
                    </BrowserRouter>
                </NotificationsProvider>
            </MantineProvider >
        </ColorSchemeProvider>
    )
}