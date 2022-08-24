import { useState } from 'react';
import { Header, Container, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBook } from '@tabler/icons';
import { useStyles } from './style';

interface HeaderResponsiveProps {
    links: { link: string; label: string }[];
}

export function HeaderFlat({ links }: HeaderResponsiveProps) {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();

    return (
        <Header p={"xl"} className={classes.root} height={''}>
            <Container className={classes.header} fluid>
                Logo
                <Group spacing={0}>
                    <Button
                        className={classes.links}
                        component='a'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://github.com/danihre/dino-bank'
                        variant='outline'
                        leftIcon={<IconBook size={18} />}
                        uppercase >
                        How it Works?
                    </Button>
                    <Button sx={{ height: 60 }}>
                        Get early access
                    </Button>
                </Group>

            </Container>
        </Header>
    );
}