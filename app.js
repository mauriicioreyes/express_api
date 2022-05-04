// Usando objeto express
const express = require('express')

// App de express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON

// ESTO ES UN ENDPOINT
// routes
// Methods HTTP: GET, POST, PUT, DELETE
app.get('/v1/explorers', (req, res) => {
    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = { id: 1, name: "Explorer 1"}
    const explorer2 = { id: 2, name: "Explorer 2"}
    const explorers = [explorer1, explorer2]
    // HTTP CODE STATUS: 200
    res.status(200).json(explorers)
})

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})