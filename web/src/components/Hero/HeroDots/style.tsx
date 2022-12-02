import { createStyles } from "@mantine/core";

const BREAKPOINT = '@media (max-width: 755px)';

export const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
    },

    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '87vh',
        maxWidth: '100%',
    },

    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirecton: 'column',
        height: '100%',
        backgroundSize: 'cover',
        // backgroundImage: 'url(https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&dl=pine-watt-2Hzmz15wGik-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb)',
    },

    paper: {
        display: 'flex',
        placeItems: 'center',
        borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        height: '100%',
        width: '100vw',
        maxWidth: '100vw',
        paddingTop: 80,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '100vw',
            height: '100vh',
            maxWidth: '100%',
        },
    },

    content: {
        maxWidth: 480,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        }
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 73,
        fontWeight: 900,
        lineHeight: 1.1,
        margin: 0,
        padding: 0,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [BREAKPOINT]: {
            fontSize: 42,
            lineHeight: 1.2,
        },
    },

    description: {
        marginTop: theme.spacing.xl,
        fontSize: 24,

        [BREAKPOINT]: {
            fontSize: 18,
        },
    },

    controls: {
        marginTop: theme.spacing.xl * 2,

        [BREAKPOINT]: {
            marginTop: theme.spacing.xl,
        },
    },

    control: {
        height: 54,
        paddingLeft: 38,
        paddingRight: 38,

        [BREAKPOINT]: {
            height: 54,
            paddingLeft: 18,
            paddingRight: 18,
            flex: 1,
        },
    },
}));