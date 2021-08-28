# mongo-memory-server-replica-set

Example repo to reproduce problem described in https://github.com/nodkz/mongodb-memory-server/issues/535

## Setup

Just clone the repository, install dependencies (`npm i`) and run tests with `npm run test`.

## Wanted reproduction

When trying to connect to in-memory mongodb rerplica set, it should throw:

```
    MongoError: not master

      at MessageStream.messageHandler (node_modules/mongodb/lib/cmap/connection.js:268:20)
      at processIncomingData (node_modules/mongodb/lib/cmap/message_stream.js:144:12)
      at MessageStream._write (node_modules/mongodb/lib/cmap/message_stream.js:42:5)
```
