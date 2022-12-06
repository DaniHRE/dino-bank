import { useState } from 'react';
import { Navbar, Tooltip, UnstyledButton, Stack } from '@mantine/core';
import {
  IconX,
  TablerIcon,
  IconHome2,
  IconUser,
  IconSettings,
  IconLogout,
  IconWallet,
  IconBrandMastercard,
  IconSwitchHorizontal,
} from '@tabler/icons';
import { useStyles } from './style';
import { Auth } from '../../utils/api/api';
import { useNavigate, Link } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';


interface NavbarMinimalProps {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  hidden?: boolean;
}
interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  link: string;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick, link }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton component={Link} to={link} onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home', link: '' },
  { icon: IconWallet, label: 'Wallet', link: 'transfer' },
  { icon: IconBrandMastercard, label: 'Card', link: 'card' },
  { icon: IconUser, label: 'Account', link: 'profile' },
  { icon: IconSettings, label: 'Settings', link: 'settings' },
];

export function NavbarMinimal({ active, setActive, hidden }: NavbarMinimalProps) {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();

  const logout = async () => {
    await Auth.logout();
    navigate('/');
    showNotification({
      title: 'Sucess',
      message: 'Successfully logged out',
      icon: <IconLogout width={18} height={18} />,
      color: 'yellow'
    })
  }

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!hidden} width={{ sm: 80, lg: 85 }}>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={10}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink onClick={() => {
            showNotification({
              title: 'Error',
              message: 'This feature is not implemented yet',
              icon: <IconX />,
              color: 'red',
            });
          } } icon={IconSwitchHorizontal} label="Change account" link={'/principal/'} />
          <NavbarLink onClick={logout} icon={IconLogout} link={''} label="Logout"  />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}