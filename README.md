# tatoeba-api

A proxy of the [Tatoeba API](https://en.wiki.tatoeba.org/articles/show/api#) with no [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) restrictions.

The only Tatoeba API currently has an issue where it's CORS policy blocks it from being used by JavaScript in the browser. This is a mirror of the Tatoeba API that has `Access-Control-Allow-Origin: *` set to circumvent this issue. I am hosting this at [tatoeba.elnu.com](https://tatoeba.elnu.com) until Tatoeba has a proper API implementation.

## Usage

For information about API usage, see [the official documentation](https://en.wiki.tatoeba.org/articles/show/api#).

This API mirror is a mirror of `https://tatoeba.org/eng/api_v0/search`. So, for example, `https://tatoeba.org/en/api_v0/search?query=dog` can be rewritten to `https://tatoeba.elnu.com/?query=dog` if you are using the version of the API I am hosting. For self-hosting, see [Self-hosting](#self-hosting).

## Self-hosting

tatoeba-api requires Node.js and npm.

Install the depenedencies:

```SH
npm i
```

### Running

Run tatoeba-api at port 3000 (the default):

```SH
node index.js
```

Run tatoeba-api at port 5000:
```SH
node index.js 5000
```

### Running as background process

tatoeba-api can be easily run as a background process using [pm2](https://pm2.keymetrics.io/).

Install pm2:

```SH
npm i pm2 -g
```

The configuration for pm2 is stored in [ecosystem.config.js](ecosystem.config.js), which by default sets it to run at port 5000 instead of 3000. To change the port, open this file and change the `args` field.

Start process:

```SH
pm2 start
```

For running starting the API at boot and more, see the [pm2 documentation](https://pm2.keymetrics.io/docs/usage/quick-start/).
