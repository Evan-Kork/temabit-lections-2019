import express from 'express'
import graphql from 'express-graphql'
import cors from 'cors'
import logger from 'morgan'
import mongoose from 'mongoose'
import session from 'express-session'
import passport from 'passport'

import passportMiddleware from '@/middleware/passport'
import keys from '@/config/keys'

// IMPORT ROUTES
import indexRouter from '@/routes/index'
import branchesRouter from '@/routes/branches'
import trackingRouter from '@/routes/tracking'
import localitiesRouter from '@/routes/localities'
import servicesRouter from '@/routes/services'

// IMPORT GRAPHQL
import schema from '@/schema'

const app = express()
const MongoStore = require('connect-mongodb-session')(session)

// MONGOOSE
mongoose.Promise = global.Promise
mongoose.connect(
    keys.MONGODB_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))


// STORE
const store = new MongoStore({
    collection: 'sessions',
    uri: keys.MONGODB_URI
})

// EXPRESS MIDDLEWARE
app.use(cors())
app.use(passport.initialize())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false,
    store
}))
app.use(logger('dev'))
passportMiddleware(passport)

app.use('/graphql', graphql({
    schema,
    graphiql: true
}))
// ROUTER
app.use('/api/', indexRouter)
app.use('/api/branches', branchesRouter)
app.use('/api/tracking', trackingRouter)
app.use('/api/localities', localitiesRouter)
app.use('/api/services', servicesRouter)

// LISTEN PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`App lisening o ${PORT}`)
})