var expect = require('chai').expect;
var WaitGroup = require('..');

describe('WaitGroup',function(){
    it('#done',function(done){
        var wg = new WaitGroup(2);      
        setImmediate(function(){
            wg.done();
        });
        setImmediate(function(){
            wg.done(1);
        });
        wg.wait(function(){
            done();
        });
    });
});