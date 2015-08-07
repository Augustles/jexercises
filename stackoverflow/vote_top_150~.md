
## stackoverflow vote top
1. diffreences between lodash and underscore
http://stackoverflow.com/questions/13789618/differences-between-lodash-and-underscore
2. are there constants in javasript // 常量
var my_s = 'hello'; // _ should not be modify
3. what is the best way to detect a mobile device in jQuery
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code ...
} // javasript
// jQuery
$.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
4. how to i get the name of an object s type in javasript
http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript
5. how to convert decimal to hex in javasript
var n = 232;
var s = n.toString(2) // 可以为8,16进制转换, python中bin(),oct,hex
var n1 = parseInt(s, 2) // int()
6. is the recommendation to include css before javasript invalid
http://stackoverflow.com/questions/9271276/is-the-recommendation-to-include-css-before-javascript-invalid
7. what is the purpose of node.js module exports and do you use it
http://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it
8. how do i declare a namespace in javasript
http://stackoverflow.com/questions/881515/how-do-i-declare-a-namespace-in-javascript
9. Why aren t ◎ܫ◎ and ☺ valid JavaScript variable names
http://stackoverflow.com/questions/7451524/why-arent-%E2%97%8E%DC%AB%E2%97%8E-and-%E2%98%BA-valid-javascript-variable-names
10. how can i format numbers as money in javasript
Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
 (123456789.12345).formatMoney(2, '.', ',');
11. get select value in dropdown list using javasript
http://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
12. why is null an object and what s the diffreence between null and undefined
var name = null;
name = '';
name = false;
http://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined
13. what do i do if i want a javasript version of sleep()
http://stackoverflow.com/questions/951021/what-do-i-do-if-i-want-a-javascript-version-of-sleep?page=2&tab=votes#tab-top
14. get the size of the screen, current web page and browser window
screen.height;
screen.width;
$(window).height();   // returns height of browser viewport
$(document).height(); // returns height of HTML document
$(window).width();   // returns width of browser viewport
$(document).width(); // returns width of HTML document
15. round to at most 2 decimal places in javasript
var n = 1.7777777;
Math.round(n * 100)/100 // return 1.78 /1000
http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript
16. generating random numbers in javasript in specific range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // python random.randint(1,9)
17. when is a cdata section necessary within a script tag
http://stackoverflow.com/questions/66837/when-is-a-cdata-section-necessary-within-a-script-tag
18. how to efficaiently count the number of keys/propertyies of an object
http://stackoverflow.com/questions/126100/how-to-efficiently-count-the-number-of-keys-properties-of-an-object-in-javascrip
19. window.onload vs. $(doucument).ready()
window.onload // occurs after the html document has loaded
$(document).ready() // occurs all content(e.g. image) has loaded
20. trigger a button click with javasript on the enter key in a text box
http://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
21. how can i display a javasript object
console.log('hello');
22. how do i check if an object has a property in javasript
http://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-property-in-javascript
23. how to loop through javasript object literal with objects as members
var d = {
    "key_1": {
        "your_name": "jimmy",
        "your_msg": "hello world"
    },
    "key_2": {
        "your_name": "billy",
        "your_msg": "foo equals bar"
    }
}
for (var x in d){
    if (d.hasOwnProperty(x)){
        var obj = d[x];
        for (var y in obj){
            if (obj.hasOwnProperty(y)){
                console.log(y + obj[y])
            }
        }
    }
}
24. what is the explanation for these bizarre javasript behaviours mentioned
in the 'wat talk for codemash 2012'
http://stackoverflow.com/questions/9032856/what-is-the-explanation-for-these-bizarre-javascript-behaviours-mentioned-in-the
25. sort array of objects by string property value in javasript
http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
26. how do i scroll to the top of the page with jQuery
http://stackoverflow.com/questions/1144805/how-do-i-scroll-to-the-top-of-the-page-with-jquery
27. how do i convert a string into an integer in javasript
var n = '23423';
parseInt(n); // Numbers(), parseFloat(), String(), n.toString() 
28. what does the exclamation mark do before the function
http://stackoverflow.com/questions/3755606/what-does-the-exclamation-mark-do-before-the-function
29. how can i pretty-print json using javasript
http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
30. what is an elegant way to force browser to reload cached css/js file
http://stackoverflow.com/questions/118884/what-is-an-elegant-way-to-force-browsers-to-reload-cached-css-js-files
31. is javasript a pass-by-reference or pass-by-value language
http://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language
32. why would a javasript variable start with a dollar sign
http://stackoverflow.com/questions/205853/why-would-a-javascript-variable-start-with-a-dollar-sign
33. preloading images with jQuery
http://stackoverflow.com/questions/476679/preloading-images-with-jquery
34. graph visualzation library in javasript
http://stackoverflow.com/questions/7034/graph-visualization-library-in-javascript
35. check if element is visible after scrolling
http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
36. stop setinterval call in javasript
37. how do i find out which dom element has the focus
38. how can i get jQuery to perform a synchronous,rather than asyncchronous,ajax request
39. how to detemine if variable is 'undefined' or 'null'
40. what is the diffreence between bower and npm
41. jslint is suddenly reporting:use the function form of 'use strict'
42. detecting an 'invalid date' date instance in javasript
43. is there a better way to do optional function parameters in javasript
44. javasript plus sign in front of function name
45. check if element exists in jQuery
46. how to debug javasript/jQuery event bindings with firebug
47. how do i test for an empty javasript object
48. event binding on dynamically create elements
49. commonly accepted best practices around code organization in javasript
50. how do you remove all the option of a select box and then add one option and select with jQuery
