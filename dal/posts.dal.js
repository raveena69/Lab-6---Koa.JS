const posts = require('./').db('posts').collection('posts');

const save = async ({id, name, description, postedDate}) => {
    const result = await posts.insertOne({id, name, description, postedDate});
    return result.ops[0];
};

module.exports = {save};