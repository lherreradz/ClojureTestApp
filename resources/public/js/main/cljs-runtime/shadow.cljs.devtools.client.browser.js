goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51138 = arguments.length;
var i__4865__auto___51139 = (0);
while(true){
if((i__4865__auto___51139 < len__4864__auto___51138)){
args__4870__auto__.push((arguments[i__4865__auto___51139]));

var G__51140 = (i__4865__auto___51139 + (1));
i__4865__auto___51139 = G__51140;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51007){
var G__51008 = cljs.core.first(seq51007);
var seq51007__$1 = cljs.core.next(seq51007);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51008,seq51007__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51011 = cljs.core.seq(sources);
var chunk__51012 = null;
var count__51013 = (0);
var i__51014 = (0);
while(true){
if((i__51014 < count__51013)){
var map__51022 = chunk__51012.cljs$core$IIndexed$_nth$arity$2(null,i__51014);
var map__51022__$1 = cljs.core.__destructure_map(map__51022);
var src = map__51022__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51023){var e_51141 = e51023;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51141);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51141.message)].join('')));
}

var G__51142 = seq__51011;
var G__51143 = chunk__51012;
var G__51144 = count__51013;
var G__51145 = (i__51014 + (1));
seq__51011 = G__51142;
chunk__51012 = G__51143;
count__51013 = G__51144;
i__51014 = G__51145;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51011);
if(temp__5753__auto__){
var seq__51011__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51011__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51011__$1);
var G__51146 = cljs.core.chunk_rest(seq__51011__$1);
var G__51147 = c__4679__auto__;
var G__51148 = cljs.core.count(c__4679__auto__);
var G__51149 = (0);
seq__51011 = G__51146;
chunk__51012 = G__51147;
count__51013 = G__51148;
i__51014 = G__51149;
continue;
} else {
var map__51025 = cljs.core.first(seq__51011__$1);
var map__51025__$1 = cljs.core.__destructure_map(map__51025);
var src = map__51025__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51027){var e_51150 = e51027;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51150);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51150.message)].join('')));
}

var G__51151 = cljs.core.next(seq__51011__$1);
var G__51152 = null;
var G__51153 = (0);
var G__51154 = (0);
seq__51011 = G__51151;
chunk__51012 = G__51152;
count__51013 = G__51153;
i__51014 = G__51154;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51028 = cljs.core.seq(js_requires);
var chunk__51029 = null;
var count__51030 = (0);
var i__51031 = (0);
while(true){
if((i__51031 < count__51030)){
var js_ns = chunk__51029.cljs$core$IIndexed$_nth$arity$2(null,i__51031);
var require_str_51155 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51155);


var G__51156 = seq__51028;
var G__51157 = chunk__51029;
var G__51158 = count__51030;
var G__51159 = (i__51031 + (1));
seq__51028 = G__51156;
chunk__51029 = G__51157;
count__51030 = G__51158;
i__51031 = G__51159;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51028);
if(temp__5753__auto__){
var seq__51028__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51028__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51028__$1);
var G__51160 = cljs.core.chunk_rest(seq__51028__$1);
var G__51161 = c__4679__auto__;
var G__51162 = cljs.core.count(c__4679__auto__);
var G__51163 = (0);
seq__51028 = G__51160;
chunk__51029 = G__51161;
count__51030 = G__51162;
i__51031 = G__51163;
continue;
} else {
var js_ns = cljs.core.first(seq__51028__$1);
var require_str_51164 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51164);


