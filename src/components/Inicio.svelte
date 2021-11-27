<script>
    import { Router, Link, Route } from "svelte-routing";
    import { user } from "../models/User";
    import { navigate } from "svelte-routing";</script>
<div class="container-fluid">
    <div class="section first">
        <h1>Impulsa tu negocio</h1>
        <p class="main-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore fugiat perferendis aliquid, numquam saepe quo odio nobis sunt! Quisquam atque quod obcaecati laborum quia ab nam voluptas ea praesentium?</p>
        <br>
        <p class="subtext">Regístrate hoy y crea un anuncio en tan solo unos minutos</p>
        <a href="#registro"><button class="register-btn">Registrarme</button></a>
        
    </div>
    <a id="registro"></a>
    <div class="section second">
        
        <div class="registro-holder">
            <div class="form-holder">
                
            <h3>Registro</h3>
                <div class="form-item">
                    <label for="">Nombre</label>
                    <input type="text">
                </div>
                <div class="form-item">
                    <label for="">Número de teléfono</label>
                    <input type="text">
                </div>
                <div class="form-item">
                    <label for="">Correo electrónico</label>
                    <input type="text">
                </div>
                <div class="form-item">
                    <label for="">Contraseña</label>
                    <input type="text">
                </div>
                <div class="form-item">
                    <label for="">Confirmar contraseña</label>
                    <input type="text">
                </div>
                <div class="form-item">
                    <input type="checkbox">
                    <label for="">Acepto los <a href="">términos y condiciones</a></label>
                </div>
                <div class="form-item">
                    <button>Registrarse</button>
                </div>
                <div class="form-item">
                    <label for="">¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></label>
                </div>
            </div>
        </div>
    </div>
    <div class="section third">
asd
    </div>
</div>
<style>
.container{
    background-color: #13073A;
    display: flex;
    flex-direction: column;
    font-family: 'Nunito';
}
.registro-holder{
    background-color: rgb(238, 238, 238);
    padding: 5vw;
    padding-top: 3vw;
}
.form-holder{
    display: flex;
    flex-direction: column;
    width: 25vw;
    margin: auto;
    padding: 2px;
}
.form-item{
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}
.form-item .checkbox{
    flex-direction: row;
}
input{
    border-radius: 15px;
    padding: 5px 15px;
    border: 0px;
}
input:focus{
    outline: 1px solid rgba(254, 44, 85, 1);

}
.section{
    width: 100%;
    color: rgba(255, 255, 255, 1);
}

.first{
    padding: 10vw;
}
.second{
    padding: 5vw;
    background-color: white;
    color: black;
    font-family: 'Nunito';
}
.second button{
    padding: 5px 10px;
    border-radius: 15px;
    outline: none;
    background-color: rgba(254, 44, 85, 1);
    color: white;
    border: 0px;
}

.first h1{
    margin-top: 10vh;
    font-weight: bold;
}
.main-desc{
    max-width: 45vw;
}
.subtext{
    color: rgba(254, 44, 85, 1);
}
.register-btn{
    border-radius: 35px;
    padding: 15px 35px;
    font-family: 'Nunito';
    font-weight: bolder;
    background-color: rgba(254, 44, 85, 1);
    color: white;
    outline: none;
    border: 0px;
}

.third{
    background-color: #D4D46A;
    height: 100vh;
}
</style>