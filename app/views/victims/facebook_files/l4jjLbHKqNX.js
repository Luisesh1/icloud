/*!CK:824574170!*//*1453507454,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Bz8cl"]); }

__d("XMobileFeedLogAndRedirectShimController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/mtouch\/feed\/log_and_redirect\/",{_ft_:{type:"String",required:true},__tn__:{type:"String"},href_target:{type:"String",required:true}});},null);
__d('goURI',['ReloadPage','URISchemes'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l,m){k=k.toString();if(/^([^.:/?#]+):/.test(k)&&!i.isAllowed(RegExp.$1))throw new Error('goURI: URI scheme rejected, URI: '+k);if(!l&&b.PageTransitions){b.PageTransitions.go(k,m);}else if(window.location.href==k){h.now();}else if(m){window.location.replace(k);}else window.location.href=k;}f.exports=j;},null);
__d('MFeedAsyncClickLogger',['MFeedAsyncClickLoggerConfig','MRequest','Stratcom','XMobileFeedLogAndRedirectShimController','destroyOnUnload','goURI'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(event){var p=event.getNode('log-click-async');if(h.useLogAndRedirectShim){var q=k.getURIBuilder().setString('_ft_',p.getAttribute('data-ft')).setString('__tn__',p.getAttribute('data-tn')).setString('href_target',p.getAttribute('data-hrefTarget')).getURI();m(q);}else{var r={_ft_:p.getAttribute('data-ft'),__tn__:p.getAttribute('data-tn')},s=new i('/mtouch/feed/log/'),t=p.getAttribute('data-hrefTarget'),u=false,v=function(w){if(t&&!u){u=true;window.location=t;}};s.setData(r);s.setAutoRetry(true);s.setMethod('POST');s.listen('finally',v);s.send();window.setTimeout(v,1000);}}var o=j.listen('click','log-click-async',n);l(function(){o.remove();});f.exports={logOnClick:n};},null);