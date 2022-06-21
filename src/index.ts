import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import {productsRouter} from "./routes/product-router";

const app = express()
const port = process.env.port || 5000
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
app.use('/products', productsRouter)


app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})