const model = require('../model')
const response = require('../helper')

module.exports = {
    getAll: (req, res) => {
        model.getAll()
            .then((result) => {
                response.response(res, result, 200, "Success Request")
            })
            .catch((err) => {
                console.log(err);
                response.response(res, null, 404, err, "Error Request")
            })
    },
    getAllWithLimit: (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        model.getDataCount().then((result) => {
            const total = result[0].total;
            model.getAllWithLimit(offset, limit)
                .then((result) => {
                    if (result[1] === undefined) {
                        response.response(res, null, 404, err, "Data not found")
                    } else {
                        response.response(res, result, 200, null, "Set of Data")
                    }
                })
                .catch((err) => {
                    console.log(err);
                    response.response(res, null, 404, err, "Data not found")
                })
        }).catch((err) => {
            console.log(err);

            response.response(res, null, 404, err, "Data not found")
        })
    },
    getDataById: (req, res) => {
        const id = req.params.id
        model.getById(id)
            .then((result) => {
                response.response(res, result, 200, null, "ID number")
            })
            .catch((err) => {
                console.log(err)
                response.response(res, null, 404, err, "Error")
            })
    },
    addData: (req, res) => {
        let data = {
            example: req.body.example,
        }

        model.addData(data)
            .then((result) => {
                response.response(res, result, 200, null, "You have successfully add the data")
            })
            .catch((err) => {
                response.response(res, null, 401, err, "Something Wrong")

            })
    },
    updateData: (req, res) => {
        const id = req.params.id
        const data = {
            example: req.body.example,
        }
        model.updateData(data, Number(id))
            .then((result) => {
                response.response(res, result, 200, null, "This data has updated")
            })
            .catch((err) => {
                console.log(err)
                response.response(res, null, 404, err, "Id Not found")
            })
    },
    deleteData: (req, res) => {
        const id = req.params.id
        model.deleteData(Number(id))
            .then((result) => {
                response.response(res, result, 200, null, "This data has been deleted")
            })
            .catch((err) => {
                console.log(err)
                response.response(res, null, 404, err, "Id No found")
            })
    },
    sortData: (req, res) => {
        model.getSortedData()
            .then((result) => {
                response.response(res, result, 200, null, "sorted")
            })
            .catch((err) => {
                response.response(res, null, 404, err, "Data not found")
            })
    },
    searchDataBy: (req, res) => {
        const column = req.params.column
        book.searchBookByTitle(column)
            .then((result) => {
                response.response(res, result, 200, null, "found")
            })
            .catch((err) => {
                console.log(err)
                response.response(res, null, 404, err, "Not Found")
            })
    },
}