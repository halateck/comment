<script type='text/javascript'>
//<![CDATA[
function gbt(d,e){var b=e.split("#"),c="";for(let a=0;a<b.length;a++)if(b[a].indexOf(d)> -1){var f=b[a].indexOf("=(")+2,g=b[a].indexOf(")");c=b[a].substring(f,g);break}return c}
function hamlink(d){var b=d.link,c="";for(let a=0;a<b.length;a++)"alternate"==b[a].rel&&(c=b[a].href);return c}
function hamimg(b){var a=b.author[0].gd$image.src;return a.indexOf("blogblog")> -1?"https://blogger.googleusercontent.com/img/a/AVvXsEiRsAp7PnDA2d9xSbFDTuDmDwkAkY3Q2AaF-lUvP6cQMh-9beaJUiHfs_XerXnl6Gjwdq08nsevBWzVn26cG_TBtkg5SehkdPujknwkUPB78JK4R9UNKWLXmnXikfdd15ktJFfEB1V8pX_zGQGL04-XmG_RIY-wlwJjcrQQWwJhJ7ZR_0GlrlVdMgyy=s16000":"https:"+a}
function hamdate(b){var a=b.published.$t.substring(0,10).split("-");return a[2]+" "+["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0627\u0628\u0631\u064A\u0644","\u0645\u0627\u064A","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648\u0632","\u063A\u0634\u062A","\u0634\u062A\u0646\u0628\u0631","\u0627\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0646\u0628\u0631","\u062F\u062C\u0646\u0628\u0631"][parseInt(a[1])]+" "+a[0]}
function exgetcomments(b,a){$.ajax({type:"Get",url:"/feeds/comments/summary?alt=json&max-results="+a,dataType:"jsonp",success:function(f){var c=f.feed.entry,d="";for(let a=0;a<c.length;a++){var e=c[a].author[0].name.$t,g=hamimg(c[a]),h=c[a].title.$t,i=hamlink(c[a]),j=hamdate(c[a]);d+="<div class='cm-item'><a class='Nar' target='_blank' href='"+i+"'><div class='cm-right'> <div class='cm-logo'> <img src='"+g+"' alt='"+e+"'> </div></div><div class='cm-left'> <div15><div class='cm-pop'><span class='auname'>"+e+"</span></div><span class='cm-date'>"+j+"</span> </div15><p class='cm-data'>"+h+"</p></div></a></div>"}b.html(d)}})}
$(".Nar").each(function() {
var a = $(this),
b = a.html().trim(),
d = $(window),
e = parseInt(gbt("num", b)),
c = gbt("lazy", b);
a.html("<div class='hload'></div>"), a.show(), "true" == c || "yes" == c ? d.on("scroll load", function b() {
d.scrollTop() + d.height() > a.offset().top && (exgetcomments(a, e), d.off("scroll load", b))
}) : exgetcomments(a, e)
})
//]]>
</script>
