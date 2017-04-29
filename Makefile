all: help

help:
	@echo ""
	@echo "-- Help Menu"
	@echo ""   1. make install       - install the script in /usr/local/bin/
	@echo ""   1. make play       - install the script in /usr/local/bin/ using ansible

install:
	install -m 0555 passgen /usr/local/bin/passgen

play:
	ansible-playbook passgen.yaml

test:
	$(eval TMP := $(shell mktemp -d --suffix=testpassgen))
	-@./passgen > ${TMP}/testgen
	-@ent -t ${TMP}/testgen |tail -n1 > ${TMP}/testgen.csv
	-@./tester.sh ${TMP}/testgen.csv 4
	-@rm -Rf ${TMP}/testgen

qtest:
	$(eval TMP := $(shell mktemp -d --suffix=testpassgen))
	-@./passgen > ${TMP}/testgen
	-@ent -t ${TMP}/testgen

build:
	docker build -t joshuacox/passgen .

dtest: build
	docker run -it joshuacox/passgen make test

d: build
	docker run -it joshuacox/passgen
