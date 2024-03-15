import mongoose from 'mongoose';


const bookSchema = mongoose.Schema(
    {

        title:{
            type: String,
            require: true,
        },

        author:{
            type: String,
            required: true,

        },
        publishYear:{
            type: Number,
            required: true,
        },

       
    },
    {
        timestamp: true,


    }
    
    );




export const Book = mongoose.model('Book',bookSchema);