const {retrievePatientList, retrievePatient,newretrievePatientList} = require('./patientDAO');


function newgetPatientList2() {
  return newretrievePatientList();
}
function newgetPatientList() {
    return retrievePatientList();
  }


  function newgetPatient(id) {
    return retrievePatient(id);
  }
  module.exports = {newgetPatientList,newgetPatient,newgetPatientList2}

