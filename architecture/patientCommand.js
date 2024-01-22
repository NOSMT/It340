const Patient = require('./patient');

const { insertPatient, retrievePatient, updatePatient, newinsertPatient} = require('./patientDAO');


function newaddPatient(lastName, firstName) {
    const id = generatePatientId();
    const creationDate = new Date();
    const newPatient = new Patient(id, lastName, firstName, creationDate);
    insertPatient(newPatient);

    const newnewPatient = new Patient(id, lastName, firstName);
    newinsertPatient(newnewPatient);

    
}

function newsavePatient(id, lastName, firstName) {
    const existingPatient = retrievePatient(id);
  
    if (existingPatient) {
      existingPatient.lastName = lastName;
      existingPatient.firstName = firstName;
      updatePatient(existingPatient);
    } else {
      console.log('Patient not found.');
    }
}

function generatePatientId() {
    return Math.floor(Math.random() * 1000);
  }

module.exports = {newaddPatient,newsavePatient};