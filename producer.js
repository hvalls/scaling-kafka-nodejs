(async function () {
	require('dotenv').config();

	const kafka = require('./kafka');

	const topic = process.env.KAFKA_TOPIC;

	const producer = kafka.producer();

	await producer.connect();

	await producer.send({
		topic,
		messages: [
			{ value: `Event: ${new Date()}` },
		],
	});

	await producer.disconnect()
}());