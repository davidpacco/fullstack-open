import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [blogs, setBlogs] = useState([])
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ author, title, url })
    })
      .then(response => response.json())
      .then(returnedBlog => setBlogs(blogs.concat(returnedBlog)))
      .catch(error => console.error(error))
  }

  const handleLike = (id) => {
    fetch(`/api/blogs/${id}`, { method: 'PUT' })
      .then(response => response.json())
      .then(returnedBlog => {
        setBlogs(blogs.map(blog => blog.id !== returnedBlog.id ? blog : returnedBlog))
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />

        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="url">URL:</label>
        <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />

        <input type="submit" value="Save" />
      </form>

      <hr />

      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h2></h2>
            <p>Author: {blog.author}</p>
            <p>Title: {blog.title}</p>
            <p>URL: <a>{blog.url}</a></p>

            <p><button onClick={() => handleLike(blog.id)}>Like</button> {blog.likes}❤️</p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
