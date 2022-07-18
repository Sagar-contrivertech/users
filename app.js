const express = require("express");
const app = express();
const morgan = require('morgan')
const config = require("./config/config");
require('./database/db')

app.use(express.json());
app.use(morgan('dev'))
port = config.port || 80


const userRoutes = require('./routes/userRoutes')
const cosumerRoutes = require('./routes/cosumerRoutes')
const agentRoutes = require('./routes/agentRoutes')
const authRoutes = require('./routes/Auth')

app.use('/api/v1',userRoutes)
app.use('/api/v1',cosumerRoutes)
app.use('/api/v1',agentRoutes)
app.use('/api/v1',authRoutes)

app.listen(port, () => {
    console.table([
        {
            port: `${port}`
        }
    ])
}); 
