import connectDB from '@/config/database';
import User from '@/models/User';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';
///post /api/bookmarks

export const POST=async(request)=>{
    try {
        await connectDB();
        
        const {propertyId}=await request.json()
        const sessionUser=await getSessionUser();

        if(!sessionUser || !sessionUser.userId){
            return new Response('User Id id required',{
                status:401
            });
        }

        const {userId}=sessionUser;

        //Find user in database
        const user=await User.findOne({_id:userId});

        //check property is  bookmarked
        let isBookmarked=user.bookmarks.includes(propertyId);

        
        

        return new Response(JSON.stringify({isBookmarked}),{
            status:200
        })
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong',{staus:500})
        
    }
}