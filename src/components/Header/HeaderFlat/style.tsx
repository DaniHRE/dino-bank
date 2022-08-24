import { createStyles } from "@mantine/core"

const HEADER_HEIGHT = 60;

export const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    borderBottom: 'none',
    backgroundColor: 'transparent',
    zIndex: 2
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'none',
  },

  links: {
    border: 'none',
    color: theme.colors.gray[0],
    textShadow: '1px 1px 1px black',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  // UNCOMMENT TO ENABLE ON ACTIVE LINK FEATURE
  // linkActive: {
  //   '&, &:hover': {
  //     backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
  //     color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  //   },
  // },
}));