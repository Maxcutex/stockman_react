const allConfig = {
    development: {
        BASE_URL: 'http://localhost:3000',
        STOCKMAN_API_BASE_URL: 'http://localhost:8000/api/v1',
    },

    production: {
        BASE_URL: 'https://stockman-app.herokuapp.com',
        STOCKMAN_API_BASE_URL: 'https://api.stockman-app.herokuapp.com/api/v1',
    },

    staging: {
        BASE_URL: 'https://staging-stockman-app.herokuapp.com',
        STOCKMAN_API_BASE_URL:
            'https://staging.stockman-app.herokuapp.com/api/v1',
    },

    test: {
        BASE_URL: 'http://localhost:3000',
        STOCKMAN_API_BASE_URL: 'http://localhost:8000/api/v1',
    },
};

export const config = allConfig[process.env.NODE_ENV];