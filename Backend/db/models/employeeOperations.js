const connection = require('../connection');
const Schema = connection.Schema;
const RegisterSchema = new Schema({
  name:String,password:String,phoneNo:Number,role:String,emailId:String,assignedBy:[{issue:String,ReportTo:String,Severity:String,TimeAlloted:Number,img: { image: Buffer, contentType: String ,default:0},AllotedOn:Date,Status:{type:String,default:'not resolved'},Description:{type:String}}],assigned:{type:Number,default:0},
})
const Register = connection.model('RegisterEmployee',RegisterSchema);
module.exports = Register;