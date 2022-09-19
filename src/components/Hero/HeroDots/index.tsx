import {
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { useStyles } from './style';

export function HeroDots() {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
                <h1 className={classes.title}>
                    A{' '}
                    <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                        fully featured
                    </Text>{' '}
                    React components and hooks library
                </h1>

                <Text className={classes.description} color="dimmed">
                    Build fully functional accessible web applications with ease – Mantine includes more than
                    100 customizable components and hooks to cover you in any situation
                </Text>

                <List
                    mt={30}
                    spacing="sm"
                    size="sm"
                    icon={
                        <ThemeIcon size={20} radius="xl">
                            <IconCheck size={12} stroke={1.5} />
                        </ThemeIcon>
                    }
                >
                    <List.Item>
                        <b>TypeScript based</b> – build type safe applications, all components and hooks
                        export types
                    </List.Item>
                    <List.Item>
                        <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                        any project
                    </List.Item>
                    <List.Item>
                        <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                        keyboard
                    </List.Item>
                </List>

                <Group className={classes.controls}>
                    <Button
                        size="xl"
                        className={classes.control}
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan' }}
                    >
                        Get started
                    </Button>

                    <Button
                        component="a"
                        href="https://github.com/mantinedev/mantine"
                        size="xl"
                        variant="default"
                        className={classes.control}
                    >
                        GitHub
                    </Button>
                </Group>
            </Container >
        </div >
    );
}