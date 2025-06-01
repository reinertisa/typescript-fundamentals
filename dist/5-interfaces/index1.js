"use strict";
// interfaces
const authorOne = {
    name: 'Inigo',
    avatar: '/img/inigo.jpg'
};
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['typescript', 'javascript'],
    createdAt: new Date(),
    author: authorOne
};
console.log(newPost);
// as function argument types
function createPost(post) {
    console.log(`Created post ${post.title}`);
    console.log(`Body ${post.body}`);
}
createPost(newPost);
// with arrays
let posts = [];
posts.push({
    title: 'my first post',
    body: 'something interesting',
    tags: ['typescript', 'javascript'],
    createdAt: new Date(),
    author: authorOne
});
posts.push(newPost);
