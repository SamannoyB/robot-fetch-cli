# robot-fetch-cli

Run ``` npm i robot-fetch-cli ``` to install.

## Usage

This is (sort of) an API which allows you to make 
your project simpler, without letting you waste,
your time by writing lots of codes for fetching 
API(s) in javascript. 

Instead, you can run the CLI based robot API by running:

``` robot [api-link-to-be-fetched] [file-name] --normal ```,

``` robot [api-link-to-be-fetched] [file-name] node-fetch ```

### --normal vs node-fetch:

--normal flag is used to fetch APIs by the normal 
fetch() javascript method.

Whereas,

node-fetch is used to fetch APIs by importing the 
node-fetch library. 

Note: Only use node-fetch if you're running a node.js
project.

