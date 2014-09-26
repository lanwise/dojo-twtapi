/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
;
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=3dd0f97a97628cf6788d)
 * Config saved to config.json and https://gist.github.com/3dd0f97a97628cf6788d
 */
;if(typeof jQuery==="undefined"){throw new Error("Bootstrap's JavaScript requires jQuery")}+function(e){var d='[data-dismiss="alert"]';var b=function(f){e(f).on("click",d,this.close)};b.VERSION="3.2.0";b.prototype.close=function(j){var i=e(this);var g=i.attr("data-target");if(!g){g=i.attr("href");g=g&&g.replace(/.*(?=#[^\s]*$)/,"")}var h=e(g);if(j){j.preventDefault()}if(!h.length){h=i.hasClass("alert")?i:i.parent()}h.trigger(j=e.Event("close.bs.alert"));if(j.isDefaultPrevented()){return}h.removeClass("in");function f(){h.detach().trigger("closed.bs.alert").remove()}e.support.transition&&h.hasClass("fade")?h.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()};function c(f){return this.each(function(){var h=e(this);var g=h.data("bs.alert");if(!g){h.data("bs.alert",(g=new b(this)))}if(typeof f=="string"){g[f].call(h)}})}var a=e.fn.alert;e.fn.alert=c;e.fn.alert.Constructor=b;e.fn.alert.noConflict=function(){e.fn.alert=a;return this};e(document).on("click.bs.alert.data-api",d,b.prototype.close)}(jQuery);+function(d){var b=function(f,e){this.$element=d(f);this.options=d.extend({},b.DEFAULTS,e);this.isLoading=false};b.VERSION="3.2.0";b.DEFAULTS={loadingText:"loading..."};b.prototype.setState=function(g){var i="disabled";var e=this.$element;var h=e.is("input")?"val":"html";var f=e.data();g=g+"Text";if(f.resetText==null){e.data("resetText",e[h]())}e[h](f[g]==null?this.options[g]:f[g]);setTimeout(d.proxy(function(){if(g=="loadingText"){this.isLoading=true;e.addClass(i).attr(i,i)}else{if(this.isLoading){this.isLoading=false;e.removeClass(i).removeAttr(i)}}},this),0)};b.prototype.toggle=function(){var f=true;var e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var g=this.$element.find("input");if(g.prop("type")=="radio"){if(g.prop("checked")&&this.$element.hasClass("active")){f=false}else{e.find(".active").removeClass("active")}}if(f){g.prop("checked",!this.$element.hasClass("active")).trigger("change")}}if(f){this.$element.toggleClass("active")}};function c(e){return this.each(function(){var h=d(this);var g=h.data("bs.button");var f=typeof e=="object"&&e;if(!g){h.data("bs.button",(g=new b(this,f)))}if(e=="toggle"){g.toggle()}else{if(e){g.setState(e)}}})}var a=d.fn.button;d.fn.button=c;d.fn.button.Constructor=b;d.fn.button.noConflict=function(){d.fn.button=a;return this};d(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(g){var f=d(g.target);if(!f.hasClass("btn")){f=f.closest(".btn")}c.call(f,"toggle");g.preventDefault()})}(jQuery);+function(c){var d=function(f,e){this.$element=c(f).on("keydown.bs.carousel",c.proxy(this.keydown,this));this.$indicators=this.$element.find(".carousel-indicators");this.options=e;this.paused=this.sliding=this.interval=this.$active=this.$items=null;this.options.pause=="hover"&&this.$element.on("mouseenter.bs.carousel",c.proxy(this.pause,this)).on("mouseleave.bs.carousel",c.proxy(this.cycle,this))};d.VERSION="3.2.0";d.DEFAULTS={interval:5000,pause:"hover",wrap:true};d.prototype.keydown=function(f){switch(f.which){case 37:this.prev();break;case 39:this.next();break;default:return}f.preventDefault()};d.prototype.cycle=function(f){f||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(c.proxy(this.next,this),this.options.interval));return this};d.prototype.getItemIndex=function(e){this.$items=e.parent().children(".item");return this.$items.index(e||this.$active)};d.prototype.to=function(g){var f=this;var e=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(g>(this.$items.length-1)||g<0){return}if(this.sliding){return this.$element.one("slid.bs.carousel",function(){f.to(g)})}if(e==g){return this.pause().cycle()}return this.slide(g>e?"next":"prev",c(this.$items[g]))};d.prototype.pause=function(f){f||(this.paused=true);if(this.$element.find(".next, .prev").length&&c.support.transition){this.$element.trigger(c.support.transition.end);this.cycle(true)}this.interval=clearInterval(this.interval);return this};d.prototype.next=function(){if(this.sliding){return}return this.slide("next")};d.prototype.prev=function(){if(this.sliding){return}return this.slide("prev")};d.prototype.slide=function(m,h){var p=this.$element.find(".item.active");var f=h||p[m]();var k=this.interval;var n=m=="next"?"left":"right";var i=m=="next"?"first":"last";var j=this;if(!f.length){if(!this.options.wrap){return}f=this.$element.find(".item")[i]()}if(f.hasClass("active")){return(this.sliding=false)}var l=f[0];var e=c.Event("slide.bs.carousel",{relatedTarget:l,direction:n});this.$element.trigger(e);if(e.isDefaultPrevented()){return}this.sliding=true;k&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");var g=c(this.$indicators.children()[this.getItemIndex(f)]);g&&g.addClass("active")}var o=c.Event("slid.bs.carousel",{relatedTarget:l,direction:n});if(c.support.transition&&this.$element.hasClass("slide")){f.addClass(m);f[0].offsetWidth;p.addClass(n);f.addClass(n);p.one("bsTransitionEnd",function(){f.removeClass([m,n].join(" ")).addClass("active");p.removeClass(["active",n].join(" "));j.sliding=false;setTimeout(function(){j.$element.trigger(o)},0)}).emulateTransitionEnd(p.css("transition-duration").slice(0,-1)*1000)}else{p.removeClass("active");f.addClass("active");this.sliding=false;this.$element.trigger(o)}k&&this.cycle();return this};function b(e){return this.each(function(){var i=c(this);var h=i.data("bs.carousel");var f=c.extend({},d.DEFAULTS,i.data(),typeof e=="object"&&e);var g=typeof e=="string"?e:f.slide;if(!h){i.data("bs.carousel",(h=new d(this,f)))}if(typeof e=="number"){h.to(e)}else{if(g){h[g]()}else{if(f.interval){h.pause().cycle()}}}})}var a=c.fn.carousel;c.fn.carousel=b;c.fn.carousel.Constructor=d;c.fn.carousel.noConflict=function(){c.fn.carousel=a;return this};c(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(k){var g;var j=c(this);var f=c(j.attr("data-target")||(g=j.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,""));if(!f.hasClass("carousel")){return}var h=c.extend({},f.data(),j.data());var i=j.attr("data-slide-to");if(i){h.interval=false}b.call(f,h);if(i){f.data("bs.carousel").to(i)}k.preventDefault()});c(window).on("load",function(){c('[data-ride="carousel"]').each(function(){var e=c(this);b.call(e,e.data())})})}(jQuery);+function(h){var e=".dropdown-backdrop";var b='[data-toggle="dropdown"]';var a=function(i){h(i).on("click.bs.dropdown",this.toggle)};a.VERSION="3.2.0";a.prototype.toggle=function(m){var l=h(this);if(l.is(".disabled, :disabled")){return}var k=f(l);var j=k.hasClass("open");d();if(!j){if("ontouchstart" in document.documentElement&&!k.closest(".navbar-nav").length){h('<div class="dropdown-backdrop"/>').insertAfter(h(this)).on("click",d)}var i={relatedTarget:this};k.trigger(m=h.Event("show.bs.dropdown",i));if(m.isDefaultPrevented()){return}l.trigger("focus");k.toggleClass("open").trigger("shown.bs.dropdown",i)}return false};a.prototype.keydown=function(m){if(!/(38|40|27)/.test(m.keyCode)){return}var l=h(this);m.preventDefault();m.stopPropagation();if(l.is(".disabled, :disabled")){return}var k=f(l);var j=k.hasClass("open");if(!j||(j&&m.keyCode==27)){if(m.which==27){k.find(b).trigger("focus")}return l.trigger("click")}var n=" li:not(.divider):visible a";var o=k.find('[role="menu"]'+n+', [role="listbox"]'+n);if(!o.length){return}var i=o.index(o.filter(":focus"));if(m.keyCode==38&&i>0){i--}if(m.keyCode==40&&i<o.length-1){i++}if(!~i){i=0}o.eq(i).trigger("focus")};function d(i){if(i&&i.which===3){return}h(e).remove();h(b).each(function(){var k=f(h(this));var j={relatedTarget:this};if(!k.hasClass("open")){return}k.trigger(i=h.Event("hide.bs.dropdown",j));if(i.isDefaultPrevented()){return}k.removeClass("open").trigger("hidden.bs.dropdown",j)})}function f(k){var i=k.attr("data-target");if(!i){i=k.attr("href");i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")}var j=i&&h(i);return j&&j.length?j:k.parent()}function g(i){return this.each(function(){var k=h(this);var j=k.data("bs.dropdown");if(!j){k.data("bs.dropdown",(j=new a(this)))}if(typeof i=="string"){j[i].call(k)}})}var c=h.fn.dropdown;h.fn.dropdown=g;h.fn.dropdown.Constructor=a;h.fn.dropdown.noConflict=function(){h.fn.dropdown=c;return this};h(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(i){i.stopPropagation()}).on("click.bs.dropdown.data-api",b,a.prototype.toggle).on("keydown.bs.dropdown.data-api",b+', [role="menu"], [role="listbox"]',a.prototype.keydown)}(jQuery);+function(d){var b=function(f,e){this.options=e;this.$body=d(document.body);this.$element=d(f);this.$backdrop=this.isShown=null;this.scrollbarWidth=0;if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,d.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}};b.VERSION="3.2.0";b.DEFAULTS={backdrop:true,keyboard:true,show:true};b.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)};b.prototype.show=function(h){var f=this;var g=d.Event("show.bs.modal",{relatedTarget:h});this.$element.trigger(g);if(this.isShown||g.isDefaultPrevented()){return}this.isShown=true;this.checkScrollbar();this.$body.addClass("modal-open");this.setScrollbar();this.escape();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',d.proxy(this.hide,this));this.backdrop(function(){var j=d.support.transition&&f.$element.hasClass("fade");if(!f.$element.parent().length){f.$element.appendTo(f.$body)}f.$element.show().scrollTop(0);if(j){f.$element[0].offsetWidth}f.$element.addClass("in").attr("aria-hidden",false);f.enforceFocus();var i=d.Event("shown.bs.modal",{relatedTarget:h});j?f.$element.find(".modal-dialog").one("bsTransitionEnd",function(){f.$element.trigger("focus").trigger(i)}).emulateTransitionEnd(300):f.$element.trigger("focus").trigger(i)})};b.prototype.hide=function(f){if(f){f.preventDefault()}f=d.Event("hide.bs.modal");this.$element.trigger(f);if(!this.isShown||f.isDefaultPrevented()){return}this.isShown=false;this.$body.removeClass("modal-open");this.resetScrollbar();this.escape();d(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");d.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",d.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()};b.prototype.enforceFocus=function(){d(document).off("focusin.bs.modal").on("focusin.bs.modal",d.proxy(function(f){if(this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.trigger("focus")}},this))};b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",d.proxy(function(f){f.which==27&&this.hide()},this))}else{if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")}}};b.prototype.hideModal=function(){var e=this;this.$element.hide();this.backdrop(function(){e.$element.trigger("hidden.bs.modal")})};b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};b.prototype.backdrop=function(i){var h=this;var f=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=d.support.transition&&f;this.$backdrop=d('<div class="modal-backdrop '+f+'" />').appendTo(this.$body);this.$element.on("click.dismiss.bs.modal",d.proxy(function(j){if(j.target!==j.currentTarget){return}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this));if(e){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!i){return}e?this.$backdrop.one("bsTransitionEnd",i).emulateTransitionEnd(150):i()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){h.removeBackdrop();i&&i()};d.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(150):g()}else{if(i){i()}}}};b.prototype.checkScrollbar=function(){if(document.body.clientWidth>=window.innerWidth){return}this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar()};b.prototype.setScrollbar=function(){var e=parseInt((this.$body.css("padding-right")||0),10);if(this.scrollbarWidth){this.$body.css("padding-right",e+this.scrollbarWidth)}};b.prototype.resetScrollbar=function(){this.$body.css("padding-right","")};b.prototype.measureScrollbar=function(){var f=document.createElement("div");f.className="modal-scrollbar-measure";this.$body.append(f);var e=f.offsetWidth-f.clientWidth;this.$body[0].removeChild(f);return e};function c(e,f){return this.each(function(){var i=d(this);var h=i.data("bs.modal");var g=d.extend({},b.DEFAULTS,i.data(),typeof e=="object"&&e);if(!h){i.data("bs.modal",(h=new b(this,g)))}if(typeof e=="string"){h[e](f)}else{if(g.show){h.show(f)}}})}var a=d.fn.modal;d.fn.modal=c;d.fn.modal.Constructor=b;d.fn.modal.noConflict=function(){d.fn.modal=a;return this};d(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(j){var i=d(this);var g=i.attr("href");var f=d(i.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));var h=f.data("bs.modal")?"toggle":d.extend({remote:!/#/.test(g)&&g},f.data(),i.data());if(i.is("a")){j.preventDefault()}f.one("show.bs.modal",function(e){if(e.isDefaultPrevented()){return}f.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})});c.call(f,h,this)})}(jQuery);+function(d){var c=function(f,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",f,e)};c.VERSION="3.2.0";c.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}};c.prototype.init=function(l,j,g){this.enabled=true;this.type=l;this.$element=d(j);this.options=this.getOptions(g);this.$viewport=this.options.viewport&&d(this.options.viewport.selector||this.options.viewport);var k=this.options.trigger.split(" ");for(var h=k.length;h--;){var f=k[h];if(f=="click"){this.$element.on("click."+this.type,this.options.selector,d.proxy(this.toggle,this))}else{if(f!="manual"){var m=f=="hover"?"mouseenter":"focusin";var e=f=="hover"?"mouseleave":"focusout";this.$element.on(m+"."+this.type,this.options.selector,d.proxy(this.enter,this));this.$element.on(e+"."+this.type,this.options.selector,d.proxy(this.leave,this))}}}this.options.selector?(this._options=d.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()};c.prototype.getDefaults=function(){return c.DEFAULTS};c.prototype.getOptions=function(e){e=d.extend({},this.getDefaults(),this.$element.data(),e);if(e.delay&&typeof e.delay=="number"){e.delay={show:e.delay,hide:e.delay}}return e};c.prototype.getDelegateOptions=function(){var e={};var f=this.getDefaults();this._options&&d.each(this._options,function(g,h){if(f[g]!=h){e[g]=h}});return e};c.prototype.enter=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());d(f.currentTarget).data("bs."+this.type,e)}clearTimeout(e.timeout);e.hoverState="in";if(!e.options.delay||!e.options.delay.show){return e.show()}e.timeout=setTimeout(function(){if(e.hoverState=="in"){e.show()}},e.options.delay.show)};c.prototype.leave=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());d(f.currentTarget).data("bs."+this.type,e)}clearTimeout(e.timeout);e.hoverState="out";if(!e.options.delay||!e.options.delay.hide){return e.hide()}e.timeout=setTimeout(function(){if(e.hoverState=="out"){e.hide()}},e.options.delay.hide)};c.prototype.show=function(){var q=d.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(q);var r=d.contains(document.documentElement,this.$element[0]);if(q.isDefaultPrevented()||!r){return}var p=this;var n=this.tip();var h=this.getUID(this.type);this.setContent();n.attr("id",h);this.$element.attr("aria-describedby",h);if(this.options.animation){n.addClass("fade")}var l=typeof this.options.placement=="function"?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement;var t=/\s?auto?\s?/i;var u=t.test(l);if(u){l=l.replace(t,"")||"top"}n.detach().css({top:0,left:0,display:"block"}).addClass(l).data("bs."+this.type,this);this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);var s=this.getPosition();var f=n[0].offsetWidth;var o=n[0].offsetHeight;if(u){var j=l;var k=this.$element.parent();var m=this.getPosition(k);l=l=="bottom"&&s.top+s.height+o-m.scroll>m.height?"top":l=="top"&&s.top-m.scroll-o<0?"bottom":l=="right"&&s.right+f>m.width?"left":l=="left"&&s.left-f<m.left?"right":l;n.removeClass(j).addClass(l)}var i=this.getCalculatedOffset(l,s,f,o);this.applyPlacement(i,l);var g=function(){p.$element.trigger("shown.bs."+p.type);p.hoverState=null};d.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",g).emulateTransitionEnd(150):g()}};c.prototype.applyPlacement=function(k,l){var m=this.tip();var g=m[0].offsetWidth;var q=m[0].offsetHeight;var f=parseInt(m.css("margin-top"),10);var i=parseInt(m.css("margin-left"),10);if(isNaN(f)){f=0}if(isNaN(i)){i=0}k.top=k.top+f;k.left=k.left+i;d.offset.setOffset(m[0],d.extend({using:function(r){m.css({top:Math.round(r.top),left:Math.round(r.left)})}},k),0);m.addClass("in");var e=m[0].offsetWidth;var n=m[0].offsetHeight;if(l=="top"&&n!=q){k.top=k.top+q-n}var p=this.getViewportAdjustedDelta(l,k,e,n);if(p.left){k.left+=p.left}else{k.top+=p.top}var h=p.left?p.left*2-g+e:p.top*2-q+n;var j=p.left?"left":"top";var o=p.left?"offsetWidth":"offsetHeight";m.offset(k);this.replaceArrow(h,m[0][o],j)};c.prototype.replaceArrow=function(g,f,e){this.arrow().css(e,g?(50*(1-g/f)+"%"):"")};c.prototype.setContent=function(){var f=this.tip();var e=this.getTitle();f.find(".tooltip-inner")[this.options.html?"html":"text"](e);f.removeClass("fade in top bottom left right")};c.prototype.hide=function(){var g=this;var i=this.tip();var h=d.Event("hide.bs."+this.type);this.$element.removeAttr("aria-describedby");function f(){if(g.hoverState!="in"){i.detach()}g.$element.trigger("hidden.bs."+g.type)}this.$element.trigger(h);if(h.isDefaultPrevented()){return}i.removeClass("in");d.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",f).emulateTransitionEnd(150):f();this.hoverState=null;return this};c.prototype.fixTitle=function(){var e=this.$element;if(e.attr("title")||typeof(e.attr("data-original-title"))!="string"){e.attr("data-original-title",e.attr("title")||"").attr("title","")}};c.prototype.hasContent=function(){return this.getTitle()};c.prototype.getPosition=function(f){f=f||this.$element;var g=f[0];var e=g.tagName=="BODY";return d.extend({},(typeof g.getBoundingClientRect=="function")?g.getBoundingClientRect():null,{scroll:e?document.documentElement.scrollTop||document.body.scrollTop:f.scrollTop(),width:e?d(window).width():f.outerWidth(),height:e?d(window).height():f.outerHeight()},e?{top:0,left:0}:f.offset())};c.prototype.getCalculatedOffset=function(e,h,f,g){return e=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-f/2}:e=="top"?{top:h.top-g,left:h.left+h.width/2-f/2}:e=="left"?{top:h.top+h.height/2-g/2,left:h.left-f}:{top:h.top+h.height/2-g/2,left:h.left+h.width}};c.prototype.getViewportAdjustedDelta=function(h,k,e,j){var m={top:0,left:0};if(!this.$viewport){return m}var g=this.options.viewport&&this.options.viewport.padding||0;var l=this.getPosition(this.$viewport);if(/right|left/.test(h)){var n=k.top-g-l.scroll;var i=k.top+g-l.scroll+j;if(n<l.top){m.top=l.top-n}else{if(i>l.top+l.height){m.top=l.top+l.height-i}}}else{var o=k.left-g;var f=k.left+g+e;if(o<l.left){m.left=l.left-o}else{if(f>l.width){m.left=l.left+l.width-f}}}return m};c.prototype.getTitle=function(){var g;var e=this.$element;var f=this.options;g=e.attr("data-original-title")||(typeof f.title=="function"?f.title.call(e[0]):f.title);return g};c.prototype.getUID=function(e){do{e+=~~(Math.random()*1000000)}while(document.getElementById(e));return e};c.prototype.tip=function(){return(this.$tip=this.$tip||d(this.options.template))};c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow"))};c.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}};c.prototype.enable=function(){this.enabled=true};c.prototype.disable=function(){this.enabled=false};c.prototype.toggleEnabled=function(){this.enabled=!this.enabled};c.prototype.toggle=function(g){var f=this;if(g){f=d(g.currentTarget).data("bs."+this.type);if(!f){f=new this.constructor(g.currentTarget,this.getDelegateOptions());d(g.currentTarget).data("bs."+this.type,f)}}f.tip().hasClass("in")?f.leave(f):f.enter(f)};c.prototype.destroy=function(){clearTimeout(this.timeout);this.hide().$element.off("."+this.type).removeData("bs."+this.type)};function b(e){return this.each(function(){var h=d(this);var g=h.data("bs.tooltip");var f=typeof e=="object"&&e;if(!g&&e=="destroy"){return}if(!g){h.data("bs.tooltip",(g=new c(this,f)))}if(typeof e=="string"){g[e]()}})}var a=d.fn.tooltip;d.fn.tooltip=b;d.fn.tooltip.Constructor=c;d.fn.tooltip.noConflict=function(){d.fn.tooltip=a;return this}}(jQuery);+function(d){var c=function(f,e){this.init("popover",f,e)};if(!d.fn.tooltip){throw new Error("Popover requires tooltip.js")}c.VERSION="3.2.0";c.DEFAULTS=d.extend({},d.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});c.prototype=d.extend({},d.fn.tooltip.Constructor.prototype);c.prototype.constructor=c;c.prototype.getDefaults=function(){return c.DEFAULTS};c.prototype.setContent=function(){var g=this.tip();var f=this.getTitle();var e=this.getContent();g.find(".popover-title")[this.options.html?"html":"text"](f);g.find(".popover-content").empty()[this.options.html?(typeof e=="string"?"html":"append"):"text"](e);g.removeClass("fade top bottom left right in");if(!g.find(".popover-title").html()){g.find(".popover-title").hide()}};c.prototype.hasContent=function(){return this.getTitle()||this.getContent()};c.prototype.getContent=function(){var e=this.$element;var f=this.options;return e.attr("data-content")||(typeof f.content=="function"?f.content.call(e[0]):f.content)};c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".arrow"))};c.prototype.tip=function(){if(!this.$tip){this.$tip=d(this.options.template)}return this.$tip};function b(e){return this.each(function(){var h=d(this);var g=h.data("bs.popover");var f=typeof e=="object"&&e;if(!g&&e=="destroy"){return}if(!g){h.data("bs.popover",(g=new c(this,f)))}if(typeof e=="string"){g[e]()}})}var a=d.fn.popover;d.fn.popover=b;d.fn.popover.Constructor=c;d.fn.popover.noConflict=function(){d.fn.popover=a;return this}}(jQuery);+function(d){var b=function(e){this.element=d(e)};b.VERSION="3.2.0";b.prototype.show=function(){var k=this.element;var h=k.closest("ul:not(.dropdown-menu)");var g=k.data("target");if(!g){g=k.attr("href");g=g&&g.replace(/.*(?=#[^\s]*$)/,"")}if(k.parent("li").hasClass("active")){return}var i=h.find(".active:last a")[0];var j=d.Event("show.bs.tab",{relatedTarget:i});k.trigger(j);if(j.isDefaultPrevented()){return}var f=d(g);this.activate(k.closest("li"),h);this.activate(f,f.parent(),function(){k.trigger({type:"shown.bs.tab",relatedTarget:i})})};b.prototype.activate=function(g,f,j){var e=f.find("> .active");var i=j&&d.support.transition&&e.hasClass("fade");function h(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");g.addClass("active");if(i){g[0].offsetWidth;g.addClass("in")}else{g.removeClass("fade")}if(g.parent(".dropdown-menu")){g.closest("li.dropdown").addClass("active")}j&&j()}i?e.one("bsTransitionEnd",h).emulateTransitionEnd(150):h();e.removeClass("in")};function c(e){return this.each(function(){var g=d(this);var f=g.data("bs.tab");if(!f){g.data("bs.tab",(f=new b(this)))}if(typeof e=="string"){f[e]()}})}var a=d.fn.tab;d.fn.tab=c;d.fn.tab.Constructor=b;d.fn.tab.noConflict=function(){d.fn.tab=a;return this};d(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(f){f.preventDefault();c.call(d(this),"show")})}(jQuery);+function(d){var c=function(f,e){this.options=d.extend({},c.DEFAULTS,e);this.$target=d(this.options.target).on("scroll.bs.affix.data-api",d.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",d.proxy(this.checkPositionWithEventLoop,this));this.$element=d(f);this.affixed=this.unpin=this.pinnedOffset=null;this.checkPosition()};c.VERSION="3.2.0";c.RESET="affix affix-top affix-bottom";c.DEFAULTS={offset:0,target:window};c.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset}this.$element.removeClass(c.RESET).addClass("affix");var f=this.$target.scrollTop();var e=this.$element.offset();return(this.pinnedOffset=e.top-f)};c.prototype.checkPositionWithEventLoop=function(){setTimeout(d.proxy(this.checkPosition,this),1)};c.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return}var n=d(document).height();var f=this.$target.scrollTop();var k=this.$element.offset();var i=this.options.offset;var g=i.top;var h=i.bottom;if(typeof i!="object"){h=g=i}if(typeof g=="function"){g=i.top(this.$element)}if(typeof h=="function"){h=i.bottom(this.$element)}var j=this.unpin!=null&&(f+this.unpin<=k.top)?false:h!=null&&(k.top+this.$element.height()>=n-h)?"bottom":g!=null&&(f<=g)?"top":false;if(this.affixed===j){return}if(this.unpin!=null){this.$element.css("top","")}var m="affix"+(j?"-"+j:"");var l=d.Event(m+".bs.affix");this.$element.trigger(l);if(l.isDefaultPrevented()){return}this.affixed=j;this.unpin=j=="bottom"?this.getPinnedOffset():null;this.$element.removeClass(c.RESET).addClass(m).trigger(d.Event(m.replace("affix","affixed")));if(j=="bottom"){this.$element.offset({top:n-this.$element.height()-h})}};function b(e){return this.each(function(){var h=d(this);var g=h.data("bs.affix");var f=typeof e=="object"&&e;if(!g){h.data("bs.affix",(g=new c(this,f)))}if(typeof e=="string"){g[e]()}})}var a=d.fn.affix;d.fn.affix=b;d.fn.affix.Constructor=c;d.fn.affix.noConflict=function(){d.fn.affix=a;return this};d(window).on("load",function(){d('[data-spy="affix"]').each(function(){var f=d(this);var e=f.data();e.offset=e.offset||{};if(e.offsetBottom){e.offset.bottom=e.offsetBottom}if(e.offsetTop){e.offset.top=e.offsetTop}b.call(f,e)})})}(jQuery);+function(c){var d=function(f,e){this.$element=c(f);this.options=c.extend({},d.DEFAULTS,e);this.transitioning=null;if(this.options.parent){this.$parent=c(this.options.parent)}if(this.options.toggle){this.toggle()}};d.VERSION="3.2.0";d.DEFAULTS={toggle:true};d.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"};d.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return}var f=c.Event("show.bs.collapse");this.$element.trigger(f);if(f.isDefaultPrevented()){return}var i=this.$parent&&this.$parent.find("> .panel > .in");if(i&&i.length){var g=i.data("bs.collapse");if(g&&g.transitioning){return}b.call(i,"hide");g||i.data("bs.collapse",null)}var j=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[j](0);this.transitioning=1;var e=function(){this.$element.removeClass("collapsing").addClass("collapse in")[j]("");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!c.support.transition){return e.call(this)}var h=c.camelCase(["scroll",j].join("-"));this.$element.one("bsTransitionEnd",c.proxy(e,this)).emulateTransitionEnd(350)[j](this.$element[0][h])};d.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return}var f=c.Event("hide.bs.collapse");this.$element.trigger(f);if(f.isDefaultPrevented()){return}var g=this.dimension();this.$element[g](this.$element[g]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");this.transitioning=1;var e=function(){this.transitioning=0;this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!c.support.transition){return e.call(this)}this.$element[g](0).one("bsTransitionEnd",c.proxy(e,this)).emulateTransitionEnd(350)};d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};function b(e){return this.each(function(){var h=c(this);var g=h.data("bs.collapse");var f=c.extend({},d.DEFAULTS,h.data(),typeof e=="object"&&e);if(!g&&f.toggle&&e=="show"){e=!e}if(!g){h.data("bs.collapse",(g=new d(this,f)))}if(typeof e=="string"){g[e]()}})}var a=c.fn.collapse;c.fn.collapse=b;c.fn.collapse.Constructor=d;c.fn.collapse.noConflict=function(){c.fn.collapse=a;return this};c(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(k){var f;var m=c(this);var l=m.attr("data-target")||k.preventDefault()||(f=m.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"");var g=c(l);var i=g.data("bs.collapse");var j=i?"toggle":m.data();var n=m.attr("data-parent");var h=n&&c(n);if(!i||!i.transitioning){if(h){h.find('[data-toggle="collapse"][data-parent="'+n+'"]').not(m).addClass("collapsed")}m[g.hasClass("in")?"addClass":"removeClass"]("collapsed")}b.call(g,j)})}(jQuery);+function(d){function c(f,e){var g=d.proxy(this.process,this);this.$body=d("body");this.$scrollElement=d(f).is("body")?d(window):d(f);this.options=d.extend({},c.DEFAULTS,e);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",g);this.refresh();this.process()}c.VERSION="3.2.0";c.DEFAULTS={offset:10};c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};c.prototype.refresh=function(){var e="offset";var g=0;if(!d.isWindow(this.$scrollElement[0])){e="position";g=this.$scrollElement.scrollTop()}this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();var f=this;this.$body.find(this.selector).map(function(){var i=d(this);var h=i.data("target")||i.attr("href");var j=/^#./.test(h)&&d(h);return(j&&j.length&&j.is(":visible")&&[[j[e]().top+g,h]])||null}).sort(function(i,h){return i[0]-h[0]}).each(function(){f.offsets.push(this[0]);f.targets.push(this[1])})};c.prototype.process=function(){var k=this.$scrollElement.scrollTop()+this.options.offset;var g=this.getScrollHeight();var j=this.options.offset+g-this.$scrollElement.height();var h=this.offsets;var e=this.targets;var l=this.activeTarget;var f;if(this.scrollHeight!=g){this.refresh()}if(k>=j){return l!=(f=e[e.length-1])&&this.activate(f)}if(l&&k<=h[0]){return l!=(f=e[0])&&this.activate(f)}for(f=h.length;f--;){l!=e[f]&&k>=h[f]&&(!h[f+1]||k<=h[f+1])&&this.activate(e[f])}};c.prototype.activate=function(g){this.activeTarget=g;d(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var e=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]';var f=d(e).parents("li").addClass("active");if(f.parent(".dropdown-menu").length){f=f.closest("li.dropdown").addClass("active")}f.trigger("activate.bs.scrollspy")};function b(e){return this.each(function(){var h=d(this);var g=h.data("bs.scrollspy");var f=typeof e=="object"&&e;if(!g){h.data("bs.scrollspy",(g=new c(this,f)))}if(typeof e=="string"){g[e]()}})}var a=d.fn.scrollspy;d.fn.scrollspy=b;d.fn.scrollspy.Constructor=c;d.fn.scrollspy.noConflict=function(){d.fn.scrollspy=a;return this};d(window).on("load.bs.scrollspy.data-api",function(){d('[data-spy="scroll"]').each(function(){var e=d(this);b.call(e,e.data())})})}(jQuery);+function(b){function a(){var e=document.createElement("bootstrap");var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in d){if(e.style[c]!==undefined){return{end:d[c]}}}return false}b.fn.emulateTransitionEnd=function(e){var d=false;var c=this;b(this).one("bsTransitionEnd",function(){d=true});var f=function(){if(!d){b(c).trigger(b.support.transition.end)}};setTimeout(f,e);return this};b(function(){b.support.transition=a();if(!b.support.transition){return}b.event.special.bsTransitionEnd={bindType:b.support.transition.end,delegateType:b.support.transition.end,handle:function(c){if(b(c.target).is(this)){return c.handleObj.handler.apply(this,arguments)}}}})}(jQuery);