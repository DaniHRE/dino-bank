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
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconLogout,
    IconTrash,
    IconUserCircle,
    IconChevronDown,
} from '@tabler/icons';
import { useStyles } from './style';
import { BrandText } from '../../BrandText';
import { Auth } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';

interface HeaderTabsProps {
    user: { name?: string; image?: string };
}

export function HeaderLogged({ user }: HeaderTabsProps) {
    const { classes, theme, cx } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
        Auth.logout();
        navigate('/');
    }

    return (
        <div className={classes.header}>
            <Container className={classes.mainSection}>
                <Group position="apart">
                    <BrandText />

                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                    <Menu
                        width={260}
                        position="bottom-end"
                        transition="pop-top-right"
                        onClose={() => setUserMenuOpened(false)}
                        onOpen={() => setUserMenuOpened(true)}
                    >
                        <Menu.Target>
                            <UnstyledButton
                                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                            >
                                <Group spacing={7}>
                                    <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                                    <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                                        {user.name}
                                    </Text>
                                    <IconChevronDown size={12} stroke={1.5} />
                                </Group>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Label>Settings</Menu.Label>
                            <Menu.Item  onClick={() => console.log('Profile')} icon={<IconUserCircle size={14} stroke={1.5} />}>Profile</Menu.Item>
                            <Menu.Item  onClick={logout} icon={<IconLogout size={14} stroke={1.5} />}>Logout</Menu.Item>
                            <Menu.Divider />
                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item color="red" icon={<IconTrash size={14} stroke={1.5} />}>
                                Delete account
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Container>
        </div>
    );
}