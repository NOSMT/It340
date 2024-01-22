function insertPatient(patient) {
    database.patient.push(patient);
    console.log('Patient added to database:', database.patient);
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

module.exports = { updatePatient, insertPatient };