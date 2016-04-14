module.exports = WaitGroup;

function WaitGroup(length,callback) {
    if(!this instanceof WaitGroup){
        return new WaitGroup(length);
    }
    this.c = 0;
    this.wait(callback);
    this.add(length);
}

WaitGroup.prototype.wait = function(callback){
    this.callback = callback;
};

WaitGroup.prototype.add = function(n){
    this.c = Math.max(n+this.c,0);
};

WaitGroup.prototype.done = function(n){
    this.add(n!==undefined ? -n : -1);
    if(this.c == 0){
        setImmediate(this.callback);
    }
};

