const express =require("express");
const app = express();
const PORT =8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// we can create a function to return a random / fake "Product"
// const { faker } = require('@faker-js/faker');
// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };
    
// const newFakeProduct = createProduct();
// console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
//function create new  fake user
const { faker } = require('@faker-js/faker');
const createNewUser = () => {
    const newFake = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password(),
        _id: faker.string.uuid()
    };
    return newFake;
};
    
const newFakePerson = createNewUser();
console.log(newFakePerson);

// function create new fake company
const createNewCompany = () => {
    const newFakeC = {
        CompanyName: faker.company.name(),
        adress:{
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        codeZip: faker.location.countryCode()
        },
        id: faker.string.uuid()
    };
    return newFakeC;
};
    
const newFakeCompany = createNewCompany();
console.log(newFakeCompany);

// get request to display the new user
app.get("/api/users/new", (req, res)=>{
    const newuser= createNewUser();
    res.json(newuser)});
// get request to display a new company
app.get("/api/company/new",(req,res) => {
    const newcompany= createNewCompany();
    res.json(newcompany);
});
// get request to display new user and new company togother  we need to create an object usercompany beacause response accept only json file "user":{}, "company":{}

app.get("/api/user/company/new", (req,res) =>{
    const user= createNewUser();
    const company= createNewCompany();
    const usercompany={
        user: user,
        company: company
    };
    res.json(usercompany);
});




app.listen(PORT, ()=> console.log(`server start runing on PORT ${PORT}`))