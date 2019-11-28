var express = require('express');
var router = express.Router();
var multer  = require('multer')


//配置multer保存扩展名
var storge = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
      var fileformat = (file.originalname).split('.');
      cb(null, file.fieldname+'-'+Date.now()+'.'+fileformat[fileformat.length-1]);
  }
})

//使用配置
var upload = multer({storage: storge})

/* GET home page. */
router.get('/',(req,res)=>{
  res.send('Hello Express')
})

router.get('/about',(req,res)=>{
  res.send('about me ?  我是个肌肉男!')
})

/**
 * 上传
 */
router.post('/upload', upload.single('file'), function (req, res, next) {
  //  console.log(req.file)
   console.log('upload')
   res.send('ok')
})

/**
 * 上传多个
 */
router.post('/uploadm', upload.array('photo' , 3), function (req, res, next) {
   console.log(req.files)
   console.log('upload')
   res.send('ok')
})




module.exports = router;
