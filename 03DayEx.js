const mysym = Symbol("value1");

 

const user = {

    name:"Joe",

    "fullname":"JoeBiden",

    dept:"TopManagement",

    location:"US",

    email:"joe@gmail.com",

    "hobby":"travelling",

    [mysym]:"Declared Symbol"
  
    
}
user.email = "biden@rediffmail.com"
console.log(user);
Object.freeze(user)

function.giveMyName(){
    console.log("Ashok")
}
giveMyName();