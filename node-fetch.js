const { createSpinner } = require('nanospinner');

exports.nodefetched = ifNodeFetch;

function ifNodeFetch () 
{
   const fs = require('fs');

   const spinner = createSpinner('Writing A Node-Fetch+ File.....').start();

   setTimeout(() => {
      spinner.success({ text: `Successfully Created A ${process.argv[3]}.js file! ` });
   }, 2000);

   fs.writeFileSync(`${process.argv[3]}.js`,`//please install node-fetch before running this program.

   const fetch = require('node-fetch');
   fetch('${process.argv[2]}')
     .then(res => res.json())
     .then(data => {
      console.log(data);
     })`);
}

module.exports = ifNodeFetch;
