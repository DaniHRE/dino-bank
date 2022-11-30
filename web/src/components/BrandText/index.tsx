import { Group, Image, Title } from "@mantine/core";
import { useStyles } from "./style";

interface BrandTextProps{
    logo?: boolean,
}

export function BrandText({ logo }: BrandTextProps) {
    const { classes } = useStyles();

    return (
        <Group spacing={15}>
            { !logo ? <Image width={48} height={48} src="/icons/dino.svg" /> : null}

            <Title order={2} className={classes.title} align="center">
                Dino Bank
            </Title>
        </Group>
    )
}