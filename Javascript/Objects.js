const MySym=Symbol("First")
const ObjectName ={
    name : "Atharva ",
    [MySym] :'First',
    age : 18 ,
    Location : "Pune",
    LastLoggedIn :  ["Sunday" , "Tuesday" ] 
   
    
}

console.log(ObjectName["name"])
console.log(ObjectName["Location"]);
console.log(ObjectName["LastLoggedIn"]);
console.log(ObjectName["age"]);
console.log(ObjectName[MySym]);


ObjectName.name = "AthaShree"
// Object.freeze(ObjectName)
ObjectName.name= "Dhanashree"
console.log(ObjectName);

ObjectName.Greeting = function(){
    console.log("Hello")
}
console.log(ObjectName.Greeting());

ObjectName.Greeting2 = function(){
    console.log(`Help ${this.name}`)
}
console.log(ObjectName.Greeting2());


