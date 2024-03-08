import React, { useState,useEffect } from 'react'

let post = 'https://jsonplaceholder.typicode.com/posts/1';
let user = 'https://jsonplaceholder.typicode.com/users/2'
let comments = 'https://jsonplaceholder.typicode.com/posts/2/comments'

const Details = () => {

  const [postData,setPostData]= useState('');
  const [userData,setUserData] = useState('');
  const[commentsData, setCommentsData] = useState([]);
    useEffect(()=>{
      fetch(post).then(res=>res.json()).then(resp=>setPostData(resp));
      fetch(user).then(res=>res.json()).then(resp=>setUserData(resp));
      fetch(comments).then(res=>res.json()).then(resp=>setCommentsData(resp));
    },[])
    const filterData = commentsData.filter((item)=>{
      return item.postId === postData.id
    })
  return (
    <div>
      <p><h3>Post Body:</h3>{postData.body}</p>
      <p><h3>Post Title:</h3>{postData.title}</p>
      {
        postData.userId === userData.id ? 
        (<div>
          <p><h3>Name of the user posted:</h3>{userData.name}</p> 
          <p><h3>email of the user posted:</h3>{userData.email}</p>
        </div>
        ) :(<p></p>)
      }
      <div>
        <h4>Comments:</h4>
          {
            // commentsData.map((item)=>(
            //   item.postId === postData.id ? (
            //    <li key={item.id}>{item.body}</li>
            //   ) :(<p>{"0 comments on this post"}</p>)
            // ))
            filterData.length>0 ? 
            (filterData.map((comm)=>(
              <li key={comm.id}>{comm.body}</li>
            ))): (<p>{"No comments for this post"}</p>)
          }
      </div>
      
    </div>
  )
}

export default Details