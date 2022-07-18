const admin = require('../models/admin')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.addAdmin = catchAsyncErrors(async (req, res) => {
    try {
        const data = req.body

        const createAdmin = await admin.create(data)
        if (!createAdmin) {
            res.status(400).json({
                success: false,
                message: "cannot create the user",
            });
            return
        }
        if (createAdmin) {
            await createAdmin.save()
            res.status(200).json({
                success: true,
                message: "cosumer created sucessfulyy",
                data: createAdmin
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

exports.getAdmin = catchAsyncErrors(async (req, res) => {
    try {
        const findusers = await admin.find().populate("name")

        if (!findusers) {
            res.status(400).json({
                success: false,
                message: "getAdmin failled in try",
            });
        }

        if (findusers) {


            res.status(200).json({
                success: true,
                message: "getAdmin Succesfully",
                data : findusers
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "getAdmin failled in catch",
        });
    }
})

exports.getAdminById = catchAsyncErrors(async (req, res) => {
    try {
        const findusers = await admin.findById(req.params.id).populate("name")

        if (!findusers) {
            res.status(400).json({
                success: false,
                message: "getAdminById failled in try",
            });
        }

        if (findusers) {
            res.status(200).json({
                success: true,
                message: "getAdminById Succesfully",
                data : findusers
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "getAdminById failled in catch",
        });
    }
})