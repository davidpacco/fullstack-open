const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const logger = require('../utils/logger')

blogsRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

blogsRouter.post('/', (request, response) => {
  const { author, title, url, likes } = request.body

  const blog = new Blog({
    author,
    title,
    url,
    likes: likes || 0
  })

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => logger.error(error))
})

blogsRouter.put('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  blog.likes += 1

  blog.save()
    .then(updatedBlog => response.json(updatedBlog))
    .catch(error => logger.error(error))
})

blogsRouter.delete('/:id', (request, response) => {
  Blog.findByIdAndDelete(request.params.id)
    .then(() => response.status(204).end())
    .catch(error => logger.error(error))
})

module.exports = blogsRouter