import { useState } from 'react';
import { Header, Container, Group, Burger, Paper, Transition, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import { useStyles } from './style';
import { ThemeSwitcher } from '../../ThemeSwitcher';

interface HeaderResponsiveProps {
    links: { link: string; label: string }[];
}

export function HeaderFlat({ links }: HeaderResponsiveProps) {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                close();
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <Header p={"xl"} className={classes.root} height={''}>
            <Container className={classes.header} fluid>
                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                <Transition transition="pop-top-left" duration={300} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
                Logo
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <Group spacing={0}>
                    <ThemeSwitcher />
                    <Button sx={{ height: 60 }}>
                        Get early access
                    </Button>
                </Group>

            </Container>
        </Header>
    );
}