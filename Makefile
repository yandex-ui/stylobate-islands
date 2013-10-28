test:
	npm config set stylobate-islands:whatToTest $(test) && \
	npm test && \
	npm config set stylobate-islands:whatToTest '**'

.PHONY: test
