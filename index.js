function receivesAFunction(callback){
    callback();
}
receivesAFunction(() => {

})
function returnsANamedFunction(){
    let joy = () => console.log("name")
    return (joy)
}
var returnsAnAnonymousFunction = function() {
    return (() => {
        alert('This is an anonymous function')
    }
    )
}