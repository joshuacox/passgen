#!/bin/sh
REPO=https://github.com/joshuacox/passgen.git
TARGET=passgen
TMP_DIR=$(mktemp -d --suffix='.passgen')

cd $TMP_DIR
git clone $REPO
cd $TARGET
sudo make install

cd /tmp
rm -Rf $TMP_DIR
