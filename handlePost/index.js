const dynamoose = require('dynamoose');
const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: Number,
  hasPets: Boolean,
});
const peopleModel = dynamoose.model("peopleInfoTable-01",peopleSchema);



exports.handler = async (event) => {
console.log("-----Event body------",event.body);

let {id,name,age,hasPets} = event.queryStringParameters;
let person = {id,name,age,hasPets};
console.log('====----------=====',person);
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from handlePeoplePost'),
    };
    return response;
};

