function showHideDatosEmpresa() {
    if(document.getElementById('empresa-check').checked) {
        document.getElementById('empresa-info').style.display='flex';
    }else {
        document.getElementById('empresa-info').style.display='none';
    }
}