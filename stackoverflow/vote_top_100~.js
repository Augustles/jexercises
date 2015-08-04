
// stackoverflow vote top 100
1.set a default parameter value for a javascript function
function add(a, b)
 {
   a = typeof a !== 'undefined' ? a : 42;
   b = typeof b !== 'undefined' ? b : 'default_b';
   return a + b
 }
 http://stackoverflow.com/questions/894860/set-a-default-parameter-value-for-a-javascript-function
2.how can i refresh a page with jQuery
http://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
3.abort ajax requests using jQuery
http://stackoverflow.com/questions/446594/abort-ajax-requests-using-jquery
4.how to check if a string 'startsWith' another string
var s = 'hello'
s.startsWith('he')
5.javascript equivalent to printf/string.format
http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
6.how to detect a click outside an element
http://stackoverflow.com/questions/152975/how-to-detect-a-click-outside-an-element
7.trim string in javascript
http://stackoverflow.com/questions/498970/trim-string-in-javascript
8.where can i find documentation on formatting a date in javascript
Xmas95 = new Date("25 Dec, 1995 23:15:00")
Xmas95 = new Date("2009 06 12,12:52:39")
Xmas95 = new Date("20 09 2006,12:52:39")
var d = new Date()
d.getFullYear()
d.getMonth()
d.getDate() // 返回日期
d.getDay() // 返回星期几
9.what is the function of the var keyword and when to use it (or omit it)
http://stackoverflow.com/questions/1470488/what-is-the-function-of-the-var-keyword-and-when-to-use-it-or-omit-it
10.most elegant way to clone a javascript object
var cloneobj = jQuery.extend({}, d); jQuery shadow copy
var deepcopy = jQuery.extend(true, {}, d); deep copy
11.what is the scope of variables in javascript
http://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript
12.what is the !!(not not) operator in javascript
!true // false
!!true // true
13.get current url in javascript
window.location.href // full name
window.location.pathname // return path only
14.databinding in angularjs
http://stackoverflow.com/questions/9682092/databinding-in-angularjs
15.is safari on ios 6 caching $.ajax results
http://stackoverflow.com/questions/12506897/is-safari-on-ios-6-caching-ajax-results
16.Why does ++[[]][+[]]+[+[]] return the string “10”
http://stackoverflow.com/questions/7202157/why-does-return-the-string-10
17.parse json in javascript
var json = '{"result":true,"count":1}';
obj = JSON.parse(json);
alert(obj.count);
18.creating multiline strings in javascript
var s = "a long \
story
"
19.when to use double or single quotes in javascript
alert('say "hello"');
alert("say 'hello'")
20.modify the url without reloading the page
http://stackoverflow.com/questions/824349/modify-the-url-without-reloading-the-page
21.how to check for 'undefined' in javascript
x in window; // if x defined
22.best practice: escape, or encodeurl/encodeurlcomponent
http://stackoverflow.com/questions/75980/best-practice-escape-or-encodeuri-encodeuricomponent
23.enums in javascript
http://stackoverflow.com/questions/287903/enums-in-javascript
24.javascript closure inside loops - simple practical example
http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
25.length of a javascript object
d.length // return length
26.convert javascript string to be all lower case
'August'.toLowerCase();
27.why is using 'for...in' with array iteration such a bad idea
for (var i=0;i<d.length;i++) { // 最后用这样遍历
    console.log(d[i]);
}
28.check if object is array
d instanceof Array; // boolean
$.isArray(d); // jQuery
29.how to move an element into another element
$('#source').appendTo('destination');
http://stackoverflow.com/questions/1279957/how-to-move-an-element-into-another-element
30.serilizing to json in jQuery
http://stackoverflow.com/questions/191881/serializing-to-json-in-jquery
31.how does trello access the user s clipboard
http://stackoverflow.com/questions/17527870/how-does-trello-access-the-users-clipboard
32.jQuery get specific option tag text
http://stackoverflow.com/questions/196684/jquery-get-specific-option-tag-text
33.how can i convert a string to boolean in javascript
http://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript
34.difference between == and === in javascript
35.why does parseint(1/0,19) return 18
http://stackoverflow.com/questions/11340673/why-does-parseint1-0-19-return-18
36.javascript unit test tools for tdd
http://stackoverflow.com/questions/300855/javascript-unit-test-tools-for-tdd
37.loop through javascript object
var p =
    {
        "p1": "value1",
        "p2": "value2",
        "p3": "value3"
    };
for (var key in p) {
    if (p.hasOwnProperty(key)) { // 判断p里是否含有属性key
        console.log(key,p[key]);
    }
}
38.insert item into array at a specific index
http://stackoverflow.com/questions/586182/insert-item-into-array-at-a-specific-index
39.javascript post request like a form submit
40.endsWith in javascript
s.endWith('lo'); // startWith('hel');
41.how to debug node.js applications
http://stackoverflow.com/questions/1911015/how-to-debug-node-js-applications
42.how can i merge properties of two javascript objects synamically
var obj1 = { food: 'pizza', car: 'ford' }
var obj2 = { animal: 'dog' }
function merge_dict(obj1,obj2) {
    obj3 = {};
    for (var key in obj1) { obj3[key] = obj1[key]; }
    for (var key in obj2) { obj3[key] = obj2[key]; }
    return obj3;
}
43.what is the best way to add options to a select from an array with jQuery
http://stackoverflow.com/questions/170986/what-is-the-best-way-to-add-options-to-a-select-from-an-array-with-jquery
44.javascript array delete elements
http://stackoverflow.com/questions/500606/javascript-array-delete-elements
45.$(document).ready quivalent without jQuery
http://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
46.how to get current date in javascript
var d = new Date();
d.toJSON() // convert to JSON
http://stackoverflow.com/questions/1531093/how-to-get-current-date-in-javascript
47.open a url in a new tab using javascript
http://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-using-javascript
48.why don t self-closing script tags work
http://stackoverflow.com/questions/69913/why-dont-self-closing-script-tags-work
49.how to pass command line arguments to node.js
http://stackoverflow.com/questions/4351521/how-to-pass-command-line-arguments-to-node-js
50.how do you check if a variable is an array in javascript
value instanceof Array
