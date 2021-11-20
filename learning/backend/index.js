const express = require('express')
const app = express()
const cors = require('cors')
const isEmpty = require('lodash.isempty')
app.use(cors())

app.use(express.json())

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2020-01-10T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2020-01-10T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2020-01-10T19:20:14.298Z",
      important: true
    },
    { id: 4,
      content: "testing to see if I have connected 3000 to 3001",
      date: "2020-01-10T19:22:14.298Z",
      important: true
    }
  ]
  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

  app.get('/api/notes', (req, res) => {
    res.json(notes)
  })
  
  app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => {
        console.log(note.id, typeof note.id, typeof id, note.id===id)
        return note.id === id
    })
    if (note) {
        res.json(note)
    }
    else res.status(404).end()
  })

  const generateId = () => {
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
    return maxId + 1
  }

  app.post('/api/notes', (req,res) => {

    const body = req.body
    console.log(body);
    if(isEmpty(body)){console.log('body is empty')}
    if(isEmpty(body)) {
      console.log('go it')
      return res.status(400).json({
        error: 'content missing'
      })
    }
    
    const note = {
      content:body.content,
      important: body.important || false,
      date: new Date(),
      id: generateId(),
    }

    notes = notes.concat(note)

    res.json(note)
  })

  app.post('/api/notes/:id', (req, res) => {
    const body = req.body
        if (!req.body) {
          return res.status(400).json({
            error: 'content missing'
          })
        }
        const note = {
          content:body.content,
          important: body.important,
          date: body.date,
          id: body.id,
        }
    
        notes = notes.filter(note => note.id !== body.id);
        notes = notes.concat(note);
        res.json(note)
      })

  app.delete('/api/notes/:id', (req,res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    res.status(204).send()
    })

// const port = 3001
// app.listen(port)
// console.log(`Server running on port ${port}`)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})