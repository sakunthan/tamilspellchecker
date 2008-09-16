#!/bin/sh
filename="tamilspellchecker.xpi"
rm -f ${filename}
zip -q ${filename} dictionaries/*  install.js  install.rdf
echo "Done!"
