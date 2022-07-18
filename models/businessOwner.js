const mongoose = require('mongoose')

const BusinessOwnerSchema = new mongoose.Schema({
    name:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    },
    id_proof_url: {
        type: String
    },
    designation: {
        type: String
    },
    merchant_type: {
        enum: {
            values: ['Localbusiness,RegionalFranchise,Liquor Store']
        }
    }
})

module.exports = mongoose.model('BusinessOwner', BusinessOwnerSchema)