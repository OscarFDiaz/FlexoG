function resetID(){
    // Obtengo a todos los pacientes que existen en la base de datos y los inserto en la pagina PatientsPage, mediante el div que tiene la pagina
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var tempt = this.responseText; //< Asigno la respuesta del servidor a una variable
        }
    };

    xhttp.open("GET", "https://luisramirez3006.000webhostapp.com/FlexogP/reset.php", true);

    xhttp.send();
}
