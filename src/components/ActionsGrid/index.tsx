import {
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
  IconReceiptRefund,
  IconReceipt,
  IconReceiptTax,
  IconReport,
  IconCashBanknote,
  IconCoin,
} from '@tabler/icons';
import { Card, Text, SimpleGrid, UnstyledButton, Anchor, Group, Container, Paper, Stack } from '@mantine/core';
import { useStyles } from './style';
import { IAuth } from '../../models/Auth';
import { useNavigate } from 'react-router-dom';

interface ActionsGridProps {
  userData: IAuth | undefined;
}

const mockdata = [
  { title: 'Transfers', icon: IconRepeat, color: 'blue', link: 'transfer' },
  { title: 'Credit cards', icon: IconCreditCard, color: 'violet', link: 'card' },
  { title: 'Receipts', icon: IconReceipt, color: 'teal', link: '' },
  { title: 'Payments', icon: IconCoin, color: 'red', link: '' },
  { title: 'Banks nearby', icon: IconBuildingBank, color: 'indigo', link: '' },
  { title: 'Refunds', icon: IconReceiptRefund, color: 'green', link: '' },
  { title: 'Taxes', icon: IconReceiptTax, color: 'cyan', link: '' },
  { title: 'Reports', icon: IconReport, color: 'pink', link: '' },
  { title: 'Cashback', icon: IconCashBanknote, color: 'orange', link: '' },
];

export function ActionsGrid({ userData }: ActionsGridProps) {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  const items = mockdata.map((item) => (
    <UnstyledButton onClick={() => navigate(item.link)} key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper} radius={10} p={40} shadow={'md'} >
        <Card withBorder radius="md" className={classes.card}>
          <Group position="apart">
            <Text className={classes.title}>Services</Text>
            <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
              + Infinite other services
            </Anchor>
          </Group>
          <SimpleGrid cols={3} mt="md">
            {items}
          </SimpleGrid>
        </Card>
      </Paper>
    </Container>
  );
}