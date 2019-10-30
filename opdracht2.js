//3 verschillende sommen per vorm (bijvoorbeeld +, - en : etc)
function addition(x, y){
    var g = x+y
    document.write(x+" + "+y+" = "+g +"<br>")
}

function subtraction(x, y){
    var g = x-y
    document.write(x+" - "+y+" = "+g +"<br>")
}

function multiplication(x, y){
    var g = x*y
    document.write(x+" * "+y+" = "+g +"<br>")
}

function division(x, y){
    var g = x/y
    document.write(x+" : "+y+" = "+g +"<br>")
}

function increment(x){
    var g = x+1
    document.write(x+" + "+1+" = "+g +"<br>")
}

function decrement(x){
    var g = x-1
    document.write(x+" - "+1+" = "+g +"<br>")
}

addition(20, 55)
addition(11, 89)
addition(10, 12)

subtraction(10, 5)
subtraction(10, 5)
subtraction(58, 34)

multiplication(15, 16)
multiplication(65, 3)
multiplication(6, 7)

division(14, 2)
division(1500, 60)
division(144, 12)

increment(15)
increment(999)
increment(12)

decrement(550)
decrement(1000)
decrement(34)