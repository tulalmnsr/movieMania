module.exports = {
    // other webpack configurations...
    resolve: {
        fallback: {
            "url": require.resolve("url/")
        }
    }
};


module.exports = {
    // other webpack configurations...
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify")
        }
    }
};
