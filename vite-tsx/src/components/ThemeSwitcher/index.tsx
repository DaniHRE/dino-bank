import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useStyles } from "./style";

export function ThemeSwitcher() {
    const { classes } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant="transparent"
            color={dark ? 'gray' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            className={classes.button}
        >
            {dark ? <IconSun size={22} /> : <IconMoonStars size={22} />}
        </ActionIcon>
    );
}