var G__51165 = cljs.core.next(seq__51028__$1);
var G__51166 = null;
var G__51167 = (0);
var G__51168 = (0);
seq__51028 = G__51165;
chunk__51029 = G__51166;
count__51030 = G__51167;
i__51031 = G__51168;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51035){
var map__51036 = p__51035;
var map__51036__$1 = cljs.core.__destructure_map(map__51036);
var msg = map__51036__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51036__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51036__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51037(s__51038){
return (new cljs.core.LazySeq(null,(function (){
var s__51038__$1 = s__51038;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51038__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__51043 = cljs.core.first(xs__6308__auto__);
var map__51043__$1 = cljs.core.__destructure_map(map__51043);
var src = map__51043__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51043__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51043__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__51038__$1,map__51043,map__51043__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51036,map__51036__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51037_$_iter__51039(s__51040){
return (new cljs.core.LazySeq(null,((function (s__51038__$1,map__51043,map__51043__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51036,map__51036__$1,msg,info,reload_info){
return (function (){
var s__51040__$1 = s__51040;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51040__$1);
if(temp__5753__auto____$1){
var s__51040__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51040__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51040__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51042 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51041 = (0);
while(true){
if((i__51041 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__51041);
cljs.core.chunk_append(b__51042,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51169 = (i__51041 + (1));
i__51041 = G__51169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51042),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51037_$_iter__51039(cljs.core.chunk_rest(s__51040__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51042),null);
}
} else {
var warning = cljs.core.first(s__51040__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51037_$_iter__51039(cljs.core.rest(s__51040__$2)));
}
} else {
return null;
}
break;
}
});})(s__51038__$1,map__51043,map__51043__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51036,map__51036__$1,msg,info,reload_info))
,null,null));
});})(s__51038__$1,map__51043,map__51043__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51036,map__51036__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51037(cljs.core.rest(s__51038__$1)));
} else {
var G__51170 = cljs.core.rest(s__51038__$1);
s__51038__$1 = G__51170;
continue;
}
} else {
var G__51171 = cljs.core.rest(s__51038__$1);
s__51038__$1 = G__51171;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51044_51172 = cljs.core.seq(warnings);
var chunk__51045_51173 = null;
var count__51046_51174 = (0);
var i__51047_51175 = (0);
while(true){
if((i__51047_51175 < count__51046_51174)){
var map__51050_51176 = chunk__51045_51173.cljs$core$IIndexed$_nth$arity$2(null,i__51047_51175);
var map__51050_51177__$1 = cljs.core.__destructure_map(map__51050_51176);
var w_51178 = map__51050_51177__$1;
var msg_51179__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51050_51177__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51050_51177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51050_51177__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51050_51177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51182)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51180),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51181),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51179__$1)].join(''));


var G__51183 = seq__51044_51172;
var G__51184 = chunk__51045_51173;
var G__51185 = count__51046_51174;
var G__51186 = (i__51047_51175 + (1));
seq__51044_51172 = G__51183;
chunk__51045_51173 = G__51184;
count__51046_51174 = G__51185;
i__51047_51175 = G__51186;
continue;
} else {
var temp__5753__auto___51187 = cljs.core.seq(seq__51044_51172);
if(temp__5753__auto___51187){
var seq__51044_51188__$1 = temp__5753__auto___51187;
if(cljs.core.chunked_seq_QMARK_(seq__51044_51188__$1)){
var c__4679__auto___51189 = cljs.core.chunk_first(seq__51044_51188__$1);
var G__51190 = cljs.core.chunk_rest(seq__51044_51188__$1);
var G__51191 = c__4679__auto___51189;
var G__51192 = cljs.core.count(c__4679__auto___51189);
var G__51193 = (0);
seq__51044_51172 = G__51190;
chunk__51045_51173 = G__51191;
count__51046_51174 = G__51192;
i__51047_51175 = G__51193;
continue;
} else {
var map__51051_51194 = cljs.core.first(seq__51044_51188__$1);
var map__51051_51195__$1 = cljs.core.__destructure_map(map__51051_51194);
var w_51196 = map__51051_51195__$1;
var msg_51197__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051_51195__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051_51195__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051_51195__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051_51195__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51200)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51198),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51199),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51197__$1)].join(''));


