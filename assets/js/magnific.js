!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(d){function e(){}function u(e,t){g.ev.on(n+e+w,t)}function p(e,t,n,i){var o=document.createElement("div");return o.className="mfp-"+e,n&&(o.innerHTML=n),i?t&&t.appendChild(o):(o=d(o),t&&o.appendTo(t)),o}function m(e,t){g.ev.triggerHandler(n+e,t),g.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),g.st.callbacks[e]&&g.st.callbacks[e].apply(g,d.isArray(t)?t:[t]))}function f(e){return e===t&&g.currTemplate.closeBtn||(g.currTemplate.closeBtn=d(g.st.closeMarkup.replace("%title%",g.st.tClose)),t=e),g.currTemplate.closeBtn}function r(){d.magnificPopup.instance||((g=new e).init(),d.magnificPopup.instance=g)}var g,i,h,o,v,t,l="Close",c="BeforeClose",y="MarkupParse",C="Open",a="Change",n="mfp",w="."+n,b="mfp-ready",s="mfp-removing",I="mfp-prevent-close",x=!!window.jQuery,k=d(window);e.prototype={constructor:e,init:function(){var e=navigator.appVersion;g.isLowIE=g.isIE8=document.all&&!document.addEventListener,g.isAndroid=/android/gi.test(e),g.isIOS=/iphone|ipad|ipod/gi.test(e),g.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),g.probablyMobile=g.isAndroid||g.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),h=d(document),g.popupsCache={}},open:function(e){if(!1===e.isObj){g.items=e.items.toArray(),g.index=0;for(var t,n=e.items,i=0;i<n.length;i++)if((t=n[i]).parsed&&(t=t.el[0]),t===e.el[0]){g.index=i;break}}else g.items=d.isArray(e.items)?e.items:[e.items],g.index=e.index||0;if(!g.isOpen){g.types=[],v="",e.mainEl&&e.mainEl.length?g.ev=e.mainEl.eq(0):g.ev=h,e.key?(g.popupsCache[e.key]||(g.popupsCache[e.key]={}),g.currTemplate=g.popupsCache[e.key]):g.currTemplate={},g.st=d.extend(!0,{},d.magnificPopup.defaults,e),g.fixedContentPos="auto"===g.st.fixedContentPos?!g.probablyMobile:g.st.fixedContentPos,g.st.modal&&(g.st.closeOnContentClick=!1,g.st.closeOnBgClick=!1,g.st.showCloseBtn=!1,g.st.enableEscapeKey=!1),g.bgOverlay||(g.bgOverlay=p("bg").on("click"+w,function(){g.close()}),g.wrap=p("wrap").attr("tabindex",-1).on("click"+w,function(e){g._checkIfClose(e.target)&&g.close()}),g.container=p("container",g.wrap)),g.contentContainer=p("content"),g.st.preloader&&(g.preloader=p("preloader",g.container,g.st.tLoading));var o=d.magnificPopup.modules;for(i=0;i<o.length;i++){var r=(r=o[i]).charAt(0).toUpperCase()+r.slice(1);g["init"+r].call(g)}m("BeforeOpen"),g.st.showCloseBtn&&(g.st.closeBtnInside?(u(y,function(e,t,n,i){n.close_replaceWith=f(i.type)}),v+=" mfp-close-btn-in"):g.wrap.append(f())),g.st.alignTop&&(v+=" mfp-align-top"),g.fixedContentPos?g.wrap.css({overflow:g.st.overflowY,overflowX:"hidden",overflowY:g.st.overflowY}):g.wrap.css({top:k.scrollTop(),position:"absolute"}),!1!==g.st.fixedBgPos&&("auto"!==g.st.fixedBgPos||g.fixedContentPos)||g.bgOverlay.css({height:h.height(),position:"absolute"}),g.st.enableEscapeKey&&h.on("keyup"+w,function(e){27===e.keyCode&&g.close()}),k.on("resize"+w,function(){g.updateSize()}),g.st.closeOnContentClick||(v+=" mfp-auto-cursor"),v&&g.wrap.addClass(v);var a,s=g.wH=k.height(),l={};g.fixedContentPos&&g._hasScrollBar(s)&&((a=g._getScrollbarSize())&&(l.marginRight=a)),g.fixedContentPos&&(g.isIE7?d("body, html").css("overflow","hidden"):l.overflow="hidden");var c=g.st.mainClass;return g.isIE7&&(c+=" mfp-ie7"),c&&g._addClassToMFP(c),g.updateItemHTML(),m("BuildControls"),d("html").css(l),g.bgOverlay.add(g.wrap).prependTo(g.st.prependTo||d(document.body)),g._lastFocusedEl=document.activeElement,setTimeout(function(){g.content?(g._addClassToMFP(b),g._setFocus()):g.bgOverlay.addClass(b),h.on("focusin"+w,g._onFocusIn)},16),g.isOpen=!0,g.updateSize(s),m(C),e}g.updateItemHTML()},close:function(){g.isOpen&&(m(c),g.isOpen=!1,g.st.removalDelay&&!g.isLowIE&&g.supportsTransition?(g._addClassToMFP(s),setTimeout(function(){g._close()},g.st.removalDelay)):g._close())},_close:function(){m(l);var e,t=s+" "+b+" ";g.bgOverlay.detach(),g.wrap.detach(),g.container.empty(),g.st.mainClass&&(t+=g.st.mainClass+" "),g._removeClassFromMFP(t),g.fixedContentPos&&(e={marginRight:""},g.isIE7?d("body, html").css("overflow",""):e.overflow="",d("html").css(e)),h.off("keyup.mfp focusin"+w),g.ev.off(w),g.wrap.attr("class","mfp-wrap").removeAttr("style"),g.bgOverlay.attr("class","mfp-bg"),g.container.attr("class","mfp-container"),!g.st.showCloseBtn||g.st.closeBtnInside&&!0!==g.currTemplate[g.currItem.type]||g.currTemplate.closeBtn&&g.currTemplate.closeBtn.detach(),g.st.autoFocusLast&&g._lastFocusedEl&&d(g._lastFocusedEl).focus(),g.currItem=null,g.content=null,g.currTemplate=null,g.prevHeight=0,m("AfterClose")},updateSize:function(e){var t,n;g.isIOS?(t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t,g.wrap.css("height",n),g.wH=n):g.wH=e||k.height(),g.fixedContentPos||g.wrap.css("height",g.wH),m("Resize")},updateItemHTML:function(){var e=g.items[g.index];g.contentContainer.detach(),g.content&&g.content.detach(),e.parsed||(e=g.parseEl(g.index));var t,n=e.type;m("BeforeChange",[g.currItem?g.currItem.type:"",n]),g.currItem=e,g.currTemplate[n]||(t=!!g.st[n]&&g.st[n].markup,m("FirstMarkupParse",t),g.currTemplate[n]=!t||d(t)),o&&o!==e.type&&g.container.removeClass("mfp-"+o+"-holder");var i=g["get"+n.charAt(0).toUpperCase()+n.slice(1)](e,g.currTemplate[n]);g.appendContent(i,n),e.preloaded=!0,m(a,e),o=e.type,g.container.prepend(g.contentContainer),m("AfterChange")},appendContent:function(e,t){(g.content=e)?g.st.showCloseBtn&&g.st.closeBtnInside&&!0===g.currTemplate[t]?g.content.find(".mfp-close").length||g.content.append(f()):g.content=e:g.content="",m("BeforeAppend"),g.container.addClass("mfp-"+t+"-holder"),g.contentContainer.append(g.content)},parseEl:function(e){var t,n=g.items[e];if((n=n.tagName?{el:d(n)}:(t=n.type,{data:n,src:n.src})).el){for(var i=g.types,o=0;o<i.length;o++)if(n.el.hasClass("mfp-"+i[o])){t=i[o];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=t||g.st.type||"inline",n.index=e,n.parsed=!0,g.items[e]=n,m("ElementParse",n),g.items[e]},addGroup:function(t,n){function e(e){e.mfpEl=this,g._openClick(e,t,n)}var i="click.magnificPopup";(n=n||{}).mainEl=t,n.items?(n.isObj=!0,t.off(i).on(i,e)):(n.isObj=!1,n.delegate?t.off(i).on(i,n.delegate,e):(n.items=t).off(i).on(i,e))},_openClick:function(e,t,n){if((void 0!==n.midClick?n.midClick:d.magnificPopup.defaults.midClick)||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var i=void 0!==n.disableOn?n.disableOn:d.magnificPopup.defaults.disableOn;if(i)if(d.isFunction(i)){if(!i.call(g))return!0}else if(k.width()<i)return!0;e.type&&(e.preventDefault(),g.isOpen&&e.stopPropagation()),n.el=d(e.mfpEl),n.delegate&&(n.items=t.find(n.delegate)),g.open(n)}},updateStatus:function(e,t){var n;g.preloader&&(i!==e&&g.container.removeClass("mfp-s-"+i),t||"loading"!==e||(t=g.st.tLoading),m("UpdateStatus",n={status:e,text:t}),e=n.status,t=n.text,g.preloader.html(t),g.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),g.container.addClass("mfp-s-"+e),i=e)},_checkIfClose:function(e){if(!d(e).hasClass(I)){var t=g.st.closeOnContentClick,n=g.st.closeOnBgClick;if(t&&n)return!0;if(!g.content||d(e).hasClass("mfp-close")||g.preloader&&e===g.preloader[0])return!0;if(e===g.content[0]||d.contains(g.content[0],e)){if(t)return!0}else if(n&&d.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){g.bgOverlay.addClass(e),g.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),g.wrap.removeClass(e)},_hasScrollBar:function(e){return(g.isIE7?h.height():document.body.scrollHeight)>(e||k.height())},_setFocus:function(){(g.st.focus?g.content.find(g.st.focus).eq(0):g.wrap).focus()},_onFocusIn:function(e){return e.target===g.wrap[0]||d.contains(g.wrap[0],e.target)?void 0:(g._setFocus(),!1)},_parseMarkup:function(o,e,t){var r;t.data&&(e=d.extend(t.data,e)),m(y,[o,e,t]),d.each(e,function(e,t){if(void 0===t||!1===t)return!0;var n,i;1<(r=e.split("_")).length?0<(n=o.find(w+"-"+r[0])).length&&("replaceWith"===(i=r[1])?n[0]!==t[0]&&n.replaceWith(t):"img"===i?n.is("img")?n.attr("src",t):n.replaceWith(d("<img>").attr("src",t).attr("class",n.attr("class"))):n.attr(r[1],t)):o.find(w+"-"+e).html(t)})},_getScrollbarSize:function(){var e;return void 0===g.scrollbarSize&&((e=document.createElement("div")).style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),g.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),g.scrollbarSize}},d.magnificPopup={instance:null,proto:e.prototype,modules:[],open:function(e,t){return r(),(e=e?d.extend(!0,{},e):{}).isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return d.magnificPopup.instance&&d.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(d.magnificPopup.defaults[e]=t.options),d.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},d.fn.magnificPopup=function(e){r();var t,n,i,o=d(this);return"string"==typeof e?"open"===e?(t=x?o.data("magnificPopup"):o[0].magnificPopup,n=parseInt(arguments[1],10)||0,i=t.items?t.items[n]:(i=o,t.delegate&&(i=i.find(t.delegate)),i.eq(n)),g._openClick({mfpEl:i},o,t)):g.isOpen&&g[e].apply(g,Array.prototype.slice.call(arguments,1)):(e=d.extend(!0,{},e),x?o.data("magnificPopup",e):o[0].magnificPopup=e,g.addGroup(o,e)),o};function T(){S&&(P.after(S.addClass(_)).detach(),S=null)}var _,P,S,E="inline";d.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){g.types.push(E),u(l+"."+E,function(){T()})},getInline:function(e,t){if(T(),e.src){var n,i=g.st.inline,o=d(e.src);return o.length?((n=o[0].parentNode)&&n.tagName&&(P||(_=i.hiddenClass,P=p(_),_="mfp-"+_),S=o.after(P).detach().removeClass(_)),g.updateStatus("ready")):(g.updateStatus("error",i.tNotFound),o=d("<div>")),e.inlineElement=o}return g.updateStatus("ready"),g._parseMarkup(t,{},e),t}}});function z(){M&&d(document.body).removeClass(M)}function O(){z(),g.req&&g.req.abort()}var M,B="ajax";d.magnificPopup.registerModule(B,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){g.types.push(B),M=g.st.ajax.cursor,u(l+"."+B,O),u("BeforeChange."+B,O)},getAjax:function(o){M&&d(document.body).addClass(M),g.updateStatus("loading");var e=d.extend({url:o.src,success:function(e,t,n){var i={data:e,xhr:n};m("ParseAjax",i),g.appendContent(d(i.data),B),o.finished=!0,z(),g._setFocus(),setTimeout(function(){g.wrap.addClass(b)},16),g.updateStatus("ready"),m("AjaxContentAdded")},error:function(){z(),o.finished=o.loadError=!0,g.updateStatus("error",g.st.ajax.tError.replace("%url%",o.src))}},g.st.ajax.settings);return g.req=d.ajax(e),""}}});var L;d.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=g.st.image,t=".image";g.types.push("image"),u(C+t,function(){"image"===g.currItem.type&&e.cursor&&d(document.body).addClass(e.cursor)}),u(l+t,function(){e.cursor&&d(document.body).removeClass(e.cursor),k.off("resize"+w)}),u("Resize"+t,g.resizeImage),g.isLowIE&&u("AfterChange",g.resizeImage)},resizeImage:function(){var e,t=g.currItem;t&&t.img&&g.st.image.verticalFit&&(e=0,g.isLowIE&&(e=parseInt(t.img.css("padding-top"),10)+parseInt(t.img.css("padding-bottom"),10)),t.img.css("max-height",g.wH-e))},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,L&&clearInterval(L),e.isCheckingImgSize=!1,m("ImageHasSize",e),e.imgHidden&&(g.content&&g.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(t){var n=0,i=t.img[0],o=function(e){L&&clearInterval(L),L=setInterval(function(){return 0<i.naturalWidth?void g._onImageHasSize(t):(200<n&&clearInterval(L),void(3===++n?o(10):40===n?o(50):100===n&&o(500)))},e)};o(1)},getImage:function(e,t){var n,i=0,o=function(){e&&(e.img[0].complete?(e.img.off(".mfploader"),e===g.currItem&&(g._onImageHasSize(e),g.updateStatus("ready")),e.hasSize=!0,e.loaded=!0,m("ImageLoadComplete")):++i<200?setTimeout(o,100):r())},r=function(){e&&(e.img.off(".mfploader"),e===g.currItem&&(g._onImageHasSize(e),g.updateStatus("error",a.tError.replace("%url%",e.src))),e.hasSize=!0,e.loaded=!0,e.loadError=!0)},a=g.st.image,s=t.find(".mfp-img");return s.length&&((n=document.createElement("img")).className="mfp-img",e.el&&e.el.find("img").length&&(n.alt=e.el.find("img").attr("alt")),e.img=d(n).on("load.mfploader",o).on("error.mfploader",r),n.src=e.src,s.is("img")&&(e.img=e.img.clone()),0<(n=e.img[0]).naturalWidth?e.hasSize=!0:n.width||(e.hasSize=!1)),g._parseMarkup(t,{title:function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=g.st.image.titleSrc;if(t){if(d.isFunction(t))return t.call(g,e);if(e.el)return e.el.attr(t)||""}return""}(e),img_replaceWith:e.img},e),g.resizeImage(),e.hasSize?(L&&clearInterval(L),e.loadError?(t.addClass("mfp-loading"),g.updateStatus("error",a.tError.replace("%url%",e.src))):(t.removeClass("mfp-loading"),g.updateStatus("ready"))):(g.updateStatus("loading"),e.loading=!0,e.hasSize||(e.imgHidden=!0,t.addClass("mfp-loading"),g.findImageSize(e))),t}}});var H;d.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,t,n,i,o,r,a=g.st.zoom,s=".zoom";a.enabled&&g.supportsTransition&&(i=a.duration,o=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+a.duration/1e3+"s "+a.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},o="transition";return i["-webkit-"+o]=i["-moz-"+o]=i["-o-"+o]=i[o]=n,t.css(i),t},r=function(){g.content.css("visibility","visible")},u("BuildControls"+s,function(){if(g._allowZoom()){if(clearTimeout(t),g.content.css("visibility","hidden"),!(e=g._getItemToZoom()))return void r();(n=o(e)).css(g._getOffset()),g.wrap.append(n),t=setTimeout(function(){n.css(g._getOffset(!0)),t=setTimeout(function(){r(),setTimeout(function(){n.remove(),e=n=null,m("ZoomAnimationEnded")},16)},i)},16)}}),u(c+s,function(){if(g._allowZoom()){if(clearTimeout(t),g.st.removalDelay=i,!e){if(!(e=g._getItemToZoom()))return;n=o(e)}n.css(g._getOffset(!0)),g.wrap.append(n),g.content.css("visibility","hidden"),setTimeout(function(){n.css(g._getOffset())},16)}}),u(l+s,function(){g._allowZoom()&&(r(),n&&n.remove(),e=null)}))},_allowZoom:function(){return"image"===g.currItem.type},_getItemToZoom:function(){return!!g.currItem.hasSize&&g.currItem.img},_getOffset:function(e){var t=e?g.currItem.img:g.st.zoom.opener(g.currItem.el||g.currItem),n=t.offset(),i=parseInt(t.css("padding-top"),10),o=parseInt(t.css("padding-bottom"),10);n.top-=d(window).scrollTop()-i;var r={width:t.width(),height:(x?t.innerHeight():t[0].offsetHeight)-o-i};return void 0===H&&(H=void 0!==document.createElement("p").style.MozTransform),H?r["-moz-transform"]=r.transform="translate("+n.left+"px,"+n.top+"px)":(r.left=n.left,r.top=n.top),r}}});function A(e){var t;!g.currTemplate[F]||(t=g.currTemplate[F].find("iframe")).length&&(e||(t[0].src="//about:blank"),g.isIE8&&t.css("display",e?"block":"none"))}var F="iframe";d.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){g.types.push(F),u("BeforeChange",function(e,t,n){t!==n&&(t===F?A():n===F&&A(!0))}),u(l+"."+F,function(){A()})},getIframe:function(e,t){var n=e.src,i=g.st.iframe;d.each(i.patterns,function(){return-1<n.indexOf(this.index)?(this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1):void 0});var o={};return i.srcAction&&(o[i.srcAction]=n),g._parseMarkup(t,o,e),g.updateStatus("ready"),t}}});function j(e){var t=g.items.length;return t-1<e?e-t:e<0?t+e:e}function N(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)}d.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var r=g.st.gallery,e=".mfp-gallery";return g.direction=!0,!(!r||!r.enabled)&&(v+=" mfp-gallery",u(C+e,function(){r.navigateByImgClick&&g.wrap.on("click"+e,".mfp-img",function(){return 1<g.items.length?(g.next(),!1):void 0}),h.on("keydown"+e,function(e){37===e.keyCode?g.prev():39===e.keyCode&&g.next()})}),u("UpdateStatus"+e,function(e,t){t.text&&(t.text=N(t.text,g.currItem.index,g.items.length))}),u(y+e,function(e,t,n,i){var o=g.items.length;n.counter=1<o?N(r.tCounter,i.index,o):""}),u("BuildControls"+e,function(){var e,t,n;1<g.items.length&&r.arrows&&!g.arrowLeft&&(e=r.arrowMarkup,t=g.arrowLeft=d(e.replace(/%title%/gi,r.tPrev).replace(/%dir%/gi,"left")).addClass(I),n=g.arrowRight=d(e.replace(/%title%/gi,r.tNext).replace(/%dir%/gi,"right")).addClass(I),t.click(function(){g.prev()}),n.click(function(){g.next()}),g.container.append(t.add(n)))}),u(a+e,function(){g._preloadTimeout&&clearTimeout(g._preloadTimeout),g._preloadTimeout=setTimeout(function(){g.preloadNearbyImages(),g._preloadTimeout=null},16)}),void u(l+e,function(){h.off(e),g.wrap.off("click"+e),g.arrowRight=g.arrowLeft=null}))},next:function(){g.direction=!0,g.index=j(g.index+1),g.updateItemHTML()},prev:function(){g.direction=!1,g.index=j(g.index-1),g.updateItemHTML()},goTo:function(e){g.direction=e>=g.index,g.index=e,g.updateItemHTML()},preloadNearbyImages:function(){for(var e=g.st.gallery.preload,t=Math.min(e[0],g.items.length),n=Math.min(e[1],g.items.length),i=1;i<=(g.direction?n:t);i++)g._preloadItem(g.index+i);for(i=1;i<=(g.direction?t:n);i++)g._preloadItem(g.index-i)},_preloadItem:function(e){var t;e=j(e),g.items[e].preloaded||((t=g.items[e]).parsed||(t=g.parseEl(e)),m("LazyLoad",t),"image"===t.type&&(t.img=d('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,m("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0)}}});var W="retina";d.magnificPopup.registerModule(W,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){var n,i;1<window.devicePixelRatio&&(n=g.st.retina,i=n.ratio,1<(i=isNaN(i)?i():i)&&(u("ImageHasSize."+W,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),u("ElementParse."+W,function(e,t){t.src=n.replaceSrc(t,i)})))}}}),r()});