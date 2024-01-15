const getBalance = require('./bank');
const bankDAO = require('./bankDAO');

jest.mock('./bankDAO', () => ({
    retrieveBalance: jest.fn()
}));

test('getBalance should call retrieveBalance without executing it', () => {
    getBalance.getBalance();
    expect(bankDAO.retrieveBalance).toHaveBeenCalled();
});
