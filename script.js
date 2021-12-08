let celInp = document.querySelector("#celTemp");
let farhInp = document.querySelector("#farTemp");

celInp.addEventListener("input",function(){
        let celVal = this.value;
        let farhVal = ((celVal * 9/5)+32);
        if(!Number.isInteger(farhVal)){
                farhVal = farhVal.toFixed(4);
        }
        farhInp.value = farhVal;
});
    farhInp.addEventListener("input",function(){
        let farhVal = this.value;
        let celVal = ((farhVal-32) * 5/9); 
        if(!Number.isInteger(celVal)){
                celVal = celVal.toFixed(4);
        }
        celInp.value = celVal;
});