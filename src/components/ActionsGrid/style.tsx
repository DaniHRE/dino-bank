import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },

    paper: {
        borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        height: '100%',
        width: '100%',
        maxWidth: '100%',
        paddingTop: 80,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '100vw',
            height: '100vh',
            maxWidth: '100%',
        },
    },

    mainTitle: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 22,
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
    },

    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: theme.radius.md,
        height: 90,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease, transform 100ms ease',

        '&:hover': {
            boxShadow: `${theme.shadows.md} !important`,
            transform: 'scale(1.05)',
        },
    },
}));