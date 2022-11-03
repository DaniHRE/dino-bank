import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
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
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    width: 450,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '100vw',
      height: '100vh',
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

  forgotContainer: {
    justifyContent: 'flex-end',
  },

  forgotInput: {
    paddingTop: 2,
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
    fontWeight: 500,
    fontSize: theme.fontSizes.xs,
  }

}));