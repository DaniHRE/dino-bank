import {
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    Tooltip,
    Avatar,
} from '@mantine/core';
import { useStyles } from './style';

export function HeroDots() {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            A <span className={classes.highlight}>fully</span> featured <br /> Bank for FREE for you.
                        </Title>
                        <Text color="dimmed" mt="lg" mb="lg" weight={600} >
                            Manage your daily finances and spend
                            worldwide with your FREE Dino debit card
                            no fees attached.
                            Simple Bank for you, use your own account and benefits.
                        </Text>

                        <Avatar.Group spacing="sm" className={classes.avatar}>
                            <Avatar src="https://cdn-icons-png.flaticon.com/512/3541/3541869.png" radius="xl" />
                            <Avatar src="https://cdn-icons-png.flaticon.com/512/3541/3541869.png" radius="xl" />
                            <Avatar src="https://cdn-icons-png.flaticon.com/512/3541/3541869.png" radius="xl" />
                            <Text color="dimmed" pl="sm" weight={600} className={classes.span}>
                                4.2M <br />
                                <Text color="dimmed" weight={600}> Active users from across the world </Text>
                            </Text>
                        </Avatar.Group>

                        <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control}>
                                Get now
                            </Button>
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                Create our Account
                            </Button>
                        </Group>
                    </div>
                    <Image src="https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg" className={classes.image} />
                </div>
            </Container>
        </div>
    );
}