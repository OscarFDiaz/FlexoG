function createAlertDialog(nMachine, idMachine, descMachine) {
    
    document.getElementById('IDMACHINE').innerText = idMachine;
    sessionStorage.setItem('idMachineStorage', idMachine);

    var dialog = document.getElementById('my-alert-dialog');
  
    if (dialog) {
      dialog.show();
    }
}
  
function hideAlertDialog() {
    let nombreNuevo = document.getElementById('NMACHINE').value;
    document.getElementById('NMACHINE').value = "";
    let descNuevo = document.getElementById('DESCMACHINE').value;
    document.getElementById('DESCMACHINE').value = "";
    
    let machid = sessionStorage.getItem('idMachineStorage'); 
    sessionStorage.clear();
    console.log(machid);

    ///Lo que quiero que haga cuando da en OK
    updateMachine(machid, nombreNuevo, descNuevo);
    document.getElementById('my-alert-dialog').hide();
}

  function hideAlertNoChange(){
    document.getElementById('NMACHINE').value = "";
    document.getElementById('DESCMACHINE').value = "";
    
    document.getElementById('my-alert-dialog').hide();
}