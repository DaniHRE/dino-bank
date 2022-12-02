import {
    AppShell,
    Footer,
    useMantineTheme,
} from '@mantine/core';
import { HeaderLogged } from "../Headers/HeaderLogged";
import { Profile } from "../../pages/Profile";
import { NavbarMinimal } from "../NavbarMinimal";
import { FooterCentered } from '../Footer';
import { useEffect, useState } from "react";
import { Auth } from "../../utils/api/api";
import { useStyles } from "./style";
import { IAuth } from "../../models/Auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ActionsGrid } from '../ActionsGrid';
import { Transfer } from '../../pages/Transfer';
import { Cards } from '../../pages/Cards';
import { Config } from '../../pages/Config';
import { NotFoundPage } from '../../pages/NotFoundPage';

export function GridAppShell() {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const [userData, setUserData] = useState<IAuth>();

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState(0);

    async function getUser() {
        await Auth.user()
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
                        // backgroundImage: 'url(https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&dl=pine-watt-2Hzmz15wGik-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb)',
        
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                navbar={
                    <NavbarMinimal active={active}  setActive={setActive} hidden={opened} />
                }
                footer={
                    <Footer height={60}>
                        <FooterCentered links={[]} />
                    </Footer>
                }
                header={
                    <HeaderLogged user={{ name: userData?.first_name, image: '' }} />
                }
            >
                <Routes>
                    <Route path="/" element={<ActionsGrid data={userData}/>} />
                    <Route path="transfer" element={<Transfer />} />
                    <Route path="card" element={<Cards />} />
                    <Route path="profile" element={<Profile data={userData} />} />
                    <Route path="settings" element={<Config />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AppShell>
        </div>
    )
}