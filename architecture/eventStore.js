const Event = require('./event');

const eventList = [];

function addEvent(name, patientId, payload, creationDate) {
  const event = new Event(name, patientId, payload, creationDate);
  eventList.push(event);
}

function getEventsByPatientId(patientId) {
    return eventList.filter(event => event.patientId === patientId);
  }
  
module.exports = { eventList, addEvent, getEventsByPatientId };

