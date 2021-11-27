<script>
    import Navbar from "./Navbar.svelte";
    import { getNotificationsContext } from "svelte-notifications";
    import { navigate } from "svelte-routing";
    import { onMount } from "svelte";
    import { get } from 'svelte/store'
    import { preferences } from './stores.ts';
    import { user } from "../models/User";


    const { addNotification } = getNotificationsContext();

    let titulo = "";
    let descripcion = "";

    onMount(() => {
        user.setUser({
            email: get(preferences)
        })
    });

    function submitSoporte() {
        if (titulo != "" && descripcion != "") {
            navigate('/dashboard', {replace: true});
            addNotification({
                text: "Tu consulta se ha enviado correctamente.",
                position: "top-right",
                type: "success",
                removeAfter: 2500,
            });
        } else {
            addNotification({
                text: "Rellena todos los campos",
                position: "top-right",
                type: "danger",
                removeAfter: 2500,
            });
        }
    }
</script>

<Navbar />
<div class="soporte-holder">
    <h3>Contacta con nosotros</h3>
    <p>
        Nuestro equipo de soporte estará encantado de ayudarte. Por favor,
        rellena este formulario y te responderemos con la mayor brevedad
        posible.
    </p>
    <form on:submit|preventDefault={submitSoporte} class="formulario-soporte">
        <div class="form-item">
            <label for="">Asunto</label>
            <input bind:value={titulo} type="text" />
        </div>
        <div class="form-item">
            <label for="">Describe tu problema</label>
            <textarea
                bind:value={descripcion}
                name=""
                id=""
                cols="30"
                rows="10"
            />
        </div>
        <div class="form-item">
            <button type="submit" class="btn-jesus">Enviar</button>
        </div>
    </form>
</div>

<style>
    .formulario-soporte {
        display: flex;
        flex-direction: column;
    }
    .formulario-soporte input {
        padding: 5px;
        border-radius: 25px;
        border: 0px;
        outline: none;
    }
    input:focus {
        outline: 1px solid rgba(254, 44, 85, 1);
    }
    textarea:focus {
        outline: 1px solid rgba(254, 44, 85, 1);
    }
    .btn-jesus {
        border-radius: 35px;
        padding: 15px 35px;
        font-family: "Nunito";
        font-weight: bolder;
        background-color: rgba(254, 44, 85, 1);
        color: white;
        outline: none;
        border: 0px;
        width: 10vw;
        margin: auto;
    }

    textarea {
        padding: 5px;
        border-radius: 25px;
        border: 0px;
        outline: none;
    }
    .form-item {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
    }
    .soporte-holder {
        padding: 35px;
        background-color: rgb(238, 238, 238);
        width: 45vw;
        margin: auto;
        margin-top: 3vh;
    }
</style>
