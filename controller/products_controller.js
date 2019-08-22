const create = (req,res) => {
    const {name, description, price, image_url} = req.body
    const db = req.app.get('db') 
    db.create_product([name, description, price, image_url]).then(()=>{
        res.status(200).send('Created Product')
    })


.catch(err => {res.status(500).send('Something went wrong') 
console.log(err)})
}

const getOne = (req,res) => {
    const {id} = req.params
    const db = req.app.ger('db') 
    db.read_product(id).then(product => res.status(200).send(product))

    .catch(err => {res.status(500).send('Something went wrong') 
console.log(err)})
}
const getAll = (req, res) => {
    const db = req.app.get('db')
    db.read_products().then((products) => {
    res.status(200).send(products)
    })
    .catch(err => {res.status(500).send('Something went wrong') 
console.log(err)})
    }

const update = (req,res) => {
    
    const {parms,query} = req
    const db = req.app.get('db')
    db.update_product([parmas.id,query.desc]).then( () =>{
        res.status(200).send(`Updated ${id}`)
    })

.catch(err => {res.status(500).send('Something went wrong') 
console.log(err)})
}

const deleteProduct = (req,res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.delete_product(id).then(()=>{
        res.status(200).send(`Deleted ${id}`)
    })

.catch(err => {res.status(500).send('Something went wrong') 
console.log(err)})
}

module.exports = {

    create,
    getOne,
    getAll,
    update,
    deleteProduct
}