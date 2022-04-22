function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = input[2];

    let result = 0;
    let evenOdd;

    

    if (op === "+") {
        result = n1 + n2;
        if (result % 2 === 0) {
            evenOdd = "even"
        } else {
            evenOdd = "odd"
        }
        console.log(`${n1} ${op} ${n2} = ${result} - ${evenOdd}`);
    } else if (op === "-") {
        result = n1 - n2;
        if (result % 2 === 0) {
            evenOdd = "even"
        } else {
            evenOdd = "odd"
        }
        console.log(`${n1} ${op} ${n2} = ${result} - ${evenOdd}`);
    }else if(op === "*"){
        result = n1 * n2;
        if (result % 2 === 0) {
            evenOdd = "even"
        } else {
            evenOdd = "odd"
        }
        console.log(`${n1} ${op} ${n2} = ${result} - ${evenOdd}`);
    }else if(op === "/" && n2 !== 0){
        result = (n1 / n2).toFixed(2)
        console.log(`${n1} / ${n2} = ${result}`);
    }else if(op === "%" && n2 !== 0){
        result = n1 % n2
        console.log(`${n1} % ${n2} = ${result}`);
    }

   if(n2 === 0 ){
       console.log(`Cannot divide ${n1} by zero`);
   }
    


}
operationsBetweenNumbers(["10",
"0",
"%"])