const config = {};


if (process.env.NODE_ENV === 'development')
    config.port = process.env.PORT || 3000;

else if(process.env.NODE_ENV === 'staging')
    config.port = process.env.PORT || 4000;

else if (process.env.NODE_ENV === 'production')
    config.port = process.env.PORT || 5000;


module.exports = config;