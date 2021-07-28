var franc = require('franc')
var langs = require('langs');

lang = franc(process.argv.slice(2).join(' '));

try{
    console.log((langs.where("3", lang)).name)
}
catch (e){
    console.log('I dont know what is this')
}