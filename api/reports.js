const fs = require('fs')
const path = require('path')
const dbPath = path.join(__dirname, '..', 'db.json')

module.exports = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const raw = fs.readFileSync(dbPath)
      const db = JSON.parse(raw)
      res.setHeader('Content-Type','application/json')
      return res.end(JSON.stringify(db.reports || []))
    }
    if (req.method === 'POST') {
      let body = ''
      req.on('data', chunk => body += chunk)
      req.on('end', () => {
        const obj = JSON.parse(body)
        const raw = fs.readFileSync(dbPath)
        const db = JSON.parse(raw)
        db.reports = db.reports || []
        db.reports.push(obj)
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
        res.statusCode = 201
        return res.end('ok')
      })
      return
    }
    res.statusCode = 405
    res.end('Method Not Allowed')
  } catch (err) {
    console.error(err)
    res.statusCode = 500
    res.end('Server error: '+err.message)
  }
}
