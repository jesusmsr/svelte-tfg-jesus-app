<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import Login from "./components/Login.svelte";
	import Dashboard from "./components/Dashboard.svelte";
	import CrearPedido from "./components/CrearPedido.svelte";
	import Notifications from "svelte-notifications";
	import Soporte from "./components/Soporte.svelte";
	import Cancelar from "./components/Cancelar.svelte";
	import Inicio from "./components/Inicio.svelte";
	export let name: string;
</script>

<main>
	<Notifications>
		<div class="container-fluid">
			<Router>
				<Route path="/">
					<Inicio />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/servicios/iniciar-pedido">
					<CrearPedido />
				</Route>
				<Route path="/soporte">
					<Soporte />
				</Route>
				<Route path="/cancelar">
					<Cancelar />
				</Route>
			</Router>
		</div>
	</Notifications>
</main>

<style>
	main {
		width: 100vw;
		padding: 0;
		margin: 0;
	}
</style>
