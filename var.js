//Before 2015 we used to use var keyword to declare variables
// when in 2015 ES6 came into picture, we started using let and const keywords to declare variables.
// console.log(num);
// var num=10;
// console.log(num);
// num=20;
// console.log(num);
// var num=30;
// console.log(num);

function fb(){
    console.log(num);
    var num=10;
    console.log(num);
    if(num==10){
        var num=20;
        console.log(num);
    }
    console.log(num);
}

fb();