goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49339){
var map__49340 = p__49339;
var map__49340__$1 = cljs.core.__destructure_map(map__49340);
var m = map__49340__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49340__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49343_49488 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49344_49489 = null;
var count__49345_49490 = (0);
var i__49346_49491 = (0);
while(true){
if((i__49346_49491 < count__49345_49490)){
var f_49492 = chunk__49344_49489.cljs$core$IIndexed$_nth$arity$2(null,i__49346_49491);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49492], 0));


var G__49493 = seq__49343_49488;
var G__49494 = chunk__49344_49489;
var G__49495 = count__49345_49490;
var G__49496 = (i__49346_49491 + (1));
seq__49343_49488 = G__49493;
chunk__49344_49489 = G__49494;
count__49345_49490 = G__49495;
i__49346_49491 = G__49496;
continue;
} else {
var temp__5753__auto___49497 = cljs.core.seq(seq__49343_49488);
if(temp__5753__auto___49497){
var seq__49343_49498__$1 = temp__5753__auto___49497;
if(cljs.core.chunked_seq_QMARK_(seq__49343_49498__$1)){
var c__4679__auto___49499 = cljs.core.chunk_first(seq__49343_49498__$1);
var G__49500 = cljs.core.chunk_rest(seq__49343_49498__$1);
var G__49501 = c__4679__auto___49499;
var G__49502 = cljs.core.count(c__4679__auto___49499);
var G__49503 = (0);
seq__49343_49488 = G__49500;
chunk__49344_49489 = G__49501;
count__49345_49490 = G__49502;
i__49346_49491 = G__49503;
continue;
} else {
var f_49504 = cljs.core.first(seq__49343_49498__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49504], 0));


var G__49505 = cljs.core.next(seq__49343_49498__$1);
var G__49506 = null;
var G__49507 = (0);
var G__49508 = (0);
seq__49343_49488 = G__49505;
chunk__49344_49489 = G__49506;
count__49345_49490 = G__49507;
i__49346_49491 = G__49508;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49509 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49509], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49509)))?cljs.core.second(arglists_49509):arglists_49509)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49351_49514 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49352_49515 = null;
var count__49353_49516 = (0);
var i__49354_49517 = (0);
while(true){
if((i__49354_49517 < count__49353_49516)){
var vec__49367_49518 = chunk__49352_49515.cljs$core$IIndexed$_nth$arity$2(null,i__49354_49517);
var name_49519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49367_49518,(0),null);
var map__49370_49520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49367_49518,(1),null);
var map__49370_49521__$1 = cljs.core.__destructure_map(map__49370_49520);
var doc_49522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49370_49521__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49370_49521__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49519], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49523], 0));

if(cljs.core.truth_(doc_49522)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49522], 0));
} else {
}


var G__49524 = seq__49351_49514;
var G__49525 = chunk__49352_49515;
var G__49526 = count__49353_49516;
var G__49527 = (i__49354_49517 + (1));
seq__49351_49514 = G__49524;
chunk__49352_49515 = G__49525;
count__49353_49516 = G__49526;
i__49354_49517 = G__49527;
continue;
} else {
var temp__5753__auto___49528 = cljs.core.seq(seq__49351_49514);
if(temp__5753__auto___49528){
var seq__49351_49529__$1 = temp__5753__auto___49528;
if(cljs.core.chunked_seq_QMARK_(seq__49351_49529__$1)){
var c__4679__auto___49530 = cljs.core.chunk_first(seq__49351_49529__$1);
var G__49531 = cljs.core.chunk_rest(seq__49351_49529__$1);
var G__49532 = c__4679__auto___49530;
var G__49533 = cljs.core.count(c__4679__auto___49530);
var G__49534 = (0);
seq__49351_49514 = G__49531;
chunk__49352_49515 = G__49532;
count__49353_49516 = G__49533;
i__49354_49517 = G__49534;
continue;
} else {
var vec__49371_49535 = cljs.core.first(seq__49351_49529__$1);
var name_49536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49371_49535,(0),null);
var map__49374_49537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49371_49535,(1),null);
var map__49374_49538__$1 = cljs.core.__destructure_map(map__49374_49537);
var doc_49539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49374_49538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49374_49538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49536], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49540], 0));

if(cljs.core.truth_(doc_49539)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49539], 0));
} else {
}


var G__49544 = cljs.core.next(seq__49351_49529__$1);
var G__49545 = null;
var G__49546 = (0);
var G__49547 = (0);
seq__49351_49514 = G__49544;
chunk__49352_49515 = G__49545;
count__49353_49516 = G__49546;
i__49354_49517 = G__49547;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49375 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49376 = null;
var count__49377 = (0);
var i__49378 = (0);
while(true){
if((i__49378 < count__49377)){
var role = chunk__49376.cljs$core$IIndexed$_nth$arity$2(null,i__49378);
var temp__5753__auto___49553__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49553__$1)){
var spec_49554 = temp__5753__auto___49553__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49554)], 0));
} else {
}


var G__49555 = seq__49375;
var G__49556 = chunk__49376;
var G__49557 = count__49377;
var G__49558 = (i__49378 + (1));
seq__49375 = G__49555;
chunk__49376 = G__49556;
count__49377 = G__49557;
i__49378 = G__49558;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49375);
if(temp__5753__auto____$1){
var seq__49375__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49375__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49375__$1);
var G__49559 = cljs.core.chunk_rest(seq__49375__$1);
var G__49560 = c__4679__auto__;
var G__49561 = cljs.core.count(c__4679__auto__);
var G__49562 = (0);
seq__49375 = G__49559;
chunk__49376 = G__49560;
count__49377 = G__49561;
i__49378 = G__49562;
continue;
} else {
var role = cljs.core.first(seq__49375__$1);
var temp__5753__auto___49563__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49563__$2)){
var spec_49564 = temp__5753__auto___49563__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49564)], 0));
} else {
}


