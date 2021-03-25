const express = require('express')
const route = express.Router()
const controller = require('../controller')

route
    .get('/', controller.getAll)
    .get('/limit', controller.getAllWithLimit)
    .get('/id/:id', controller.getDataById)
    .get('/sort', controller.sortData)
    .get('/search/:column', controller.searchDataBy)
    .post('/add', controller.addData)
    .patch('/:id', controller.updateData)
    .delete('/:id', controller.deleteData)


module.exports = route