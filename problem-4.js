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
