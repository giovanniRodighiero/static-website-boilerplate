const globalConfig = {
    development: {
        address: 'http://localhost:3000',
        preventIndexing: true
    },

    staging: {
        address: 'https://rdg169.dev',
        preventIndexing: true
    },

    production: {
        address: 'https://production.com',
        preventIndexing: false
    }
};

module.exports = globalConfig[process.env.NODE_ENV || 'development']