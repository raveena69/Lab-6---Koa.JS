const UUID = require('uuid');

let posts = Map();

let createPost = (obj) =>{
    let post = {
        name:obj.name,
        description:obj.description,
        id:UUID.v4(),
        date: new Date()
    }

    posts.set(post.id, post);

    return post;
};

let getPosts = ()=>{
    return[...posts.values()];
};

let getPost = (id) => {
    return posts.get(id)
};

module.exports = {
    createPost,
    getPosts,
    getPost
};