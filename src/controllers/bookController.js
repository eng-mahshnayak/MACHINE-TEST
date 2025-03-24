let BookModel = require('../models/bookModel')


const addBook  = async function (req,res,next) {
    try{

        const {bookName,autherName,price,distription} = req.body

          if(!bookName||!autherName||!price||!distription) {

            res.json({
                status:"ERROR",
                statusCode:400,
                error:'all fields are required' ,
                data:null   
            })

          }
    
        let bookObj = new BookModel({
            bookName,
            autherName,
            price,
            distription
        })
    
        await bookObj.save()

        res.json({
            status:"SUCCESS",
            statusCode:400,
            error:null ,
            data:bookObj   
        })

    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

const getBook  = async function (req,res,next) {
    try{

       let books = await BookModel.find()

        if(books.length) {
            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                data:books   
            })
        }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'books is empty' ,
                data:null   
            })
        }
    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

const getOneBook  = async function (req,res,next) {
    try{

        let id = req.params.id

          if(!id) {

            res.json({
                status:"ERROR",
                statusCode:400,
                error:'id is required' ,
                data:null   
            })

          }
    
          let bookObj = await BookModel.findById(id)

           if(bookObj) {
            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                data:bookObj   
            })
           }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'book is not found with given id !' ,
                data:null   
            })
           }
    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

const deleteBook  = async function (req,res,next) {
    try{

       let books = await BookModel.deleteMany()

       res.json({
        status:"SUCCESS",
        statusCode:400,
        error:null ,
        data:books   
    })

    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

const deleteOneBook  = async function (req,res,next) {
    try{

        let id = req.params.id

          if(!id) {

            res.json({
                status:"ERROR",
                statusCode:400,
                error:'id is required' ,
                data:null   
            })

          }
    
          let bookObj = await BookModel.findByIdAndDelete(id)

           if(bookObj) {
            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                data:bookObj   
            })
           }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'book is not found with given id !' ,
                data:null   
            })
           }
    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

const updateOneBook  = async function (req,res,next) {
    try{
          
    
          let bookObj = await BookModel.findByIdAndUpdate(req.body._id,{$set:req.body},{new:true})

           if(bookObj) {
            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                data:bookObj   
            })
           }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'book is not found with given id !' ,
                data:null   
            })
           }
    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}


const searchBook = async function (req,res,next) {
    try{

       let {bookName,autherName}  = req.body

       let filter = {}

        if(bookName!=='') {
            filter.bookName = bookName
        }

        if(autherName!=='') {
            filter.autherName = autherName
        }

       let books = await BookModel.find(filter)

        if(books.length) {
            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                data:books   
            })
        }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'books is empty' ,
                data:null   
            })
        }
    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

module.exports = {addBook,getBook,getOneBook,updateOneBook,deleteBook,deleteOneBook,searchBook}

