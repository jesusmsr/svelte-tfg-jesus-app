<script>
    import Navbar from './Navbar.svelte';
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { user } from "../models/User";
    import { Router, Link, Route } from "svelte-routing";
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

    onMount(() => {
        if (!$user) {
            navigate("/", { replace: true });
        }
    });
</script>

<Navbar></Navbar>

<div class="servicios-holder">
    <h4 class="text-center">Servicios</h4>
    <hr>
    <div class="servicios-list">
        <div class="servicio">
            <div class="imagen-servicio">
                <img src="../images/marketing.jpeg" alt="">
            </div>
            <div class="servicio-body">
                <h5>Publicidad</h5>
                <hr>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste, amet quaerat atque numquam, tempora sed nisi vero rem minus at odio possimus! Sed voluptates aperiam est repudiandae eaque expedita?</p>
                <Link to="/servicios/iniciar-pedido">Publicítate con nosotros</Link>
        </div>
    </div>
</div>

<style>
    .btn-jesus{
        text-decoration: none;
        border-radius: 25px;
        padding: 5px 25px;
        background-color: rgba(254, 44, 85, 1);
        color: white;
    }
    .servicios-holder{
        padding: 20px;
    }
    .servicios-list{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: auto;
    }
    .servicio{
        width: 75vw;
        margin: auto;
        background-color: #FAFAFA;
        display: flex;
        flex-direction: row;
        padding: 15px;
        margin-top: 25px;
    }
    .servicio-body{
        height: 250px;
        width: 75%;
        padding: 15px;
    }
    .servicio-body button{
        margin-top: 35px;
    }
    .imagen-servicio img{
        max-width: 450px;
        background-color: grey;
    }
    .btn{
        text-decoration: none !important;
        color: white !important;
    }
</style>