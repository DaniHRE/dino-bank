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

    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirecton: 'column',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&dl=pine-watt-2Hzmz15wGik-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb)',
    },

    form: {
        borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        width: 450,
        maxWidth: 450,
        paddingTop: 80,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '100vw',
            height: '100vh',
            maxWidth: '100%',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    logo: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        width: 120,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));