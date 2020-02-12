function login(user, pass) {

    // Obtengo a todos los pacientes que existen en la base de datos y los inserto en la pagina PatientsPage, mediante el div que tiene la pagina
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var tempt = this.responseText; //< Asigno la respuesta del servidor a una variable

            if (tempt == "0") {
                ons.notification.alert('Datos incorrectos!', {title: "Tuvimos un problema!"});
            } else if (tempt == "1") {
                const navigator = document.querySelector('#navigator');
                navigator.resetToPage('splitter.html');
            }else{
                ons.notification.alert('Datos incorrectos!', {title: "Tuvimos un problema!"});
            }
        }
    };

    xhttp.open("GET", "https://luisramirez3006.000webhostapp.com/FlexogP/login.php?user="+ user + "&password=" + pass, true);

    xhttp.send();
}


//https://luisramirez3006.000webhostapp.com/FlexogP/login.php?user=admin&password=admin