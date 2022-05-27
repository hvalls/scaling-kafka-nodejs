.PHONY: start-broker
start-broker:
	@docker-compose up -d

.PHONY: setup-broker
setup-broker:
	@node setup_broker.js

.PHONY: start-consumers
start-consumers:
	@pm2 start consumer.js -i 5
	
.PHONY: produce-one
produce-one:
	@node producer.js
	
.PHONY: produce-forever
produce-forever:
	@while true; do node producer.js; sleep 0.01; done;
	
