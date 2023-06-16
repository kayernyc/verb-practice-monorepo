const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const args = process.argv;
const filesArray = args.slice(2);

function groupEntries(_filesArray = filesArray) {
  const seenVerbs = {};
  // eslint-disable-next-line no-console
  console.log({ _filesArray });

  _filesArray.forEach((filePath) => {
    try {
      // eslint-disable-next-line no-console
      console.log(filePath);
      const fileContents = fs.readFileSync(
        path.resolve(__dirname, '../src/data', filePath),
        'utf8',
      );
      const data = yaml.load(fileContents);
      // console.log(Object.entries(data));

      for (const [verb, value] of Object.entries(data)) {
        const [prefix, baseVerb] = verb.split('|');
        if (!seenVerbs[baseVerb]) {
          seenVerbs[baseVerb] = [];
        }

        if (value.language) {
          delete value.language;
        }

        seenVerbs[baseVerb].push({ particle: prefix, ...value });
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`Error in ${filePath}: ${err} ${__dirname}`);
    }

    try {
      fs.writeFileSync(
        path.resolve(__dirname, '../src/data', 'grouped_' + filePath),
        yaml.dump(seenVerbs),
      );
      // file written successfully
    } catch (err) {
      console.error(err);
    }
  });
}

groupEntries();
