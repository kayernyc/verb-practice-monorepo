mkdir -p ./dist/data
find ./src/data \( -name "*.yaml" \) -exec cp {} ./dist/data/ \;
