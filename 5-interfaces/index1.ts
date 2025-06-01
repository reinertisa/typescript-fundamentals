// interfaces

interface Author {
    name: string
    avatar: string
}

const authorOne: Author = {
    name: 'Inigo',
    avatar: '/img/inigo.jpg'
}

interface Post {
    title: string,
    body: string,
    tags: string[],
    createdAt: Date,
    author: Author
}

const newPost: Post = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['typescript', 'javascript'],
    createdAt: new Date(),
    author: authorOne
}

console.log(newPost);


// as function argument types

function createPost(post: Post): void {
    console.log(`Created post ${post.title}`)
    console.log(`Body ${post.body}`)
}

createPost(newPost);

// with arrays
let posts: Post[] = []
posts.push({
    title: 'my first post',
    body: 'something interesting',
    tags: ['typescript', 'javascript'],
    createdAt: new Date(),
    author: authorOne
})

posts.push(newPost);