const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const dbPath = path.join(__dirname, '..', 'db.json')
app.use(bodyParser.json())

app.get('/api/reports', (req,res)=>{
  const raw = fs.readFileSync(dbPath)
  const db = JSON.parse(raw)
  res.json(db.reports || [])
})

app.post('/api/reports', (req,res)=>{
  const db = JSON.parse(fs.readFileSync(dbPath))
  db.reports = db.reports || []
  db.reports.push(req.body)
  fs.writeFileSync(dbPath, JSON.stringify(db,null,2))
  res.status(201).send('ok')
})

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log('Local API listening on', port))
