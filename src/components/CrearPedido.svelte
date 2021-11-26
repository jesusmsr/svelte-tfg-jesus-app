<script>
    import Navbar from "./Navbar.svelte";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { user } from "../models/User";
    import { Router, Link, Route } from "svelte-routing";
    import { getNotificationsContext } from "svelte-notifications";

    const { addNotification } = getNotificationsContext();

    onMount(() => {
        if (!$user) {
            navigate("/", { replace: true });
        }
    });

    function handleOnSubmit() {
        console.log(metodoPago);
        if (
            nombreCamp != "" &&
            presupuesto != "" &&
            fechaInicio != "" &&
            fechaFinal != ""
        ) {
            fetch("http://localhost:3000/orders", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    orderName: nombreCamp,
                    budget: presupuesto,
                    initDate: fechaInicio,
                    endDate: fechaFinal,
                    orderer: $user.email
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    addNotification({
                        text: "Campaña creada con éxito",
                        position: "top-right",
                        type: "success",
                        removeAfter: 2000,
                    });

                    navigate('/dashboard');
                })
                .catch((error) => {
                    console.log(error);
                    return [];
                });
        } else {
            addNotification({
                text: "Rellena todos los campos",
                position: "top-right",
                type: "danger",
                removeAfter: 2000,
            });
        }
    }

    function handlePaymentMethodChange() {
        if (metodoPago === "paypal") {
            metodoPago = "tarjeta";
        } else if (metodoPago === "tarjeta") {
            metodoPago = "paypal";
        }

        console.log(metodoPago);
    }

    let nombreCamp = "";
    let presupuesto = "";
    let fechaInicio = "";
    let fechaFinal = "";
    let metodoPago = "paypal";
</script>

<Navbar />

<div class="crear-pedido-section">
    <div class="pedido-form-holder">
        <form on:submit|preventDefault={handleOnSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Nombre de la campaña</label
                >
                <input
                    bind:value={nombreCamp}
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                    Esto no se mostrará publicamente, sólamente sirve como
                    identificación
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                    >Presupuesto</label
                >
                <input
                    bind:value={presupuesto}
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                />
                <div id="emailHelp" class="form-text">
                    Con un presupuesto mayor habrá más posibilidades de alcanzar
                    a un mayor número de personas
                </div>
            </div>
            <div class="dates-input-group">
                <div class="mb-3">
                    <label for="startDate" class="form-label"
                        >Fecha de inicio de la campaña</label
                    >
                    <input
                        bind:value={fechaInicio}
                        type="date"
                        class="form-control"
                        id="startDate"
                    />
                </div>
                <div class="mb-3">
                    <label for="endtDate" class="form-label"
                        >Fecha de finalización de la campaña</label
                    >
                    <input
                        bind:value={fechaFinal}
                        type="date"
                        class="form-control"
                        id="endtDate"
                    />
                </div>
            </div>
            <div class="mb-3">
                <label for="startDate" class="form-label">Imágenes</label>
                <input type="file" class="form-control" id="bannerInput" />
                <div id="bannerInput" class="form-text">
                    Banner que se mostrará
                </div>
            </div>
            <hr />
            <h5>Pago</h5>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    on:change={handlePaymentMethodChange}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                    Tarjeta de crédito
                </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                    on:change={handlePaymentMethodChange}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                    PayPal
                </label>
            </div>
            <div class="pago-holder">
                {#if metodoPago === "paypal"}
                    <button class="btn btn-secondary"
                        >Continuar con el pago en PayPal</button
                    >
                    <img
                        src="../images/paypal-logo.png"
                        alt=""
                        class="paypal-logo"
                    />
                {/if}
                {#if metodoPago === "tarjeta"}
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"
                            >Número de la tarjeta</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="cardNumber"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div class="dates-input-group">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"
                                >CVV</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="cvv"
                                aria-describedby="emailHelp"
                                style="width: 10vw;"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"
                                >Mes de caducidad</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="cvv"
                                aria-describedby="emailHelp"
                                style="width: 7vw;"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"
                                >Año de caducidad</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="cvv"
                                aria-describedby="emailHelp"
                                style="width: 7vw;"
                            />
                        </div>
                    </div>
                {/if}
            </div>
            <button type="submit" class="btn btn-primary">Crear pedido</button>
        </form>
    </div>
</div>

<style>
    .paypal-logo {
        width: 40px;
        margin-left: 15px;
    }
    .pago-holder {
        padding: 15px;
        width: 100%;
    }
    .dates-input-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .crear-pedido-section {
        width: 100%;
        margin: auto;
        padding: 25px;
    }
    .pedido-form-holder {
        background-color: #FAFAFA;
        width: 40vw;
        margin: auto;
        padding: 15px;
    }
</style>
