function greetFarmer(){

    console.log("hello, welcome to young4chick platform")
}

greetFarmer();

function submitRequest(){

    console.log("Your chick request has been submitted")
    alert("Your chick request has been submitted")
}

// submitRequest();

function calculateTotalCost(quantity, pricePerChick){
    return quantity*pricePerChick
}

calculateTotalCost(100, 1000);
calculateTotalCost(70, 3984);
calculateTotalCost(30, 1234);

console.log(calculateTotalCost(100,1000), calculateTotalCost(34, 2344), calculateTotalCost(30,1650));


function greetFarmers(farmer){
    console.log("hello" + " " + farmer + " " + " welcome to young4chick platform");

}

greetFarmers("Sanyu");
greetFarmers("Jaques");
greetFarmers("johnson");


let  greetFarmers=(farmer)=>console.log("hello" + " " + farmer + " " + " welcome to young4chick platform");//written as an arrow function



function processTheMoney(callback){
    callback()
}
processTheMoney(function(){
    console.log("colleagues money is coming")
});








//why are functions treated as first class citizens








//just checking why return is most important to use 
function getApprovalStatus(requestedChicks){
    if(requestedChicks <=500){
        return "Approved";

    }else {
        return "Rejected";
    }
}

let status = getApprovalStatus(300);
console.log("Request status:" + status); //or you can ignore the variable status and just call the function directly in the console log