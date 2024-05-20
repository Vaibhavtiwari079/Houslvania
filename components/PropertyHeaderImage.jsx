import Image from "next/image"
import Spinner from "@/components/Spinner"
import { useState } from "react"

const PropertyHeaderImage = ({image}) => {
  //const [loading,setLoading]=useState(true)
  return (
    <section>
      
     {/* if (loading && <Spinner loading={loading}/> )*/}
      <div className='container-xl m-auto'>
        <div className='grid grid-cols-1'>
           
        <Image
        src={image}
        alt=''
        className='object-cover h-[400 px] w-full'
        width={0}
        height={0}
        sizes="100vw"
        priority={true}
        />
        </div>
      </div>
    </section>
  )
}

export default PropertyHeaderImage