import { Overlay, Container, Title, Button, Text, Highlight } from '@mantine/core';
import { useStyles } from './style';

export function HeroContent() {
    const { classes } = useStyles();

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <Title className={classes.title}>A fully featured Bank, for
                    <Highlight
                        highlight={['FREE']}
                        highlightStyles={(theme) => ({
                            backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
                            fontWeight: 700,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        })}
                    >
                        FREE
                    </Highlight> for you.</Title>
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