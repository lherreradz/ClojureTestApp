goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49940 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_49940(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49942 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_49942(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49050 = coll;
var G__49051 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49050,G__49051) : shadow.dom.lazy_native_coll_seq.call(null,G__49050,G__49051));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49093 = arguments.length;
switch (G__49093) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49100 = arguments.length;
switch (G__49100) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49104 = arguments.length;
switch (G__49104) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49112 = arguments.length;
switch (G__49112) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49116 = arguments.length;
switch (G__49116) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49126 = arguments.length;
switch (G__49126) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49138){if((e49138 instanceof Object)){
var e = e49138;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49138;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49148 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49149 = null;
var count__49150 = (0);
var i__49151 = (0);
while(true){
if((i__49151 < count__49150)){
var el = chunk__49149.cljs$core$IIndexed$_nth$arity$2(null,i__49151);
var handler_49963__$1 = ((function (seq__49148,chunk__49149,count__49150,i__49151,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49148,chunk__49149,count__49150,i__49151,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49963__$1);


var G__49964 = seq__49148;
var G__49965 = chunk__49149;
var G__49966 = count__49150;
var G__49967 = (i__49151 + (1));
seq__49148 = G__49964;
chunk__49149 = G__49965;
count__49150 = G__49966;
i__49151 = G__49967;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49148);
if(temp__5753__auto__){
var seq__49148__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49148__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49148__$1);
var G__49968 = cljs.core.chunk_rest(seq__49148__$1);
var G__49969 = c__4679__auto__;
var G__49970 = cljs.core.count(c__4679__auto__);
var G__49971 = (0);
seq__49148 = G__49968;
chunk__49149 = G__49969;
count__49150 = G__49970;
i__49151 = G__49971;
continue;
} else {
var el = cljs.core.first(seq__49148__$1);
var handler_49972__$1 = ((function (seq__49148,chunk__49149,count__49150,i__49151,el,seq__49148__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49148,chunk__49149,count__49150,i__49151,el,seq__49148__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49972__$1);


var G__49973 = cljs.core.next(seq__49148__$1);
var G__49974 = null;
var G__49975 = (0);
var G__49976 = (0);
seq__49148 = G__49973;
chunk__49149 = G__49974;
count__49150 = G__49975;
i__49151 = G__49976;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49164 = arguments.length;
switch (G__49164) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49204 = cljs.core.seq(events);
var chunk__49205 = null;
var count__49206 = (0);
var i__49207 = (0);
while(true){
if((i__49207 < count__49206)){
var vec__49220 = chunk__49205.cljs$core$IIndexed$_nth$arity$2(null,i__49207);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49220,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49978 = seq__49204;
var G__49979 = chunk__49205;
var G__49980 = count__49206;
var G__49981 = (i__49207 + (1));
seq__49204 = G__49978;
chunk__49205 = G__49979;
count__49206 = G__49980;
i__49207 = G__49981;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49204);
if(temp__5753__auto__){
var seq__49204__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49204__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49204__$1);
var G__49982 = cljs.core.chunk_rest(seq__49204__$1);
var G__49983 = c__4679__auto__;
var G__49984 = cljs.core.count(c__4679__auto__);
var G__49985 = (0);
seq__49204 = G__49982;
chunk__49205 = G__49983;
count__49206 = G__49984;
i__49207 = G__49985;
continue;
} else {
var vec__49225 = cljs.core.first(seq__49204__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49225,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49986 = cljs.core.next(seq__49204__$1);
var G__49987 = null;
var G__49988 = (0);
var G__49989 = (0);
seq__49204 = G__49986;
chunk__49205 = G__49987;
count__49206 = G__49988;
i__49207 = G__49989;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49228 = cljs.core.seq(styles);
var chunk__49229 = null;
var count__49230 = (0);
var i__49231 = (0);
while(true){
if((i__49231 < count__49230)){
var vec__49238 = chunk__49229.cljs$core$IIndexed$_nth$arity$2(null,i__49231);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49238,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49990 = seq__49228;
var G__49991 = chunk__49229;
var G__49992 = count__49230;
var G__49993 = (i__49231 + (1));
seq__49228 = G__49990;
chunk__49229 = G__49991;
count__49230 = G__49992;
i__49231 = G__49993;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49228);
if(temp__5753__auto__){
var seq__49228__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49228__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49228__$1);
var G__49994 = cljs.core.chunk_rest(seq__49228__$1);
var G__49995 = c__4679__auto__;
var G__49996 = cljs.core.count(c__4679__auto__);
var G__49997 = (0);
seq__49228 = G__49994;
chunk__49229 = G__49995;
count__49230 = G__49996;
i__49231 = G__49997;
continue;
} else {
var vec__49241 = cljs.core.first(seq__49228__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49241,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49998 = cljs.core.next(seq__49228__$1);
var G__49999 = null;
var G__50000 = (0);
var G__50001 = (0);
seq__49228 = G__49998;
chunk__49229 = G__49999;
count__49230 = G__50000;
i__49231 = G__50001;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49244_50002 = key;
var G__49244_50003__$1 = (((G__49244_50002 instanceof cljs.core.Keyword))?G__49244_50002.fqn:null);
switch (G__49244_50003__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_50005 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_50005,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_50005,"aria-");
}
})())){
el.setAttribute(ks_50005,value);
} else {
(el[ks_50005] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49258){
var map__49259 = p__49258;
var map__49259__$1 = cljs.core.__destructure_map(map__49259);
var props = map__49259__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49259__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49260 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49263 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49263,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49263;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49266 = arguments.length;
switch (G__49266) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49273){
var vec__49274 = p__49273;
var seq__49275 = cljs.core.seq(vec__49274);
var first__49276 = cljs.core.first(seq__49275);
var seq__49275__$1 = cljs.core.next(seq__49275);
var nn = first__49276;
var first__49276__$1 = cljs.core.first(seq__49275__$1);
var seq__49275__$2 = cljs.core.next(seq__49275__$1);
var np = first__49276__$1;
var nc = seq__49275__$2;
var node = vec__49274;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49277 = nn;
var G__49278 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49277,G__49278) : create_fn.call(null,G__49277,G__49278));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49279 = nn;
var G__49280 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49279,G__49280) : create_fn.call(null,G__49279,G__49280));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49281 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49281,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49281,(1),null);
var seq__49284_50007 = cljs.core.seq(node_children);
var chunk__49285_50008 = null;
var count__49286_50009 = (0);
var i__49287_50010 = (0);
while(true){
if((i__49287_50010 < count__49286_50009)){
var child_struct_50011 = chunk__49285_50008.cljs$core$IIndexed$_nth$arity$2(null,i__49287_50010);
var children_50012 = shadow.dom.dom_node(child_struct_50011);
if(cljs.core.seq_QMARK_(children_50012)){
var seq__49301_50013 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50012));
var chunk__49303_50014 = null;
var count__49304_50015 = (0);
var i__49305_50016 = (0);
while(true){
if((i__49305_50016 < count__49304_50015)){
var child_50017 = chunk__49303_50014.cljs$core$IIndexed$_nth$arity$2(null,i__49305_50016);
if(cljs.core.truth_(child_50017)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50017);


var G__50018 = seq__49301_50013;
var G__50019 = chunk__49303_50014;
var G__50020 = count__49304_50015;
var G__50021 = (i__49305_50016 + (1));
seq__49301_50013 = G__50018;
chunk__49303_50014 = G__50019;
count__49304_50015 = G__50020;
i__49305_50016 = G__50021;
continue;
} else {
var G__50022 = seq__49301_50013;
var G__50023 = chunk__49303_50014;
var G__50024 = count__49304_50015;
var G__50025 = (i__49305_50016 + (1));
seq__49301_50013 = G__50022;
chunk__49303_50014 = G__50023;
count__49304_50015 = G__50024;
i__49305_50016 = G__50025;
continue;
}
} else {
var temp__5753__auto___50026 = cljs.core.seq(seq__49301_50013);
if(temp__5753__auto___50026){
var seq__49301_50027__$1 = temp__5753__auto___50026;
if(cljs.core.chunked_seq_QMARK_(seq__49301_50027__$1)){
var c__4679__auto___50028 = cljs.core.chunk_first(seq__49301_50027__$1);
var G__50029 = cljs.core.chunk_rest(seq__49301_50027__$1);
var G__50030 = c__4679__auto___50028;
var G__50031 = cljs.core.count(c__4679__auto___50028);
var G__50032 = (0);
seq__49301_50013 = G__50029;
chunk__49303_50014 = G__50030;
count__49304_50015 = G__50031;
i__49305_50016 = G__50032;
continue;
} else {
var child_50033 = cljs.core.first(seq__49301_50027__$1);
if(cljs.core.truth_(child_50033)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50033);


var G__50034 = cljs.core.next(seq__49301_50027__$1);
var G__50035 = null;
var G__50036 = (0);
var G__50037 = (0);
seq__49301_50013 = G__50034;
chunk__49303_50014 = G__50035;
count__49304_50015 = G__50036;
i__49305_50016 = G__50037;
continue;
} else {
var G__50038 = cljs.core.next(seq__49301_50027__$1);
var G__50039 = null;
var G__50040 = (0);
var G__50041 = (0);
seq__49301_50013 = G__50038;
chunk__49303_50014 = G__50039;
count__49304_50015 = G__50040;
i__49305_50016 = G__50041;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50012);
}


var G__50042 = seq__49284_50007;
var G__50043 = chunk__49285_50008;
var G__50044 = count__49286_50009;
var G__50045 = (i__49287_50010 + (1));
seq__49284_50007 = G__50042;
chunk__49285_50008 = G__50043;
count__49286_50009 = G__50044;
i__49287_50010 = G__50045;
continue;
} else {
var temp__5753__auto___50046 = cljs.core.seq(seq__49284_50007);
if(temp__5753__auto___50046){
var seq__49284_50047__$1 = temp__5753__auto___50046;
if(cljs.core.chunked_seq_QMARK_(seq__49284_50047__$1)){
var c__4679__auto___50048 = cljs.core.chunk_first(seq__49284_50047__$1);
var G__50049 = cljs.core.chunk_rest(seq__49284_50047__$1);
var G__50050 = c__4679__auto___50048;
var G__50051 = cljs.core.count(c__4679__auto___50048);
var G__50052 = (0);
seq__49284_50007 = G__50049;
chunk__49285_50008 = G__50050;
count__49286_50009 = G__50051;
i__49287_50010 = G__50052;
continue;
} else {
var child_struct_50053 = cljs.core.first(seq__49284_50047__$1);
var children_50054 = shadow.dom.dom_node(child_struct_50053);
if(cljs.core.seq_QMARK_(children_50054)){
var seq__49314_50055 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50054));
var chunk__49316_50056 = null;
var count__49317_50057 = (0);
var i__49318_50058 = (0);
while(true){
if((i__49318_50058 < count__49317_50057)){
var child_50059 = chunk__49316_50056.cljs$core$IIndexed$_nth$arity$2(null,i__49318_50058);
if(cljs.core.truth_(child_50059)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50059);


var G__50060 = seq__49314_50055;
var G__50061 = chunk__49316_50056;
var G__50062 = count__49317_50057;
var G__50063 = (i__49318_50058 + (1));
seq__49314_50055 = G__50060;
chunk__49316_50056 = G__50061;
count__49317_50057 = G__50062;
i__49318_50058 = G__50063;
continue;
} else {
var G__50064 = seq__49314_50055;
var G__50065 = chunk__49316_50056;
var G__50066 = count__49317_50057;
var G__50067 = (i__49318_50058 + (1));
seq__49314_50055 = G__50064;
chunk__49316_50056 = G__50065;
count__49317_50057 = G__50066;
i__49318_50058 = G__50067;
continue;
}
} else {
var temp__5753__auto___50068__$1 = cljs.core.seq(seq__49314_50055);
if(temp__5753__auto___50068__$1){
var seq__49314_50069__$1 = temp__5753__auto___50068__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49314_50069__$1)){
var c__4679__auto___50070 = cljs.core.chunk_first(seq__49314_50069__$1);
var G__50071 = cljs.core.chunk_rest(seq__49314_50069__$1);
var G__50072 = c__4679__auto___50070;
var G__50073 = cljs.core.count(c__4679__auto___50070);
var G__50074 = (0);
seq__49314_50055 = G__50071;
chunk__49316_50056 = G__50072;
count__49317_50057 = G__50073;
i__49318_50058 = G__50074;
continue;
} else {
var child_50075 = cljs.core.first(seq__49314_50069__$1);
if(cljs.core.truth_(child_50075)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50075);


var G__50076 = cljs.core.next(seq__49314_50069__$1);
var G__50077 = null;
var G__50078 = (0);
var G__50079 = (0);
seq__49314_50055 = G__50076;
chunk__49316_50056 = G__50077;
count__49317_50057 = G__50078;
i__49318_50058 = G__50079;
continue;
} else {
var G__50080 = cljs.core.next(seq__49314_50069__$1);
var G__50081 = null;
var G__50082 = (0);
var G__50083 = (0);
seq__49314_50055 = G__50080;
chunk__49316_50056 = G__50081;
count__49317_50057 = G__50082;
i__49318_50058 = G__50083;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50054);
}


var G__50084 = cljs.core.next(seq__49284_50047__$1);
var G__50085 = null;
var G__50086 = (0);
var G__50087 = (0);
seq__49284_50007 = G__50084;
chunk__49285_50008 = G__50085;
count__49286_50009 = G__50086;
i__49287_50010 = G__50087;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49334 = cljs.core.seq(node);
var chunk__49335 = null;
var count__49336 = (0);
var i__49337 = (0);
while(true){
if((i__49337 < count__49336)){
var n = chunk__49335.cljs$core$IIndexed$_nth$arity$2(null,i__49337);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50088 = seq__49334;
var G__50089 = chunk__49335;
var G__50090 = count__49336;
var G__50091 = (i__49337 + (1));
seq__49334 = G__50088;
chunk__49335 = G__50089;
count__49336 = G__50090;
i__49337 = G__50091;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49334);
if(temp__5753__auto__){
var seq__49334__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49334__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49334__$1);
var G__50092 = cljs.core.chunk_rest(seq__49334__$1);
var G__50093 = c__4679__auto__;
var G__50094 = cljs.core.count(c__4679__auto__);
var G__50095 = (0);
seq__49334 = G__50092;
chunk__49335 = G__50093;
count__49336 = G__50094;
i__49337 = G__50095;
continue;
} else {
var n = cljs.core.first(seq__49334__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50096 = cljs.core.next(seq__49334__$1);
var G__50097 = null;
var G__50098 = (0);
var G__50099 = (0);
seq__49334 = G__50096;
chunk__49335 = G__50097;
count__49336 = G__50098;
i__49337 = G__50099;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49342 = arguments.length;
switch (G__49342) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49348 = arguments.length;
switch (G__49348) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49350 = arguments.length;
switch (G__49350) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50103 = arguments.length;
var i__4865__auto___50104 = (0);
while(true){
if((i__4865__auto___50104 < len__4864__auto___50103)){
args__4870__auto__.push((arguments[i__4865__auto___50104]));

var G__50105 = (i__4865__auto___50104 + (1));
i__4865__auto___50104 = G__50105;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49432_50106 = cljs.core.seq(nodes);
var chunk__49433_50107 = null;
var count__49434_50108 = (0);
var i__49435_50109 = (0);
while(true){
if((i__49435_50109 < count__49434_50108)){
var node_50110 = chunk__49433_50107.cljs$core$IIndexed$_nth$arity$2(null,i__49435_50109);
fragment.appendChild(shadow.dom._to_dom(node_50110));


var G__50111 = seq__49432_50106;
var G__50112 = chunk__49433_50107;
var G__50113 = count__49434_50108;
var G__50114 = (i__49435_50109 + (1));
seq__49432_50106 = G__50111;
chunk__49433_50107 = G__50112;
count__49434_50108 = G__50113;
i__49435_50109 = G__50114;
continue;
} else {
var temp__5753__auto___50115 = cljs.core.seq(seq__49432_50106);
if(temp__5753__auto___50115){
var seq__49432_50116__$1 = temp__5753__auto___50115;
if(cljs.core.chunked_seq_QMARK_(seq__49432_50116__$1)){
var c__4679__auto___50117 = cljs.core.chunk_first(seq__49432_50116__$1);
var G__50118 = cljs.core.chunk_rest(seq__49432_50116__$1);
var G__50119 = c__4679__auto___50117;
var G__50120 = cljs.core.count(c__4679__auto___50117);
var G__50121 = (0);
seq__49432_50106 = G__50118;
chunk__49433_50107 = G__50119;
count__49434_50108 = G__50120;
i__49435_50109 = G__50121;
continue;
} else {
var node_50122 = cljs.core.first(seq__49432_50116__$1);
fragment.appendChild(shadow.dom._to_dom(node_50122));


var G__50123 = cljs.core.next(seq__49432_50116__$1);
var G__50124 = null;
var G__50125 = (0);
var G__50126 = (0);
seq__49432_50106 = G__50123;
chunk__49433_50107 = G__50124;
count__49434_50108 = G__50125;
i__49435_50109 = G__50126;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49427){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49427));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49465_50127 = cljs.core.seq(scripts);
var chunk__49466_50128 = null;
var count__49467_50129 = (0);
var i__49468_50130 = (0);
while(true){
if((i__49468_50130 < count__49467_50129)){
var vec__49510_50131 = chunk__49466_50128.cljs$core$IIndexed$_nth$arity$2(null,i__49468_50130);
var script_tag_50132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49510_50131,(0),null);
var script_body_50133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49510_50131,(1),null);
eval(script_body_50133);


var G__50134 = seq__49465_50127;
var G__50135 = chunk__49466_50128;
var G__50136 = count__49467_50129;
var G__50137 = (i__49468_50130 + (1));
seq__49465_50127 = G__50134;
chunk__49466_50128 = G__50135;
count__49467_50129 = G__50136;
i__49468_50130 = G__50137;
continue;
} else {
var temp__5753__auto___50138 = cljs.core.seq(seq__49465_50127);
if(temp__5753__auto___50138){
var seq__49465_50139__$1 = temp__5753__auto___50138;
if(cljs.core.chunked_seq_QMARK_(seq__49465_50139__$1)){
var c__4679__auto___50140 = cljs.core.chunk_first(seq__49465_50139__$1);
var G__50141 = cljs.core.chunk_rest(seq__49465_50139__$1);
var G__50142 = c__4679__auto___50140;
var G__50143 = cljs.core.count(c__4679__auto___50140);
var G__50144 = (0);
seq__49465_50127 = G__50141;
chunk__49466_50128 = G__50142;
count__49467_50129 = G__50143;
i__49468_50130 = G__50144;
continue;
} else {
var vec__49541_50145 = cljs.core.first(seq__49465_50139__$1);
var script_tag_50146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49541_50145,(0),null);
var script_body_50147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49541_50145,(1),null);
eval(script_body_50147);


var G__50148 = cljs.core.next(seq__49465_50139__$1);
var G__50149 = null;
var G__50150 = (0);
var G__50151 = (0);
seq__49465_50127 = G__50148;
chunk__49466_50128 = G__50149;
count__49467_50129 = G__50150;
i__49468_50130 = G__50151;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49548){
var vec__49550 = p__49548;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49550,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49550,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49589 = arguments.length;
switch (G__49589) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__49617 = cljs.core.seq(style_keys);
var chunk__49618 = null;
var count__49619 = (0);
var i__49620 = (0);
while(true){
if((i__49620 < count__49619)){
var it = chunk__49618.cljs$core$IIndexed$_nth$arity$2(null,i__49620);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50153 = seq__49617;
var G__50154 = chunk__49618;
var G__50155 = count__49619;
var G__50156 = (i__49620 + (1));
seq__49617 = G__50153;
chunk__49618 = G__50154;
count__49619 = G__50155;
i__49620 = G__50156;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49617);
if(temp__5753__auto__){
var seq__49617__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49617__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49617__$1);
var G__50157 = cljs.core.chunk_rest(seq__49617__$1);
var G__50158 = c__4679__auto__;
var G__50159 = cljs.core.count(c__4679__auto__);
var G__50160 = (0);
seq__49617 = G__50157;
chunk__49618 = G__50158;
count__49619 = G__50159;
i__49620 = G__50160;
continue;
} else {
var it = cljs.core.first(seq__49617__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50161 = cljs.core.next(seq__49617__$1);
var G__50162 = null;
var G__50163 = (0);
var G__50164 = (0);
seq__49617 = G__50161;
chunk__49618 = G__50162;
count__49619 = G__50163;
i__49620 = G__50164;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k49626,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__49651 = k49626;
var G__49651__$1 = (((G__49651 instanceof cljs.core.Keyword))?G__49651.fqn:null);
switch (G__49651__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49626,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__49652){
var vec__49653 = p__49652;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49653,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49653,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49625){
var self__ = this;
var G__49625__$1 = this;
return (new cljs.core.RecordIter((0),G__49625__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49627,other49628){
var self__ = this;
var this49627__$1 = this;
return (((!((other49628 == null)))) && ((((this49627__$1.constructor === other49628.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49627__$1.x,other49628.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49627__$1.y,other49628.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49627__$1.__extmap,other49628.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k49626){
var self__ = this;
var this__4509__auto____$1 = this;
var G__49665 = k49626;
var G__49665__$1 = (((G__49665 instanceof cljs.core.Keyword))?G__49665.fqn:null);
switch (G__49665__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49626);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__49625){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__49666 = cljs.core.keyword_identical_QMARK_;
var expr__49667 = k__4511__auto__;
if(cljs.core.truth_((pred__49666.cljs$core$IFn$_invoke$arity$2 ? pred__49666.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49667) : pred__49666.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49667)))){
return (new shadow.dom.Coordinate(G__49625,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49666.cljs$core$IFn$_invoke$arity$2 ? pred__49666.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49667) : pred__49666.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49667)))){
return (new shadow.dom.Coordinate(self__.x,G__49625,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__49625),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__49625){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49625,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49642){
var extmap__4542__auto__ = (function (){var G__49671 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49642,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49642)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49671);
} else {
return G__49671;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49642),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49642),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k49679,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__49689 = k49679;
var G__49689__$1 = (((G__49689 instanceof cljs.core.Keyword))?G__49689.fqn:null);
switch (G__49689__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49679,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__49692){
var vec__49693 = p__49692;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49693,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49693,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49678){
var self__ = this;
var G__49678__$1 = this;
return (new cljs.core.RecordIter((0),G__49678__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49680,other49681){
var self__ = this;
var this49680__$1 = this;
return (((!((other49681 == null)))) && ((((this49680__$1.constructor === other49681.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49680__$1.w,other49681.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49680__$1.h,other49681.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49680__$1.__extmap,other49681.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k49679){
var self__ = this;
var this__4509__auto____$1 = this;
var G__49712 = k49679;
var G__49712__$1 = (((G__49712 instanceof cljs.core.Keyword))?G__49712.fqn:null);
switch (G__49712__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49679);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__49678){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__49713 = cljs.core.keyword_identical_QMARK_;
var expr__49714 = k__4511__auto__;
if(cljs.core.truth_((pred__49713.cljs$core$IFn$_invoke$arity$2 ? pred__49713.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49714) : pred__49713.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49714)))){
return (new shadow.dom.Size(G__49678,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49713.cljs$core$IFn$_invoke$arity$2 ? pred__49713.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49714) : pred__49713.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49714)))){
return (new shadow.dom.Size(self__.w,G__49678,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__49678),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__49678){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49678,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49683){
var extmap__4542__auto__ = (function (){var G__49719 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49683,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49683)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49719);
} else {
return G__49719;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49683),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49683),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__50170 = (i + (1));
var G__50171 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50170;
ret = G__50171;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49738){
var vec__49740 = p__49738;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49740,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49745 = arguments.length;
switch (G__49745) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__50173 = ps;
var G__50174 = (i + (1));
el__$1 = G__50173;
i = G__50174;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49767 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49767,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49767,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49767,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49774_50175 = cljs.core.seq(props);
var chunk__49775_50176 = null;
var count__49776_50177 = (0);
var i__49777_50178 = (0);
while(true){
if((i__49777_50178 < count__49776_50177)){
var vec__49786_50179 = chunk__49775_50176.cljs$core$IIndexed$_nth$arity$2(null,i__49777_50178);
var k_50180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49786_50179,(0),null);
var v_50181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49786_50179,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_50180);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50180),v_50181);


var G__50182 = seq__49774_50175;
var G__50183 = chunk__49775_50176;
var G__50184 = count__49776_50177;
var G__50185 = (i__49777_50178 + (1));
seq__49774_50175 = G__50182;
chunk__49775_50176 = G__50183;
count__49776_50177 = G__50184;
i__49777_50178 = G__50185;
continue;
} else {
var temp__5753__auto___50186 = cljs.core.seq(seq__49774_50175);
if(temp__5753__auto___50186){
var seq__49774_50187__$1 = temp__5753__auto___50186;
if(cljs.core.chunked_seq_QMARK_(seq__49774_50187__$1)){
var c__4679__auto___50188 = cljs.core.chunk_first(seq__49774_50187__$1);
var G__50189 = cljs.core.chunk_rest(seq__49774_50187__$1);
var G__50190 = c__4679__auto___50188;
var G__50191 = cljs.core.count(c__4679__auto___50188);
var G__50192 = (0);
seq__49774_50175 = G__50189;
chunk__49775_50176 = G__50190;
count__49776_50177 = G__50191;
i__49777_50178 = G__50192;
continue;
} else {
var vec__49789_50193 = cljs.core.first(seq__49774_50187__$1);
var k_50194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49789_50193,(0),null);
var v_50195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49789_50193,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_50194);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50194),v_50195);


var G__50196 = cljs.core.next(seq__49774_50187__$1);
var G__50197 = null;
var G__50198 = (0);
var G__50199 = (0);
seq__49774_50175 = G__50196;
chunk__49775_50176 = G__50197;
count__49776_50177 = G__50198;
i__49777_50178 = G__50199;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49822 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49822,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49822,(1),null);
var seq__49827_50200 = cljs.core.seq(node_children);
var chunk__49829_50201 = null;
var count__49830_50202 = (0);
var i__49831_50203 = (0);
while(true){
if((i__49831_50203 < count__49830_50202)){
var child_struct_50205 = chunk__49829_50201.cljs$core$IIndexed$_nth$arity$2(null,i__49831_50203);
if((!((child_struct_50205 == null)))){
if(typeof child_struct_50205 === 'string'){
var text_50206 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50206),child_struct_50205].join(''));
} else {
var children_50207 = shadow.dom.svg_node(child_struct_50205);
if(cljs.core.seq_QMARK_(children_50207)){
var seq__49874_50208 = cljs.core.seq(children_50207);
var chunk__49876_50209 = null;
var count__49877_50210 = (0);
var i__49878_50211 = (0);
while(true){
if((i__49878_50211 < count__49877_50210)){
var child_50212 = chunk__49876_50209.cljs$core$IIndexed$_nth$arity$2(null,i__49878_50211);
if(cljs.core.truth_(child_50212)){
node.appendChild(child_50212);


var G__50214 = seq__49874_50208;
var G__50215 = chunk__49876_50209;
var G__50216 = count__49877_50210;
var G__50217 = (i__49878_50211 + (1));
seq__49874_50208 = G__50214;
chunk__49876_50209 = G__50215;
count__49877_50210 = G__50216;
i__49878_50211 = G__50217;
continue;
} else {
var G__50221 = seq__49874_50208;
var G__50222 = chunk__49876_50209;
var G__50223 = count__49877_50210;
var G__50224 = (i__49878_50211 + (1));
seq__49874_50208 = G__50221;
chunk__49876_50209 = G__50222;
count__49877_50210 = G__50223;
i__49878_50211 = G__50224;
continue;
}
} else {
var temp__5753__auto___50225 = cljs.core.seq(seq__49874_50208);
if(temp__5753__auto___50225){
var seq__49874_50226__$1 = temp__5753__auto___50225;
if(cljs.core.chunked_seq_QMARK_(seq__49874_50226__$1)){
var c__4679__auto___50227 = cljs.core.chunk_first(seq__49874_50226__$1);
var G__50228 = cljs.core.chunk_rest(seq__49874_50226__$1);
var G__50229 = c__4679__auto___50227;
var G__50230 = cljs.core.count(c__4679__auto___50227);
var G__50231 = (0);
seq__49874_50208 = G__50228;
chunk__49876_50209 = G__50229;
count__49877_50210 = G__50230;
i__49878_50211 = G__50231;
continue;
} else {
var child_50232 = cljs.core.first(seq__49874_50226__$1);
if(cljs.core.truth_(child_50232)){
node.appendChild(child_50232);


var G__50233 = cljs.core.next(seq__49874_50226__$1);
var G__50234 = null;
var G__50235 = (0);
var G__50236 = (0);
seq__49874_50208 = G__50233;
chunk__49876_50209 = G__50234;
count__49877_50210 = G__50235;
i__49878_50211 = G__50236;
continue;
} else {
var G__50237 = cljs.core.next(seq__49874_50226__$1);
var G__50238 = null;
var G__50239 = (0);
var G__50240 = (0);
seq__49874_50208 = G__50237;
chunk__49876_50209 = G__50238;
count__49877_50210 = G__50239;
i__49878_50211 = G__50240;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50207);
}
}


var G__50241 = seq__49827_50200;
var G__50242 = chunk__49829_50201;
var G__50243 = count__49830_50202;
var G__50244 = (i__49831_50203 + (1));
seq__49827_50200 = G__50241;
chunk__49829_50201 = G__50242;
count__49830_50202 = G__50243;
i__49831_50203 = G__50244;
continue;
} else {
var G__50245 = seq__49827_50200;
var G__50246 = chunk__49829_50201;
var G__50247 = count__49830_50202;
var G__50248 = (i__49831_50203 + (1));
seq__49827_50200 = G__50245;
chunk__49829_50201 = G__50246;
count__49830_50202 = G__50247;
i__49831_50203 = G__50248;
continue;
}
} else {
var temp__5753__auto___50249 = cljs.core.seq(seq__49827_50200);
if(temp__5753__auto___50249){
var seq__49827_50250__$1 = temp__5753__auto___50249;
if(cljs.core.chunked_seq_QMARK_(seq__49827_50250__$1)){
var c__4679__auto___50251 = cljs.core.chunk_first(seq__49827_50250__$1);
var G__50252 = cljs.core.chunk_rest(seq__49827_50250__$1);
var G__50253 = c__4679__auto___50251;
var G__50254 = cljs.core.count(c__4679__auto___50251);
var G__50255 = (0);
seq__49827_50200 = G__50252;
chunk__49829_50201 = G__50253;
count__49830_50202 = G__50254;
i__49831_50203 = G__50255;
continue;
} else {
var child_struct_50256 = cljs.core.first(seq__49827_50250__$1);
if((!((child_struct_50256 == null)))){
if(typeof child_struct_50256 === 'string'){
var text_50257 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50257),child_struct_50256].join(''));
} else {
var children_50258 = shadow.dom.svg_node(child_struct_50256);
if(cljs.core.seq_QMARK_(children_50258)){
var seq__49898_50259 = cljs.core.seq(children_50258);
var chunk__49900_50260 = null;
var count__49901_50261 = (0);
var i__49902_50262 = (0);
while(true){
if((i__49902_50262 < count__49901_50261)){
var child_50263 = chunk__49900_50260.cljs$core$IIndexed$_nth$arity$2(null,i__49902_50262);
if(cljs.core.truth_(child_50263)){
node.appendChild(child_50263);


var G__50264 = seq__49898_50259;
var G__50265 = chunk__49900_50260;
var G__50266 = count__49901_50261;
var G__50267 = (i__49902_50262 + (1));
seq__49898_50259 = G__50264;
chunk__49900_50260 = G__50265;
count__49901_50261 = G__50266;
i__49902_50262 = G__50267;
continue;
} else {
var G__50268 = seq__49898_50259;
var G__50269 = chunk__49900_50260;
var G__50270 = count__49901_50261;
var G__50271 = (i__49902_50262 + (1));
seq__49898_50259 = G__50268;
chunk__49900_50260 = G__50269;
count__49901_50261 = G__50270;
i__49902_50262 = G__50271;
continue;
}
} else {
var temp__5753__auto___50272__$1 = cljs.core.seq(seq__49898_50259);
if(temp__5753__auto___50272__$1){
var seq__49898_50273__$1 = temp__5753__auto___50272__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49898_50273__$1)){
var c__4679__auto___50274 = cljs.core.chunk_first(seq__49898_50273__$1);
var G__50275 = cljs.core.chunk_rest(seq__49898_50273__$1);
var G__50276 = c__4679__auto___50274;
var G__50277 = cljs.core.count(c__4679__auto___50274);
var G__50278 = (0);
seq__49898_50259 = G__50275;
chunk__49900_50260 = G__50276;
count__49901_50261 = G__50277;
i__49902_50262 = G__50278;
continue;
} else {
var child_50279 = cljs.core.first(seq__49898_50273__$1);
if(cljs.core.truth_(child_50279)){
node.appendChild(child_50279);


var G__50280 = cljs.core.next(seq__49898_50273__$1);
var G__50281 = null;
var G__50282 = (0);
var G__50283 = (0);
seq__49898_50259 = G__50280;
chunk__49900_50260 = G__50281;
count__49901_50261 = G__50282;
i__49902_50262 = G__50283;
continue;
} else {
var G__50284 = cljs.core.next(seq__49898_50273__$1);
var G__50285 = null;
var G__50286 = (0);
var G__50287 = (0);
seq__49898_50259 = G__50284;
chunk__49900_50260 = G__50285;
count__49901_50261 = G__50286;
i__49902_50262 = G__50287;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50258);
}
}


var G__50288 = cljs.core.next(seq__49827_50250__$1);
var G__50289 = null;
var G__50290 = (0);
var G__50291 = (0);
seq__49827_50200 = G__50288;
chunk__49829_50201 = G__50289;
count__49830_50202 = G__50290;
i__49831_50203 = G__50291;
continue;
} else {
var G__50292 = cljs.core.next(seq__49827_50250__$1);
var G__50293 = null;
var G__50294 = (0);
var G__50295 = (0);
seq__49827_50200 = G__50292;
chunk__49829_50201 = G__50293;
count__49830_50202 = G__50294;
i__49831_50203 = G__50295;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50296 = arguments.length;
var i__4865__auto___50297 = (0);
while(true){
if((i__4865__auto___50297 < len__4864__auto___50296)){
args__4870__auto__.push((arguments[i__4865__auto___50297]));

var G__50298 = (i__4865__auto___50297 + (1));
i__4865__auto___50297 = G__50298;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49904){
var G__49905 = cljs.core.first(seq49904);
var seq49904__$1 = cljs.core.next(seq49904);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49905,seq49904__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49907 = arguments.length;
switch (G__49907) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__42377__auto___50300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42378__auto__ = (function (){var switch__40514__auto__ = (function (state_49919){
var state_val_49920 = (state_49919[(1)]);
if((state_val_49920 === (1))){
var state_49919__$1 = state_49919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49919__$1,(2),once_or_cleanup);
} else {
if((state_val_49920 === (2))){
var inst_49915 = (state_49919[(2)]);
var inst_49916 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49919__$1 = (function (){var statearr_49924 = state_49919;
(statearr_49924[(7)] = inst_49915);

return statearr_49924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49919__$1,inst_49916);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__40515__auto__ = null;
var shadow$dom$state_machine__40515__auto____0 = (function (){
var statearr_49925 = [null,null,null,null,null,null,null,null];
(statearr_49925[(0)] = shadow$dom$state_machine__40515__auto__);

(statearr_49925[(1)] = (1));

return statearr_49925;
});
var shadow$dom$state_machine__40515__auto____1 = (function (state_49919){
while(true){
var ret_value__40516__auto__ = (function (){try{while(true){
var result__40517__auto__ = switch__40514__auto__(state_49919);
if(cljs.core.keyword_identical_QMARK_(result__40517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40517__auto__;
}
break;
}
}catch (e49926){var ex__40518__auto__ = e49926;
var statearr_49927_50305 = state_49919;
(statearr_49927_50305[(2)] = ex__40518__auto__);


if(cljs.core.seq((state_49919[(4)]))){
var statearr_49929_50306 = state_49919;
(statearr_49929_50306[(1)] = cljs.core.first((state_49919[(4)])));

} else {
throw ex__40518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50307 = state_49919;
state_49919 = G__50307;
continue;
} else {
return ret_value__40516__auto__;
}
break;
}
});
shadow$dom$state_machine__40515__auto__ = function(state_49919){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__40515__auto____0.call(this);
case 1:
return shadow$dom$state_machine__40515__auto____1.call(this,state_49919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__40515__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__40515__auto____0;
shadow$dom$state_machine__40515__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__40515__auto____1;
return shadow$dom$state_machine__40515__auto__;
})()
})();
var state__42379__auto__ = (function (){var statearr_49930 = f__42378__auto__();
(statearr_49930[(6)] = c__42377__auto___50300);

return statearr_49930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42379__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
