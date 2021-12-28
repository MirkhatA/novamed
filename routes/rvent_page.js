const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('rvent_page', {
        title: 'Rvent'
    })
})

module.exports = router