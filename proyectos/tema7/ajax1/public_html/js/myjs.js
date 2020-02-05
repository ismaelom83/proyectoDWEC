$(function () {

//instanciamos la clase XMLH
    miHHR = new XMLHttpRequest();
    //para enviar por post
    miHHR.open('POST', 'asignaturas.php', true);
    miHHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//creamos un evento para recoger lo que marcamos en el imput de modulos. 
    $("#modulo").change(marcarModulo);
    miHHR.onreadystatechange = cambio;
    miHHR.send("DAW=" + $("#modulo").val());
    
    
//    function marcarModulo() {
//        if ($("#modulo").val() === "DAW"&& $("#cursoa").val() === "primero") {
//            function cambio() {
//                if (this.readyState == 4 && this.status == 200) {
//                    primercurso = this.responseText;
//                }
//            }
//        }
//    }
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

