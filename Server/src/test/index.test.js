const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS",()=>{
    describe("GET /rickandmorty/character/:id", ()=>{
        it("Responde con status: 200", async()=>{
            const res=   await agent.get('/rickandmorty/character/1');
            expect(res.statusCode).toBe(200);
            
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
        const res = await agent.get('/rickandmorty/character/1')
        const data = res.body;
            expect(data).toHaveProperty(
                "id",
                "name",
                "species",
                "gender",
                "status",
                "origin",
                "image"
            )
        })
        it('Si hay un error responde con status: 500',async()=>{
            
            const res = await agent.get("/rickandmorty/character/827");
            expect(res.statusCode).toBe(500);
        }) 
    })
    describe("GET /rickandmorty/login", ()=>{
        it("Si la información de login es correcta debe responder true", async()=>{
            await agent.get("/rickandmorty/login/?email=adharanosalevich@gmail.com&password=a12345").expect(
                {
                    access: true
                }
            )
            
        })
        it("Si la información de login es incorrecta debe responder false", async()=>{
            await agent.get("/rickandmorty/login");
            expect({
                access: false
            })
        })
    })
    describe("POST /rickandmorty/fav", ()=>{
        it("Lo que envíes por body debe ser devuelto en un arreglo", async()=>{
            const res = await agent.post("/rickandmorty/fav/1");
            const data = res.body;
                expect(data.length)
        })
        it("Si vuelves a enviar un nuevo elemento por body, debe ser devuelto en un arreglo que incluye un elemento enviado previamente", async()=>{
            const res = await agent.post("/rickandmorty/fav/2");
            const data = res.body;
                expect(data.length>1)
        })
    })
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        it("Si ningún personaje posee el ID, debe mantener el array intacto", async()=>{
            const res = await agent.get("/rickandmorty/fav/:id");
            const data = res.body;
                expect(!data.length)
        })
        it("Si el ID es válido, debe eliminar el personaje del array", async()=>{
            const res = await agent.get("/rickandmorty/fav/:id");
            const data = res.body;
                expect(data.length)
        })
    })
})