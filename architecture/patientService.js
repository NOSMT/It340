
const Patient = require('./patient');
const { insertPatient, retrievePatientList, retrievePatient, updatePatient } = require('./patientDAO');

function addPatient(lastName, firstName) {
  const id = generatePatientId();
  const creationDate = new Date();
  const newPatient = new Patient(id, lastName, firstName, creationDate);
  insertPatient(newPatient);
}

function getPatientList() {
  return retrievePatientList();
}

function savePatient(id, lastName, firstName) {
  const existingPatient = retrievePatient(id);

  if (existingPatient) {
    existingPatient.lastName = lastName;
    existingPatient.firstName = firstName;
    updatePatient(existingPatient);
  } else {
    console.log('Patient not found.');
  }
}

function getPatient(id) {
  return retrievePatient(id);
}

function generatePatientId() {
  return Math.floor(Math.random() * 1000);
}

module.exports = { addPatient, getPatientList, savePatient, getPatient };
