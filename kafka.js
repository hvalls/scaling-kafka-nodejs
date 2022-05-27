const { Kafka } = require('kafkajs')

const brokers = [process.env.KAFKA_BROKER];

module.exports = new Kafka({
	brokers,
	ssl: false
});
