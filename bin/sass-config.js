
// See: https://github.com/sass/node-sass

var sass = require('node-sass');

var abc = 'abc';

sass.render(
  {
    file: "style/scss/main.scss",
    //indentedSyntax: false,
    //omitSourceMapUrl: false,
    outFile: "style/css/main.css",
    //outputStyle: nested,
    //precision: 5,
    //sourceComments: false,
    sourceMap: true
    //sourceMapContents: false,
    //sourceMapEmbed: false,
    //sourceMapRoot: undefined,
  },
  function(error, result) { // node-style callback from v3.0.0 onwards

    //console.log("hello world");
    //console.log("-- " + error);
    //console.log("-- " + result);

    if (error) {
      console.log(error.status); // used to be "code" in v2x and below
      console.log(error.column);
      console.log(error.message);
      console.log(error.line);
    }
    else {
      console.log(result.css.toString()); //This pipes out the return

      //return(result.css.toString());

      //result.css
      //result.stats
      //result.map

      //console.log("b" + result.stats);

      //console.log("c" + result.map.toString());
      // or better
      //console.log("d" + JSON.stringify(result.map)); // note, JSON.stringify accepts Buffer too
    }

  }
);


//console.log("Something should have happened");


// This is strange in that you can output via console.log which will act as a stdout
