const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('about', {
        title: 'О нас'
    })
})

module.exports = router