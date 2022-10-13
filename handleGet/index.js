const dynamoose = require('dynamoose');


const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: Number,
  hasPets: Boolean,
});

const peopleModel = dynamoose.model("peopleInfoTable-01",peopleSchema);
exports.handler = async (event) => {
    // TODO implement
    console.log('gfgfdgfgfgdgdf-----------', event.queryStringParameters)  
let response = {statusCode:null, body:null};
  try {
    let peopleRecords = await peopleModel.scan().exec();
    response.statusCode=200;
    response.body=JSON.stringify(peopleRecords);
  }catch(e){
    console.log(e);
    response.statusCode=500;
    response.body=JSON.stringify(e.message);
  }
  return response;
};
