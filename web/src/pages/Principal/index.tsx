import { useEffect, useState } from "react";
import { Auth } from "../../utils/api";
import { HeaderLogged } from "../../components/Headers/HeaderLogged";
import { useStyles } from "./style";
import { IAuth } from "src/models/Auth";
import { useNavigate } from "react-router-dom";

export function Principal() {
    const { classes } = useStyles();
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
        <HeaderLogged user={{ name: userData?.first_name, image: "" }} />
    )
}