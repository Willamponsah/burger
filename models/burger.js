var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.all('burgers',function (res) {
            cb(res);
            
        })

        },
    
        update: function (id,cb) {
            orm.update('burger, id,cb');
    }    
        
}

module.exports = burger;