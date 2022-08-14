const express = require('express')
const router = new express.Router()

const User = require('../model/user/user.model')

router.post('/registration', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    }catch (error) {
        res.status(400).send(error.message)
    }
})