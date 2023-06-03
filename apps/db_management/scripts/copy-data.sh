rm -rf ./dist/data
mkdir -p ./dist/data

find ./src/data \( -name "*.yaml" \) -exec cp {} ./dist/data/ \;

rm -rf ./dist/views
cp -r ./src/views ./dist/views
