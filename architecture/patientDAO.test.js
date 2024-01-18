const { insertPatient, retrievePatientList, retrievePatient, updatePatient } = require('../architecture/patientDAO');

describe('Patient DAO', () => {
  beforeEach(() => {
  });

  it('should insert a patient into the database', () => {
    const patient = { id: 1, lastName: 'Doe', firstName: 'John', creationDate: new Date() };
    insertPatient(patient);
    const patients = retrievePatientList();
    expect(patients.length).toBe(1);
  });

  it('should retrieve a modified patient list without creationDate', () => {
    const patients = retrievePatientList();
    expect(patients.length).toBeGreaterThan(0);
    expect(patients[0].creationDate).toBeUndefined();
  });

  it('should retrieve a patient with a modified name property', () => {
    const patient = { id: 1, lastName: 'Doe', firstName: 'John', creationDate: new Date() };
    insertPatient(patient);
    const retrievedPatient = retrievePatient(1);
    expect(retrievedPatient.name).toBe('Doe John');
  });

  it('should update a patient in the database', () => {
    const patient = { id: 1, lastName: 'Doe', firstName: 'John', creationDate: new Date() };
    insertPatient(patient);
    const updatedPatient = { ...patient, firstName: 'Jane' };
    updatePatient(updatedPatient);
    const patients = retrievePatientList();
    expect(patients[0].firstName).toBe('Jane');
  });
});
