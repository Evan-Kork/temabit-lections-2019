import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import mongoose from 'mongoose'
import session from 'express-session'
import { ApolloServer } from 'apollo-server-express'
import passport from 'passport'
import { GraphQLLocalStrategy, buildContext } from 'graphql-passport'

import passwordMiddleware from '@/middleware/passport'
import keys from '@/config/keys'

// IMPORT ROUTES
import indexRouter from '@/routes/index'
import branchesRouter from '@/routes/branches'
import trackingRouter from '@/routes/tracking'
import localitiesRouter from '@/routes/localities'
import servicesRouter from '@/routes/services'

import { model } from 'mongoose'
import '@/models/auth/user'
const User = model('User')

passport.use(
    //@ts-ignore
    new GraphQLLocalStrategy((email, password, done) => {
        console.log('test')
        const matchingUser = User.find(user => email === user.email && password === user.password);
        const error = matchingUser ? null : new Error('no matching user');
        done(null, { id: 1, name: 'test', passport: 'test' });
    }),
)

passport.serializeUser((user: any, done) => {
    console.log(user)
    done(null, user.id);
})

// IMPORT GRAPHQL
import { typeDefs, resolvers } from '@/schema'

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
).then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))


// STORE
const store = new MongoStore({
    collection: 'sessions',
    uri: keys.MONGODB_URI
})

// EXPRESS MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false,
    store
}))
app.use(logger('dev'))
app.use(passport.initialize())
app.use(passport.session())

// ROUTER
app.use('/api/', indexRouter)
app.use('/api/branches', branchesRouter)
app.use('/api/tracking', trackingRouter)
app.use('/api/localities', localitiesRouter)
app.use('/api/services', servicesRouter)

// LISTEN PORT
const PORT = process.env.PORT || 5000

const graphql = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => buildContext({ req, res })
})
graphql.applyMiddleware({ app })

app.listen(PORT, () => {
    console.log(`listening of server port ${PORT}`)
})