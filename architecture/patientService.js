const Patient = require('./patient');
const { addEvent } = require('./eventStore');
const { insertPatient, retrievePatientList, retrievePatient, updatePatient } = require('./patientDAO');


const { getEventsByPatientId } = require('./eventStore');

function restorePatient(id) {
  const patientEvents = getEventsByPatientId(id);

  const patient = {};

  patientEvents.forEach(event => {
    switch (event.name) {
      case 'patientAdded':
        patient.id = event.patientId;
        patient.details = event.payload.patient;
        console.log('Détails du patient après l\'événement "patientAdded":', patient.details);
        break;
      
      default:
    }
  });

  return patient;
}

function addPatient(lastName, firstName) {
  const id = 123;//generatePatientId();
  const creationDate = new Date();
  const newPatient = new Patient(id, lastName, firstName, creationDate);
  //insertPatient(newPatient);
  addEvent('patientAdded',newPatient.id, newPatient , new Date());
}

function getPatientList() {
  return retrievePatientList();
}

function savePatient(id, lastName, firstName) {
  const existingPatient = retrievePatient(id);

  if (existingPatient) {
    existingPatient.lastName = lastName;
    existingPatient.firstName = firstName;
    //updatePatient(existingPatient);
    restorePatient(existingPatient.id);
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

module.exports = { addPatient, getPatientList, savePatient, getPatient,restorePatient};

