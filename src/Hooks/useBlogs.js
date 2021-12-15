import { useEffect, useState } from "react";

const useBlogs=()=>{
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
       fetch('https://desolate-springs-87992.herokuapp.com/blogs')
       .then(res=>res.json())
       .then(data=>setBlogs(data))
    },[])
    return[
       blogs,
       setBlogs
    ]
}
export default useBlogs;