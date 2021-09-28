const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('test', () => {
    console.log('Success!');
});

myEmitter.emit('test')