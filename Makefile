build:
	stylus style.styl && \
	stylus style.ie.styl && \
	autoprefixer style.css

build_minified:
	make build && \
	csso style.css style.css && \
	csso style.ie.css style.ie.css

up:
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
