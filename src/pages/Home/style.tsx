import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '5rem',
    },

    button: {
        width: '50%',
    },

    card: {
        display: "flex",
        placeItems: "center",
        height: "100%"
    }
}));