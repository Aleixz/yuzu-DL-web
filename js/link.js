document.getElementById("date").textContent = "12/20";// 更新日期
document.getElementById("date").style.color = "#41ff00";

document.getElementById("version").textContent = "V166";// 更新版本号
document.getElementById("version").style.color = "#ebff00";

// 每日更新版链接
document.getElementById("downloadButton1").addEventListener("click", function() {
  redirect('https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTJISE4xaWgzbHNqJnBhc3NDb2RlPWI1a3o.jpg');
});
// 正式版链接
document.getElementById("downloadButton2").addEventListener("click", function() {
  redirect('https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTVTUk8xaWNycTdjJnBhc3NDb2RlPWFhZ3k.jpg');
});
// EA版链接
document.getElementById("downloadButton3").addEventListener("click", function() {
  redirect('https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTRGUTMxaWN1Z3hnJnBhc3NDb2RlPWFuMGI.jpg');
});
// 密钥链接
document.getElementById("downloadButton4").addEventListener("click", function() {
  redirect('https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaThQWTYxaWN1dzdn.jpg');
});
// 888以下
// GPU链接1
document.getElementById("bilibiliLink1").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTVNRk8xaWN0Zjhq.jpg";
// GPU链接2
document.getElementById("bilibiliLink2").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaVJHWVIxaWRkenViJnBhc3NDb2RlPQ.jpg";
// GPU链接3
document.getElementById("bilibiliLink3").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaU5FNlMxaWRpNXpn.jpg";
// GPU链接4
document.getElementById("bilibiliLink4").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTJIQksxaWRpNjFpIA.jpg";
// 8GEN1以上
// GPU链接1
document.getElementById("bilibiliLink5").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaTVNRk8xaWN0Zjhq.jpg";
// GPU链接2
document.getElementById("bilibiliLink6").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaVJHWVIxaWRkenViJnBhc3NDb2RlPQ.jpg";
// GPU链接3
document.getElementById("bilibiliLink7").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUlDNDYxaWRpNXBn.jpg";
// GPU链接4
document.getElementById("bilibiliLink8").href = "https://dlink.host/lanzou/aHR0cHM6Ly93d3AubGFuem91cC5jb20vaUkyWk4xaWRpNWhp.jpg";

if (typeof Object.assign !== 'function') {
  Object.assign = function(target) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}