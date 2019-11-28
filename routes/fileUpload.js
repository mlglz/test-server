/**
 * 上传路由
 */
var express = require('express')
var multer = require('multer')
var fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, '..', 'uploads')

//配置multer
var storage = multer.diskStorage({
  //配置保存目录
  destination: function(req, file, cb) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdir(dirPath, err => {
        if (err) {
          console.log(err)
        } else {
          cb(null, dirPath)
        }
      })
    } else {
      cb(null, dirPath)
    }
  },
  //配置文件名
  filename: function(req, file, cb) {
    var fileformat = path.extname(file.originalname)
    cb(null, file.fieldname + '-' + Date.now() + '.' + fileformat)
  }
})

//使用配置
var upload = multer({ storage: storage })
const uploadSingle = upload.single('file')

module.exports = function fileUpload(router) {
  router.post('/img/upload', uploadSingle, (req, res) => {
    console.log(req.file)
    res.send({ code: 0, msg: '上传成功', file: req.file })
  })
}
