<script>
    import { user } from "../models/User";
    import { navigate } from "svelte-routing";

    let email = "";
    let password = "";

    function handleOnSubmit(e) {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                user.setUser({
                    email,
                    password,
                });
                navigate("/dashboard", { replace: true });
            })
            .catch((error) => {
                console.log(error);
                return [];
            });
    }
</script>
<div class="container-fluid">
    <div class="section">
        <div class="login-holder">
            <h1 class="">Iniciar sesión</h1>
            <div class="login-form-holder">
                <form on:submit|preventDefault={handleOnSubmit}>
                    <div class="mb-3">
                        <label for="email" class="form-label">Usuario</label>
                        <input
                            type="email"
                            class="form-control"
                            bind:value={email}
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña</label>
                        <input
                            bind:value={password}
                            type="password"
                            class="form-control"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary btn-jesus"
                        >Enviar</button
                    >
                </form>
            </div>
        </div>
    </div>
</div>

<style>
    label{
        font-family: 'Nunito';
        color: white;
    }
    input{
        border-radius: 15px;
        padding: 5px 10px;
    }
    h1 {
        color: white;
        font-family: "Nunito";
        font-weight: bolder;
    }
    .login-holder {
        width: 35vw;
        padding: 4vw;
        background-color: #13073a;
        height: 100vh;
    }
    .section{
        background-color: white;
        width: 100%;
        height: 100vh;
    }
    .btn-jesus{
        background-color: rgba(254, 44, 85, 1);
        border: 0px;
        border-radius: 25px;
        padding: 10px 25px;
    }
</style>
