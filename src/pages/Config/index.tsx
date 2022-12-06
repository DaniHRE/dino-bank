import { Button, Container, Divider, Group, Paper, Stack, Tabs, Text, Title } from "@mantine/core"
import { useStyles } from "./style";
import { IconMessageCircle, IconSettings, IconCoin } from '@tabler/icons';
import { useNavigate, Link } from 'react-router-dom';
import { GridThemeSwitcher } from "../../components/Switcher/GridThemeSwitcher";

export function Config() {
    const { classes } = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.wrapper}>
            <Container className={classes.root}>
                <Paper className={classes.paper} radius={10} p={50} shadow={'lg'}>
                    <Stack>
                        <Title order={2} className={classes.title} align="center" mt="md" mb={30}>
                            Settings 🔧
                        </Title>

                        <Tabs defaultValue="settings">
                            <Tabs.List grow>
                                <Tabs.Tab icon={<IconSettings size={14} />} value="settings">
                                    Settings
                                </Tabs.Tab>
                                <Tabs.Tab icon={<IconMessageCircle size={14} />} value="chat">
                                    Chat
                                </Tabs.Tab>
                            </Tabs.List>
                            <Tabs.Panel value="settings">
                                <Title order={2} className={classes.title} align="center" pl={15} mt="lg" mb={10}>
                                    User Settings
                                </Title>

                                <Container className={classes.message}>
                                    <div className={classes.content}>
                                        <GridThemeSwitcher />
                                    </div>
                                </Container>

                            </Tabs.Panel>
                            <Tabs.Panel value="chat">
                                <Title order={2} className={classes.title} align="center" pl={15} mt="lg" mb={10}>
                                    Chat Settings
                                </Title>
                                <Container className={classes.message}>
                                    <div className={classes.content}>
                                        <Title align="center" className={classes.title}>Nothing to see here</Title>
                                        <Text color="dimmed" size="lg" align="center" className={classes.description}>
                                            This function is not implemented yet, go back to home and check other Dino Bank features.
                                        </Text>
                                        <Group position="center">
                                            <Button onClick={() => navigate('/principal')} size="md">Take me back to home page</Button>
                                        </Group>
                                    </div>
                                </Container>
                            </Tabs.Panel>
                        </Tabs>

                    </Stack>
                </Paper>
            </Container>
        </div>
    )
}