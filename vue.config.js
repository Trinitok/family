module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/family/' : '/',
    devServer: {
        proxy: 'http://localhost:5000'
    }
}