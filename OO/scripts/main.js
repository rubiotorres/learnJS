alert("Aqui possui OO");
function coito_fazerpessoas(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomereverso = function(){
        return this.sobrenome + ' '+ this.nome
    }
}
function reprovacao(materia1,materia2){
    this.materia1 =materia1;
    this.materia2 = materia2;
}
coito_fazerpessoas.prototype.fullname = function() {
    return this.nome + ' ' + this.sobrenome;
}
var bebe = new coito_fazerpessoas("Ramon", "Novaes");
var p1= new reprovacao("AOC","LAOC");
document.write(p1.materia1 + ' e ' + p1.materia2);