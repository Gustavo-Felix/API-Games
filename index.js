const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

const DB = {
    games: [
        {
            id: 28,
            title: "Call of Duty BO6",
            year: 2024,
            price: 300
        },
        {
            id: 35,
            title: "Monster Hunter IB",
            year: 2022,
            price: 180
        },
        {
            id: 12,
            title: "Counter Strike 2",
            year: 2022,
            price: 0
        }
    ]
}

app.get('/games', (req, res) => {
    res.statusCode = 200
    res.json(DB.games)
})

app.get('/games/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        var correctGame = DB.games.find(g => g.id == id)

        if(!correctGame) {
            res.sendStatus(404)
        }
        res.statusCode = 200
        res.send(correctGame)
    }
    
})

app.listen(50000, () => {
    console.log("API está rodando!")
})