var G__51201 = cljs.core.next(seq__51044_51188__$1);
var G__51202 = null;
var G__51203 = (0);
var G__51204 = (0);
seq__51044_51172 = G__51201;
chunk__51045_51173 = G__51202;
count__51046_51174 = G__51203;
i__51047_51175 = G__51204;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51034_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51034_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51052){
var map__51053 = p__51052;
var map__51053__$1 = cljs.core.__destructure_map(map__51053);
var msg = map__51053__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51053__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51054 = cljs.core.seq(updates);
var chunk__51056 = null;
var count__51057 = (0);
var i__51058 = (0);
while(true){
if((i__51058 < count__51057)){
var path = chunk__51056.cljs$core$IIndexed$_nth$arity$2(null,i__51058);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51088_51205 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51092_51206 = null;
var count__51093_51207 = (0);
var i__51094_51208 = (0);
while(true){
if((i__51094_51208 < count__51093_51207)){
var node_51209 = chunk__51092_51206.cljs$core$IIndexed$_nth$arity$2(null,i__51094_51208);
if(cljs.core.not(node_51209.shadow$old)){
var path_match_51210 = shadow.cljs.devtools.client.browser.match_paths(node_51209.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51210)){
var new_link_51211 = (function (){var G__51100 = node_51209.cloneNode(true);
G__51100.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51210),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51100;
})();
(node_51209.shadow$old = true);

(new_link_51211.onload = ((function (seq__51088_51205,chunk__51092_51206,count__51093_51207,i__51094_51208,seq__51054,chunk__51056,count__51057,i__51058,new_link_51211,path_match_51210,node_51209,path,map__51053,map__51053__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51209);
});})(seq__51088_51205,chunk__51092_51206,count__51093_51207,i__51094_51208,seq__51054,chunk__51056,count__51057,i__51058,new_link_51211,path_match_51210,node_51209,path,map__51053,map__51053__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51210], 0));

goog.dom.insertSiblingAfter(new_link_51211,node_51209);


var G__51212 = seq__51088_51205;
var G__51213 = chunk__51092_51206;
var G__51214 = count__51093_51207;
var G__51215 = (i__51094_51208 + (1));
seq__51088_51205 = G__51212;
chunk__51092_51206 = G__51213;
count__51093_51207 = G__51214;
i__51094_51208 = G__51215;
continue;
} else {
var G__51216 = seq__51088_51205;
var G__51217 = chunk__51092_51206;
var G__51218 = count__51093_51207;
var G__51219 = (i__51094_51208 + (1));
seq__51088_51205 = G__51216;
chunk__51092_51206 = G__51217;
count__51093_51207 = G__51218;
i__51094_51208 = G__51219;
continue;
}
} else {
var G__51220 = seq__51088_51205;
var G__51221 = chunk__51092_51206;
var G__51222 = count__51093_51207;
var G__51223 = (i__51094_51208 + (1));
seq__51088_51205 = G__51220;
chunk__51092_51206 = G__51221;
count__51093_51207 = G__51222;
i__51094_51208 = G__51223;
continue;
}
} else {
var temp__5753__auto___51224 = cljs.core.seq(seq__51088_51205);
if(temp__5753__auto___51224){
var seq__51088_51225__$1 = temp__5753__auto___51224;
if(cljs.core.chunked_seq_QMARK_(seq__51088_51225__$1)){
var c__4679__auto___51226 = cljs.core.chunk_first(seq__51088_51225__$1);
var G__51227 = cljs.core.chunk_rest(seq__51088_51225__$1);
var G__51228 = c__4679__auto___51226;
var G__51229 = cljs.core.count(c__4679__auto___51226);
var G__51230 = (0);
seq__51088_51205 = G__51227;
chunk__51092_51206 = G__51228;
count__51093_51207 = G__51229;
i__51094_51208 = G__51230;
continue;
} else {
var node_51231 = cljs.core.first(seq__51088_51225__$1);
if(cljs.core.not(node_51231.shadow$old)){
var path_match_51232 = shadow.cljs.devtools.client.browser.match_paths(node_51231.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51232)){
var new_link_51233 = (function (){var G__51101 = node_51231.cloneNode(true);
G__51101.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51232),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51101;
})();
(node_51231.shadow$old = true);

(new_link_51233.onload = ((function (seq__51088_51205,chunk__51092_51206,count__51093_51207,i__51094_51208,seq__51054,chunk__51056,count__51057,i__51058,new_link_51233,path_match_51232,node_51231,seq__51088_51225__$1,temp__5753__auto___51224,path,map__51053,map__51053__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51231);
});})(seq__51088_51205,chunk__51092_51206,count__51093_51207,i__51094_51208,seq__51054,chunk__51056,count__51057,i__51058,new_link_51233,path_match_51232,node_51231,seq__51088_51225__$1,temp__5753__auto___51224,path,map__51053,map__51053__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51232], 0));

goog.dom.insertSiblingAfter(new_link_51233,node_51231);


var G__51234 = cljs.core.next(seq__51088_51225__$1);
var G__51235 = null;
var G__51236 = (0);
var G__51237 = (0);
seq__51088_51205 = G__51234;
chunk__51092_51206 = G__51235;
count__51093_51207 = G__51236;
i__51094_51208 = G__51237;
continue;
} else {
var G__51238 = cljs.core.next(seq__51088_51225__$1);
var G__51239 = null;
var G__51240 = (0);
var G__51241 = (0);
seq__51088_51205 = G__51238;
chunk__51092_51206 = G__51239;
count__51093_51207 = G__51240;
i__51094_51208 = G__51241;
continue;
}
} else {
var G__51242 = cljs.core.next(seq__51088_51225__$1);
var G__51243 = null;
var G__51244 = (0);
var G__51245 = (0);
seq__51088_51205 = G__51242;
chunk__51092_51206 = G__51243;
count__51093_51207 = G__51244;
i__51094_51208 = G__51245;
continue;
}
}
} else {
}
}
break;
}


