const {eventList} = require('./eventStore.js')
const { addPatient, getPatientList, savePatient, getPatient ,restorePatient } = require('./patientService');
addPatient('Doe', 'John');
const patients = getPatientList();
console.log('Patient List:', patients);

savePatient(123, 'Doe', 'John');
const updatedPatientList = getPatientList(1);
console.log('Updated Patient:', updatedPatientList);
console.log('eventList:', eventList);

addPatient('Doe2', 'John2');
savePatient(123, 'Doe2', 'John2');
console.log('eventList:', eventList);


const {newaddPatient, newsavePatient} =  require('./patientCommand.js');

const {newgetPatientList, newgetPatient,newgetPatientList2} = require('./patientQuery.js');


/*newaddPatient('doe2', 'john2');
const patients2 = newgetPatientList();
console.log('Patient List:', patients2);


const patients3 = newgetPatientList2();
console.log('PatientList List:', patients3);

savePatient();
*/  


