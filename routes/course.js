function createCourseRoutes(app) {
    app.post('purchase', function(req, res) {
        res.json({
            message: "signup endpoint"
        })
    })
    
    app.get('/courses', function(req, res) {
        res.json({
            message: "signup endpoint"
        })
    })
}

module.exports =  {
    createCourseRoutes: createCourseRoutes
}