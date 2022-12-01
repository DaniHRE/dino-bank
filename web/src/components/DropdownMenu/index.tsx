import { Group, Menu, UnstyledButton } from "@mantine/core";
import { IconChevronDown, IconReceiptRefund } from '@tabler/icons';
import { useState } from "react";
import { useStyles } from "./styles";

type DropdownData = { label: string, image: any }

interface DropdownMenuProps {
    data: DropdownData[]
    selected: DropdownData
    setSelected: React.Dispatch<React.SetStateAction<DropdownData>>
}

export function DropdownMenu({ data, setSelected, selected }: DropdownMenuProps) {
    const [opened, setOpened] = useState(false);
    const { classes } = useStyles({ opened });

    const items = data.map((item) => (
        <Menu.Item
            icon={item.image}
            onClick={() => setSelected(item)}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));

    return (
        <Menu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="md"
            width="target"
        >
            <Menu.Target>
                <UnstyledButton className={classes.control}>
                    <Group spacing="xs">
                        {selected.image}
                        <span className={classes.label}>{selected.label}</span>
                    </Group>
                    <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
    )
}