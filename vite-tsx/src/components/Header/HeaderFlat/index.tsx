import {
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons";
import { ThemeSwitcher } from '../../ThemeSwitcher';
import { useStyles } from "./style";

interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[];
}

export function HeaderFlat({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <a href={item.link} className={classes.link}>
          {item.label}
        </a>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="click" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header
      height={0}
      sx={{
        borderBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      }}
      mb={120}
    >
      <Container className={classes.inner} fluid>
        <Group>
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
            />
            Logo
          </Group>
          <Group spacing={20} className={classes.links}>
            {items}
          </Group>
        </Group>
        <Group spacing={0}>
          <ThemeSwitcher />
          <Button sx={{ height: 60 }}>
            Get early access
          </Button>
        </Group>
      </Container>
    </Header >
  );
}
