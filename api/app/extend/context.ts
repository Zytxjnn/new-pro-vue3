const nodeFetch = require('node-fetch');

module.exports = {
    httpGet(options): Promise<void> {
        const { url,data,success,fail } = options;

        return nodeFetch(url + )
    }
}
