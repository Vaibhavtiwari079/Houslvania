import {Schema,models,model} from "mongoose";
const UserSchema= new Schema(
    {
        email:{
            type:String,
            unique:[true,"email already exist"],
            required:[true,"email is required"]


        },
        username:{
            type:String,
            required:[true,"username is required"],
        },
        image:{
            type:String,
        },
        bookmarks:[
            {
                type:Schema.Types.ObjectId,
                ref:"Property",
            },
        ],

},
{
    timestamps:true,
});

const User=models.User || model("User",UserSchema)
export default User;