import { useEffect, useState } from 'react';
import {
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Tabs,
    Burger,
    Header,
} from '@mantine/core';
import { useStyles } from './style';
import { BrandText } from '../../BrandText';

interface HeaderTabsProps {
    user: { name?: string; image?: string };
}

export function HeaderLogged({ user }: HeaderTabsProps) {
    const { classes, theme, cx } = useStyles();

    return (
        <Header height={60}>
            <Container className={classes.inner}>
                <BrandText />
                <Group spacing={7}>
                    <Avatar src={user.image} alt={user.name} radius="xl" size={35} />
                    <Text weight={600} size="md" sx={{ lineHeight: 1 }} mr={3}>
                        {user.name}
                    </Text>
                </Group>
            </Container>
        </Header>
    );
}