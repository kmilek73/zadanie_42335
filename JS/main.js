 
let n = prompt('Podaj pierwszą cyfrę');
let h = prompt('Podaj drugą cyfrę');


let b = parseInt(n);
let c = parseInt(h);
let suma =(b + c);

function sprawdz_n(b,c){
if (b == 20 || c == 20){
console.log(" jedna z dwóch liczb jest równa 20")
return true;
} else if (suma <= 20) {
    console.log( "Suma dwóch cyfr jest równa lub mniejsza niż 20")
    return true;
} else{
       console.log("powinno zwrócić false");
       return (false);
}
}
sprawdz_n(b,c);
 console.log(b);
 console.log(c);
 console.log(suma);




