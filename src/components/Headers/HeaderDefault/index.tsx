import { Header, Container, Group, Burger, ActionIcon, Anchor, Switch, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconSun, IconMoonStars } from '@tabler/icons';
import { useDisclosure } from '@mantine/hooks';
import { useStyles } from './style';
import { BrandText } from '../../BrandText';

export function HeaderDefault() {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes, cx } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    return (
        <Header height={60}>
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

                <BrandText />

                <Group spacing={5} className={classes.social} position="right" noWrap>
                    <ActionIcon component="a" href="https://github.com/danihre/dino-bank" size="lg">
                        <IconBrandGithub size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon component="a" href="https://linkedin.com/in/danielhre" size="lg">
                        <IconBrandLinkedin size={18} stroke={1.5} />
                    </ActionIcon>
                    <Switch
                        checked={colorScheme === 'dark'}
                        onChange={() => toggleColorScheme()}
                        size="md"
                        onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
                        offLabel={<IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />}
                    />
                </Group>
            </Container>
        </Header>
    );
}
