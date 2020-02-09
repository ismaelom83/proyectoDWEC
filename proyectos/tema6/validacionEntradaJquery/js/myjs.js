
$(function () {

    $("#btna").click(function () {
        if ($("#Correo").val() !== "" &&
                $("#password").val() !== "") {

                if (validarEmail(this.value) === true) {
                     $("#email").remove();
                    return true;
                } else {              
                    return false;
                }
         

   
        if (validarPasswd(this.value) === true) {
            return true;
        } else {
            $("#password").remove();
            $(this).css("color", "red");
            $(this).after("<span id='email'>Campo contraseña invalido, Tiene que contener una mayuscala una minuscula un numero y al menos 6 caracteres</span>");
            return false;
        }
 

        } else {
            alert("rellena todos los campos");
            if ($("#Correo").val() == "" &&
                    $("#password").val() == "") {
                $("#Correo").css('borderColor', 'green');
                $("#password").css('borderColor', 'green');
                return false;
            }
            return false;
        }
    });
});

function validarEmail(email) {
    exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!exp.test(email)) {
        alert("Direccion de correo erronea");
        return false;
    } else {
        return true;
    }
}

function validarPasswd(passwd) {
    var expreg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (expreg.test(passwd)) {
        return true
    } else {
        alert("Campo contraseña invalido, Tiene que contener una mayuscala una minuscula un numero y al menos 6 caracteres");
        return false;
    }
}