import { useEffect, useState } from "react";
import { Auth } from "../../utils/api/api";
import { IAuth } from "../../models/Auth";
import { useNavigate } from "react-router-dom";
import { GridAppShell } from '../../components/GridAppShell';

export function Principal() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<IAuth>();

    const getUser = () => {
        Auth.user()
            .then(data => setUserData(data))
            .catch(error => navigate('/'))
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <GridAppShell/>
    )
}