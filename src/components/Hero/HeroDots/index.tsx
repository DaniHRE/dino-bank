import {
    Container,
    Button,
    Group,
    Text,
} from '@mantine/core';
import { StatsRing } from '../../Stats/StatsProgress';
import { IconCheck } from '@tabler/icons';
import { useStyles } from './style';

export function HeroDots() {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
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

                <Group className={classes.controls}>
                    <Button
                        size="xl"
                        className={classes.control}
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan' }}
                    >
                        Get started
                    </Button>

                    <Button
                        component="a"
                        href="https://github.com/mantinedev/mantine"
                        size="xl"
                        variant="default"
                        className={classes.control}
                    >
                        GitHub
                    </Button>
                </Group>
            </Container >
        </div >
    );
}