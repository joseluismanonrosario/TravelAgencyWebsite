import express from "express"
import path from 'path'
import { fileURLToPath } from "url"
import indexRoutes from './routes/index.routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoutes)


export default app