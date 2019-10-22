//write first method
function sleep_in(weekday,vacation) {
    if(!weekday || vacation){
        return true;
    }else{
        return false;
    }
}

//write second method
function monkey_trouble(monk1, monk2) {
    if((monk1 && monk2) || (!monk1 && !monk2)){
        return true;
    }else{
        return false;
    }
}

//add 2-10 below here...
function string_times(string, x) {
    var str = "";
    for(var i = 0; i < x; i ++){
        str += string;
    }
    return str;
}

function front_times(string, n){
    var str = "";
    var res = string.substring(0,3);
    for(var i = 0; i < n; i ++){
        str += res;
    }
    return str;
}

function string_bits(string){
    var str = "";
    for (var i = 0; i < string.length; i ++){
        if (i % 2 == 0) {
            str += string[i];
        }
    }
    return str;
}

function caughtSpeeding(speed, birthday){
    if (birthday){
        if (speed <= 65){
            return 0;
        }else if(speed >= 66 && speed <= 85){
            return 1;
        }else if (speed >= 86){
            return 2;
        }
    }else{
        if (speed <= 60){
            return 0;
        }else if(speed >= 61 && speed <= 80){
            return 1;
        }else if (speed >= 81){
            return 2;
        }
    }

}

function fizz_buzz (x){
    if(0 == x % 3 && 0 == x % 5){
        return "FizzBuzz";
    } else if (0 == x % 5){
        return "Buzz";
    } else if (0 == x % 3) {
        return "Fizz";
    } else {
        return x + "!";
    }
}

function teaParty(tea, candy){
    if(candy < 5 || tea < 5){
        return 0;
    } else if(candy >= tea * 2 || tea >= candy * 2){
        return 2;
    }else if (candy >= 5 || tea >= 5){
        return 1;
    }
}

function blackjack(first, second){
    if ((first > 21 ) && (second > 21)){
        return 0;
    }else if (((21 - first) < (21 - second)  || (second > 21)) && (21 - first) > 0 || first == 21){
        return first;
    }else if(((21 - first) > (21 - second) || (first > 21)) && (21 - second) > 0 || second == 21 ){
        return second;
    }
}

function loneSum(a,b,c){
    if (a == b && b == c){
        return 0;
    }else if (a == c){
        a = 0;
        c = 0;
        return a + b + c;
    }else if (b == c){
        b = 0;
        c = 0;
        return a + b + c;
    }else if (a == b){
        a = 0;
        b = 0;
        return a + b + c;
    }else{
        return a + b + c;
    }
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz (true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
//test third method, etc
}
