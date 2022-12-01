import { Container,  Paper } from "@mantine/core"
import { Auth } from "../../utils/api";
import { IAuth } from "../../models/Auth"
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";

export function Transfer() {
    const navigate = useNavigate();
    const { classes, theme } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Container className={classes.root}>
                <Paper className={classes.paper} radius={10} p={40} shadow={'md'}>

                </Paper>
            </Container>
        </div >
    )
}