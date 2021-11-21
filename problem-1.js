// function declaration
function seerToMon(Quantity){
    // error checking
    if((Quantity<0) || (typeof Quantity != 'number')){
        return 'ERROR:Your input is not valid.Please enter any positive number.';
    }
    else{
        let seer = 40;
        let Mon = Quantity/seer;
        return Mon;
    }

}
// function call 
let Mon = seerToMon(120);

console.log(Mon);