
$(function () {

    miXMH = new XMLHttpRequest();
    $("#activar").click(activar);

    function activar() {
        if (miXMH) {
            var numero1 = $("#n1").val();
            var numero2 = $("#n2").val();
            var url = 'index.php';
            miXMH.open('POST', url, true);
            miXMH.onreadystatechange = estadoPeticion;
            miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            miXMH.send("numero=" + numero1 & "n=" + numero2);

        } else {
            alert("No se a podido establecer la conexion");
        }
    }

    function estadoPeticion() {
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById("resultados").innerHTML = this.responseText;
        }
    }


});

