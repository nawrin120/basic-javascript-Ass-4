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