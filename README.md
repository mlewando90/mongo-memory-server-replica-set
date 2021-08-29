# mongo-memory-server-replica-set

Example repo to reproduce problem described in https://github.com/nodkz/mongodb-memory-server/issues/535

## Setup

Just clone the repository, install dependencies (`npm i`) and run tests with `npm run test`.

To reproduce the error you need to run: `npm run test:failWithMongo` (it's not failing all the times, if it pass try to run it couple times until it fails).

The output from the test run is as follows:

```
❯ npm run test:failWithMongo

> @mlewando/mongo-memory-server-replica-set@1.0.0 test:failWithMongo {PATH_TO_PROJECT}
> jest dbTest

Determining test suites to run...
mongo started {
  mongoUri: 'mongodb://127.0.0.1:51852,127.0.0.1:51853,127.0.0.1:51854/?replicaSet=testset'
}
 FAIL  ./dbTest.spec.js
  ✕ should insert some data (232 ms)
  ✓ should insert some other data (1627 ms)

  ● should insert some data

    MongoError: not master

      at MessageStream.messageHandler (node_modules/mongodb/lib/cmap/connection.js:268:20)
      at processIncomingData (node_modules/mongodb/lib/cmap/message_stream.js:144:12)
      at MessageStream._write (node_modules/mongodb/lib/cmap/message_stream.js:42:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        5.217 s
Ran all test suites matching /dbTest/i.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @mlewando/mongo-memory-server-replica-set@1.0.0 test:failWithMongo: `jest dbTest`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the @mlewando/mongo-memory-server-replica-set@1.0.0 test:failWithMongo script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```
