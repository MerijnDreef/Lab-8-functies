do{
    naam = prompt("Wat is uw naam?")
        if(naam != "stop"){
            leeftijd = prompt("Wat is uw leeftijd?")
            if(leeftijd != "stop"){
                document.write("Hallo "+ naam +", je leeftijd is "+ leeftijd +"<br>")
            }
        }
    }while(naam != "stop"&& leeftijd != "stop")
