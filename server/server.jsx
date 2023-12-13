const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const app = express()

const PORT = config.get('serverPort')

app.get('/api/beverages', async (req, res) => {
    try {
      const beverages = await Beverage.find();
      res.json(beverages);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
//   app.get('/api/hookahs', async (req, res) => {
//     try {
//       const hookahs = await Hookah.find();
//       res.json(hookahs);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
  app.post('/api/beverages', async (req, res) => {
    try {
      const newBeverage = await Beverage.create(req.body);
      res.json(newBeverage);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
//   app.post('/api/hookahs', async (req, res) => {
//     try {
//       const newHookah = await Hookah.create(req.body);
//       res.json(newHookah);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

const start = async () =>{
    try {
        await mongoose.connect(config.get("dbUrl"), {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        });
    
        app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
      } catch (e) {
        console.error('Error starting server:', e);
      }
}

start()