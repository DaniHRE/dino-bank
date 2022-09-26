import { SimpleGrid } from "@mantine/core";
import { useStyles } from "./style";

import ios from '../../../assets/icons/Apple_Store_badge_EN.svg';
import android from '../../../assets/icons/Google_Play_Store_badge_EN.svg';

const imageLinks = {
    ios: ios,
    android: android,
};

interface MobileStoreButtonsProps {
    data: {
        store: 'ios' | 'android';
        url: string;
        height: number;
        width: number;
    }[];
}

export function MobileStoreButton({ data }: MobileStoreButtonsProps) {
    const { classes } = useStyles();
    const buttons = data.map((button) => {

        const defaultStyle = {
            height: 75,
            width: 255,
            background: `url(${imageLinks[button.store]}) no-repeat`,
            backgroundSize: 'contain',
            display: 'inline-block',
            overflow: 'hidden',
            textDecoration: 'none',
            padding: '5px'
        }

        return (
            <div style={{
                height: button.height,
                width: button.width,
                display: 'inline-block'
            }}>
                <a
                    href={button.url}
                    style={defaultStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    &nbsp;
                </a>
            </div>
        );
    });
    return (
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {buttons}
        </SimpleGrid>
    );
}