function deleteMachine(machineID){
    // Obtengo a todos los pacientes que existen en la base de datos y los inserto en la pagina PatientsPage, mediante el div que tiene la pagina
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var tempt = this.responseText; //< Asigno la respuesta del servidor a una variable

            /*Si la respuesta en el lugar 0 es = 0, mi usuario no existe o no esta activado, primero se comprueba si es admin en checkAdmin.js y después si es usuario
            * Si la respuesta es 1 mi usuario existe y obtengo todos sus datos, los añado a las paginas correspondientes y lo mando a su "Splitter" correspondiente
            */
            if (tempt == "0") {
                ons.notification.alert('Algo salio mal a la hora de recuperar las maquinas!', {title: "Tuvimos un problema!"});
            } else if (tempt != "0") {
                ons.notification.alert('Maquina: ' + machineID + ' borrada con exito.', {title: "Hecho!"});
            }else{
                ons.notification.alert('Algo salio mal a la hora de recuperar a las maquinas!', {title: "Tuvimos un problema!"});
            }
        }
    };

    xhttp.open("GET", "https://luisramirez3006.000webhostapp.com/FlexogP/deleteMachine.php?id=" + machineID , true);
    xhttp.send();

    loadMachines();
}

