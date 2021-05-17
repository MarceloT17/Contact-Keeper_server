const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({msg: 'welcome to the contact keepr api'}))

//define routes, ele colocou api na frente porque ele quis mesmo
app.use('./api/users', require('./routes/users'))
app.use('./api/auth', require('./routes/auth'))
app.use('./api/contacts', require('./routes/contacts'))

//process.env é pra produção, o 5000 pra development
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
