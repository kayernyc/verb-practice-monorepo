echo 'hello world'
echo $@

node scripts/jsscripts/remove-duplicates.js $@

# node -e 'require("./scripts/node/remove-duplicates.js").weedOutDuplicates()'