<script>
    import Navbar from "./Navbar.svelte";

    const urlParams = new URLSearchParams(window.location.search);
    let cancelOrderId = urlParams.get('order');

    function cancelOrder(){
        fetch("http://localhost:3000/orders/id="+cancelOrderId, {
                method: "DEL"
            })
                .then((response) => response.json())
                .then((data) => {
                    addNotification({
                        text: "Solicitud enviada.",
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
    }
</script>

<Navbar></Navbar>
<div class="cancelar-holder">
    <h3>Cancelar campaña</h3>
    <p>Por favor, rellena el siguiente formulario para la solicitar la cancelación de la campaña y la tramitaremos lo antes posible. <strong>Recuerda que una vez cancelada, no podrás reanudarla, tendrás que crear una nueva.</strong></p>
    <form class="cancelar-form">
        <div class="form-item">
            <label for="">Razón de la cancelación</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="form-item">
            <button class="btn-jesus" on:click={cancelOrder()}>Solicitar</button>
        </div>
    </form>
</div>

<style>
    .cancelar-form{
        display: flex;
        flex-direction: column;
    }
    .form-item{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
    }
    .cancelar-holder{
        background-color: rgb(238, 238, 238);
        padding: 35px; 
        width: 40vw;
        margin: auto;
        margin-top: 4vh;
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
</style>