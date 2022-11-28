import { useEffect, useState } from "react";
import { HeaderLogged } from "../../components/Headers/HeaderLogged";
import { useStyles } from "./style";

export function Principal() {
    const { classes } = useStyles();
    const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                // const token = await fetch('http://localhost:8000/api/logout', {
                //     method: 'POST',
                //     headers: {"Content-type": "application/json; charset=UTF-8"}
                // })

                const cavalo = await fetch('http://localhost:8000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: 'a@a.com',
                        password: 'a'
                    })
                });

                console.log(cavalo)

                const token = await fetch('http://localhost:8000/api/refresh', {
                    method: 'POST',
                    headers: { "Content-type": "application/json" },
                    credentials: 'include'
                })
                    .then(response => response.json())

                console.log(token)

                const response = await fetch('http://localhost:8000/api/user', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.token}`
                    },
                    credentials: 'include',
                });

                const content = await response.json();
                console.log(content);

                setName(content.first_name);
            }
        )();
    });

    return (
        <HeaderLogged user={{ name: name, image: "" }} tabs={[]} />
    )
}