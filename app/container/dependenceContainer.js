const { asClass, asValue, createContainer} = require('awilix-express')

const userController = require('../src/controllers/users.controllers')
const UserSignUpSchema = require('../src/Domain/signUp.domain')

const container = createContainer.re