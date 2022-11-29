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
    Stack,
    Transition
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IAuthLogin } from 'src/models/Auth';
import { Auth } from '../../utils/api';

import { useStyles } from './style';

export function Login() {
    const navigate = useNavigate();
    const { classes } = useStyles();
    const [submitError, setSubmitError] = useState(false);

    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },

        validate: {
            email: (value) => (/^[\w-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value! ? null : 'Invalid password')
        }
    })

    async function login(credentials: IAuthLogin) {
        await Auth.login(credentials)
            .then(() => navigate('/principal'))
            .catch(() => setSubmitError(true))
    }

    return (
        <div className={classes.wrapper}>
            <Container className={classes.root}>
                <Paper className={classes.form} radius={0} p={40} shadow="xs">

                    <Stack align="center" spacing={0} >
                        <Image width={64} height={64} src="/icons/dino.svg" />

                        <Title order={2} className={classes.title} align="center" mt="md" mb={20}>
                            Dino Bank
                        </Title>
                    </Stack>

                    <Transition transition="pop" mounted={submitError} duration={400} timingFunction="ease">
                        {(styles) => <div style={styles}> Incorrect username and password </div>}
                    </Transition>

                    <form onSubmit={form.onSubmit((values) => login(values))}>
                        <TextInput required withAsterisk label="Email address" placeholder="example@gmail.com" size="md"
                            {...form.getInputProps('email')} />
                        <PasswordInput required withAsterisk label="Password" placeholder="Your password" mt="md" size="md"
                            {...form.getInputProps('password')} />

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
                        <Button type="submit" fullWidth mt="xl" size="md">
                            Login
                        </Button>
                    </form>
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