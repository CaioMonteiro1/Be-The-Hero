const crypto = require("crypto");
const Ongcontroller = require("../controllers/Ongscontroller");
const connection = require("../database/connection");

module.exports = {
    async index(request, response) {
        const ongs = await connection("ongs").select("*");
    
        return response.json(ongs);
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; /*data*/

        const id = crypto.randomBytes(4).toString('HEX');

        await connection("ongs").insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
    })
    

//      console.log(params);
//      console.log(body);
//      console.log(data);

return response.json({ id
    /* evento:"Semana OmniStack 11.0",
     aluno: "Caio Oliveira Monteiro" */
 });
    }
}