/**
 * Your Config File.
 * See https://xpresserjs.com/configuration/
 */
export = {
    // name of app
    name: 'Params Loader Demo',

    // app environment
    env: 'development',

    /**
     * By default, xpresser sets this for you.
     */
    server: {
        domain: 'localhost',
        // Server Port
        port: 3000,
        // Base Url
        baseUrl: '/',
    },

    /**
     * Path settings.
     */
    paths: {
        /**
         * Base Folder
         * Where this app is called from.
         *
         * Best value for this is: __dirname
         */
        base: __dirname,

        /**
         * Point routes file to routes.ts
         */
        routesFile: "backend://routes.ts"
    }
};
