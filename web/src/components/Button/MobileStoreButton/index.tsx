import { SimpleGrid } from "@mantine/core";

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
        height?: number | string;
        width?: number | string;
    }[];
}

export function MobileStoreButton({ data }: MobileStoreButtonsProps) {
    const buttons = data.map((button) => {

        const BREAKPOINT = '@media (maxWidth: 755px)';

        const defaultStyle = {
            height: button.height === undefined ? 75 : button.height,
            width: button.width === undefined ? 255 : button.width,
            background: `url(${imageLinks[button.store]}) no-repeat`,
            backgroundSize: 'contain',
            display: 'inline-block',
            overflow: 'hidden',
            textDecoration: 'none',
            padding: '5px',

            [BREAKPOINT]: {
                height: 50,
                width: 50,
            },
        }

        return (
            <div style={{
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
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 2 }]}>
            {buttons}
        </SimpleGrid>
    );
}