const User = require('../models/User')
const user = require('../models/User')

module.exports = {
  index: async (req, res) => {
    try {
      const users = await user.find()
      if(users.length > 0){
        res.status(200).json({
          status : true,
          data : users,
          method : req.method,
          url : req.url
        })
      }
      else{
        res.json({
          status: false,
          message : "Data Masih Kosong"
        })
      }
      
    } catch (error) {
      res.status(400).json({sucess: false})
    }
    
    },





    // get a user
    show: async (req, res) => {
      try {
        const user = await User.findById(req.params.id)
        res.json({
          status : true,
          data : user,
          method : req.method,
          url : req.url,
          message : "Data Berhasil Didapat"
        })

      } catch (error) {
        res.status(400).json({success: false})
      }
      const id = req.params.id
    },




    store: async(req, res) => {
      try {
        const user = await User.create(req.body)
        res.status(200).json({
          status : true,
          data : user,
          method : req.method,
          url : req.url,
           message : "Data Berhasil Ditambah"
      })
      } catch (error) {
        res.status(400).json({success: false})
      }
      
    },

    update: async (req, res) => {
      try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true
        })
        res.json({
          status : true,
          data : user,
          method : req.method,
          url : req.url,
          message : "Data Berhasil Diubah"
        })

      } catch (error) {
        res.status(400).json({success: false})
      }
      const id = req.params.id
    },

    delete: async(req, res) => {
      try {
        await User.findByIdAndDelete(req.params.id)
        res.json({
          status : true,
          method : req.method,
          url : req.url,
          message : "Data Berhasil Dihapus"
        })
      } catch (error) {
        res.status(400).json({success: false})
      }
    }
}