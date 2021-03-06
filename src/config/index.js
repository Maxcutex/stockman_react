const allConfig = {
    development: {
        BASE_URL: 'http://0.0.0.0:3000',
        STOCKMAN_API_BASE_URL_AWS: 'http://stockmanapi-env.fptfzc4bbf.us-east-2.elasticbeanstalk.com/api/v1',
        STOCKMAN_API_BASE_URL: 'https://stockman-api.herokuapp.com/api/v1',
    },

    production: {
        BASE_URL: 'https://stockman-app.herokuapp.com',
        STOCKMAN_API_BASE_URL: 'https://stockman-api.herokuapp.com/api/v1',
    },

    staging: {
        BASE_URL: 'https://staging-stockman-app.herokuapp.com',
        STOCKMAN_API_BASE_URL: 'https://stockman-api.herokuapp.com/api/v1',
    },

    test: {
        BASE_URL: 'http://localhost:3000',
        STOCKMAN_API_BASE_URL: 'https://stockman-api.herokuapp.com/api/v1',
    },
};

export const config = allConfig[process.env.NODE_ENV];