var G__51246 = seq__51054;
var G__51247 = chunk__51056;
var G__51248 = count__51057;
var G__51249 = (i__51058 + (1));
seq__51054 = G__51246;
chunk__51056 = G__51247;
count__51057 = G__51248;
i__51058 = G__51249;
continue;
} else {
var G__51250 = seq__51054;
var G__51251 = chunk__51056;
var G__51252 = count__51057;
var G__51253 = (i__51058 + (1));
seq__51054 = G__51250;
chunk__51056 = G__51251;
count__51057 = G__51252;
i__51058 = G__51253;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51054);
if(temp__5753__auto__){
var seq__51054__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51054__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51054__$1);
var G__51254 = cljs.core.chunk_rest(seq__51054__$1);
var G__51255 = c__4679__auto__;
var G__51256 = cljs.core.count(c__4679__auto__);
var G__51257 = (0);
seq__51054 = G__51254;
chunk__51056 = G__51255;
count__51057 = G__51256;
i__51058 = G__51257;
continue;
} else {
var path = cljs.core.first(seq__51054__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51102_51258 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51106_51259 = null;
var count__51107_51260 = (0);
var i__51108_51261 = (0);
while(true){
if((i__51108_51261 < count__51107_51260)){
var node_51262 = chunk__51106_51259.cljs$core$IIndexed$_nth$arity$2(null,i__51108_51261);
if(cljs.core.not(node_51262.shadow$old)){
var path_match_51263 = shadow.cljs.devtools.client.browser.match_paths(node_51262.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51263)){
var new_link_51264 = (function (){var G__51114 = node_51262.cloneNode(true);
G__51114.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51263),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51114;
})();
(node_51262.shadow$old = true);

(new_link_51264.onload = ((function (seq__51102_51258,chunk__51106_51259,count__51107_51260,i__51108_51261,seq__51054,chunk__51056,count__51057,i__51058,new_link_51264,path_match_51263,node_51262,path,seq__51054__$1,temp__5753__auto__,map__51053,map__51053__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51262);
});})(seq__51102_51258,chunk__51106_51259,count__51107_51260,i__51108_51261,seq__51054,chunk__51056,count__51057,i__51058,new_link_51264,path_match_51263,node_51262,path,seq__51054__$1,temp__5753__auto__,map__51053,map__51053__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51263], 0));

goog.dom.insertSiblingAfter(new_link_51264,node_51262);


var G__51265 = seq__51102_51258;
var G__51266 = chunk__51106_51259;
var G__51267 = count__51107_51260;
var G__51268 = (i__51108_51261 + (1));
seq__51102_51258 = G__51265;
chunk__51106_51259 = G__51266;
count__51107_51260 = G__51267;
i__51108_51261 = G__51268;
continue;
} else {
var G__51269 = seq__51102_51258;
var G__51270 = chunk__51106_51259;
var G__51271 = count__51107_51260;
var G__51272 = (i__51108_51261 + (1));
seq__51102_51258 = G__51269;
chunk__51106_51259 = G__51270;
count__51107_51260 = G__51271;
i__51108_51261 = G__51272;
continue;
}
} else {
var G__51273 = seq__51102_51258;
var G__51274 = chunk__51106_51259;
var G__51275 = count__51107_51260;
var G__51276 = (i__51108_51261 + (1));
seq__51102_51258 = G__51273;
chunk__51106_51259 = G__51274;
count__51107_51260 = G__51275;
i__51108_51261 = G__51276;
continue;
}
} else {
var temp__5753__auto___51277__$1 = cljs.core.seq(seq__51102_51258);
if(temp__5753__auto___51277__$1){
var seq__51102_51278__$1 = temp__5753__auto___51277__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51102_51278__$1)){
var c__4679__auto___51279 = cljs.core.chunk_first(seq__51102_51278__$1);
var G__51280 = cljs.core.chunk_rest(seq__51102_51278__$1);
var G__51281 = c__4679__auto___51279;
var G__51282 = cljs.core.count(c__4679__auto___51279);
var G__51283 = (0);
seq__51102_51258 = G__51280;
chunk__51106_51259 = G__51281;
count__51107_51260 = G__51282;
i__51108_51261 = G__51283;
continue;
} else {
var node_51284 = cljs.core.first(seq__51102_51278__$1);
if(cljs.core.not(node_51284.shadow$old)){
var path_match_51285 = shadow.cljs.devtools.client.browser.match_paths(node_51284.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51285)){
var new_link_51286 = (function (){var G__51115 = node_51284.cloneNode(true);
G__51115.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51285),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51115;
})();
(node_51284.shadow$old = true);

(new_link_51286.onload = ((function (seq__51102_51258,chunk__51106_51259,count__51107_51260,i__51108_51261,seq__51054,chunk__51056,count__51057,i__51058,new_link_51286,path_match_51285,node_51284,seq__51102_51278__$1,temp__5753__auto___51277__$1,path,seq__51054__$1,temp__5753__auto__,map__51053,map__51053__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51284);
});})(seq__51102_51258,chunk__51106_51259,count__51107_51260,i__51108_51261,seq__51054,chunk__51056,count__51057,i__51058,new_link_51286,path_match_51285,node_51284,seq__51102_51278__$1,temp__5753__auto___51277__$1,path,seq__51054__$1,temp__5753__auto__,map__51053,map__51053__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51285], 0));

