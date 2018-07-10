function fora() {
    var x = 10;
    function dentro() {
        var x= 20;
       return x;
    }
    return dentro;
 }
 result = fora()(); // retorna 20 em vez de 10
 document.write(result);