const { Router } = require('express');
const courseRouter = Router();

courseRouter.post('purchase', function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})

courseRouter.get('/courses', function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})


module.exports = {
    courseRouter: courseRouter
}