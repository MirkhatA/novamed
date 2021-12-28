const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('medin_page', {
        title: 'Medin Medical'
    })
})

module.exports = router