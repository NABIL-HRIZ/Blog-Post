import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import '../styles/ArticleList.css'
import Pagination from 'react-bootstrap/Pagination';
const ArticleList = () => {
    const [users,setUsers]=useState([])

    // useEffect(()=>{
    //     const url ="https://dummyjson.com/posts"
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setUsers(data.posts))
    //     .catch((error)=>{
    //         console.error("cant upload data",error)
    //     })
    // })
    useEffect(() => {
    const fetchArticles = async () => {
      try {
        
        const response = await fetch("https://dummyjson.com/posts?limit=40");
        const data = await response.json();
        let allPosts = data.posts;

        
        const localArticles = JSON.parse(localStorage.getItem('articles')) || [];

        
        const combined = [...localArticles, ...allPosts];

        setUsers(combined);
      } catch (error) {
        console.error("can't upload data", error);
      }
    };

    fetchArticles();
  }, []); 

   const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage=8

 const totalPages = Math.ceil(users.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = users.slice(startIndex, startIndex + articlesPerPage);

let items = [];
for (let number = 1; number <=totalPages; number++) {
  items.push(
    <Pagination.Item key={number} active={number === currentPage} onClick={()=>setCurrentPage(number)}>
      {number}
    </Pagination.Item>,
  );
}

  return (
    
    <div  className='container'>
        <h1 className="title"> Nos Articles</h1>
        <ul className="post-list">
            {currentArticles.map(user=>(
                <li key={user.id} className="post-card">
                <strong className="post-title">{user.title}</strong>
                <p className="post-body" style={{ maxHeight: "200px", overflow: "hidden" }}>
  {user.body.split(" ").slice(0,30).join(" ")}...
</p>
                <Link to={`/article/${user.id}`} class="myBtn btn-pulse" style={{textDecoration:'none'}}>Lire le suit</Link>

                </li>
            ))}
        </ul>
         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <Pagination>{items}</Pagination>
    </div>
      
    </div>
  )
}

export default ArticleList
