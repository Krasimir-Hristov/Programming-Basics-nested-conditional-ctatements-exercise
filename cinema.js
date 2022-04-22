function cinema(input){
  
    let name = input.shift();
    let row = Number(input.shift());
    let colons = Number(input.shift());

    let income = 0;

    if(name === "Premiere"){
        income = row * colons * 12;
    }else if(name === "Normal"){
        income = row * colons * 7.5;
    }else if(name === "Discount"){
        income = row * colons * 5;
    }
    
    console.log(`${income.toFixed(2)} leva`);

}
cinema(["Premiere",
"10",
"12"])