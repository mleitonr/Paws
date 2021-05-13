'use strict';

let expanded = false;

function showCheckboxesPadecimientos() {
    let checkboxes = document.getElementById("checkboxes-padecimientos");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

function showCheckboxesVacunas() {
    let checkboxes = document.getElementById("checkboxes-vacunas");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}