let newNum=[];
var process=[];

function clearInput() {
    $('#input').val("");
}

$('#clear').click(function () {
  clearInput();
});

function setNumberForInput(number) {
    let val1 = $('#input').val();
    val1=val1+""+number;
    $('#input').val(val1);
}

$('#num1').click(function () {
   // newNum.push(1)
    setNumberForInput(1);

});
$('#num2').click(function () {
  //  newNum.push(2)
    setNumberForInput(2);

});
$('#num3').click(function () {
   // newNum.push(3)
    setNumberForInput(3);

});
$('#num4').click(function () {
   // newNum.push(4)
    setNumberForInput(4);

});
$('#num5').click(function () {
    //newNum.push(5)
    setNumberForInput(5);

});

$('#num6').click(function () {
   // newNum.push(6)
    setNumberForInput(6);

});
$('#num7').click(function () {
   // newNum.push(7)
    setNumberForInput(7);

});
$('#num8').click(function () {
 //   newNum.push(8)
    setNumberForInput(8);

});
$('#num9').click(function () {
   // newNum.push(9)
    setNumberForInput(9);

});
$('#num0').click(function () {
  //  newNum.push(0)
    setNumberForInput(0);

});
$('#DECIMAL_Num').click(function () {
    setNumberForInput(".");
});

$('#A').click(function () {
    let val1 = $('#input').val();
    newNum.push(val1)
    process.push("+")
   clearInput();
});
$('#Multi').click(function () {
    let val1 = $('#input').val();
    newNum.push(val1)
    process.push("*")
    clearInput();
});
$('#M').click(function () {
    let val1 = $('#input').val();
    newNum.push(val1)
    process.push("-")
    clearInput();
});
$('#D').click(function () {
    let val1 = $('#input').val();
    newNum.push(val1)
    process.push("/")
    clearInput();
});

function getTotal(num1,num2) {
    let total=0;
    total=parseFloat(num1)+parseFloat(num2);
    newNum.unshift(total)
    process.splice(0,1)
    newNum.splice(1,2)
    $('#input').val(total);
}

function getMultiple(num1,num2) {
   /* let total=newNum[0];
    for (let i = 1; i < newNum.length; i++) {
        total=parseFloat(total)*parseFloat(newNum[i]);
    }
    console.log(total)
    $('#input').val(total);*/

    let total=0;
    total=parseFloat(num1)*parseFloat(num2);
    newNum.unshift(total)
    process.splice(0,1)
    newNum.splice(1,2)
    $('#input').val(total);
}

function getDivide(num1,num2) {
    /*let total=newNum[0];
    for (let i = 1; i < newNum.length; i++) {
        total=parseFloat(total)/parseFloat(newNum[i]);
    }
    console.log(total)
    $('#input').val(total);*/
    let total=0;
    total=parseFloat(num1)/parseFloat(num2);
    newNum.unshift(total)
    process.splice(0,1)
    newNum.splice(1,2)
    $('#input').val(total);
}

function getMinus(num1,num2) {
   /* let total=newNum[0];
    for (let i = 1; i < newNum.length; i++) {
        console.log(parseFloat(newNum[i]))
        console.log(parseFloat(total))
        total=parseFloat(total)-parseFloat(newNum[i]);
    }
    console.log(total)
    $('#input').val(total);*/
    let total=0;
    total=parseFloat(num1)-parseFloat(num2);
    newNum.unshift(total)
    process.splice(0,1)
    newNum.splice(1,2)
    $('#input').val(total);
}

$('#Eq').click(function () {
    let val1 = $('#input').val();
    newNum.push(val1)
    clearInput();

    for (let i = 0; i < process.length;(process.length==1?i=1:i) ) {
        for (let j = 0; j < newNum.length;(newNum.length==1?j=1:j) ) {
            if (process[i]=="+"){
                console.log(newNum[j]+" "+newNum[j+1]);
                getTotal(newNum[j],newNum[j+1]);
            }
            if (process[i]=="*"){
                getMultiple();
            }
            if (process[i]=="/"){
                getDivide();
            }
            if (process[i]=="-"){
                getMinus(newNum[j],newNum[j+1]);
            }
        }
    }
    $('#input').val(newNum[0]);
   newNum=[];
   process=[];
});