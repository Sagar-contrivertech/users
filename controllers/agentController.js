const agent = require('../models/agent')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

exports.addagent = catchAsyncErrors(async (req, res, next) => {
    try {

        const checkData = await agent.findOne({ agent_id: req.body.agent_id })
        if (checkData) {
            res.status(201).json({
                success: true,
                message: "agent already exist",
            })
            return
        }
        const data = req.body
        const createagent = await agent.create(data)
        // console.log(createagent)
        if (!createagent) {
            res.status(400).json({
                success: false,
                message: 'cannot create user',
            })
            return
        }
        if (createagent) {
            await createagent.save()
            res.status(200).json({
                success: true,
                message: "user register succesfully",
                data: createagent,
            });
            return
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error !",
            error
        });
    }
})

exports.getAgent = catchAsyncErrors(async (req, res) => {
    try {
        const findusers = await agent.find()

        if (!findusers) {
            res.status(400).json({
                success: false,
                message: "getAgent failled in try",
            });
        }

        if (findusers) {
            res.status(200).json({
                success: true,
                message: "getAgent Succesfully",
                data : findusers
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "getAgent failled in catch",
        });
    }
})

exports.getAgentById = catchAsyncErrors(async (req, res) => {
    try {
        const findusers = await agent.findById(req.params.id)
        console.log(findusers)
        if (!findusers) {
            res.status(400).json({
                success: false,
                message: "getAgentById failled in try",
            });
        }

        if (findusers) {
            res.status(200).json({
                success: true,
                message: "getAgentById Succesfully",
                data : findusers
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "getAgentById failled in catch",
        });
    }
})