import { ActionIcon, Anchor, Avatar, Button, Card, Container, Group, Image, Paper, Stack, Text, TextInput, Title } from "@mantine/core"
import { useEffect, useState } from "react";
import { Auth } from "../../utils/api/api";
import { IAuth } from "../../models/Auth"
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";
import { IconEdit } from "@tabler/icons";

interface ProfileProps {
    data: IAuth
}

export function Profile({ data }: ProfileProps) {
    const navigate = useNavigate();
    const { classes, theme } = useStyles();
    const [userData, setUserData] = useState<IAuth>();
    const [currentBalance, setCurrentBalance] = useState<number>(0);

    const getUser = () => {
        Auth.user()
            .then(data => setUserData(data))
            .catch(error => navigate('/'));
    }

    function isBalanceNegative(currentBalance: number) {
        return currentBalance < 0
    }

    const setBalance = () => {
        let balance = 0;
        balance = data?.bankaccount.reduce((accumulator, { account_balance }) => {
            return accumulator += account_balance
        }, balance);
        setCurrentBalance(balance);
    }

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        setBalance();
    }, [setUserData]);

    return (
        <div className={classes.wrapper}>
            <Container className={classes.root}>
                {/* <Paper className={classes.paper} radius={10} p={40} shadow={'md'}> */}
                <Card component={Paper} shadow={'lg'} classNames={[classes.card, classes.paper]} radius={10} p={40}>
                    <Card.Section sx={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)`, height: 140
                    }} />

                    <Avatar src={''} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />

                    <Group position="center" align="center">
                        <Title order={2} className={classes.title} align="center" mt="md" mb="lg">
                            {`${data?.first_name} ${data?.last_name}`}
                        </Title>
                        <ActionIcon>
                            <IconEdit />
                        </ActionIcon>
                    </Group>

                    <Group position="center" align="center" mb={10}>
                        <Title order={3} weight='bold' mb={48}>
                            <span>
                                {`Balance: `}
                            </span>
                            <Text component="span" color={isBalanceNegative(currentBalance) ? 'red' : 'green'}>
                                ${currentBalance}
                            </Text>
                        </Title>
                    </Group>

                    <Group grow>
                        <TextInput disabled withAsterisk label="First Name" value={userData?.first_name} size="md" />
                        <TextInput disabled withAsterisk label="Last Name" value={userData?.last_name} size="md" />
                    </Group>

                    <TextInput disabled withAsterisk label="Email address" value={userData?.email} mt="md" size="md" />
                </Card>
                {/* </Paper> */}
            </Container>
        </div >
    )
}