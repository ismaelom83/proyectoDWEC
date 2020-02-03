$(function () {

    $("#alumnor").click(function () {
        $("#alumno").show();
        $("#profesor").hide();
    })

$("#profer").click(function () {
    $("#profesor").show();
    $("#alumno").hide();
})


    $("#modulo").change(function () {
       
        var smr = ["uno","dos","tres"];
        var daw = ["cuatro","cinco","seis"];
        if ($("#modulo").val() == 'SMR') {
            $("#hideAsig").append("<li>"+smr+"</li>")+"<br>";
        } else {
            $("#hideAsig").append("<li>"+daw+"</li>")+"<br>";
        }
    });

    $("#cursoa").change(function () {


        console.log($("#cursoa").val());
        
        var primer = ["Auno","Ados","Atres"];
        var segundo = ["Acuatro","Acinco","Aseis"];
        if ($("#cursoa").val()=='primer') {
            $("#hideAsig").append("<li>"+primer+"</li>")+"br";
        } else {
            $("#hideAsig").append("<li>"+segundo+"</li>")+"br";
        }
    })
})
