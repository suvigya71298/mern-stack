const mongoose=require('mongoose');

const mongoURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

connectToMongo = () =>{
   mongoose.connect(mongoURI, () =>{
       console.log("COnnection Success");
   })
}

module.exports=connectToMongo;