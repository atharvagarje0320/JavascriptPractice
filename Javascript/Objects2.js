const SnapChat ={
    Emailid : "atharvagarje@gmail.com",
    name : {
        UserFullName :{
            FirstName : "Atharva ",
            LastName : " Garje"
        }

    }
}
console.log(SnapChat.name.UserFullName.FirstName);


const object1 ={
    1: "Atharva",
    2: "Akshay"
}

const object2 ={
    3 : "Anil",
    4 : "Varsha"
}
object3 = {object1 , object2}
console.log(object3);


const obj3 =Object.assign(object1 , object2);
console.log(obj3);

const obj4 =Object.assign({} ,object1 , object2);
console.log(obj4);

const obj5 ={...object1 , ...object2}
console.log(obj5);



let Data = [
    {
        name : 'Atharva',
        Email : 'atharva@gmail.com',
    },


    {
        name : 'Anil',
        Email : 'atharva@gmail.com',
    },

    {
        name : 'Varsha ',
        Email : 'atharva@gmail.com',
    },

    {
        name : 'Akshay ',
        Email : 'atharva@gmail.com',
    },

    {
        name : 'Dhanashree',
        Email : 'atharva@gmail.com',
    
    }
]
// (Data[3].name)
const DataUser = 
{
    name  : "atharva",
    RollNo: 14,
    age : 19
}
console.log(Object.values(DataUser));
console.log(Object.keys(DataUser));
console.log(Object.entries(DataUser));

console.log(SnapChat.hasOwnProperty("UserFullName"));




