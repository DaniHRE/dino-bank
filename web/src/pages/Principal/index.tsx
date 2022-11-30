import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
  } from '@mantine/core';
import { useEffect, useState } from "react";
import { Auth } from "../../utils/api";
import { ActionsGrid } from "../../components/ActionsGrid";
import { HeaderLogged } from "../../components/Headers/HeaderLogged";
import { useStyles } from "./style";
import { IAuth } from "src/models/Auth";
import { useNavigate } from "react-router-dom";
import { NavbarMinimal } from "../../components/NavbarMinimal";

export function Principal() {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const [userData, setUserData] = useState<IAuth>();

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const getUser = () => {
        Auth.user()
            .then(data => setUserData(data))
            .catch(error => navigate('/'))
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <div className={classes.root}>
            <AppShell
                styles={{
                    main: {
                        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                    },
                }}
                navbarOffsetBreakpoint="sm"
                // asideOffsetBreakpoint="sm"
                navbar={
                    <NavbarMinimal />
                }
                // aside={
                //     <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                //         <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                //             <Text>Application sidebar</Text>
                //         </Aside>
                //     </MediaQuery>
                // }
                footer={
                    <Footer height={60} p="md">
                        Footer
                    </Footer>
                }
                header={
                    <HeaderLogged user={{ name: userData?.first_name, image: '' }} />
                }
            >
                <ActionsGrid />
            </AppShell>
        </div>
    )
}
