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
    Box,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { IconX, IconCheck} from '@tabler/icons';

import { useStyles } from './style';
import { PasswordRequirement } from '../../components/Field/PasswordRequirement';
import { requirements, getStrength } from '../../utils/validatePassword/index'
import { useState } from 'react';

export function Register() {
    const { classes } = useStyles();

    const [popoverOpened, setPopoverOpened] = useState(false);
    const [value, setValue] = useState('');
    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
    ));

    const strength = getStrength(value);
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

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


    return (
        <div className={classes.wrapper}>
            <Container className={classes.root}>
                <Paper className={classes.form} m="lg" radius={0} p={40} shadow="xs">

                    <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                        Dino Bank
                    </Title>

                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput label="First Name" placeholder="First Name" size="md"
                            {...form.getInputProps('name')} />

                        <TextInput label="Email address" placeholder="example@gmail.com" mt="md" size="md"
                            {...form.getInputProps('email')} />

                        <PasswordInput label="Password" placeholder="Create a password" mt="md" size="md"
                            {...form.getInputProps('password')} />

                        <PasswordInput label="Confirm Password" placeholder="Confirm a password" mt="md" size="md"
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