'use strict';

let separator1 = "~";
let separator2 = "@";

function cargarProvincias(provinciaId) {
    $("#" + provinciaId).append($("<option></option>")
        .attr("value", -1).text("Elija una provincia"));
    for (let key in p) {
        $("#" + provinciaId).append($("<option></option>")
            .attr("value", key).text(p[key]));
    }
}

function cargarCantones(provincia, cantonId) {
    let provinciaSelectedValue = $(provincia).val();
    $("#" + cantonId + " option").remove();

    if (provinciaSelectedValue != -1) {
        $("#" + cantonId).append($("<option></option>")
            .attr("value", -1).text("Elija un cantón"));

        let cantones = c[provinciaSelectedValue].split(separator1);

        for (let i = 0; i < cantones.length; i++) {
            let cantonValuePair = cantones[i].split(separator2);
            $("#" + cantonId).append($("<option></option>")
                .attr("value", cantonValuePair[1]).text(cantonValuePair[0]));
        }
    } else {
        $("#" + cantonId).append($("<option></option>")
            .attr("value", -2).text("Elija una provincia"));
    }
    cargarDistritos($("#" + cantonId), "distritos");
}

function cargarDistritos(canton, distritoId) {
    let cantonSelectedValue = $(canton).val();
    $("#" + distritoId + " option").remove();

    if (cantonSelectedValue > 0) {
        $("#" + distritoId).append($("<option></option>")
            .attr("value", -1).text("Elija un distrito"));

        let distritos = d[cantonSelectedValue].split(separator1);

        for (let i = 0; i < distritos.length; i++) {
            let distritoValuePair = distritos[i].split(separator2);
            $("#" + distritoId).append($("<option></option>")
                .attr("value", distritoValuePair[1]).text(distritoValuePair[0]));
        }
    } else if (cantonSelectedValue == -1) {
        $("#" + distritoId).append($("<option></option>")
            .attr("value", -1).text("Elija un cantón"));
    } else if (cantonSelectedValue == -2) {
        $("#" + distritoId).append($("<option></option>")
            .attr("value", -1).text("Elija una provincia"));
    }
}