(async function () {
	require('dotenv').config();

	const kafka = require('./kafka');

	const topic = process.env.KAFKA_TOPIC;

	const consumer = kafka.consumer({ groupId: 'consumer-group-1' });

	await consumer.connect();

	await consumer.subscribe({ topic, fromBeginning: true })

	await consumer.run({
		eachMessage: async ({ _, partition, message }) => {
			const data = message.value.toString();
			console.log({ partition, data });
		}
	});

}());
