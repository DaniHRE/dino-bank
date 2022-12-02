import { Button, Container, Group, Paper, NativeSelect, Title, Text, Stack } from "@mantine/core"
import { Content } from "../../utils/api/content";
import { IAuth, IAuthTransfer } from "../../models/Auth"
import { TextInput } from '@mantine/core';
import { IconCreditCard, IconReportMoney, IconCheck, IconX, IconReceiptRefund, IconReceipt2 } from '@tabler/icons';
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { DropdownMenu } from "../../components/DropdownMenu";
import { showNotification } from "@mantine/notifications";

const currencyValues = [
    { value: 'brl', label: '🇧🇷 BRL' },
    { value: 'eur', label: '🇪🇺 EUR' },
    { value: 'usd', label: '🇺🇸 USD' },
    { value: 'cad', label: '🇨🇦 CAD' },
    { value: 'gbp', label: '🇬🇧 GBP' },
    { value: 'aud', label: '🇦🇺 AUD' },
];

const accountType = [
    { label: 'Savings', image: <IconReportMoney /> },
    { label: 'Credit', image: <IconCreditCard /> },
];

const transactionType = [
    { label: 'Deposit', image: <IconReceiptRefund /> },
    { label: 'Withdraw', image: <IconReceipt2 /> },
];

export const Asterisk = () => <span style={{ color: 'red' }}>*</span>


export function Transfer() {
    const navigate = useNavigate();
    const [selectedAccountType, setSelectedAccountType] = useState(accountType[0]);
    const [selectedTransactionType, setSelectedTransactionType] = useState(transactionType[0]);
    const { classes } = useStyles();

    const currencySelect = (
        <NativeSelect
            data={currencyValues}
            styles={{
                input: {
                    fontWeight: 500,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                },
            }}
        />
    );

    const form = useForm({
        initialValues: {
            account_type: 'savings',
            user: '',
            transaction_type: 'deposit',
            transaction_amount: '',
        }
    })

    async function transfer(transferData: IAuthTransfer) {
        await Content.transfer(transferData)
            .then(() => {
                console.log(transferData)
                showNotification({
                    title: 'Sucess',
                    message: 'Your transaction has been completed successfully',
                    icon: <IconCheck />,
                    color: 'green',
                })
            })
            .catch(() => {
                console.log(transferData)
                showNotification({
                    title: 'Something wrong',
                    message: 'Check transaction fields values.',
                    icon: <IconX />,
                    color: 'red',
                })
            })
    }

    return (
        <div className={classes.wrapper}>
            <Container className={classes.root}>
                <Paper className={classes.paper} radius={10} p={40} shadow={'md'}>

                    <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                        Transfer 💸
                    </Title>

                    <form onSubmit={form.onSubmit((values) => transfer({
                        ...values,
                        account_type: selectedAccountType.label === 'Savings' ? '1' :'2',
                        transaction_type: selectedTransactionType.label.toLowerCase()
                    }))}>
                        <Group grow>
                            {/* <TextInput withAsterisk label="Account Type" placeholder="Account Type" size="md"
                                {...form.getInputProps('account_type')} /> */}
                            <Stack spacing={0}>
                                <Text  >Account Type <Asterisk /></Text>
                                <DropdownMenu
                                    data={accountType}
                                    selected={selectedAccountType}
                                    setSelected={setSelectedAccountType}
                                />
                            </Stack>
                            <Stack spacing={0}>
                                <Text>Transaction Type <Asterisk /></Text>
                                <DropdownMenu
                                    data={transactionType}
                                    selected={selectedTransactionType}
                                    setSelected={setSelectedTransactionType}
                                />
                            </Stack>
                        </Group>

                        <TextInput withAsterisk label="User Email" placeholder="example@gmail.com" mt="md" size="md"
                            {...form.getInputProps('user')} />

                        <TextInput
                            type="number"
                            placeholder="1000"
                            label="Transfer amount"
                            rightSection={currencySelect}
                            rightSectionWidth={92}
                            mt="md" size="md"
                            {...form.getInputProps('transaction_amount')}
                            withAsterisk
                        />

                        <Button type="submit" fullWidth mt="xl" size="md">
                            Transfer
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div >
    )
}