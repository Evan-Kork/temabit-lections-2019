import express from 'express'
import cors from 'cors'
import logger from 'morgan'

// IMPORT ROUTES
import indexRouter from '@/routes/index'
import branchesRouter from '@/routes/branches'
import trackingRouter from '@/routes/tracking'
import localitiesRouter from '@/routes/localities'
import servicesRouter from '@/routes/services'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

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