//var, let , const
//var -? global and function scoping
//let, const -> block level scope {}
//the above are the coding standards
 var week1 = "JavaScript"

 function playwright(){
    let num = 25
    if(week1=="JavaScript"){
        console.log("Inside the Function "+week1)        
        console.log("Inside the if "+num)
    }
     console.log("outside the if "+num)
 }

 playwright()
 console.log("Outside the Function "+week1)
  
