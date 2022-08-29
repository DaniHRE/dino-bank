import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirecton: 'column',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://source.unsplash.com/random/1920x1080/?landscape)',
  },

  form: {
    width: 450,
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    minHeight: '50vh',
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));