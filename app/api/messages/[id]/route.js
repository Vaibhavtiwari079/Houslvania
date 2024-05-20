import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';
import { request } from 'http';

export const dynamic = 'force-dynamic';


//Get /api/messages

export const GET=async()=>{
    try {
        await connectDB();

        const sessionUser=await getSessionUser();

        if(!sessionUser || !sessionUser.user){
            return new Response(JSON.stringify('user id is required'),{
                status:401
            })


        }
        const {userId}=sessionUser
        const readMessages=await Message.find({receipient:userId,read:true})
        .sort({createdAt:-1})//ascenfing order
        .populate('sender','username')
        .populate('property','name')

        const unreadMessages=await Message.find({receipient:userId,read:false})
        .sort({createdAt:-1})//ascenfing order
        .populate('sender','username')
        .populate('property','name')
          

        const messages=[...unreadMessages,...readMessages]

        return new Response(JSON.stringify(messages), { status: 200 });
    } catch (error) {
        return new Response("Something went wrong", { status: 500 });
        
    }
}


//Post /api/messages
export const POST=async()=>{
    try {
        await connectDB();

        const {name,email,phone,message,property,receipient}=request.json()
       const sessionUser=getSessionUser()
        if(!sessionUser || !sessionUser.user){
            return new Response(JSON.stringify('user id is required'),{
                status:401
            })


        }
        const {user}=sessionUser


        // can not message to self
        if(user.Id===receipient){
           return new Response( JSON.stringify({
                message:'can not send a message to yourself'
            }),{status:400})
        }
        const newMessage=new Message({
            sender:user.id,
            receipient,
            property,
            name,email,
            phone,
            body:message,

        })
        await newMessage.save();
        return new Response(JSON.stringify({message:'Message sent'}), { status: 200 });
    } catch (error) {
        return new Response("Something went wrong", { status: 500 });
        
    }
}