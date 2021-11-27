<script>
    import { Router, Link, Route } from "svelte-routing";
    import { user } from "../models/User";
    import { navigate } from "svelte-routing";
    import { get } from 'svelte/store'
    import { preferences } from './stores.ts'

    const cerrarSesion = () => {
        user.setUser(null);
        preferences.set();
        navigate("/", { replace: true });
    };
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><Link to="/dashboard">Navbar</Link></a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#"><Link to="/servicios/iniciar-pedido">Publicitarse</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><Link to="/soporte">Soporte</Link></a>
                </li>
                <li class="nav-item">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a class="nav-link" href="#" on:click={cerrarSesion}>Cerrar sesión</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style>
    .nav-link{
        text-decoration: none;
    }
</style>