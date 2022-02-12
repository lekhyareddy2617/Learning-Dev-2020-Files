/*
You have to create a variable, which takes a string that contains the text, which is a link you are interested in. 

Your task is to fetch all the links from a given page which contains this text.

For example, you have to fetch the link which contains JavaScript word or text that looks like www.codewithharry.com
You have to fetch all the links, filter them and then display the links you are interested in on the screen.
*/

let str = 'python'
let links = document.links
let href;
let count = 0;
Array.from(links).forEach(function(e){
    href = e.href
    if(href.includes(str)){
        console.log(href)
        count++
    }
})
console.log('Total is',count)

/*
To use:
Go to a website like codewithharry.com and then go to Inspect
Go to console
Paste this code and enter
*/
