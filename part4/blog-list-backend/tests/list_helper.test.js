const listHelper = require('../utils/list_helper')
const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0
  }
]

test('dummy returns 1', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const blog = blogs[0]
    const result = listHelper.totalLikes([blog])

    expect(result).toBe(blog.likes)
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(blogs)

    expect(result).toBe(36)
  })
})

describe('favorite blog', () => {
  test('of empty list is undefined', () => {
    const result = listHelper.favoriteBlog([])

    expect(result).toBe(undefined)
  })

  test('when list has only one blog equals the blog itself', () => {
    const blog = blogs[0]
    const result = listHelper.favoriteBlog([blog])

    expect(result).toEqual({
      title: blog.title,
      author: blog.author,
      likes: blog.likes
    })
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual({
      title: blogs[2].title,
      author: blogs[2].author,
      likes: blogs[2].likes,
    })
  })
})

describe('most blogs', () => {
  test('of empty list is undefined', () => {
    const result = listHelper.mostBlogs([])

    expect(result).toBe(undefined)
  })

  test('when a list has only one blog equals to the blog\'s author', () => {
    const blog = blogs[0]
    const result = listHelper.mostBlogs([blog])

    expect(result).toEqual({
      author: blog.author,
      blogs: 1
    })
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.mostBlogs(blogs)

    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    })
  })
})

describe('most likes', () => {
  test('of empty list is undefined', () => {
    const result = listHelper.mostLikes([])

    expect(result).toBe(undefined)
  })

  test('when a list has only one blog equals to the blog\'s likes', () => {
    const blog = blogs[0]
    const result = listHelper.mostLikes([blog])

    expect(result).toEqual({
      author: blog.author,
      likes: blog.likes
    })
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.mostLikes(blogs)

    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 17
    })
  })
})