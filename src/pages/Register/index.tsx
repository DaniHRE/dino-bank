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
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForm } from '@mantine/form';

import { useStyles } from './style';

export function Register() {
    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },

        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    })

    return (
        <div className={classes.wrapper}>
            <Container className={classes.root}>
                <Paper className={classes.form} m="lg" radius={0} p={40} shadow="xs">

                    <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                        Dino Bank
                    </Title>

                    <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
                    <PasswordInput label="Password" placeholder="Create a password" mt="md" size="md" />
                    <PasswordInput label="Confirm Password" placeholder="Confirm a password" mt="md" size="md" />
                    <Checkbox label="I Accept the Terms of Use & Privacy Policy." mt="xl" size="md" />
                    <Button type="submit" fullWidth mt="xl" size="md">
                        Register
                    </Button>

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