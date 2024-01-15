
const retrieveBalance = require("./bankDAO.js")

function getBalance(){
    retrieveBalance.retrieveBalance();
}

module.exports = {getBalance};