import { useStyles } from "./style";

const imageLinks = {
    ios: '../../../assets/icons/Apple_Store_badge_EN.svg',
    android: '../../../assets/icons/Google_Play_Store_badge_EN.svg',
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
        return (
            <div style={{ button.height, width, display: 'inline-block' }}>

            </div>
        );
    });
    return(

    );
}