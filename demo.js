// demo code

'use strict' // 避免RefernceError错误
console.log('hello');
var x = 3;
var y = 'hello word!';
// 定义函数
function add(x, y) {
    console.log(x + y);
}
add(9, 2)
    // 条件语句
if (x === 1) {
    console.log('1 was found'); // alert('not found')
} else if (x === 2) {
    console.log('2 was found');
} else {
    console.log('not 1 or 2');
}
console.log(y);
// 循环语句
for (var x = 0; x < 8; x++) { // x<8需写中间
    console.log(x);
}
// 遍历
for (var i in y) {
    console.log(y[i]); // 相当于python中遍历dict
}
console.log(y.slice(2, -1)); // 切片
console.log(y.replace('hello', 'hi'));



try {
    for (var lastpass_iter = 0; lastpass_iter < document.forms.length; lastpass_iter++) {
        var lastpass_f = document.forms[lastpass_iter];
        if (typeof(lastpass_f.lpsubmitorig) == "undefined") {
            if (typeof(lastpass_f.submit) == "function") {
                lastpass_f.lpsubmitorig = lastpass_f.submit;
                lastpass_f.submit = function() {
                    var form = this;
                    try {
                        if (document.documentElement && 'createEvent' in document) {
                            var forms = document.getElementsByTagName('form');
                            for (var i = 0; i < forms.length; ++i)
                                if (forms[i] == form) {
                                    var element = document.createElement('lpformsubmitdataelement');
                                    element.setAttribute('formnum', i);
                                    element.setAttribute('from', 'submithook');
                                    document.documentElement.appendChild(element);
                                    var evt = document.createEvent('Events');
                                    evt.initEvent('lpformsubmit', true, false);
                                    element.dispatchEvent(evt);
                                    break;
                                }
                        }
                    } catch (e) {}
                    try {
                        form.lpsubmitorig();
                    } catch (e) {}
                }
            }
        }
    }
} catch (e) {}
