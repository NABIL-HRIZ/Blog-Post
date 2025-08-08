import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import '../styles/ArticleList.css'
import Pagination from 'react-bootstrap/Pagination';
import AOS from 'aos';
const ArticleList = () => {
    const [users,setUsers]=useState([])
      const [loading,setLoading]=useState(true)
    

      //for pagination
   const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage=8

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
  AOS.init({
    duration: 800,
    once: true, 
  });
}, []);

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
      }finally {
        
        setTimeout(() => {
          setLoading(false);
        },50);
      
    };
    };

    fetchArticles();
  }, []); 
 if (loading) {
  return (
    <div className='loading'>
      <h1>En cours de chargement...</h1>
      <div className="loader"></div>
    </div>
  );
}

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
            {currentArticles.map((user,index)=>(
                <li key={user.id} className="post-card"  data-aos="fade-up"
    data-aos-delay={index * 100}>
                <strong className="post-title">{user.title}</strong>
                <p className="post-body" style={{ maxHeight: "200px", overflow: "hidden" }}>
  {user.body.split(" ").slice(0,30).join(" ")}...
</p>
                <Link to={`/article/${user.id}`} className="myBtn btn-pulse" style={{textDecoration:'none'}}>Lire le suit</Link>

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
