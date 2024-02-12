import Express from "express";
import Product from "../src/db/models/product";
const App = Express();

App.use(Express.json());

// Define route to handle GET request for all products
App.get('', async (req, res) => {
  try{
    res.send(await Product.findAll())
  }catch(err){
    console.error(err);
    res.status(500).send("Unexpected error occurred on server!");
  }
})

const port =  3000;
App.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
