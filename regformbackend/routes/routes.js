const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const registrationTemplateCopy = require('../models/RegistrationModels')

router.post('/registrationform', (request, response) => {
    const registeredUser = new registrationTemplateCopy({
        lastName:request.body.lastName,
        firstName:request.body.firstName,
        email:request.body.email,
        dob:request.body.dob,
        phoneNumber:request.body.phoneNumber,
        gender:request.body.gender,
        address:request.body.address,
        city:request.body.city,
        state:request.body.state,
        course:request.body.course
    })

    registeredUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)

    })
})

module.exports = router