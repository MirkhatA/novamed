const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('lowenstein_page', {
        title: 'Lowenstein'
    })
})

module.exports = router