
const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

/**
 * @desc get All users data
 * @name GET /api/v1/user/
 * @access public
 */

const getAllUser = (req, res) =>{
    //get all users
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/user.json')));
    
    //send data 
    res.status(200).json(users);
}

/**
 * @desc create User Data
 * @name POST /api/v1/user/
 * @access public
 */

const createUser = (req, res) =>{
    //get all users
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/user.json')));

    //get body data
    const { name, skill} = req.body;

    //validation
    if (!name || !skill) {
        res.status(400).json({
            message : "Name and Skill are required"
        });
    } else {
        users.push({
            id : Math.floor(Math.random() * 1000000000).toString(),
            name : name,
            skill : skill
        });

        //get data
        writeFileSync(path.join(__dirname, '../db/user.json'), JSON.stringify(users));
        res.status(200).json({
            message : "Account Created"
        });
    }
}

//exports controllers
module.exports = {
    getAllUser,
    createUser
}