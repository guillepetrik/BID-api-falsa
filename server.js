const express = require("express");
const app = express();
const port = 8000;

const {faker} = require ('@faker-js/faker');

const users = [];
const empresas = [];

class Usuario {
    constructor (){
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.number = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.random.alphaNumeric(8);
    }
}
class Empresa {
    constructor (street, city, state, post, country){
        this.name = faker.company.name();
        this.direccion = [
            street = faker.address.street(),
            city = faker.address.city(),
            state = faker.address.state(),
            post = faker.address.zipCode(),
            country = faker.address.country()
        ];
    }
}

app.get("/api/users/new", (req, res)=>{
    const user = new Usuario();
    users.push(user);
    res.json( users );
});

app.get("/api/companies/new", (req, res)=>{
    const empresa = new Empresa();
    empresas.push(empresa);
    res.json(  empresas );
});

app.get("/api/user/company", (req, res)=>{
    const user = new Usuario();
    const empresa = new Empresa();
    users.push(user);
    empresas.push(empresa);
    res.json(  [users, empresas] );
});





app.listen( port, () => console.log(`listening on port ${port}`));