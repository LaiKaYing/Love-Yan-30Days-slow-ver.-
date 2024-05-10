let divTyping = document.getElementById('content_1');
let a = 0;
let timer = 0;
let str = "没想到已经一个月了哦，小宝贝！<br>阶段性小胜利！<br>下面是照片回顾！";

function typing() {
    if (a <= str.length) {
        divTyping.innerHTML = str.slice(0, a++) + '_';
        timer = setTimeout(typing, 150);
    } else {
        divTyping.innerHTML = str; // 结束打字,移除 _ 光标
        clearTimeout(timer);
        setTimeout(changeContent, 3000); // 延时3秒后调用changeContent函数
    }
}

function changeContent() {
    document.getElementById("process").style.display = 'none'; // 隐藏当前GIF
    document.getElementById("content_1").style.display = 'none'; // 隐藏当前打字框
    showNextGIF();
}

function showNextGIF() {
    let processDiv = document.getElementById("process");
    processDiv.style.display = 'block'; // 确保div是可见的
    processDiv.style.backgroundImage = "url('./output_with_transitions_1080_slow.gif')"; // 更换背景图为第二个GIF
    processDiv.classList.add('large_gif');
}

window.onload = function() {
    typing();
    setTimeout(function() {
        if (a <= str.length) { // 判断文字是否打印完毕
            document.getElementById("process").style.backgroundImage = "url('./安静.png')"; // 文字未打印完，更换为安静.png
        }
    }, 5100); // 5100ms后检查并可能更换背景图
}
