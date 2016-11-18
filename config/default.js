module.exports = {
    port: 3000,
    session: {
        secret: 'blog_nodejs',
        key: 'blog_nodejs',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/blog_nodejs'
};
