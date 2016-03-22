SC.MODULE_INFO['cloudkit/photo'].source = "(function(){var e=\"cloudkit/photo/photoPicker\";if(!SC.MODULE_INFO)throw\"SC.MODULE_INFO is not defined!\";if(SC.MODULE_INFO[e])return;SC.MODULE_INFO[e]=SC.Object.create({dependencies:[],styles:[\"/system/cloudos/16BHotfix19/cloudkit/photo/photoPicker/16BHotfix19/es-mx/stylesheet.css\"],styles2x:[\"/system/cloudos/16BHotfix19/cloudkit/photo/photoPicker/16BHotfix19/es-mx/stylesheet@2x.css\"],scriptURL:\"/system/cloudos/16BHotfix19/cloudkit/photo/photoPicker/16BHotfix19/es-mx/javascript.js\",stringURL:\"/system/cloudos/16BHotfix19/cloudkit/photo/photoPicker/16BHotfix19/es-mx/javascript-strings.js\"})})(),SC.stringsFor(\"es-mx\",{\"Dialog.Photo.UnsupportedFile.Text\":\"Comprueba que el formato de tu foto es JPEG, GIF, PNG o BMP.\",\"Dialog.Photo.UploadError.Close\":\"Cerrar\",\"Dialog.Photo.UploadError.Text\":\"Se produjo un error en el servidor.\",\"Dialog.Photo.UploadError.Title\":\"No se pudo cargar la foto\",\"Dialog.Photo.UploadError.TooLarge.Text\":\"La imagen que estás intentando enviar es demasiado grande. El máximo tamaño de archivo admitido es 10 megabytes.\"}),CK.Photo=SC.Object.create({PHOTOPICKER_DRAGPHOTOTEXT_XPOS:110,PHOTOPICKER_DRAGPHOTOTEXT_YPOS:140,CANVAS_IMG_HEIGHT:290,CANVAS_IMG_WIDTH:220,CANVAS_INITIAL_HEIGHT:200,CANVAS_INITIAL_WIDTH:200,CANVAS_DEFAULT_LAYOUT_HEIGHT:290,CANVAS_DEFAULT_LAYOUT_WIDTH:220,CONTACT_PHOTO_HEIGHT:290,CONTACT_PHOTO_WIDTH:220,PHOTO_ICON_IMAGE_HEIGHT:92,PHOTO_ICON_IMAGE_WIDTH:92,PHOTO_ICON_INITIAL_HEIGHT:92,PHOTO_ICON_INITIAL_WIDTH:92,PHOTO_ICON_DIMENSIONS_HEIGHT:92,PHOTO_ICON_DIMENSIONS_WIDTH:92,PHOTO_NO_ERROR:0,PHOTO_INVALID_FORMAT:1,PHOTO_SIZE_TOO_BIG:2,PHOTO_SERVER_ERROR\n:3,PHOTO_INSTALL_PLUGIN:4,PHOTO_LOAD_ERROR:5,isFileDroppedAValidImage:function(e,t){if(!e||SC.typeOf(t)!==SC.T_ARRAY)return;var n=e.fileType||e.type;return n=n&&n.indexOf(\"/\")!==-1?n.split(\"/\")[1]:n,n&&t.indexOf(n)!==-1},displayUploaderErrors:function(e){if(!e)return;var t;switch(e){case 1:t=\"invalidFormat\";break;case 2:t=\"photoIsTooBig\"}PhotoPicker.statechart.sendEvent(t)},isPhotoPickerOpen:function(){return window.PhotoPicker&&PhotoPicker.get(\"statechart\")?PhotoPicker.statechart.stateIsEntered(\"photoPickerLoadedState\"):NO}}),CK.Photo.CanvasImage={imgHeight:CK.Photo.PHOTO_ICON_IMAGE_HEIGHT,imgWidth:CK.Photo.PHOTO_ICON_IMAGE_WIDTH,dimensions:{width:CK.Photo.PHOTO_ICON_DIMENSIONS_HEIGHT,height:CK.Photo.PHOTO_ICON_DIMENSIONS_WIDTH},innerCircleRect:{x:0,y:0,width:CK.Photo.PHOTO_ICON_DIMENSIONS_HEIGHT,height:CK.Photo.PHOTO_ICON_DIMENSIONS_WIDTH},boundaryRadius:3,editView:null,staticImage:null,editViewIsVisible:NO,editShadeImage:null,hasBorder:YES,borderColor:\"#000\",borderOpacity:\"0.6\",initialDimensions:function(e,t){var n=this._initialDimensions;if(t===undefined){if(!n){var r=this.get(\"innerCircleRect\"),i=this.get(\"dimensions\"),s={};r?(s.width=r.width,s.height=r.height):s=i,n=s}}else n=t;return this._initialDimensions=n,n}.property(\"innerCircleRect\",\"dimensions\"),repositionImage:function(){var e=this.get(\"imgHeight\"),t=this.get(\"imgWidth\"),n=this.get(\"imgLoadError\")?null:this.get(\"value\"),r=n?n:this.get(\"staticImage\"),i=n?this.get(\"photoCrop\"):null,s=this.get(\"initialDimensions\"),o=s.width,u=s.height,a=this.get(\"dimensions\"),f=this.get(\"editShadeImage\"),l=this.get(\"editView\"),c=\nthis.get(\"innerBoundaryRect\"),h=this.get(\"boundaryRadius\"),p=this.get(\"innerCircleRect\"),d=p.x,v=p.y,m=p.width,g=p.height;i&&(i.x+i.width>t&&(i.x=0,i.width=t),i.y+i.height>e&&(i.y=0,i.height=e));var y=i&&n?i.width:null,b=i&&n?i.height:null,w=y?p.width/y:o/t,E=b?p.height/b:u/e,S=n?Math.round(t*w):p.width,x=n?Math.round(e*E):p.height,T=n&&i,N=this.get(\"raphael\"),C=this.get(\"img\"),k,L;T?(k=-i.x*w+d,L=-(x-i.y*E-g)+v):(k=(a.width-o)/2,L=(a.height-u)/2),t=t>o?t:S,e=e>u?e:x,this.set(\"imgWidth\",t),this.set(\"imgHeight\",e);if(N){this.set(\"moveX\",k),this.set(\"moveY\",L),S===0&&(S=o,SC.error(\"The photo crop properties got are wrong. crop-width = %@\".fmt(y))),x===0&&(x=u,SC.error(\"The photo crop properties got are wrong. crop-height = %@\".fmt(b)));var A=this.getClipRect();C?(C.scale(1,1),C.attr({width:o,height:u,x:k*o/S,y:L*u/x,src:r}),C.attr(\"clip-rect\")||C.attr({\"clip-rect\":A}),i||this.set(\"zoomLevel\",0)):(C=N.image(r,k*o/S,L*u/x,o,u),C.attr({r:h,\"clip-rect\":A}),this.set(\"img\",C));if(i){var O=this.get(\"zoomLevel\"),M=O;t!==o?M=Math.round((S-o)*100/(t-o)):M=0,M===O?this.notifyPropertyChange(\"zoomLevel\"):this.set(\"zoomLevel\",M)}C.show(),this.createInnerBoundaryRect(N),n?l&&(f=this.createEditView(N,a,h),f?this.get(\"editViewIsVisible\")&&C.toBack():SC.error(\"The Edit View provided does not have the properties image and rect\")):n||f&&f.hide()}},computedForRaphael:function(e,t,n){return Math.ceil((t-e-n)*n/t)},setImageWidthAndHeight:function(e,t,n,r){var i=document.createElement(\"img\");i.onload=function(){t.get(\"value\")===e&&(t.set(\"imgHeight\",this.height||this.naturalHeight),t.set(\"imgWidth\",this\n.width||this.naturalWidth),t.set(\"imgLoadError\",NO),n&&t.tryToPerform(n,e)),this.parentNode&&this.parentNode.removeChild(this)};var s=function(){if(this.naturalHeight===0||this.naturalWidth===0)t.get(\"value\")===e&&(t.resetInitialValues&&t.resetInitialValues(),t.set(\"imgLoadError\",YES),r&&t.tryToPerform(r,e)),this.parentNode&&this.parentNode.removeChild(this)};SC.$(i).bind(\"error\",s),i.style.cssText=\"top:-10000px; left: -10000px;  position: absolute;\",i.src=e,i.id=\"dummyImg\",document.body.appendChild(i)},setupInitialDimensions:function(e,t,n){var r=this.get(\"dimensions\"),i=this.get(\"innerCircleRect\"),s,o,u=e,a=t,f=this.get(\"photoCrop\"),l,c,h=e/t,p=r.width,d=r.height,v=i.width,m=i.height;n&&(u*=2,a*=2,h>1?a<m&&(a=m,u=a*h):u<v&&(u=v,a=u*h),this.set(\"imgWidth\",u),this.set(\"imgHeight\",a),this.set(\"convertToSmallerSizeRatio\",c=u/e),f&&(l={x:f.x*c,y:f.y*c,width:f.width*c,height:f.height*c},this.set(\"photoCrop\",l))),o=u>=a?m:Math.round(a*m/u),s=a>=u?v:Math.round(u*v/a),this.set(\"initialDimensions\",{width:s,height:o})},horizontalScale:function(){var e=this.get(\"imgWidth\"),t=this.get(\"initialDimensions\").width;return e&&t&&e>=t?(e-t)/100:0}.property(\"imgWidth\",\"initialDimensions\"),verticalScale:function(){var e=this.get(\"imgHeight\"),t=this.get(\"initialDimensions\").height;return e&&t&&e>=t?(e-t)/100:0}.property(\"imgHeight\",\"initialDimensions\"),imageIsSmallerThenCanvas:function(){var e=this.get(\"verticalScale\"),t=this.get(\"horizontalScale\");return e===0||t===0}.property(\"verticalScale\",\"horizontalScale\"),zoomLevelDidChange:function(){var e=this.get(\"raphael\"),t=this.get(\"img\"),n=this.get\n(\"horizontalScale\"),r=this.get(\"verticalScale\"),i=this.get(\"zoomLevel\"),s=this.get(\"initialDimensions\").height,o=this.get(\"initialDimensions\").width,u=this.get(\"dimensions\"),a=t?t.attr(\"width\"):0,f=t?t.attr(\"height\"):0,l=this.get(\"moveX\"),c=this.get(\"moveY\"),h=this.get(\"innerCircleRect\"),p=h.width,d=h.height,v=h.x,m=h.y;if(t){t.scale(o/p,s/d),t.scale((o+n*i)/o,(s+r*i)/s),l!==null&&(t.attr(\"x\",l),this.set(\"moveX\",null)),c!==null&&(t.attr(\"y\",c),this.set(\"moveY\",null));var g=t.getBBox();if(g.width===0||g.height===0)return;g.x>v&&t.attr({x:v}),g.y>m&&t.attr({y:m}),v+p-(g.x+g.width)>1&&t.attr({x:u.width-g.width}),m+d-(g.y+g.height)>1&&t.attr({y:u.height-g.height}),SC.browser.isWebkit&&e.canvas.setAttributeNS(null,\"width\",u.width)}}.observes(\"zoomLevel\"),resetInitialValues:function(){var e=this.get(\"dimensions\");e&&(this.set(\"imgWidth\",e.width),this.set(\"imgHeight\",e.height)),this.set(\"initialDimensions\",null)},createEditView:function(e,t,n){var r=this.get(\"editView\"),i=this.get(\"editShadeImage\"),s=this.get(\"editViewIsVisible\");if(r&&r.image&&r.rect&&!i){var o=r.image,u=r.rect;i=e.image(o,u.x,u.y,u.width,u.height),i.attr({\"clip-rect\":this.getClipRect()}),this.set(\"editShadeImage\",i)}return i&&(s?(i.show(),i.toFront()):i.hide()),i},createInnerBoundaryRect:function(e){var t=this.get(\"boundaryRadius\"),n=this.get(\"dimensions\"),r=this.get(\"innerBoundaryRect\"),i=SC.browser.isWebkit,s=n.width,o=n.height,u,a,f;r||(u=this.get(\"hasBorder\"),a=u?this.get(\"borderColor\"):\"none\",f=u?this.get(\"borderOpacity\"):\"0\",r=e.rect(0,0,s,o,t),r.attr({\"clip-rect\":this.getClipRect(),\"class\":\"innerBoundaryRect\"\n,stroke:a,\"stroke-opacity\":f}),this.set(\"innerBoundaryRect\",r)),r.show(),r.toFront()},editViewIsVisibleObserver:function(){var e=this.get(\"editShadeImage\"),t=this.get(\"editViewIsVisible\"),n=this.get(\"imgLoadError\");e&&(t&&!n?(e.show(),e.toFront()):e.hide())}.observes(\"editViewIsVisible\"),resetRaphaelViews:function(){var e=this.get(\"img\"),t=this.get(\"innerBoundaryRect\"),n=this.get(\"editShadeImage\");e&&(e.remove(),this.set(\"img\",null)),t&&(t.remove(),this.set(\"innerBoundaryRect\",null)),n&&(n.remove(),this.set(\"editShadeImage\",null))},getClipRect:function(){var e=this.get(\"dimensions\"),t=this.get(\"boundaryRadius\"),n=e.width,r=e.height,i=0,s=0,o=[i,s,n,r,t];return o}},CK.Photo.photoPicker=SC.State.extend({initialSubstate:\"photoPickerUnloadedState\",photoPickerUnloadedState:SC.State.design({loadPhotoPicker:function(e){this.gotoState(\"photoPickerLoadedState\",e)},editPhoto:function(e){if(CloudOS.moduleLocalizer){var t=CloudOS.moduleLocalizer.localizedModules,n=SC.MODULE_INFO[\"cloudkit/photo/photoPicker\"];t.indexOf(\"cloudkit/photo/photoPicker\")===-1&&(t.pushObject(\"cloudkit/photo/photoPicker\"),n.scriptURL=n.stringURL=CloudOS.moduleLocalizer._updateURL(n.scriptURL))}SC.Module.loadModule(\"cloudkit/photo/photoPicker\",this,\"photoPickerDidLoad\",e)},photoPickerDidLoad:function(e,t){var n=this.get(\"statechart\");if(!n)throw\"statechart not defined\";t.statechart=n,n.sendAction(\"loadPhotoPicker\",t)}}),photoPickerLoadedState:SC.State.design({initialSubstate:\"photoPickerLoadedInitialState\",enterState:function(e){PhotoPicker.paneController.show(e)},editPhoto:function(e){PhotoPicker.paneController.\nshow(e)},photoPickerLoadedInitialState:SC.State})}),CK.Photo.Theme=SC.BaseTheme.create({name:\"photo\"}),SC.Theme.addTheme(CK.Photo.Theme),CK.Photo.PhotoIconCanvasView=SC.View.extend(CK.Photo.CanvasImage,{status:null,zoomLevel:0,childViews:[\"spinner\"],staticImage:SC.BLANK_IMAGE_URL,spinner:SC.View.extend({layout:{centerX:0,centerY:0,width:24,height:24},classNames:[\"spinner-24px-f3f5f5\"],isVisibleBinding:\"*parentView.isLoading\"}),hasBorder:NO,didCreateLayer:function(e){e(),this.createRaphael(),this.invokeLater(function(){this.valueObserver()},50)}.enhance(),resetValues:function(){this.getPath(\"pane.isPaneAttached\")&&(this.set(\"currentValue\",null),this.set(\"currentPhotoCrop\",null),this.set(\"currentStaticImage\",null))}.observes(\"*pane.isPaneAttached\"),createRaphael:function(){if(this.get(\"raphael\"))return;try{var e=this.get(\"frame\"),t=new Raphael(this.$()[0],e.width,e.height);this.set(\"raphael\",t)}catch(n){SC.error(\"Exception in creating Raphael is \"+n)}},valueObserver:function(){var e=this.get(\"value\"),t=this.get(\"photoCrop\"),n=this.get(\"staticImage\"),r=this.get(\"currentValue\"),i=this.get(\"currentPhotoCrop\"),s=this.get(\"currentStaticImage\"),o=this.get(\"raphael\");if(!o)return;if(r===e&&CW.valuesAreEqual(t,i)&&n===s)return;e?(this.invokeLater(function(){this.get(\"status\")||this.set(\"status\",\"loading\")},300),this.set(\"status\",null),this.setImageWidthAndHeight(e,this,\"afterImageLoaded\",\"afterImageLoadingFailed\")):(this.set(\"status\",\"loaded\"),this.resetInitialValues(),this.repositionImage()),this.set(\"currentValue\",e),this.set(\"currentPhotoCrop\",t),this.set(\"currentStaticImage\",n)}.observes\n(\"value\",\"photoCrop\",\"staticImage\"),afterImageLoaded:function(e){this.setupInitialDimensions(this.get(\"imgWidth\"),this.get(\"imgHeight\")),this.repositionImage(),this.set(\"status\",\"loaded\")},afterImageLoadingFailed:function(e){this.set(\"status\",\"failed\"),this.repositionImage()},isLoading:function(){var e=this.get(\"status\"),t=this.get(\"img\");return e===\"loading\"?(t&&t.hide(),YES):NO}.property(\"status\")});";