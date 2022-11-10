import Hover from 'react-3d-hover';
import { Container, Grid, Text } from "@mantine/core";
import { useStyles } from "./style";
import Card from '../../components/NewBankCard/screens/MainScreen/components/card';

export function CardSection() {
    const { classes } = useStyles();

    return (
        <Container className={classes.center}>
            <Grid>
                <Grid.Col>
                    <h1 className={classes.title}>
                        Get Your{' '}
                        <Text gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} component="span" variant="gradient" inherit>
                            Free
                        </Text>{' '}Card
                    </h1>
                    <Hover scale={1.05} speed={1500} perspective={900} >
                        <Card
                            cardHolder={'FULL NAME'}
                            cardNumber={'0000 0000 0000 0000'}
                            cardMonth={'00'}
                            cardYear={'0000'}
                            cardCvv={'000'}
                            isCardFlipped={false}
                        />
                    </Hover>
                </Grid.Col>
            </Grid>
        </Container>
    );
}