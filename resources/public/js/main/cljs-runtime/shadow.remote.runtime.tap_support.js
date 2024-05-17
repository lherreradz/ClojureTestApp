goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__49797,p__49798){
var map__49799 = p__49797;
var map__49799__$1 = cljs.core.__destructure_map(map__49799);
var svc = map__49799__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49799__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49799__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49799__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49800 = p__49798;
var map__49800__$1 = cljs.core.__destructure_map(map__49800);
var msg = map__49800__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49800__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49800__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49800__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49800__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__49808,p__49809){
var map__49811 = p__49808;
var map__49811__$1 = cljs.core.__destructure_map(map__49811);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49811__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__49812 = p__49809;
var map__49812__$1 = cljs.core.__destructure_map(map__49812);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49812__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__49815,p__49816){
var map__49817 = p__49815;
var map__49817__$1 = cljs.core.__destructure_map(map__49817);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49818 = p__49816;
var map__49818__$1 = cljs.core.__destructure_map(map__49818);
var msg = map__49818__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49818__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__49825,tid){
var map__49826 = p__49825;
var map__49826__$1 = cljs.core.__destructure_map(map__49826);
var svc = map__49826__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49826__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__49843 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__49844 = null;
var count__49845 = (0);
var i__49846 = (0);
while(true){
if((i__49846 < count__49845)){
var vec__49853 = chunk__49844.cljs$core$IIndexed$_nth$arity$2(null,i__49846);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49853,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49853,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49883 = seq__49843;
var G__49884 = chunk__49844;
var G__49885 = count__49845;
var G__49886 = (i__49846 + (1));
seq__49843 = G__49883;
chunk__49844 = G__49884;
count__49845 = G__49885;
i__49846 = G__49886;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49843);
if(temp__5753__auto__){
var seq__49843__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49843__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49843__$1);
var G__49887 = cljs.core.chunk_rest(seq__49843__$1);
var G__49888 = c__4679__auto__;
var G__49889 = cljs.core.count(c__4679__auto__);
var G__49890 = (0);
seq__49843 = G__49887;
chunk__49844 = G__49888;
count__49845 = G__49889;
i__49846 = G__49890;
continue;
} else {
var vec__49856 = cljs.core.first(seq__49843__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49856,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49856,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49891 = cljs.core.next(seq__49843__$1);
var G__49892 = null;
var G__49893 = (0);
var G__49894 = (0);
seq__49843 = G__49891;
chunk__49844 = G__49892;
count__49845 = G__49893;
i__49846 = G__49894;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__49833_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__49833_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__49834_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__49834_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__49835_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__49835_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__49836_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__49836_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__49859){
var map__49860 = p__49859;
var map__49860__$1 = cljs.core.__destructure_map(map__49860);
var svc = map__49860__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
