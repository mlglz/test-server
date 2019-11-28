/**
 * index.js 主路由
 */
var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.send('Hello Express')
})

router.get('/about', (req, res) => {
  res.send('about me ?  我是个肌肉男!')
})

/**
 * 引上传路由
 */
require('./fileUpload')(router)

module.exports = router
