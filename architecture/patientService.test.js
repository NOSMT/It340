const { addPatient, getPatientList, savePatient, getPatient } = require('./patientService');

describe('Patient Service', () => {
  beforeEach(() => {
  });

  it('should add a patient', () => {
    addPatient('Doe', 'John');
    const patients = getPatientList();
    expect(patients.length).toBe(1);
  });

  it('should update a patient', () => {
    addPatient('Doe', 'John');
    savePatient(1, 'Doe', 'Jane');
    const updatedPatient = getPatient(1);
    expect(updatedPatient.firstName).toBe('Jane');
  });

});
