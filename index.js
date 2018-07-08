const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
let plugs = require('./variables')
const app = express()

const Op = Sequelize.Op
const sequelize = new Sequelize(plugs.tableName, plugs.dialect, plugs.pw,{
   host: plugs.localhost,
   port: plugs.port,
   dialect: plugs.dialect,
   $and : Op.and,
   $or: Op.or,
   $eq: Op.eq,
   $like: Op.like
})


app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
//routes





const Orm = sequelize.define("orm",
   {
     id: {
           type: Sequelize.INTEGER,
           autoIncrement: true,
           primaryKey: true
       },
      firstname: Sequelize.STRING,
      lastname: Sequelize.STRING,
   }
)

sequelize.sync()

//
class makeTable{
  constructor(fname, lname){
    fname = this.fname
    lname = this.lname
  }

initialize(){
  Orm.create({
  firstname: this.fname,
  lastname: this.lname,

  })
}
 findById(number){

   let done = Orm.findById(number)

     return done
   }


  getAll(){

    Orm.findAll()
    }

}







app.listen(3000, ()=>
console.log("okay works")
)
