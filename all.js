// problem-1
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


// problem-2
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





// problem-3
// function declaration 
function deliveryCost(Quantity){
    
    // erro checking
    if((typeof Quantity !='number')|| (Quantity < 0)){
        return 'ERROR:Your input is invalid.Please give any positive Number.';
    }
    else if(Quantity <= 100){
        let deliveryCharge = Quantity*100;
        return deliveryCharge;
    }
    else if(Quantity <= 200){
        let first100DeliveryCharge = 100*100;
        let reastShirtQuantity = Quantity -100;
        let restDeleveyCharge = reastShirtQuantity * 80;
        let deliveryCharge = first100DeliveryCharge + restDeleveyCharge;
        return deliveryCharge;
    }
    else{
        let first100DeliveryCharge = 100*100;
        let second100DeliveryCharge = 100*80;
        let reastShirtQuantity = Quantity -200;
        let reastDeleveyCharge = reastShirtQuantity * 50;
        let deliveryCharge = first100DeliveryCharge + second100DeliveryCharge+ reastDeleveyCharge;

        return deliveryCharge;

    }
}
// function call 
let totalCharge = deliveryCost(300);

console.log(totalCharge);


// problem-4
// Array 
var friends = ['Jorina','Sokina','Nawrin','Afra','Turna','Sultana','Babyana','Afiaa'];
// function declaration 
function perfectFriend(buddys){
    if((typeof buddys == 'number') || typeof buddys == 'string'){
        return ' ERROR:Your input is invalid,Please give any valid input.';
    }
    else{
        var friendName ;
        // loop
        for(let element of buddys){
            if(element.length == 5){
                friendName = element;
                return friendName;
            }
        }

    }

}

// function call 
var perfectFriendName = perfectFriend(friends);
console.log(perfectFriendName);
