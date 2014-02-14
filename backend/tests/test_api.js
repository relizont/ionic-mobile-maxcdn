'use strict';

var config = require('../config').maxcdn;
var api = require('../lib/api')(config);

tests();

function tests() {
    testCompanyAlias();
    testStats();
}


function testCompanyAlias() {
    // in case the credential are right, this should return null and some string
    api.companyAlias({}, function(err, alias) {
        console.log(err, alias);
    });
}

function testStats() {
    // TODO: fetch token + secret from server. gives invalid signature now
    api.companyAlias({}, function(err, alias) {
        if(alias) {
            api.stats({
                alias: alias
            }, function(err, stats) {
                // in case credentials and alias are right, this should return something
                console.log(err, stats);
            });
        }
    });
}
