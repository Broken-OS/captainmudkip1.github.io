function reloadWeb() {
    src = document.getElementById("textbox").value;
    //src.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    //src = DOMPurify.sanitize(src);
    document.write('<title>Website fixer</title>');
    document.write('<link rel="shortcut icon" href="/img/gear.png">');
    document.write('<style>iframe {position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;}</style>');
    document.write('<iframe id="iframe" src="' + src + '" frameborder=0></iframe>');
}
