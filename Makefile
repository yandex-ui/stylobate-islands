test:
	npm config set stylobate-islands:whatToTest $(skin) && \
	npm test && \
	npm config set stylobate-islands:whatToTest '**'

.PHONY: test
