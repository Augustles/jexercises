
## stackoverflow vote top 100~
1. how do javascript closures work
http://stackoverflow.com/questions/111102/how-do-javascript-closures-work
2. how can i make a redirect page using jQuery
window.location.replace("http://stackoverflow.com")
window.location.href("http://stackoverflow.com")
3. what does 'use strict' do in javascript, and what is the reasoning behind it
4. checking if an element is hidden
(element).is(":visible")
5. how can i check if one string contains another substring
s = "hello"
s.indexOf('lo') //返回切片位置
6. var functionName = function(){} Vs. function functionName(){}
http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname
7. does it matter which equals operator (==vs===) i use javascript comparisions
// 用===比较
8. how can i get query string values in javascript
http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
9. can i comment a json file
{
    "_comment":"comment text goes here..",
}
10. href attribute for javascript links '#' or javascript:void(0)
// 用<a href="javascript:void(0)" onclick="myJsFunc();">Run JavaScript Code</a>
11. what is the most efficient way to clone an object
jQuery.extend()
http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object
12. include a javascript file another javascript file
.getScript()
http://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file
13. check checkbox checked property
http://stackoverflow.com/questions/901712/check-checkbox-checked-property
14. how to remove a property from javascript object
delete obj.regex;
http://stackoverflow.com/questions/208105/how-to-remove-a-property-from-a-javascript-object
15. how do you get a timestamp in JavaScript
Date.now()
16. why does google prpend while(1); to their json responses
http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
17. remove a specific element from an array
var l = [3,5,7,'august','tom','jack']
var i = indexOf('7')
l.splice(i)
18. for-each over an array in javascript
1).
l.forEach(function(entry) {
    console.log(entry);
})
2).
for (var x=0;x<l.length;x++) {
    console.log(l[x]);
}
3).
for (var key in l) {
    console.log(key);
}
4).
for (var y of l) {
    console.log(y);
}
19. create guid/uuid in JavaScript

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
var uuid = guid();
20. event.preventDefault()vs. return false
http://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false
21. how to decide when to use node.js
http://stackoverflow.com/questions/5062614/how-to-decide-when-to-use-node-js
22. how can i upload files asynchronously
<form enctype="multipart/form-data">
    <input name="file" type="file" />
    <input type="button" value="upload" />
</form>
http://stackoverflow.com/questions/166221/how-can-i-upload-files-asynchronously
23. array.contains(obj) in javascript
http://stackoverflow.com/questions/237104/array-containsobj-in-javascript
24. what is the difference between call and apply
http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply
25.$(this) selector and children
http://stackoverflow.com/questions/306583/this-selector-and-children
26. validate decimal numbers in JavaScript isNumeric()
http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
27. detecting an undefined object property
if (typeof(x) === "undefined") {
    alert('x is undefined'); // console.log('x is undefined')
}
28. validate email address in JavaScript
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
29. capitalize the first letter of string in javascript
function capital(string) { 
  return string.charAt(0).toUpperCase() + string.slice(1) // this
}
30. encode url in javascript
// escape() will not encode: @*/+
// encodeURI() will not encode: ~!@#$&*()=:/,;?+'
// encodeURIComponent() will not encode: ~!*()'
31. how do i get started with node.js
http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js
32. is it possible to apply css to half of a character
http://stackoverflow.com/questions/23569441/is-it-possible-to-apply-css-to-half-of-a-character
33. how do i copy the clipboard in javascript
function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}
34. get current url in web brower
window.location.href
document.URL
35. add table row in jQuery
http://stackoverflow.com/questions/171027/add-table-row-in-jquery
36. appending to array(list)
l.push('ty')
37. prop() vs. attr()
http://stackoverflow.com/questions/5874652/prop-vs-attr
38. how does javascript .prototype work
http://stackoverflow.com/questions/572897/how-does-javascript-prototype-work
39. change an element s class with javascript
document.getElementById('myelement').className = 'class'
$('#myelement').addClass('class') // jQuery
$('#myelement').removeClass('class')
40. how to return the response from an asyncronous call
http://stackoverflow.com/questions/14220321/how-to-return-the-response-from-an-asynchronous-call
41. how to empty an array in javascript
l = []
42. what is jsonp all about
http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about
43. get selected text from drop-down list(select box) using jQuery
$("#yourdropdownid option:selected").text()
44. how does facebook disable the brower s integrateed developer tools
http://stackoverflow.com/questions/21692646/how-does-facebook-disable-the-browsers-integrated-developer-tools
45. how do you check for an empty string in javascript
l.length === 0
46. loop through array in javascript
47. storing objects in html5 localstorage
http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
48. what is the 'new' keyword in javascript
http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript
49. replacing all occurrences of a string in javascript
s = 'abcd23ab12abc9'
s.replace(/abcd/g,'abc')
re = /^\d+$/
re.test(s)
http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
50. checking if an array key exists in a javascript object or array
http://stackoverflow.com/questions/1098040/checking-if-an-array-key-exists-in-a-javascript-object-or-array
