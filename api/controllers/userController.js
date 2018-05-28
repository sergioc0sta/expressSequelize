const config = require('../config/database'),
    sequelize = require('sequelize'),
	Post = require('../models/userModel')

const getAllUsers = (req, res) => {
	Post.findAll(
        {}
    ).then((result)=>{
		res.send(result)
	}, (err) =>{
		if(err)
        {
            res.send({success: false})
        }
	})
}

const findOneUser = (req, res) =>{
	var id = req.body.id
	Post.findOne({
		where: {
			id: id
		}
	}).then((result)=>{
		res.send(result)
	}, (err)=>{
        if(err)
        {
            res.send({success: false})
        }
	})
}


const updateUser = (req, res) => {
    const id = req.params.id
    const updateValues = req.body
	Post.find({
		where: {
			id: id
		}
	}).then((own)=>{
        return own.updateAttributes(updateValues)
	}, (err)=>{
        if(err)
        {
            res.send({'success': false})
        }
	}).then((result)=>{
        res.json(result)
    })
}

const deleteUser = (req, res) => {
    var id = req.body.id
	Post.destroy({
		where: {
			id: id
		}
	}).then((result)=>{
		res.send({success: true})
	}, (err)=>{
        if(err)
        {
            res.send({'success': false})
        }
	})
}
const newUser = (req, res) => {
	const firstName = req.body.firstName,
    secondName = req.body.secondName
	Post.sync()
		.then(() =>{
			return 	Post.create({
				firstName: firstName,
				secondName: secondName
			})
		})
		.then((data) =>{
			res.send({
				success: true
			})
		}, (err)=>{
            if(err)
            {
                res.send({success: false})
            }
        })
}

exports.userController = {
	getAllUsers,
	findOneUser,
    newUser,
    deleteUser,
    updateUser
};