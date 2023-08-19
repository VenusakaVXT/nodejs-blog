class NewController {
    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/slug
    show(req, res) {
        res.send('NEWS DISPLAY')
    }
}

module.exports = new NewController