goog.dom.insertSiblingAfter(new_link_51286,node_51284);


var G__51287 = cljs.core.next(seq__51102_51278__$1);
var G__51288 = null;
var G__51289 = (0);
var G__51290 = (0);
seq__51102_51258 = G__51287;
chunk__51106_51259 = G__51288;
count__51107_51260 = G__51289;
i__51108_51261 = G__51290;
continue;
} else {
var G__51291 = cljs.core.next(seq__51102_51278__$1);
var G__51292 = null;
var G__51293 = (0);
var G__51294 = (0);
seq__51102_51258 = G__51291;
chunk__51106_51259 = G__51292;
count__51107_51260 = G__51293;
i__51108_51261 = G__51294;
continue;
}
} else {
var G__51295 = cljs.core.next(seq__51102_51278__$1);
var G__51296 = null;
var G__51297 = (0);
var G__51298 = (0);
seq__51102_51258 = G__51295;
chunk__51106_51259 = G__51296;
count__51107_51260 = G__51297;
i__51108_51261 = G__51298;
continue;
}
}
} else {
}
}
break;
}


var G__51299 = cljs.core.next(seq__51054__$1);
var G__51300 = null;
var G__51301 = (0);
var G__51302 = (0);
seq__51054 = G__51299;
chunk__51056 = G__51300;
count__51057 = G__51301;
i__51058 = G__51302;
continue;
} else {
var G__51303 = cljs.core.next(seq__51054__$1);
var G__51304 = null;
var G__51305 = (0);
var G__51306 = (0);
seq__51054 = G__51303;
chunk__51056 = G__51304;
count__51057 = G__51305;
i__51058 = G__51306;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51116){
var map__51117 = p__51116;
var map__51117__$1 = cljs.core.__destructure_map(map__51117);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51117__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51118){
var map__51119 = p__51118;
var map__51119__$1 = cljs.core.__destructure_map(map__51119);
var _ = map__51119__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51119__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51120,done,error){
var map__51121 = p__51120;
var map__51121__$1 = cljs.core.__destructure_map(map__51121);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51122,done,error){
var map__51123 = p__51122;
var map__51123__$1 = cljs.core.__destructure_map(map__51123);
var msg = map__51123__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51124){
var map__51125 = p__51124;
var map__51125__$1 = cljs.core.__destructure_map(map__51125);
var src = map__51125__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51125__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51126 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51126) : done.call(null,G__51126));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51127){
var map__51128 = p__51127;
var map__51128__$1 = cljs.core.__destructure_map(map__51128);
var msg__$1 = map__51128__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51128__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51129){var ex = e51129;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51130){
var map__51131 = p__51130;
var map__51131__$1 = cljs.core.__destructure_map(map__51131);
var env = map__51131__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51131__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51132){
var map__51133 = p__51132;
var map__51133__$1 = cljs.core.__destructure_map(map__51133);
var msg = map__51133__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51133__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51134){
var map__51135 = p__51134;
var map__51135__$1 = cljs.core.__destructure_map(map__51135);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51136){
var map__51137 = p__51136;
var map__51137__$1 = cljs.core.__destructure_map(map__51137);
var svc = map__51137__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51137__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
