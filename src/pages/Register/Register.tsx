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

import { useStyles } from './style';

export function Register() {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                    Dino Bank
                </Title>

                <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
                <PasswordInput label="Password" placeholder="Create a password" mt="md" size="md" />
                <PasswordInput label="Confirm Password" placeholder="Confirm a password" mt="md" size="md" />
                <Checkbox label="I Accept the Terms of Use & Privacy Policy." mt="xl" size="md" />
                <Button fullWidth mt="xl" size="md">
                    Register
                </Button>

                <Text align="center" mt="md">
                    Don&apos;t have an account?{' '}
                    <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
                        Login
                    </Anchor>
                </Text>
            </Paper>
        </div>
    );
}