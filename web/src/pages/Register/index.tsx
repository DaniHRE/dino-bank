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
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForm } from '@mantine/form';

import { useStyles } from './style';
import { PasswordStregthMeter } from '../../components/Field/PasswordStrengthMeter/index';

export function Register() {
    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: {
            name: (value) => (value.length < 8 ? 'Name must have at least 8 letters' : null),
            email: (value) => (/^[\w-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(value) ? null : 'Invalid email'),
            confirmPassword: (value, values) => (
                value !== values.password ? 'Passwords did not match' : null
            ),
        },
    })

    console.log("Register: ", form.values)
    console.log("Form changed to: ", form.getInputProps("password"))

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

                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput withAsterisk label="First Name" placeholder="First Name" size="md"
                            {...form.getInputProps('name')} />

                        <TextInput withAsterisk label="Email address" placeholder="example@gmail.com" mt="md" size="md"
                            {...form.getInputProps('email')} />

                        <PasswordStregthMeter form={form} />

                        <PasswordInput withAsterisk label="Confirm Password" placeholder="Confirm a password" mt="md" size="md"
                            {...form.getInputProps('confirmPassword')} />

                        <Checkbox label="I Accept the Terms of Use & Privacy Policy." mt="xl" size="md" />
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