(async function () {
	require('dotenv').config();

	const topic = process.env.KAFKA_TOPIC;

	const kafka = require('./kafka');
	const admin = kafka.admin()

	await admin.connect()

	await admin.createTopics({
		topics: [{
			topic,
			numPartitions: 5
		}]
	});

	await admin.disconnect()
}());
