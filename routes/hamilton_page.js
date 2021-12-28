const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('hamilton_page', {
        title: 'Hamilton Medical'
    })
})

module.exports = router