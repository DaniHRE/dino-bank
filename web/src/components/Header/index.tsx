import { Header, Container, Group, Burger, ActionIcon, Text, Anchor } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons';
import { useDisclosure } from '@mantine/hooks';
import { useStyles } from './style';

export function DefaultHeader() {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes, cx } = useStyles();

    return (
        <Header height={56} mb={120}>
            <Container className={classes.inner}>
                <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
                <Group className={classes.links} spacing={5}>
                    <Anchor
                        component="a"
                        href="https://github.com/danihre/dino-bank"
                        className={classes.link}
                        target="_blank"
                    >
                        How it Works?
                    </Anchor>
                </Group>

                <Text weight={700}>Dino Bank</Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon component="a" href="https://github.com/danihre/dino-bank" size="lg">
                        <IconBrandGithub size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon component="a" href="https://instagram.com/dani_rod05" size="lg">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon component="a" href="https://linkedin.com/in/danielhre" size="lg">
                        <IconBrandLinkedin size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </Header>
    );
}
