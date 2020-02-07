$(function () {

    miHHR = new XMLHttpRequest();
//peticion de modulos 
 url = "modulo.php";
           
            miHHR.open('GET', url, true);
    miHHR.onreadystatechange = peticion;
    miHHR.send(null);
     function peticion() {
//    console.log(this.readyState);
//    console.log(this.responseText);
//    console.log(this.status);
        //si hay respuesta del servidor 4
        //si ha sido satisfactoria 200
        if (this.readyState == 4 && this.status == 200) {
            var div1 = $("#modulo");
           div1.innerHTML = this.responseText;
           
        }
    }
    


    $("#modulo").change(conectar);
    function conectar() {
        if (miHHR) {
            var url;
            var valorModulo = $("#modulo").val();
            url = "modulo.php?modulo=" + valorModulo;
            console.log(valorModulo);
            miHHR.open('GET', url, true);
            miHHR.onreadystatechange = cambio;
            miHHR.send(null);
        } else {
            alert("no conexion");
        }
    }

    function cambio() {
//    console.log(this.readyState);
//    console.log(this.responseText);
//    console.log(this.status);
        //si hay respuesta del servidor 4
        //si ha sido satisfactoria 200
        if (this.readyState == 4 && this.status == 200) {
//            console.log(this.responseText);
//            var div1 = $("#pdiv");
//            div1.innerHTML = this.responseText;
            console.log(this.responseText);
        }
    }





















    /*por defecto siempre saldra el formulario de el alumno
     * pero si pulsamos el del profesor nos oculta alumno y viceveerssa
     * */
    $("#alumnor").click(function () {
        $("#alumno").show();
        $("#profesor").hide();
    })

    $("#profer").click(function () {
        $("#profesor").show();
        $("#alumno").hide();
    })



    /* aceptamos las condiciones de la LPD si no no deja enviar*/
    $('#lpda').change(function () {
        if ($("#lpda").is(':checked')) {
            console.log("Lpda Aceptada");
            $("#btna").prop('disabled', false); //Cambia una propiedad ya establecida
        } else {
            console.log("Lpda no aceptada");
            $("#btna").prop('disabled', true); //Cambia una propiedad ya establecida
        }
    });

    /* aceptamos las condiciones de la LPD si no no deja enviar*/
    $('#lpdp').change(function () {
        if ($("#lpdp").is(':checked')) {
            console.log("Lpdp Aceptada");
            $("#btnp").prop('disabled', false); //Cambia una propiedad ya establecida
        } else {
            console.log("Lpdp no aceptada");
            $("#btnp").prop('disabled', true); //Cambia una propiedad ya establecida
        }
    });
})

