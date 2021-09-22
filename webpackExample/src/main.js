function myModul(){
    this.hello = function(){
        console.log('hello!!!');
    };

    this.goodbye = function(){
        console.log('bye!');
    };
}

module.exports = myModul; //commonJS