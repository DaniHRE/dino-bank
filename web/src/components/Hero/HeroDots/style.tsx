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
        fontSize: 62,
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