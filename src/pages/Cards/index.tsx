import { Button, Container, Paper, Stack, Title } from "@mantine/core"
import { showNotification } from "@mantine/notifications";
import { IconX } from '@tabler/icons';
import { Card } from "react-pay-card";
import { useStyles } from "./style";

export function Cards() {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Container className={classes.root}>
                <Paper className={classes.paper} radius={10} p={50} shadow={'lg'}>
                    <Stack>
                        <Card
                            cardCvv='000'
                            cardHolder='JOHN DOE'
                            cardMonth='12'
                            cardYear='2026'
                            cardNumber='0000 0000 0000 0000'
                        />

                        <Button fullWidth mt="xl" size="md" onClick={() =>
                            showNotification({
                                title: 'Error',
                                message: 'This feature is not implemented yet',
                                icon: <IconX />,
                                color: 'red',
                            })
                        }>
                            Get your Card
                        </Button>
                    </Stack>
                </Paper>
            </Container>
        </div>
    )
}