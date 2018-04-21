const Sequelize = require('Sequelize');
const db = require('../db');

const SessionCart = db.define('SessionCart', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1
    }
  }

})

SessionCart.prototype.increaseQuantity = function(num) {
  this.quantity = this.getDataValue('quantity') + num;
}

module.exports = SessionCart
