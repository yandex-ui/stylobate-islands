build:
	./node_modules/stylus/bin/stylus style.styl && \
	./node_modules/stylus/bin/stylus style.ie.styl && \
	./node_modules/autoprefixer/bin/autoprefixer style.css

build_minified:
	make build && \
	./node_modules/csso/bin/csso style.css style.css && \
	./node_modules/csso/bin/csso style.ie.css style.ie.css

up:
	npm install && \
	git submodule init && \
	git submodule update && \
	cd stylobate && \
	git checkout master && \
	git pull --rebase && \
	npm install && \
	cd ..
	cd skins/islands && \
	git checkout master && \
	git pull --rebase && \
	cd ..

.PHONY: build
