import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
} from '@mantine/core';
import { Link } from 'react-router-dom';

import { useStyles } from './style';

export function Login() {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                    Dino Bank
                </Title>

                <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
                <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
                <Checkbox label="Keep me logged in" mt="xl" size="md" />
                <Button fullWidth mt="xl" size="md">
                    Login
                </Button>

                <Text align="center" mt="md">
                    Don&apos;t have an account?
                    <Anchor component={Link} to="/register" weight={700}>
                        Register
                    </Anchor>
                </Text>
            </Paper>
        </div>
    );
}