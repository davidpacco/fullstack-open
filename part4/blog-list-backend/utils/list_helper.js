const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((acc, blog) => acc + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return undefined

  const likes = blogs.map(blog => blog.likes)
  const mostLikes = Math.max(...likes)
  const mostLiked = blogs.find(blog => blog.likes === mostLikes)

  return {
    title: mostLiked.title,
    author: mostLiked.author,
    likes: mostLiked.likes
  }
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return undefined

  const authors = {}

  blogs.forEach(blog => {
    if (blog.author in authors) authors[blog.author] += 1
    else authors[blog.author] = 1
  })

  const maxBlogs = Math.max(...Object.values(authors).map(blogs => blogs))

  const authorWithMostBlogs = Object.entries(authors).find(author => author[1] === maxBlogs)

  return {
    author: authorWithMostBlogs[0],
    blogs: authorWithMostBlogs[1]
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return undefined

  const authors = {}

  blogs.forEach(blog => {
    if (blog.author in authors) authors[blog.author] += blog.likes
    else authors[blog.author] = blog.likes
  })

  const maxLikes = Math.max(...Object.values(authors))
  const authorWithMostLikes = Object.entries(authors).find(author => author[1] === maxLikes)

  return {
    author: authorWithMostLikes[0],
    likes: authorWithMostLikes[1]
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}