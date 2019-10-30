var name = prompt("Wat is uw naam?")
var age = prompt("Wat is uw leeftijd?")
function opdracht(name, age){
    for(i = 1; i < stop; i++){
    if (name + age){
        document.write("Hallo " + name + ", je leeftijd is "+ age)
    }
        else if(name == "stop" || age == "stop"){
         break;
        }
    }
}
opdracht(name, age)