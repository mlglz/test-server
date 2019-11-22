var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.get('/',(req,res)=>{
  res.send('Hello Express')
})

router.get('/about',(req,res)=>{
  res.send('about me ?  我是个有肌肉男!')
})

/**
 * 上传
 */
router.post('/upload', upload.single('file'), function (req, res, next) {
   console.log(req.file)
   res.send('ok')
})

/**
 * 读取文件
 */
router.get('/upload',(req,res)=>{
  res.send(req.url)
})


module.exports = router;
