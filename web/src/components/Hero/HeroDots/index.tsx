import {
    Container,
    Group,
    Text,
} from '@mantine/core';
import { StatsRing } from '../../Stats/StatsProgress';
import { useStyles } from './style';
import { MobileStoreButton } from '../../Button/MobileStoreButton';

export function HeroDots() {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <h1 className={classes.title}>
                            Work With Your{' '}
                            <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                                Money.
                            </Text>{' '}
                        </h1>

                        <Text className={classes.description} mb="2rem" >
                            Dino Bank is the smartest way to plan, save and investment with
                            impresive interest rates, and app, tools & guides.
                        </Text>

                        <StatsRing data={[{
                            label: "New Users",
                            stats: "77,250",
                            progress: 60,
                            color: "#3DB2F0",
                            icon: 'up',
                        }, {
                            label: "Transactions",
                            stats: "849,750",
                            progress: 40,
                            color: "#2B6ED9",
                            icon: 'up',
                        }, {
                            label: "Acquired Shares",
                            stats: "849,750",
                            progress: 60,
                            color: "#324AF8",
                            icon: 'up',
                        }]} />

                        {/* <Group className={classes.controls}>
                            <MobileStoreButton data={[{
                                store: "android",
                                url: "https://android.com/",
                            }, {
                                store: "ios",
                                url: "https://apple.com/",
                            }]} />
                        </Group> */}
                    </div>
                    Roberto's Show
                </div>
            </Container >
        </div>
    );
}