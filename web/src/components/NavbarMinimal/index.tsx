import { useState } from 'react';
import { Navbar, Tooltip, UnstyledButton, Stack } from '@mantine/core';
import {
  TablerIcon,
  IconHome2,
  IconUser,
  IconSettings,
  IconLogout,
  IconWallet,
  IconSwitchHorizontal,
} from '@tabler/icons';
import { useStyles } from './style';
import { Auth } from '../../utils/api';
import { useNavigate, Link } from 'react-router-dom';


interface NavbarMinimalProps {
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
  { icon: IconWallet, label: 'Wallet', link: 'transfer'},
  { icon: IconUser, label: 'Account', link: 'profile' },
  { icon: IconSettings, label: 'Settings', link: 'settings' },
];

export function NavbarMinimal({ hidden }: NavbarMinimalProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const logout = () => {
    Auth.logout();
    navigate('/');
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
          <NavbarLink icon={IconSwitchHorizontal} link="" label="Change account" />
          <NavbarLink onClick={logout} icon={IconLogout} link="" label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}