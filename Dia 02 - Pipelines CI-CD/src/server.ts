/** source/server.ts */
import express, { type Express } from 'express'
import http from 'http'
import morgan from 'morgan'
import pkgInfo from './pkgInfo.json'
import routes from './routes/posts'

const router: Express = express()

/** Logging */
router.use(morgan('dev'))
/** Parse the request */
router.use(express.urlencoded({ extended: false }))
/** Takes care of JSON data */
router.use(express.json())

/** RULES OF OUR API */
router.use((req, res, next) => {
  // set the CORS policy
  res.header('Access-Control-Allow-Origin', '*')
  // set the CORS headers
  res.header(
    'Access-Control-Allow-Headers',
    'origin, X-Requested-With,Content-Type,Accept, Authorization'
  )
  // set the CORS method headers
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST')
    return res.status(200).json({})
  }
  next()
})

/** Routes */
router.use('/', routes)

/** Version */
router.get('/version', (req, res) => {
  res.send(`<h1>${pkgInfo.version}</h1>`)
})

/** Error handling */
router.use((req, res, next) => {
  const error = new Error('not found')
  return res.status(404).json({
    message: error.message
  })
})

/** Server */
const httpServer = http.createServer(router)
const PORT: any = process.env.PORT ?? 6060
httpServer.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})
