const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
    return server;
};

init();

module.exports = { init };