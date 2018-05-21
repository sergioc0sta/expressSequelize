const server = require('./api/server')
require('./api/config/database')
const router = require('./api/routes/routes')
const routerPages = require('./api/routes/freeRoute')
server.use('/', routerPages)
server.use('/api', router)
