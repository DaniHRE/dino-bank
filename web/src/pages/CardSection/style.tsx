import { createStyles } from "@mantine/core";

const BREAKPOINT = '@media (max-width: 755px)';

export const useStyles = createStyles((theme) => ({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        maxWidth: '100%',
        // backgroundImage: 'url(/svg/layered-steps-haikei.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 73,
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: 100,
        padding: 0,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [BREAKPOINT]: {
            fontSize: 42,
            lineHeight: 1.2,
        },
    },
}));