import { useEffect, useState } from "react";
import { Auth } from "../../utils/api";
import { HeaderLogged } from "../../components/Headers/HeaderLogged";
import { useStyles } from "./style";

export function Principal() {
    const { classes } = useStyles();
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    let userData = {};

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    token! ? Auth.user(config).then(data => {userData = data, console.log(userData)}) : null

    const getUser = async () => {
        Auth.refresh().then(data => setToken(data.token))
    }

    useEffect(() => {
                // const token = await fetch('http://localhost:8000/api/logout', {
                //     method: 'POST',
                //     headers: {"Content-type": "application/json; charset=UTF-8"}
                // })

                // const cavalo = await fetch('http://localhost:8000/api/login', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     credentials: 'include',
                //     body: JSON.stringify({
                //         email: 'a@a.com',
                //         password: 'a'
                //     })
                // });

                // console.log(cavalo)

                getUser()
    }, []);

    return (
        <HeaderLogged user={{ name: name, image: "" }} tabs={[]} />
    )
}