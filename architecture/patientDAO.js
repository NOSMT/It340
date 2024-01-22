const database = require('./database');

function insertPatient(patient) {
  database.patient.push(patient);
  console.log('Patient added to database:', database.patient);
}

function newinsertPatient(patient) {
  database.patientList.push(patient);
  console.log('Patient new added to database:', database.patient);
}

function retrievePatientList() {
  return database.patient.map(patient => ({
    id: patient.id,
    lastName: patient.lastName,
    firstName: patient.firstName,
  }));
}
function newretrievePatientList() {
  return database.patientList.map(patientList => ({
    id: patientList.id,
    lastName: patientList.lastName,
    firstName: patientList.firstName,
  }));
}
function retrievePatient(id) {
  const patient = database.patient.find(patient => patient.id === id);

  if (patient) {
    return {
      ...patient,
      name: `${patient.lastName} ${patient.firstName}`,
    };
  } else {
    console.log('Patient not found.');
    return null;
  }
}

function updatePatient(updatedPatient) {
  const index = database.patient.findIndex(patient => patient.id === updatedPatient.id);

  if (index !== -1) {
    database.patient[index] = updatedPatient;
    console.log('Patient updated:', database.patient);
  } else {
    console.log('Patient not found.');
  }
}

module.exports = { insertPatient, retrievePatientList, retrievePatient, updatePatient,newinsertPatient,newretrievePatientList };
