const library = require('../models/library')

module.exports = {
    
    create : (req,res,next) => {

        library.create(
            {

            bookTitle : req.body.bookTitle,
            years : req.body.years, 
            bookNumber : req.body.bookNumber,
            status : req.body.status

            },
            (err,result) => {
                if (err) next( err)
                else {
                    res.json({status : "success" , data:result})
                } 
            }
        )
    },
    
    getBook: (req,res,next) => {
        library.find({})
        .then((result) => {
            res.json({status:"success", data:result}) .catch((err) => err)
        }) 
    },

    getBookById: (req,res) => {
        library.findById(req.params.libraryId)
        .then((result) => res.json (result))
        .catch((err) => res.json(err))

    },

    deleteBookById: (req,res) => {
        library.findByIdAndRemove(req.params.libraryId)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
    },

    editBookById: (req,res) => {
        library.findByIdAndUpdate(req.params.libraryId , {

            bookTitle : req.body.bookTitle,
            years : req.body.years, 
            bookNumber : req.body.bookNumber,
            status : req.body.status

        })
        
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
    }
}

//970 3892 7699
// 430010