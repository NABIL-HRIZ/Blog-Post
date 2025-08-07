import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/AjouterArticle.css'
import { Link } from 'react-router-dom';
const AjouterArticle = () => {

    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [tags,setTags]=useState('')


 const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleBody=(e)=>{
        setBody(e.target.value)
    }
     const handleTags=(e)=>{
        setTags(e.target.value)
    }
   
    const handleSubmit=async (e)=>{
         e.preventDefault()
        const article={title,body,tags}

   
     try{
        const response=await  fetch('https://dummyjson.com/posts/add',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(article)

        })
        const data = await response.json()

        const finalArticle = {
          ...data,
        id:Date.now(),
      title,
      body,
     tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
  reactions: {
    likes: 0,
    dislikes: 0,
  },
  views: 0,
    };
         const stored = JSON.parse(localStorage.getItem('articles')) || [];
  stored.unshift(finalArticle);
  localStorage.setItem('articles', JSON.stringify(stored));
        alert('Article bien ajouté')
        setTitle('')
        setBody('')
        setTags('')
     }
     catch(error){
        console.error("something wrong",error)
     }
    }
   




  return (
    
    <div className="form-section">
       <Link to="/" className="back-link">
              <i className="fa-solid fa-arrow-left"></i> Retour à l'accueil
           </Link>
  <h2 className="form-title mb-4">Publier un Article</h2>
  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className="fw-bold">Le titre de l'article</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Titre de l'article..." 
        className="border-primary"
        required
        value={title}
        onChange={handleTitle}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className="fw-bold">Les Tags  de l'article</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Les Tags  : sport,heath,fun " 
        className="border-primary"
        required
        value={tags}
        onChange={handleTags}
      />
    </Form.Group>

    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
      <Form.Label className="fw-bold">La description de l'article</Form.Label>
      <Form.Control 
        as="textarea" 
        rows={5} 
        placeholder="Écrivez ici..." 
        className="border-primary"
        required
        value={body}
        onChange={handleBody}

      />
    </Form.Group>

    <div className="text-end">
      <Button className='myBtn btn-pulse' type="submit">
        Publier
      </Button>
    </div>
  </Form>
</div>

  )
}

export default AjouterArticle
