var rect = {
    perimeter: (x,y)=> (2*(x+y)),
    area: (x,y) =>x*y,
};

function solveReact(l,b){
    console.log("solving l=" +l +"and b=" +b);

    if(l <=0 || b<=0){
        console.log("please check parameter");
    }
    else {
        console.log("area of rectangle is "+rect.area(l,b));
    }
}

solveReact(3,4);