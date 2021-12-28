const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('biolight_page', {
        title: 'Biolight'
    })
})

module.exports = router