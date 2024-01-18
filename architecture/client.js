
const { addPatient, getPatientList, savePatient, getPatient } = require('./patientService');
addPatient('Doe', 'John');
const patients = getPatientList();
console.log('Patient List:', patients);

savePatient(1, 'Doe', 'Jane');
const updatedPatient = getPatient(1);
console.log('Updated Patient:', updatedPatient);
