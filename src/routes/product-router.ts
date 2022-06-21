import {Router, Request, Response, NextFunction} from "express";
import {productsRepository} from "../repositories/products-repository";

export const productsRouter = Router({})

const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const title = req.body.title.trim()
    if(title !== '' && title.length > 3) {
        return next();
    }
    res.send(400)
}

productsRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepository.findProducts(req.query.title?.toString())
    res.send(foundProducts)
})
productsRouter.get('/:id', (req: Request, res: Response) => {
    const product = productsRepository.findProductById(+req.params.id)
    if(product) {
        res.send(product)
    } else {
        res.send(404)
    }
})




productsRouter.post('/',
    testMiddleware,

    (req: Request, res: Response) => {
    productsRepository.createProduct(req.body.title)
    res.send(201)
})

productsRouter.put('/:id',
    testMiddleware,

    (req: Request, res: Response) => {
    const isUpdate = productsRepository.updateProduct(+req.params.id, req.body.title)
    if(isUpdate) {
        const product = productsRepository.findProductById(+req.params.id)
        res.send(product)
    } else {
        res.send(404)
    }

})



productsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = productsRepository.deleteProduct(+req.params.id)
    if(isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
})