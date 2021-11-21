// function declaration 
function totalSales(shirtQuantity,pantQuantity,shoeQuantity){
    // variable declaration 
    let shirtPrice = 100;
    let pantPrice = 200;
    let shoePrice = 500;
    
    // error checking
    if((shirtQuantity<0)||(pantQuantity<0)||(shoeQuantity<0)||(typeof shirtQuantity != 'number')||(typeof pantQuantity != 'number')||(typeof shoeQuantity != 'number')){
        return 'ERROR:Your input is invalid.Please submit any positive number.'
    }
 
    else {
        let ShirtDeliveryCost = shirtPrice*shirtQuantity;
        let PantDeliveryCost = pantPrice*pantQuantity;
        let ShoeDeliveryCost = shoePrice*shoeQuantity;
    
        let TotalCost = ShirtDeliveryCost + PantDeliveryCost + ShoeDeliveryCost;
    
        return TotalCost;
    }
}
// function call 
let TotalAmount = totalSales(1,5,2);

console.log(TotalAmount);

