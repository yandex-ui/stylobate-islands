build:
	./node_modules/stylus/bin/stylus style.styl && \
	./node_modules/stylus/bin/stylus style.ie.styl && \
	./node_modules/autoprefixer/bin/autoprefixer style.css

build_minified:
	make build && \
	./node_modules/csso/bin/csso style.css style.css && \
	./node_modules/csso/bin/csso style.ie.css style.ie.css

new-rule:
	./node_modules/stylus/bin/stylus examples/new-rule.styl && \
	./node_modules/autoprefixer/bin/autoprefixer examples/new-rule.css

up:
	git pull --rebase && \
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

serve:
	jekyll serve --watch --config _config.yml,_config-dev.yml

.PHONY: build
