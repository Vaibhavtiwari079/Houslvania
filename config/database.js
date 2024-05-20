import mongoose from "mongoose";
let connected= false;

const connectDB=async()=>{
    mongoose.set("strictQuery",true);
    
if (connected){
    console.log("Mongodb is already connected")
  return;
}
else{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        connected=true;
        console.log("Mpngodb connected..")
    } catch (error) {
        console.log(error)
        
    }

}


}
export default connectDB;