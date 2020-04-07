import express from 'express'
import session from 'express-session'
import { ApolloServer } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
// IMPORT ROUTES
import indexRouter from '@/routes/index'
import branchesRouter from '@/routes/branches'
import trackingRouter from '@/routes/tracking'
import localitiesRouter from '@/routes/localities'
import servicesRouter from '@/routes/services'
import authRouter from '@/routes/auth'
import authentication from '@/middleware/authentication'
// IMPORT GRAPHQL
import { typeDefs, resolvers } from '@/schema'

import keys from '@/config/keys'

const app = express()

const MongoStore = require("connect-mongodb-session")(session)
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})
// MONGOOSE
mongoose.Promise = global.Promise
mongoose.connect(
    keys.MONGODB_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))

const SessionStore = new MongoStore({
    collection: 'sessions',
    uri: keys.MONGODB_URI
})

const graphql = new ApolloServer({
    schema,
    context: ({ req }) => authentication(req.headers.authorization)
})

app.use(cors({ credentials: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(bodyParser())
app.use(session({
    name: 'sessionId',
    secret: 'Some secret key',
    resave: false,
    saveUninitialized: false,
    store: SessionStore
}))
graphql.applyMiddleware({ app, cors: false })
// ROUTER
app.use('/api/', indexRouter)
app.use('/api/authorization', authRouter)
app.use('/api/branches', branchesRouter)
app.use('/api/tracking', trackingRouter)
app.use('/api/localities', localitiesRouter)
app.use('/api/services', servicesRouter)
// LISTEN PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`)
})