var G__49565 = cljs.core.next(seq__49375__$1);
var G__49566 = null;
var G__49567 = (0);
var G__49568 = (0);
seq__49375 = G__49565;
chunk__49376 = G__49566;
count__49377 = G__49567;
i__49378 = G__49568;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__49573 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49574 = cljs.core.ex_cause(t);
via = G__49573;
t = G__49574;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49390 = datafied_throwable;
var map__49390__$1 = cljs.core.__destructure_map(map__49390);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49390__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49390__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49390__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49391 = cljs.core.last(via);
var map__49391__$1 = cljs.core.__destructure_map(map__49391);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49391__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49391__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49391__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49392 = data;
var map__49392__$1 = cljs.core.__destructure_map(map__49392);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49392__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49392__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49392__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49393 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49393__$1 = cljs.core.__destructure_map(map__49393);
var top_data = map__49393__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49393__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49394 = phase;
var G__49394__$1 = (((G__49394 instanceof cljs.core.Keyword))?G__49394.fqn:null);
switch (G__49394__$1) {
case "read-source":
var map__49395 = data;
var map__49395__$1 = cljs.core.__destructure_map(map__49395);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49395__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49395__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49396 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49396__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49396,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49396);
var G__49396__$2 = (cljs.core.truth_((function (){var fexpr__49397 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49397.cljs$core$IFn$_invoke$arity$1 ? fexpr__49397.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49397.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49396__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49396__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49396__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49396__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49398 = top_data;
var G__49398__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49398,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49398);
var G__49398__$2 = (cljs.core.truth_((function (){var fexpr__49399 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49399.cljs$core$IFn$_invoke$arity$1 ? fexpr__49399.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49399.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49398__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49398__$1);
var G__49398__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49398__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49398__$2);
var G__49398__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49398__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49398__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49398__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49398__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49400 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49400,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49400,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49400,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49400,(3),null);
var G__49403 = top_data;
var G__49403__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49403,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49403);
var G__49403__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49403__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49403__$1);
var G__49403__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49403__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49403__$2);
var G__49403__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49403__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49403__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49403__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49403__$4;
}

break;
case "execution":
var vec__49404 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49404,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49404,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49404,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49404,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49389_SHARP_){
var or__4253__auto__ = (p1__49389_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__49407 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49407.cljs$core$IFn$_invoke$arity$1 ? fexpr__49407.cljs$core$IFn$_invoke$arity$1(p1__49389_SHARP_) : fexpr__49407.call(null,p1__49389_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__49409 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49409__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49409,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49409);
var G__49409__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49409__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49409__$1);
var G__49409__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49409__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49409__$2);
var G__49409__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49409__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49409__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49409__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49409__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49394__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49418){
var map__49419 = p__49418;
var map__49419__$1 = cljs.core.__destructure_map(map__49419);
var triage_data = map__49419__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49419__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49419__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49419__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49419__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49419__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49419__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49419__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49419__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49420 = phase;
var G__49420__$1 = (((G__49420 instanceof cljs.core.Keyword))?G__49420.fqn:null);
switch (G__49420__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49423 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49424 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49425 = loc;
var G__49426 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49430_49609 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49431_49610 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49436_49611 = true;
var _STAR_print_fn_STAR__temp_val__49437_49612 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49436_49611);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49437_49612);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49416_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49416_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49431_49610);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49430_49609);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49423,G__49424,G__49425,G__49426) : format.call(null,G__49423,G__49424,G__49425,G__49426));

break;
case "macroexpansion":
var G__49442 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49443 = cause_type;
var G__49444 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49445 = loc;
var G__49446 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49442,G__49443,G__49444,G__49445,G__49446) : format.call(null,G__49442,G__49443,G__49444,G__49445,G__49446));

break;
case "compile-syntax-check":
var G__49447 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49448 = cause_type;
var G__49449 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49450 = loc;
var G__49451 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49447,G__49448,G__49449,G__49450,G__49451) : format.call(null,G__49447,G__49448,G__49449,G__49450,G__49451));

break;
case "compilation":
var G__49452 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49453 = cause_type;
var G__49454 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49455 = loc;
var G__49456 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49452,G__49453,G__49454,G__49455,G__49456) : format.call(null,G__49452,G__49453,G__49454,G__49455,G__49456));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49457 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49458 = symbol;
var G__49459 = loc;
var G__49460 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49461_49613 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49462_49614 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49463_49615 = true;
var _STAR_print_fn_STAR__temp_val__49464_49616 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49463_49615);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49464_49616);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49417_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49417_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49462_49614);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49461_49613);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49457,G__49458,G__49459,G__49460) : format.call(null,G__49457,G__49458,G__49459,G__49460));
} else {
var G__49478 = "Execution error%s at %s(%s).\n%s\n";
var G__49479 = cause_type;
var G__49480 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49481 = loc;
var G__49482 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49478,G__49479,G__49480,G__49481,G__49482) : format.call(null,G__49478,G__49479,G__49480,G__49481,G__49482));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49420__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
