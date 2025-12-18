function orderFood(callback){
    console.log("Food Order")
    //Food Preparation Time
    setTimeout(()=>{
        FoodReady(callback)
    },4000)
}

function FoodReady(callback){
    console.log("Food Ready")
    setTimeout(()=>{
        eatFood(callback)
    },4000)
}

function eatFood(){
    console.log("Eat Order")
}

orderFood()