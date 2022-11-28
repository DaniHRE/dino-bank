import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    Container,
    Group,
    Image,
    Stack
} from '@mantine/core';
import { Link } from 'react-router-dom';

import { useStyles } from './style';

export function Login() {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Container className={classes.root}>
                <Paper className={classes.form} radius={0} p={40} shadow="xs">

                    <Stack align="center" spacing={0} >
                        <Image width={64} height={64} src="/icons/dino.svg" />

                        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                            Dino Bank
                        </Title>
                    </Stack>

                    <TextInput label="Email address" placeholder="example@gmail.com" size="md" />
                    <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />

                    <Group position="apart" mt={5} className={classes.forgotContainer}>
                        <Anchor<'a'>
                            href="#"
                            onClick={(event) => event.preventDefault()}
                            className={classes.forgotInput}
                        >
                            Forgot your password?
                        </Anchor>
                    </Group>

                    <Checkbox label="Keep me logged in" mt="xl" size="md" />
                    <Button fullWidth mt="xl" size="md">
                        Login
                    </Button>

                    <Text align="center" mt="md">
                        Don&apos;t have an account?{' '}
                        <Anchor component={Link} to="/register" weight={700}>
                            Register
                        </Anchor>
                    </Text>
                </Paper>
            </Container>
        </div>
    );
}