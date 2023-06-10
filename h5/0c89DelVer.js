var fs = require("fs");
var md5 = require('js-md5');
var json_str=fs.readFileSync("./0c89c921b.json",{
    encoding:"utf8"
})
var json=JSON.parse(json_str);
if(json && json.ver){
    delete json.ver;
    fs.writeFileSync("./0c89c921b.json",JSON.stringify(json));
}