const express = require('express');
const app =  express();
const port = "8000";
app.use(express.json())
// for connection the database--
const connect = require('./connection/connect')

// for connecting the collections of that database
const userdb = require('./model/item')
const bookdb =require('./bookModel/bookitem')

// for getting the user data
app.get('/get',(req,res)=>{
    userdb.find()
    .then((data)=>{
        res.send(data)
        console.log("we got the user data")
    })
})

// foe checking the user is registered or not ?
app.post('/enquirey',(req,res)=>{
    userdb.find({email:req.body.email})
    .exec((err,data)=>{
        if(data.length==1){
            res.send('registered users you can find any  book----')
            
        }
        else{
            res.send("first you have to regisrered--")
            
        }
    })
    // })
})
// for registering the new user
app.post('/register',(req,res)=>{
    userdb.find()
    .then((user)=>{
        var newUser=new userdb({
                name:req.body.name,
                class:req.body.class,
                email:req.body.email
            })
            newUser.save((err,data)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send("now , You are registered--")
                }
        })
        
    })
})

// for getting the type of books which user want
app.get('/register/:booktype',(req,res)=>{
    // var booktype = req.params.booktype
    var data = bookdb.find({booktype:req.params.booktype})
    .then((data)=>{
        res.send(data)
        console.log(data)
        console.log("we got the books----")
    })
    req.send("you have to select one of them ")
    
})
// for total available books
app.get('/book',(req,res)=>{{
    // var book = req.params.book
    bookdb.find()
    .then((book)=>{
        res.send(book)
        console.log(book)
    })
}})

// for posting the name of additional books
app.post('/bookpost',(req,res)=>{
    bookdb.find()
    .then((book)=>{
         var newBook = new bookdb({
             book_name:req.body.book_name,
             book_num:req.body.book_num,
             booktype:req.body.booktype
         })
         newBook.save()
         .then((book)=>{
             res.send(book)
             console.log("we posted the data----")
         })
    })
})

// when user will take the book
app.delete('/register/:book_num',(req,res)=>{
    var wanted_book = bookdb.deleteOne({book_num:req.params.book_num})
    .then((wanted_book)=>{
        res.send("Thankyou for the takking book")
    })
})

// server started to llisten @ 8000 port number
app.listen(8000,()=>{
    console.log("----server started @ 8000 port number----")
})