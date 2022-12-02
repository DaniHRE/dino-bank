import { Container, Title, Text, Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './style';

export function NotFoundPage() {
    const { classes } = useStyles();
    const navigate = useNavigate();

    return (
        <Container className={classes.root}>
            <div className={classes.inner}>
                <div className={classes.image}>
                    <div className={classes.content}>
                        <div className={classes.label}>404</div>
                        <Title className={classes.title}>Nothing to see here</Title>
                        <Text color="dimmed" size="lg" align="center" className={classes.description}>
                            Page you are trying to open does not exist. You may have mistyped the address, or the
                            page has been moved to another URL. If you think this is an error contact support.
                        </Text>
                        <Group position="center">
                            <Button onClick={() => navigate('/')} size="md">Take me back to home page</Button>
                        </Group>
                    </div>
                </div>
            </div>
        </Container>
    );
}