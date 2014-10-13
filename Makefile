build:
	./node_modules/stylus/bin/stylus < index_source.styl > index.styl && \
	./node_modules/stylus/bin/stylus -m --sourcemap-inline index.styl


.PHONY: build
