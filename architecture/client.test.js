const { addPatient, getPatientList, savePatient, getPatient } = require('../architecture/patientService');

describe('Client', () => {
  beforeEach(() => {
  });

  it('should add a patient via patientService', () => {
    addPatient('Doe', 'John');
    const patients = getPatientList();
    expect(patients.length).toBe(1);
  });

  it('should update a patient via patientService', () => {
    addPatient('Doe', 'John');
    savePatient(1, 'Doe', 'Jane');
    const updatedPatient = getPatient(1);
    expect(updatedPatient.firstName).toBe('Jane');
  });

});
