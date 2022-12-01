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
    Stack,
    Image,
    Group,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForm } from '@mantine/form';

import { useStyles } from './style';
import { PasswordStregthMeter } from '../../components/Field/PasswordStrengthMeter/index';
import { Auth } from '../../utils/api/api';
import { IAuthRegister } from '../../models/Auth';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons';

export function Register() {
    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: {
            first_name: (value: string) => (value.length < 4 ? 'Name must have at least 4 letters' : null),
            last_name: (value: string) => (value.length < 4 ? 'Name must have at least 4 letters' : null),
            email: (value: string) => (/^[\w-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(value) ? null : 'Invalid email'),
            confirmPassword: (value, values) => (
                value !== values.password ? 'Passwords did not match' : null
            ),
        },
    })

    async function register(credentials: IAuthRegister) {
        await Auth.register(credentials)
            .then(() => showNotification({
                title: 'Success',
                message: 'Your account has been created, now you can login',
                icon: <IconCheck />,
                color: 'green',
            }))
            .catch(() => {
                showNotification({
                    title: 'Something wrong',
                    message: 'Check your inputs or user new values',
                    icon: <IconX />,
                    color: 'red',
                })
            })
    }

    return (
        <div className={classes.wrapper}>
            <Container className={classes.root}>
                <Paper className={classes.form} radius={10} p={40} shadow="xs">

                    <Stack align="center" spacing={0} >
                        <Image width={64} height={64} src="/icons/dino.svg" />

                        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                            Dino Bank
                        </Title>
                    </Stack>

                    <form onSubmit={form.onSubmit((values) => register(values))}>
                        <Group grow>
                            <TextInput withAsterisk label="First Name" placeholder="First Name" size="md"
                                {...form.getInputProps('first_name')} />
                            <TextInput withAsterisk label="Last Name" placeholder="First Name" size="md"
                                {...form.getInputProps('last_name')} />
                        </Group>

                        <TextInput withAsterisk label="Email address" placeholder="example@gmail.com" mt="md" size="md"
                            {...form.getInputProps('email')} />

                        <PasswordStregthMeter form={form} />

                        <PasswordInput withAsterisk label="Confirm Password" placeholder="Confirm a password" mt="md" size="md"
                            {...form.getInputProps('confirmPassword')} />

                        <Checkbox required label="I Accept the Terms of Use & Privacy Policy." mt="xl" size="md" />
                        <Button type="submit" fullWidth mt="xl" size="md">
                            Register
                        </Button>
                    </form>

                    <Text align="center" mt="md">
                        Don&apos;t have an account?{' '}
                        <Anchor component={Link} to="/login" weight={700}>
                            Login
                        </Anchor>
                    </Text>
                </Paper>
            </Container>
        </div>
    );
}