function newretrievePatient(id) {
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
  function newretrievePatient(id) {
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

  module.exports = { newretrievePatient,newretrievePatient };