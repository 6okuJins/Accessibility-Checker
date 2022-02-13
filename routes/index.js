var express = require('express');
const app = require('../app');
var router = express.Router();
const pa11y = require('pa11y')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {});
});

router.get('/api/test', async function(req, res) {
    console.log(req.query)
    if (!req.query.url) {
        res.status(400).json({ error: 'url is required' })
    } else {
        const results = await pa11y(req.query.url)
        console.log(results)
        res.status(200)
        res.json(results)
    }
})

module.exports = router;