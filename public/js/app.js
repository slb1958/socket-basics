var socket = io();

socket.on('connect', function () {
	console.log('Connect to socket.io server!')
});

socket.on('message', function (message) {
	console.log('New message:');
	console.log(message.text);
});