<script>
    import { user } from "../models/User";
    import Navbar from "./Navbar.svelte";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { Router, Link, Route } from "svelte-routing";
    import Line from "svelte-chartjs/src/Line.svelte";
    import { get } from 'svelte/store'
    import { preferences } from './stores.ts'

    let orders = [];

    onMount(() => {
        user.setUser({
            email: get(preferences)
        })
        
        if (!$user) {
            console.log('1')
            navigate("/", { replace: true });
        }else{
            console.log('2');
            user.setUser({
                email: get(preferences)
            });

            fetch("http://localhost:3000/orders?orderer=" + get(preferences), {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                orders = data;
            })
            .catch((error) => {
                console.log(error);
                return [];
            });
        }

        
    });

    function solicitarCancelacion(order) {
        navigate("/cancelar?order="+order.id);
    }

    function randomNumber(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function newDataLine() {
        let dataLine = {
            labels: ["1 semana", "2 semanas", "1 mes", "3 meses", "6 meses"],
            datasets: [
                {
                    label: "Previsión de popularidad",
                    fill: true,
                    lineTension: 0.4,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 2,
                    pointHoverRadius: 0.3,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 0.2,
                    pointHitRadius: 2,
                    data: [
                        randomNumber(0, 100),
                        randomNumber(0, 100),
                        randomNumber(0, 100),
                        randomNumber(0, 100),
                        randomNumber(0, 100),
                    ],
                },
            ],
        };
        return dataLine;
    }
</script>

{#if $user}
    <Navbar />

    <div class="container-fluid">
        <div class="dashboard-holder">
            <h5>Tus campañas activas</h5>
            <hr />
            <div class="orders-holder">
                {#if orders.length != 0}
                    {#each orders as order}
                        <div class="order-holder">
                            <div class="order-info">
                                <div class="order-info-section">
                                    <div class="order-info-item">
                                        <label for="">Título: </label><span
                                            >{order.orderName}</span
                                        >
                                    </div>
                                    <div class="order-info-item">
                                        <label for="">Presupuesto: </label><span
                                            >{order.budget} €</span
                                        >
                                    </div>
                                    <div class="order-info-item">
                                        <label for=""
                                            >Fecha de inicio:
                                        </label><span>{order.initDate}</span>
                                    </div>
                                    <div class="order-info-item">
                                        <label for=""
                                            >Fecha de finalización:
                                        </label><span>{order.endDate}</span>
                                    </div>
                                </div>
                                <div class="order-info-section">
                                    <div class="order-info-item">
                                        <label for="">Estado: </label><span
                                            style="color:lime">En marcha</span
                                        >
                                    </div>
                                    <div class="order-info-item">
                                        <label for=""
                                            >Personas alcanzadas:
                                        </label><span
                                            >{randomNumber(200, 10000)}</span
                                        >
                                    </div>
                                    <div class="order-info-item">
                                        <label for=""
                                            >Clicks en el anuncio:
                                        </label><span
                                            >{randomNumber(50, 200)}</span
                                        >
                                    </div>
                                </div>
                                <div class="order-info-section">
                                    <Line
                                        data={newDataLine()}
                                        options={{ responsive: true }}
                                    />
                                </div>
                                <div class="order-info-section">
                                    <button
                                        on:click={solicitarCancelacion(
                                            order
                                        )}
                                        class="btn btn-primary btn-jesus"
                                        >Solicitar cancelación</button
                                    >
                                </div>
                            </div>
                        </div>
                    {/each}
                    {:else}
                    <p>Aún no tienes ninguna campaña activa.</p>
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
    .order-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .order-info-section {
        display: flex;
        flex-direction: column;
    }
    span {
        margin-left: 15px;
    }
    label {
        font-weight: bold;
    }
    .orders-holder {
        display: flex;
        flex-direction: column;
    }
    .order-holder {
        width: 100%;
        padding: 15px;
        margin: 5px;
        border-bottom: 1px solid rgb(202, 202, 202);
    }
    .dashboard-holder {
        background-color: #fafafa;
        width: 75vw;
        margin: auto;
        margin-top: 5vh;
        padding: 15px;
    }
    .btn-jesus {
        background-color: rgba(254, 44, 85, 1);
        color: white;
        border-radius: 25px;
        padding: 15px 25px;
        border: none;
        margin-top: 15px;
    }
    .btn-jesus:hover {
        background-color: rgb(202, 38, 71);
    }
</style>
