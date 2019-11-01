while(true) {
        var tafel = prompt("welke tafel wilt u?")

        if ( isNaN(tafel) == false ) {
            //het is een getal

            if (tafel <= 10){
                //mooi tabel maken
                for (var i = 1; i <= tafel; i++){
                    for(j = 1; j <= 10; j++){
                        document.write(i+"x"+ j +"="+ i*j +"<br>")       
                    }
                    document.write("<br> <br>")
                }
                break;
            }
          else if(tafel >= 10){
                alert("graag een getal onder de 10")
                // het getal is te groot
                // stop
          }
        }
        else {
            alert("graag een getal invoeren")//het is geen getal
            // stop

        }
    }