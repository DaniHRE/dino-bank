import { Overlay, Container, Title, Button, Text, Highlight } from '@mantine/core';
import { useStyles } from './style';

export function HeroContent() {
    const { classes } = useStyles();

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, .30),rgba(0, 0, 0, .60) 50%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <Title className={classes.title}><Highlight
                    highlight={['FREE']}
                    highlightStyles={(theme) => ({
                        backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    })}> A fully featured Bank, for FREE for you.</Highlight> </Title>
                <Text className={classes.description} size="xl" mt="xl">
                    Manage your daily finances and spend
                    worldwide with your FREE Dino debit card
                    no fees attached
                </Text>

                <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
                    Get started
                </Button>
            </Container>
        </div>
    );
}