const { Schema, model } = require("mongoose");


//Structure for movies databases

const movieSchema = new Schema({
    name:{
        type: String,
        trim: true,
        unique: true,
        require: [true, "name field cant be empty"]
    },
    description:{
        type: String,
        trim: true,
        required: [true, "description field cant be empty"]
    },
    duration:{
        type:Number,
        required: [true, "duration field cant be empty"]
    },
    rating:{
        type:Number,
        required:[true, "rating field cant be empty"]
    },
    totalRating:{
        type:Number,
        required:[true, "totalRating field cant be empty"]
    },
    releaseYear: {
        type: Number,
        required: [true, "releaseYear field cant be empty"]
    },
    releaseDate: {
        type:Date,
        required:[true, "releaseDate field cant be empty"]
    },
    genres:{
        type:[Sting],
        required:[true, "genres field cant be empty"]
    },
    directors:{
        type: [String],
        required: [true, "directors field cant be empty"]
    },
    coverImage:{
        type: String,
        required:[true, "coverImage field cant be empty"]
    },
    actors:{
        type:[String],
        required:[true, "actors field cant be empty"]
    },
    price:{
        type:Number,
        required:[true, "price field cant be empty"]
    }
},{timestamps:true})   // by adding {timestamps:true}
                      //  createdAt and updatedAt fields get added.
                     //   eg: {
                    //           createdAt: NativeDate;
                   //            updatedAt: NativeDate;
                  //          }



module.exports=model('movie',movieSchema);
