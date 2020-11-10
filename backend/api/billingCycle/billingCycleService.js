const BillingCycle = require('./billingCycle')
const lodash = require('lodash')
const { result } = require('lodash')


BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

async function sendErrorsOrNext(req, res, next) {
  const bundle = await res.locals.bundle
  try {
    if(bundle.errors) {
      throw new error
    } else {
      next() 
    }
  } catch(error) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  }
}

const parseErrors = (nodeRestfulErrors) => {
  const errors = []
  lodash.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.countDocuments( async (error, value) => {
    try {
       await res.json({value})
    } catch (error) {
      res.status(500).json({errors: [error]})
    }  
  })
})

module.exports = BillingCycle