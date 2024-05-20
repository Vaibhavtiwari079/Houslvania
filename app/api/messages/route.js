import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

//Put /api/messages/:id

export const PUT=async(request,{params})=>{
    try{
        await connectDB();
        const{id}=params;

        const sessionUser=await getSessionUser();
        
        if (!sessionUser||!sessionUser.user){
            return new Response(JSON.stringify('User Id is required'),{
                status:401,
            })
        }
        const {userId }= sessionUser;
        const message=await Message.findById(id)
        if(!message) return new Response("Message not found",{
            status:404
        })
        //Verify ownership
        if(message.recipient.toString()!==userId){
            return new Response('Unauthorized', { status: 401 });
        }

        //Update message to read/Unread depending on the current status
        message.read=!message.read;
        await message.save()

        return new Response(JSON.stringify(message),{
            status:200
        })
    }
    catch(error){
        console.log(error);
        return new Response('Something went wrong',{
            status:500
        })
    }
}

//DELETE /api/messages/:id

export const POST=async(request,{params})=>{
    try{
        await connectDB();

        const {id}=params
        const sessionUser=await getSessionUser();

        if(!sessionUser||!sessionUser.user){
            return new Response(
                JSON.stringify({
                    message:'You mus be logged in to send a message'
                }),{
                    status:401
                }
            )
        }
        const {userId}=sessionUser;
        const message=await Message.findById(id)
        if(!message) return new Response("Message not found",{
            status:404
        })
        //Verify ownership
        if(message.recipient.toString()!==userId){
            return new Response('Unauthorized', { status: 401 });
        }

       await message.deleteOne();

    return new Response(JSON.stringify({ message: 'Message Deleted' }), {
        status: 200,
      });



    }catch(error){
        
    return new Response("something went wrong", {
        status: 500,
      });

    }
}