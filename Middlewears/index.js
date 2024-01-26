const {check , validationResult, ExpressValidator } = require("express-validator")
exports.validateForm = [
  check("name").notEmpty().withMessage("Please Enter Name"),
check("PNo").isMobilePhone().withMessage("Please Enter valid Phone number"),
check("email").isEmail().withMessage("Please Enter valid email"),

]
exports.isvalidated = (res,req,next)=>{
  const errors = validationResult(req)
  if(errors.isEmpty()){
    next()

  }
  else{
    res.status(400).json({message:errors.array()[0]})
  }
}