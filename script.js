function facti() {
    var i, no, fact;
    fact = 1;
    no = Number(document.getElementById("fnum").value);
    for (i = 1; i <= no; i++) {
        fact = fact * i;
    }
    document.getElementById("fop").value = fact;
}

function Prime() {
    var i, flag = 0,
        number;
    number = Number(document.getElementById("primeip").value);
    for (i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        document.getElementById("primeop").value = "Prime Number";
    } else {
        document.getElementById("primeop").value = "Not a Prime number";
    }
}


function age() {
    var userinput = document.getElementById("agec").value;
    var dob = new Date(userinput);


    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1969);

    document.getElementById("ageop").value = ("Age of the date entered: " + age + " years");
}
function mtable(){
var res = "";
var Number = document.getElementById("table").value;
var i;

for (i = 1; i <= 10; i++) {


     res += Number + "*" + i + "=" + Number*i +"\n" ; 

}


document.getElementById("tableop").innerHTML = res;
}
