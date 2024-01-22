
const { addPatient, getPatientList, savePatient, getPatient } = require('./patientService');
addPatient('Doe', 'John');
const patients = getPatientList();
console.log('Patient List:', patients);

savePatient(1, 'Doe', 'Jane');
const updatedPatient = getPatient(1);
console.log('Updated Patient:', updatedPatient);



const {newaddPatient, newsavePatient} =  require('./patientCommand.js');

const {newgetPatientList, newgetPatient,newgetPatientList2} = require('./patientQuery.js');


newaddPatient('doe2', 'john2');
const patients2 = newgetPatientList();
console.log('Patient List:', patients2);


const patients3 = newgetPatientList2();
console.log('PatientList List:', patients3);

newsavePatient(patients2[0]);

newgetPatient(patients2[0]);

