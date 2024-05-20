'use client'
import { ClipLoader } from "react-spinners"

const override={
    display:'block',
    margin:'100px auto',
};
const Spinner=({loading})=>{
    return(
        <ClipLoader
        color='#3b82f6'
        loading={loading}
        cssOveride={override}
        size={150}
        aria-label="Loading spinner"/>
    )
}
export default Spinner