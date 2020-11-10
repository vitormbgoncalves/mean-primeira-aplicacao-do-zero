const lodash = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

// Mais uma função middleware
module.exports.getSummary = async(req, res) => {
  await BillingCycle.aggregate([{
    $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
  }, {
    $group: {_id: null, credit: {$sum:"$credit"}, debt: {$sum: "$debt"} }
  }, {
    $project: {_id: 0, credit: 1, debt: 1}
  }], async (error, result) =>{
    try {
      res.json(lodash.defaults(result[0], {credit: 0, debt: 0}))
    } catch (error) {
      await res.status(500).json({errors: [error]})
    }
  })
}
