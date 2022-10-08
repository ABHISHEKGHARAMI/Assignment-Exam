//Requirements: Write a nodeJS program that would read content from the file and also append new content into the file.
const { error } = require('console');
const fs = require('fs');
fs.readFile('./first.txt','utf8',(data,error)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});

const add_data ="One by one the little white lights along the Seine were coming on, and from the first-floor windows you could see the brightly lit bateaux-mouches passing through the arches of the Pont du Carrousel. The party moved on to a dish of game served with a more vigorous claret.";
fs.appendFile('./first.txt',add_data,error=>{
    if(error){
        throw error;
    }
    console.log("saved");
})