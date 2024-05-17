goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49851 = arguments.length;
switch (G__49851) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49852 = (function (f,blockable,meta49853){
this.f = f;
this.blockable = blockable;
this.meta49853 = meta49853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49854,meta49853__$1){
var self__ = this;
var _49854__$1 = this;
return (new cljs.core.async.t_cljs$core$async49852(self__.f,self__.blockable,meta49853__$1));
}));

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49854){
var self__ = this;
var _49854__$1 = this;
return self__.meta49853;
}));

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49853","meta49853",1934364236,null)], null);
}));

(cljs.core.async.t_cljs$core$async49852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49852");

(cljs.core.async.t_cljs$core$async49852.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49852.
 */
cljs.core.async.__GT_t_cljs$core$async49852 = (function cljs$core$async$__GT_t_cljs$core$async49852(f__$1,blockable__$1,meta49853){
return (new cljs.core.async.t_cljs$core$async49852(f__$1,blockable__$1,meta49853));
});

}

return (new cljs.core.async.t_cljs$core$async49852(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__49864 = arguments.length;
switch (G__49864) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__49867 = arguments.length;
switch (G__49867) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__49895 = arguments.length;
switch (G__49895) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52770 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52770) : fn1.call(null,val_52770));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52770) : fn1.call(null,val_52770));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__49911 = arguments.length;
switch (G__49911) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___52778 = n;
var x_52780 = (0);
while(true){
if((x_52780 < n__4741__auto___52778)){
(a[x_52780] = x_52780);

var G__52781 = (x_52780 + (1));
x_52780 = G__52781;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49942 = (function (flag,meta49943){
this.flag = flag;
this.meta49943 = meta49943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49944,meta49943__$1){
var self__ = this;
var _49944__$1 = this;
return (new cljs.core.async.t_cljs$core$async49942(self__.flag,meta49943__$1));
}));

(cljs.core.async.t_cljs$core$async49942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49944){
var self__ = this;
var _49944__$1 = this;
return self__.meta49943;
}));

(cljs.core.async.t_cljs$core$async49942.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async49942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49943","meta49943",1894691731,null)], null);
}));

(cljs.core.async.t_cljs$core$async49942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49942");

(cljs.core.async.t_cljs$core$async49942.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49942.
 */
cljs.core.async.__GT_t_cljs$core$async49942 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49942(flag__$1,meta49943){
return (new cljs.core.async.t_cljs$core$async49942(flag__$1,meta49943));
});

}

return (new cljs.core.async.t_cljs$core$async49942(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49971 = (function (flag,cb,meta49972){
this.flag = flag;
this.cb = cb;
this.meta49972 = meta49972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49973,meta49972__$1){
var self__ = this;
var _49973__$1 = this;
return (new cljs.core.async.t_cljs$core$async49971(self__.flag,self__.cb,meta49972__$1));
}));

(cljs.core.async.t_cljs$core$async49971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49973){
var self__ = this;
var _49973__$1 = this;
return self__.meta49972;
}));

(cljs.core.async.t_cljs$core$async49971.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async49971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49972","meta49972",-2055987982,null)], null);
}));

(cljs.core.async.t_cljs$core$async49971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49971");

(cljs.core.async.t_cljs$core$async49971.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49971.
 */
cljs.core.async.__GT_t_cljs$core$async49971 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49971(flag__$1,cb__$1,meta49972){
return (new cljs.core.async.t_cljs$core$async49971(flag__$1,cb__$1,meta49972));
});

}

return (new cljs.core.async.t_cljs$core$async49971(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49996_SHARP_){
var G__50002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49996_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50002) : fret.call(null,G__50002));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49998_SHARP_){
var G__50003 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49998_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50003) : fret.call(null,G__50003));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52811 = (i + (1));
i = G__52811;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52817 = arguments.length;
var i__4865__auto___52819 = (0);
while(true){
if((i__4865__auto___52819 < len__4864__auto___52817)){
args__4870__auto__.push((arguments[i__4865__auto___52819]));

var G__52821 = (i__4865__auto___52819 + (1));
i__4865__auto___52819 = G__52821;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50016){
var map__50017 = p__50016;
var map__50017__$1 = cljs.core.__destructure_map(map__50017);
var opts = map__50017__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50014){
var G__50015 = cljs.core.first(seq50014);
var seq50014__$1 = cljs.core.next(seq50014);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50015,seq50014__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50031 = arguments.length;
switch (G__50031) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49757__auto___52829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_50064){
var state_val_50065 = (state_50064[(1)]);
if((state_val_50065 === (7))){
var inst_50059 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50069_52830 = state_50064__$1;
(statearr_50069_52830[(2)] = inst_50059);

(statearr_50069_52830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (1))){
var state_50064__$1 = state_50064;
var statearr_50072_52831 = state_50064__$1;
(statearr_50072_52831[(2)] = null);

(statearr_50072_52831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (4))){
var inst_50041 = (state_50064[(7)]);
var inst_50041__$1 = (state_50064[(2)]);
var inst_50042 = (inst_50041__$1 == null);
var state_50064__$1 = (function (){var statearr_50073 = state_50064;
(statearr_50073[(7)] = inst_50041__$1);

return statearr_50073;
})();
if(cljs.core.truth_(inst_50042)){
var statearr_50074_52834 = state_50064__$1;
(statearr_50074_52834[(1)] = (5));

} else {
var statearr_50075_52835 = state_50064__$1;
(statearr_50075_52835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (13))){
var state_50064__$1 = state_50064;
var statearr_50077_52837 = state_50064__$1;
(statearr_50077_52837[(2)] = null);

(statearr_50077_52837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (6))){
var inst_50041 = (state_50064[(7)]);
var state_50064__$1 = state_50064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50064__$1,(11),to,inst_50041);
} else {
if((state_val_50065 === (3))){
var inst_50061 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50064__$1,inst_50061);
} else {
if((state_val_50065 === (12))){
var state_50064__$1 = state_50064;
var statearr_50080_52843 = state_50064__$1;
(statearr_50080_52843[(2)] = null);

(statearr_50080_52843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (2))){
var state_50064__$1 = state_50064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50064__$1,(4),from);
} else {
if((state_val_50065 === (11))){
var inst_50052 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
if(cljs.core.truth_(inst_50052)){
var statearr_50081_52844 = state_50064__$1;
(statearr_50081_52844[(1)] = (12));

} else {
var statearr_50082_52845 = state_50064__$1;
(statearr_50082_52845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (9))){
var state_50064__$1 = state_50064;
var statearr_50083_52846 = state_50064__$1;
(statearr_50083_52846[(2)] = null);

(statearr_50083_52846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (5))){
var state_50064__$1 = state_50064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50084_52848 = state_50064__$1;
(statearr_50084_52848[(1)] = (8));

} else {
var statearr_50085_52849 = state_50064__$1;
(statearr_50085_52849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (14))){
var inst_50057 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50088_52853 = state_50064__$1;
(statearr_50088_52853[(2)] = inst_50057);

(statearr_50088_52853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (10))){
var inst_50049 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50089_52855 = state_50064__$1;
(statearr_50089_52855[(2)] = inst_50049);

(statearr_50089_52855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (8))){
var inst_50046 = cljs.core.async.close_BANG_(to);
var state_50064__$1 = state_50064;
var statearr_50090_52856 = state_50064__$1;
(statearr_50090_52856[(2)] = inst_50046);

(statearr_50090_52856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_50095 = [null,null,null,null,null,null,null,null];
(statearr_50095[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_50095[(1)] = (1));

return statearr_50095;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_50064){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50064);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50100){var ex__49654__auto__ = e50100;
var statearr_50101_52860 = state_50064;
(statearr_50101_52860[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50064[(4)]))){
var statearr_50103_52863 = state_50064;
(statearr_50103_52863[(1)] = cljs.core.first((state_50064[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52867 = state_50064;
state_50064 = G__52867;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_50064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_50064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_50104 = f__49758__auto__();
(statearr_50104[(6)] = c__49757__auto___52829);

return statearr_50104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__50107){
var vec__50108 = p__50107;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50108,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50108,(1),null);
var job = vec__50108;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49757__auto___52869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_50115){
var state_val_50116 = (state_50115[(1)]);
if((state_val_50116 === (1))){
var state_50115__$1 = state_50115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50115__$1,(2),res,v);
} else {
if((state_val_50116 === (2))){
var inst_50112 = (state_50115[(2)]);
var inst_50113 = cljs.core.async.close_BANG_(res);
var state_50115__$1 = (function (){var statearr_50117 = state_50115;
(statearr_50117[(7)] = inst_50112);

return statearr_50117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50115__$1,inst_50113);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0 = (function (){
var statearr_50120 = [null,null,null,null,null,null,null,null];
(statearr_50120[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__);

(statearr_50120[(1)] = (1));

return statearr_50120;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1 = (function (state_50115){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50115);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50122){var ex__49654__auto__ = e50122;
var statearr_50123_52876 = state_50115;
(statearr_50123_52876[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50115[(4)]))){
var statearr_50124_52892 = state_50115;
(statearr_50124_52892[(1)] = cljs.core.first((state_50115[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52896 = state_50115;
state_50115 = G__52896;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__ = function(state_50115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1.call(this,state_50115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_50126 = f__49758__auto__();
(statearr_50126[(6)] = c__49757__auto___52869);

return statearr_50126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50129){
var vec__50130 = p__50129;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50130,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50130,(1),null);
var job = vec__50130;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___52897 = n;
var __52898 = (0);
while(true){
if((__52898 < n__4741__auto___52897)){
var G__50133_52899 = type;
var G__50133_52900__$1 = (((G__50133_52899 instanceof cljs.core.Keyword))?G__50133_52899.fqn:null);
switch (G__50133_52900__$1) {
case "compute":
var c__49757__auto___52902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52898,c__49757__auto___52902,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async){
return (function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = ((function (__52898,c__49757__auto___52902,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async){
return (function (state_50146){
var state_val_50147 = (state_50146[(1)]);
if((state_val_50147 === (1))){
var state_50146__$1 = state_50146;
var statearr_50148_52904 = state_50146__$1;
(statearr_50148_52904[(2)] = null);

(statearr_50148_52904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50147 === (2))){
var state_50146__$1 = state_50146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50146__$1,(4),jobs);
} else {
if((state_val_50147 === (3))){
var inst_50144 = (state_50146[(2)]);
var state_50146__$1 = state_50146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50146__$1,inst_50144);
} else {
if((state_val_50147 === (4))){
var inst_50136 = (state_50146[(2)]);
var inst_50137 = process(inst_50136);
var state_50146__$1 = state_50146;
if(cljs.core.truth_(inst_50137)){
var statearr_50153_52906 = state_50146__$1;
(statearr_50153_52906[(1)] = (5));

} else {
var statearr_50154_52908 = state_50146__$1;
(statearr_50154_52908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50147 === (5))){
var state_50146__$1 = state_50146;
var statearr_50159_52910 = state_50146__$1;
(statearr_50159_52910[(2)] = null);

(statearr_50159_52910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50147 === (6))){
var state_50146__$1 = state_50146;
var statearr_50160_52913 = state_50146__$1;
(statearr_50160_52913[(2)] = null);

(statearr_50160_52913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50147 === (7))){
var inst_50142 = (state_50146[(2)]);
var state_50146__$1 = state_50146;
var statearr_50161_52916 = state_50146__$1;
(statearr_50161_52916[(2)] = inst_50142);

(statearr_50161_52916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52898,c__49757__auto___52902,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async))
;
return ((function (__52898,switch__49650__auto__,c__49757__auto___52902,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0 = (function (){
var statearr_50162 = [null,null,null,null,null,null,null];
(statearr_50162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__);

(statearr_50162[(1)] = (1));

return statearr_50162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1 = (function (state_50146){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50146);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50163){var ex__49654__auto__ = e50163;
var statearr_50164_52917 = state_50146;
(statearr_50164_52917[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50146[(4)]))){
var statearr_50165_52918 = state_50146;
(statearr_50165_52918[(1)] = cljs.core.first((state_50146[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52919 = state_50146;
state_50146 = G__52919;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__ = function(state_50146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1.call(this,state_50146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__;
})()
;})(__52898,switch__49650__auto__,c__49757__auto___52902,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async))
})();
var state__49759__auto__ = (function (){var statearr_50166 = f__49758__auto__();
(statearr_50166[(6)] = c__49757__auto___52902);

return statearr_50166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
});})(__52898,c__49757__auto___52902,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async))
);


break;
case "async":
var c__49757__auto___52920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52898,c__49757__auto___52920,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async){
return (function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = ((function (__52898,c__49757__auto___52920,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async){
return (function (state_50183){
var state_val_50184 = (state_50183[(1)]);
if((state_val_50184 === (1))){
var state_50183__$1 = state_50183;
var statearr_50185_52923 = state_50183__$1;
(statearr_50185_52923[(2)] = null);

(statearr_50185_52923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50184 === (2))){
var state_50183__$1 = state_50183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50183__$1,(4),jobs);
} else {
if((state_val_50184 === (3))){
var inst_50181 = (state_50183[(2)]);
var state_50183__$1 = state_50183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50183__$1,inst_50181);
} else {
if((state_val_50184 === (4))){
var inst_50173 = (state_50183[(2)]);
var inst_50174 = async(inst_50173);
var state_50183__$1 = state_50183;
if(cljs.core.truth_(inst_50174)){
var statearr_50186_52925 = state_50183__$1;
(statearr_50186_52925[(1)] = (5));

} else {
var statearr_50187_52926 = state_50183__$1;
(statearr_50187_52926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50184 === (5))){
var state_50183__$1 = state_50183;
var statearr_50188_52927 = state_50183__$1;
(statearr_50188_52927[(2)] = null);

(statearr_50188_52927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50184 === (6))){
var state_50183__$1 = state_50183;
var statearr_50189_52928 = state_50183__$1;
(statearr_50189_52928[(2)] = null);

(statearr_50189_52928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50184 === (7))){
var inst_50179 = (state_50183[(2)]);
var state_50183__$1 = state_50183;
var statearr_50190_52930 = state_50183__$1;
(statearr_50190_52930[(2)] = inst_50179);

(statearr_50190_52930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52898,c__49757__auto___52920,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async))
;
return ((function (__52898,switch__49650__auto__,c__49757__auto___52920,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0 = (function (){
var statearr_50192 = [null,null,null,null,null,null,null];
(statearr_50192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__);

(statearr_50192[(1)] = (1));

return statearr_50192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1 = (function (state_50183){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50183);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50193){var ex__49654__auto__ = e50193;
var statearr_50194_52934 = state_50183;
(statearr_50194_52934[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50183[(4)]))){
var statearr_50195_52935 = state_50183;
(statearr_50195_52935[(1)] = cljs.core.first((state_50183[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52939 = state_50183;
state_50183 = G__52939;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__ = function(state_50183){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1.call(this,state_50183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__;
})()
;})(__52898,switch__49650__auto__,c__49757__auto___52920,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async))
})();
var state__49759__auto__ = (function (){var statearr_50196 = f__49758__auto__();
(statearr_50196[(6)] = c__49757__auto___52920);

return statearr_50196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
});})(__52898,c__49757__auto___52920,G__50133_52899,G__50133_52900__$1,n__4741__auto___52897,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50133_52900__$1)].join('')));

}

var G__52942 = (__52898 + (1));
__52898 = G__52942;
continue;
} else {
}
break;
}

var c__49757__auto___52945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_50226){
var state_val_50227 = (state_50226[(1)]);
if((state_val_50227 === (7))){
var inst_50222 = (state_50226[(2)]);
var state_50226__$1 = state_50226;
var statearr_50228_52948 = state_50226__$1;
(statearr_50228_52948[(2)] = inst_50222);

(statearr_50228_52948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (1))){
var state_50226__$1 = state_50226;
var statearr_50230_52951 = state_50226__$1;
(statearr_50230_52951[(2)] = null);

(statearr_50230_52951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (4))){
var inst_50199 = (state_50226[(7)]);
var inst_50199__$1 = (state_50226[(2)]);
var inst_50200 = (inst_50199__$1 == null);
var state_50226__$1 = (function (){var statearr_50232 = state_50226;
(statearr_50232[(7)] = inst_50199__$1);

return statearr_50232;
})();
if(cljs.core.truth_(inst_50200)){
var statearr_50233_52953 = state_50226__$1;
(statearr_50233_52953[(1)] = (5));

} else {
var statearr_50235_52954 = state_50226__$1;
(statearr_50235_52954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (6))){
var inst_50199 = (state_50226[(7)]);
var inst_50204 = (state_50226[(8)]);
var inst_50204__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50211 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50214 = [inst_50199,inst_50204__$1];
var inst_50215 = (new cljs.core.PersistentVector(null,2,(5),inst_50211,inst_50214,null));
var state_50226__$1 = (function (){var statearr_50241 = state_50226;
(statearr_50241[(8)] = inst_50204__$1);

return statearr_50241;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50226__$1,(8),jobs,inst_50215);
} else {
if((state_val_50227 === (3))){
var inst_50224 = (state_50226[(2)]);
var state_50226__$1 = state_50226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50226__$1,inst_50224);
} else {
if((state_val_50227 === (2))){
var state_50226__$1 = state_50226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50226__$1,(4),from);
} else {
if((state_val_50227 === (9))){
var inst_50219 = (state_50226[(2)]);
var state_50226__$1 = (function (){var statearr_50242 = state_50226;
(statearr_50242[(9)] = inst_50219);

return statearr_50242;
})();
var statearr_50243_52961 = state_50226__$1;
(statearr_50243_52961[(2)] = null);

(statearr_50243_52961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (5))){
var inst_50202 = cljs.core.async.close_BANG_(jobs);
var state_50226__$1 = state_50226;
var statearr_50244_52964 = state_50226__$1;
(statearr_50244_52964[(2)] = inst_50202);

(statearr_50244_52964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (8))){
var inst_50204 = (state_50226[(8)]);
var inst_50217 = (state_50226[(2)]);
var state_50226__$1 = (function (){var statearr_50245 = state_50226;
(statearr_50245[(10)] = inst_50217);

return statearr_50245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50226__$1,(9),results,inst_50204);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0 = (function (){
var statearr_50247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__);

(statearr_50247[(1)] = (1));

return statearr_50247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1 = (function (state_50226){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50226);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50248){var ex__49654__auto__ = e50248;
var statearr_50249_52967 = state_50226;
(statearr_50249_52967[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50226[(4)]))){
var statearr_50250_52968 = state_50226;
(statearr_50250_52968[(1)] = cljs.core.first((state_50226[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52969 = state_50226;
state_50226 = G__52969;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__ = function(state_50226){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1.call(this,state_50226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_50252 = f__49758__auto__();
(statearr_50252[(6)] = c__49757__auto___52945);

return statearr_50252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


var c__49757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_50294){
var state_val_50295 = (state_50294[(1)]);
if((state_val_50295 === (7))){
var inst_50290 = (state_50294[(2)]);
var state_50294__$1 = state_50294;
var statearr_50296_52970 = state_50294__$1;
(statearr_50296_52970[(2)] = inst_50290);

(statearr_50296_52970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (20))){
var state_50294__$1 = state_50294;
var statearr_50297_52972 = state_50294__$1;
(statearr_50297_52972[(2)] = null);

(statearr_50297_52972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (1))){
var state_50294__$1 = state_50294;
var statearr_50298_52977 = state_50294__$1;
(statearr_50298_52977[(2)] = null);

(statearr_50298_52977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (4))){
var inst_50259 = (state_50294[(7)]);
var inst_50259__$1 = (state_50294[(2)]);
var inst_50260 = (inst_50259__$1 == null);
var state_50294__$1 = (function (){var statearr_50299 = state_50294;
(statearr_50299[(7)] = inst_50259__$1);

return statearr_50299;
})();
if(cljs.core.truth_(inst_50260)){
var statearr_50300_52980 = state_50294__$1;
(statearr_50300_52980[(1)] = (5));

} else {
var statearr_50303_52981 = state_50294__$1;
(statearr_50303_52981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (15))){
var inst_50272 = (state_50294[(8)]);
var state_50294__$1 = state_50294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50294__$1,(18),to,inst_50272);
} else {
if((state_val_50295 === (21))){
var inst_50285 = (state_50294[(2)]);
var state_50294__$1 = state_50294;
var statearr_50305_52985 = state_50294__$1;
(statearr_50305_52985[(2)] = inst_50285);

(statearr_50305_52985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (13))){
var inst_50287 = (state_50294[(2)]);
var state_50294__$1 = (function (){var statearr_50306 = state_50294;
(statearr_50306[(9)] = inst_50287);

return statearr_50306;
})();
var statearr_50307_52988 = state_50294__$1;
(statearr_50307_52988[(2)] = null);

(statearr_50307_52988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (6))){
var inst_50259 = (state_50294[(7)]);
var state_50294__$1 = state_50294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50294__$1,(11),inst_50259);
} else {
if((state_val_50295 === (17))){
var inst_50280 = (state_50294[(2)]);
var state_50294__$1 = state_50294;
if(cljs.core.truth_(inst_50280)){
var statearr_50313_52991 = state_50294__$1;
(statearr_50313_52991[(1)] = (19));

} else {
var statearr_50314_52993 = state_50294__$1;
(statearr_50314_52993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (3))){
var inst_50292 = (state_50294[(2)]);
var state_50294__$1 = state_50294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50294__$1,inst_50292);
} else {
if((state_val_50295 === (12))){
var inst_50269 = (state_50294[(10)]);
var state_50294__$1 = state_50294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50294__$1,(14),inst_50269);
} else {
if((state_val_50295 === (2))){
var state_50294__$1 = state_50294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50294__$1,(4),results);
} else {
if((state_val_50295 === (19))){
var state_50294__$1 = state_50294;
var statearr_50315_53000 = state_50294__$1;
(statearr_50315_53000[(2)] = null);

(statearr_50315_53000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (11))){
var inst_50269 = (state_50294[(2)]);
var state_50294__$1 = (function (){var statearr_50319 = state_50294;
(statearr_50319[(10)] = inst_50269);

return statearr_50319;
})();
var statearr_50321_53002 = state_50294__$1;
(statearr_50321_53002[(2)] = null);

(statearr_50321_53002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (9))){
var state_50294__$1 = state_50294;
var statearr_50322_53003 = state_50294__$1;
(statearr_50322_53003[(2)] = null);

(statearr_50322_53003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (5))){
var state_50294__$1 = state_50294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50323_53004 = state_50294__$1;
(statearr_50323_53004[(1)] = (8));

} else {
var statearr_50324_53005 = state_50294__$1;
(statearr_50324_53005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (14))){
var inst_50274 = (state_50294[(11)]);
var inst_50272 = (state_50294[(8)]);
var inst_50272__$1 = (state_50294[(2)]);
var inst_50273 = (inst_50272__$1 == null);
var inst_50274__$1 = cljs.core.not(inst_50273);
var state_50294__$1 = (function (){var statearr_50325 = state_50294;
(statearr_50325[(11)] = inst_50274__$1);

(statearr_50325[(8)] = inst_50272__$1);

return statearr_50325;
})();
if(inst_50274__$1){
var statearr_50326_53006 = state_50294__$1;
(statearr_50326_53006[(1)] = (15));

} else {
var statearr_50327_53008 = state_50294__$1;
(statearr_50327_53008[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (16))){
var inst_50274 = (state_50294[(11)]);
var state_50294__$1 = state_50294;
var statearr_50328_53009 = state_50294__$1;
(statearr_50328_53009[(2)] = inst_50274);

(statearr_50328_53009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (10))){
var inst_50266 = (state_50294[(2)]);
var state_50294__$1 = state_50294;
var statearr_50329_53010 = state_50294__$1;
(statearr_50329_53010[(2)] = inst_50266);

(statearr_50329_53010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (18))){
var inst_50277 = (state_50294[(2)]);
var state_50294__$1 = state_50294;
var statearr_50330_53011 = state_50294__$1;
(statearr_50330_53011[(2)] = inst_50277);

(statearr_50330_53011[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (8))){
var inst_50263 = cljs.core.async.close_BANG_(to);
var state_50294__$1 = state_50294;
var statearr_50331_53013 = state_50294__$1;
(statearr_50331_53013[(2)] = inst_50263);

(statearr_50331_53013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0 = (function (){
var statearr_50336 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__);

(statearr_50336[(1)] = (1));

return statearr_50336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1 = (function (state_50294){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50294);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50337){var ex__49654__auto__ = e50337;
var statearr_50340_53019 = state_50294;
(statearr_50340_53019[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50294[(4)]))){
var statearr_50341_53020 = state_50294;
(statearr_50341_53020[(1)] = cljs.core.first((state_50294[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53021 = state_50294;
state_50294 = G__53021;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__ = function(state_50294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1.call(this,state_50294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49651__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_50344 = f__49758__auto__();
(statearr_50344[(6)] = c__49757__auto__);

return statearr_50344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));

return c__49757__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50346 = arguments.length;
switch (G__50346) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50348 = arguments.length;
switch (G__50348) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50362 = arguments.length;
switch (G__50362) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__49757__auto___53048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_50389){
var state_val_50390 = (state_50389[(1)]);
if((state_val_50390 === (7))){
var inst_50385 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
var statearr_50391_53049 = state_50389__$1;
(statearr_50391_53049[(2)] = inst_50385);

(statearr_50391_53049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (1))){
var state_50389__$1 = state_50389;
var statearr_50392_53050 = state_50389__$1;
(statearr_50392_53050[(2)] = null);

(statearr_50392_53050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (4))){
var inst_50366 = (state_50389[(7)]);
var inst_50366__$1 = (state_50389[(2)]);
var inst_50367 = (inst_50366__$1 == null);
var state_50389__$1 = (function (){var statearr_50393 = state_50389;
(statearr_50393[(7)] = inst_50366__$1);

return statearr_50393;
})();
if(cljs.core.truth_(inst_50367)){
var statearr_50395_53051 = state_50389__$1;
(statearr_50395_53051[(1)] = (5));

} else {
var statearr_50396_53052 = state_50389__$1;
(statearr_50396_53052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (13))){
var state_50389__$1 = state_50389;
var statearr_50397_53054 = state_50389__$1;
(statearr_50397_53054[(2)] = null);

(statearr_50397_53054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (6))){
var inst_50366 = (state_50389[(7)]);
var inst_50372 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50366) : p.call(null,inst_50366));
var state_50389__$1 = state_50389;
if(cljs.core.truth_(inst_50372)){
var statearr_50399_53055 = state_50389__$1;
(statearr_50399_53055[(1)] = (9));

} else {
var statearr_50400_53056 = state_50389__$1;
(statearr_50400_53056[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (3))){
var inst_50387 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50389__$1,inst_50387);
} else {
if((state_val_50390 === (12))){
var state_50389__$1 = state_50389;
var statearr_50401_53057 = state_50389__$1;
(statearr_50401_53057[(2)] = null);

(statearr_50401_53057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (2))){
var state_50389__$1 = state_50389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50389__$1,(4),ch);
} else {
if((state_val_50390 === (11))){
var inst_50366 = (state_50389[(7)]);
var inst_50376 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50389__$1,(8),inst_50376,inst_50366);
} else {
if((state_val_50390 === (9))){
var state_50389__$1 = state_50389;
var statearr_50405_53059 = state_50389__$1;
(statearr_50405_53059[(2)] = tc);

(statearr_50405_53059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (5))){
var inst_50369 = cljs.core.async.close_BANG_(tc);
var inst_50370 = cljs.core.async.close_BANG_(fc);
var state_50389__$1 = (function (){var statearr_50409 = state_50389;
(statearr_50409[(8)] = inst_50369);

return statearr_50409;
})();
var statearr_50410_53060 = state_50389__$1;
(statearr_50410_53060[(2)] = inst_50370);

(statearr_50410_53060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (14))){
var inst_50383 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
var statearr_50411_53061 = state_50389__$1;
(statearr_50411_53061[(2)] = inst_50383);

(statearr_50411_53061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (10))){
var state_50389__$1 = state_50389;
var statearr_50412_53063 = state_50389__$1;
(statearr_50412_53063[(2)] = fc);

(statearr_50412_53063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (8))){
var inst_50378 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
if(cljs.core.truth_(inst_50378)){
var statearr_50416_53070 = state_50389__$1;
(statearr_50416_53070[(1)] = (12));

} else {
var statearr_50417_53071 = state_50389__$1;
(statearr_50417_53071[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_50418 = [null,null,null,null,null,null,null,null,null];
(statearr_50418[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_50418[(1)] = (1));

return statearr_50418;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_50389){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50389);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50423){var ex__49654__auto__ = e50423;
var statearr_50424_53076 = state_50389;
(statearr_50424_53076[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50389[(4)]))){
var statearr_50425_53078 = state_50389;
(statearr_50425_53078[(1)] = cljs.core.first((state_50389[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53081 = state_50389;
state_50389 = G__53081;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_50389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_50389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_50426 = f__49758__auto__();
(statearr_50426[(6)] = c__49757__auto___53048);

return statearr_50426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_50451){
var state_val_50452 = (state_50451[(1)]);
if((state_val_50452 === (7))){
var inst_50447 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
var statearr_50456_53082 = state_50451__$1;
(statearr_50456_53082[(2)] = inst_50447);

(statearr_50456_53082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (1))){
var inst_50427 = init;
var inst_50428 = inst_50427;
var state_50451__$1 = (function (){var statearr_50460 = state_50451;
(statearr_50460[(7)] = inst_50428);

return statearr_50460;
})();
var statearr_50461_53083 = state_50451__$1;
(statearr_50461_53083[(2)] = null);

(statearr_50461_53083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (4))){
var inst_50431 = (state_50451[(8)]);
var inst_50431__$1 = (state_50451[(2)]);
var inst_50432 = (inst_50431__$1 == null);
var state_50451__$1 = (function (){var statearr_50465 = state_50451;
(statearr_50465[(8)] = inst_50431__$1);

return statearr_50465;
})();
if(cljs.core.truth_(inst_50432)){
var statearr_50466_53084 = state_50451__$1;
(statearr_50466_53084[(1)] = (5));

} else {
var statearr_50470_53085 = state_50451__$1;
(statearr_50470_53085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (6))){
var inst_50431 = (state_50451[(8)]);
var inst_50435 = (state_50451[(9)]);
var inst_50428 = (state_50451[(7)]);
var inst_50435__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50428,inst_50431) : f.call(null,inst_50428,inst_50431));
var inst_50436 = cljs.core.reduced_QMARK_(inst_50435__$1);
var state_50451__$1 = (function (){var statearr_50475 = state_50451;
(statearr_50475[(9)] = inst_50435__$1);

return statearr_50475;
})();
if(inst_50436){
var statearr_50476_53106 = state_50451__$1;
(statearr_50476_53106[(1)] = (8));

} else {
var statearr_50477_53107 = state_50451__$1;
(statearr_50477_53107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (3))){
var inst_50449 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50451__$1,inst_50449);
} else {
if((state_val_50452 === (2))){
var state_50451__$1 = state_50451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50451__$1,(4),ch);
} else {
if((state_val_50452 === (9))){
var inst_50435 = (state_50451[(9)]);
var inst_50428 = inst_50435;
var state_50451__$1 = (function (){var statearr_50483 = state_50451;
(statearr_50483[(7)] = inst_50428);

return statearr_50483;
})();
var statearr_50484_53108 = state_50451__$1;
(statearr_50484_53108[(2)] = null);

(statearr_50484_53108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (5))){
var inst_50428 = (state_50451[(7)]);
var state_50451__$1 = state_50451;
var statearr_50487_53110 = state_50451__$1;
(statearr_50487_53110[(2)] = inst_50428);

(statearr_50487_53110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (10))){
var inst_50442 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
var statearr_50488_53111 = state_50451__$1;
(statearr_50488_53111[(2)] = inst_50442);

(statearr_50488_53111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (8))){
var inst_50435 = (state_50451[(9)]);
var inst_50438 = cljs.core.deref(inst_50435);
var state_50451__$1 = state_50451;
var statearr_50489_53112 = state_50451__$1;
(statearr_50489_53112[(2)] = inst_50438);

(statearr_50489_53112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__49651__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49651__auto____0 = (function (){
var statearr_50490 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50490[(0)] = cljs$core$async$reduce_$_state_machine__49651__auto__);

(statearr_50490[(1)] = (1));

return statearr_50490;
});
var cljs$core$async$reduce_$_state_machine__49651__auto____1 = (function (state_50451){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50451);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50491){var ex__49654__auto__ = e50491;
var statearr_50492_53115 = state_50451;
(statearr_50492_53115[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50451[(4)]))){
var statearr_50493_53118 = state_50451;
(statearr_50493_53118[(1)] = cljs.core.first((state_50451[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53121 = state_50451;
state_50451 = G__53121;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49651__auto__ = function(state_50451){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49651__auto____1.call(this,state_50451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49651__auto____0;
cljs$core$async$reduce_$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49651__auto____1;
return cljs$core$async$reduce_$_state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_50494 = f__49758__auto__();
(statearr_50494[(6)] = c__49757__auto__);

return statearr_50494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));

return c__49757__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_50500){
var state_val_50501 = (state_50500[(1)]);
if((state_val_50501 === (1))){
var inst_50495 = cljs.core.async.reduce(f__$1,init,ch);
var state_50500__$1 = state_50500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50500__$1,(2),inst_50495);
} else {
if((state_val_50501 === (2))){
var inst_50497 = (state_50500[(2)]);
var inst_50498 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50497) : f__$1.call(null,inst_50497));
var state_50500__$1 = state_50500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50500__$1,inst_50498);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49651__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49651__auto____0 = (function (){
var statearr_50502 = [null,null,null,null,null,null,null];
(statearr_50502[(0)] = cljs$core$async$transduce_$_state_machine__49651__auto__);

(statearr_50502[(1)] = (1));

return statearr_50502;
});
var cljs$core$async$transduce_$_state_machine__49651__auto____1 = (function (state_50500){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50500);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50505){var ex__49654__auto__ = e50505;
var statearr_50506_53126 = state_50500;
(statearr_50506_53126[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50500[(4)]))){
var statearr_50507_53127 = state_50500;
(statearr_50507_53127[(1)] = cljs.core.first((state_50500[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53128 = state_50500;
state_50500 = G__53128;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49651__auto__ = function(state_50500){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49651__auto____1.call(this,state_50500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49651__auto____0;
cljs$core$async$transduce_$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49651__auto____1;
return cljs$core$async$transduce_$_state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_50508 = f__49758__auto__();
(statearr_50508[(6)] = c__49757__auto__);

return statearr_50508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));

return c__49757__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__50513 = arguments.length;
switch (G__50513) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_50543){
var state_val_50544 = (state_50543[(1)]);
if((state_val_50544 === (7))){
var inst_50522 = (state_50543[(2)]);
var state_50543__$1 = state_50543;
var statearr_50546_53135 = state_50543__$1;
(statearr_50546_53135[(2)] = inst_50522);

(statearr_50546_53135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50544 === (1))){
var inst_50514 = cljs.core.seq(coll);
var inst_50515 = inst_50514;
var state_50543__$1 = (function (){var statearr_50547 = state_50543;
(statearr_50547[(7)] = inst_50515);

return statearr_50547;
})();
var statearr_50548_53136 = state_50543__$1;
(statearr_50548_53136[(2)] = null);

(statearr_50548_53136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50544 === (4))){
var inst_50515 = (state_50543[(7)]);
var inst_50520 = cljs.core.first(inst_50515);
var state_50543__$1 = state_50543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50543__$1,(7),ch,inst_50520);
} else {
if((state_val_50544 === (13))){
var inst_50537 = (state_50543[(2)]);
var state_50543__$1 = state_50543;
var statearr_50552_53137 = state_50543__$1;
(statearr_50552_53137[(2)] = inst_50537);

(statearr_50552_53137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50544 === (6))){
var inst_50525 = (state_50543[(2)]);
var state_50543__$1 = state_50543;
if(cljs.core.truth_(inst_50525)){
var statearr_50554_53138 = state_50543__$1;
(statearr_50554_53138[(1)] = (8));

} else {
var statearr_50555_53139 = state_50543__$1;
(statearr_50555_53139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50544 === (3))){
var inst_50541 = (state_50543[(2)]);
var state_50543__$1 = state_50543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50543__$1,inst_50541);
} else {
if((state_val_50544 === (12))){
var state_50543__$1 = state_50543;
var statearr_50556_53143 = state_50543__$1;
(statearr_50556_53143[(2)] = null);

(statearr_50556_53143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50544 === (2))){
var inst_50515 = (state_50543[(7)]);
var state_50543__$1 = state_50543;
if(cljs.core.truth_(inst_50515)){
var statearr_50557_53144 = state_50543__$1;
(statearr_50557_53144[(1)] = (4));

} else {
var statearr_50558_53145 = state_50543__$1;
(statearr_50558_53145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50544 === (11))){
var inst_50534 = cljs.core.async.close_BANG_(ch);
var state_50543__$1 = state_50543;
var statearr_50562_53147 = state_50543__$1;
(statearr_50562_53147[(2)] = inst_50534);

(statearr_50562_53147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50544 === (9))){
var state_50543__$1 = state_50543;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50563_53148 = state_50543__$1;
(statearr_50563_53148[(1)] = (11));

} else {
var statearr_50564_53149 = state_50543__$1;
(statearr_50564_53149[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50544 === (5))){
var inst_50515 = (state_50543[(7)]);
var state_50543__$1 = state_50543;
var statearr_50566_53150 = state_50543__$1;
(statearr_50566_53150[(2)] = inst_50515);

(statearr_50566_53150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50544 === (10))){
var inst_50539 = (state_50543[(2)]);
var state_50543__$1 = state_50543;
var statearr_50571_53153 = state_50543__$1;
(statearr_50571_53153[(2)] = inst_50539);

(statearr_50571_53153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50544 === (8))){
var inst_50515 = (state_50543[(7)]);
var inst_50529 = cljs.core.next(inst_50515);
var inst_50515__$1 = inst_50529;
var state_50543__$1 = (function (){var statearr_50572 = state_50543;
(statearr_50572[(7)] = inst_50515__$1);

return statearr_50572;
})();
var statearr_50573_53155 = state_50543__$1;
(statearr_50573_53155[(2)] = null);

(statearr_50573_53155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_50575 = [null,null,null,null,null,null,null,null];
(statearr_50575[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_50575[(1)] = (1));

return statearr_50575;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_50543){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50543);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50580){var ex__49654__auto__ = e50580;
var statearr_50581_53161 = state_50543;
(statearr_50581_53161[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50543[(4)]))){
var statearr_50583_53162 = state_50543;
(statearr_50583_53162[(1)] = cljs.core.first((state_50543[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53163 = state_50543;
state_50543 = G__53163;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_50543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_50543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_50601 = f__49758__auto__();
(statearr_50601[(6)] = c__49757__auto__);

return statearr_50601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));

return c__49757__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50607 = arguments.length;
switch (G__50607) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_53172 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_53172(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53173 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_53173(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53177 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_53177(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53197 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_53197(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50639 = (function (ch,cs,meta50640){
this.ch = ch;
this.cs = cs;
this.meta50640 = meta50640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50641,meta50640__$1){
var self__ = this;
var _50641__$1 = this;
return (new cljs.core.async.t_cljs$core$async50639(self__.ch,self__.cs,meta50640__$1));
}));

(cljs.core.async.t_cljs$core$async50639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50641){
var self__ = this;
var _50641__$1 = this;
return self__.meta50640;
}));

(cljs.core.async.t_cljs$core$async50639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50639.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50639.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50639.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50639.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50640","meta50640",-606347821,null)], null);
}));

(cljs.core.async.t_cljs$core$async50639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50639");

(cljs.core.async.t_cljs$core$async50639.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50639.
 */
cljs.core.async.__GT_t_cljs$core$async50639 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50639(ch__$1,cs__$1,meta50640){
return (new cljs.core.async.t_cljs$core$async50639(ch__$1,cs__$1,meta50640));
});

}

return (new cljs.core.async.t_cljs$core$async50639(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__49757__auto___53204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_50793){
var state_val_50794 = (state_50793[(1)]);
if((state_val_50794 === (7))){
var inst_50786 = (state_50793[(2)]);
var state_50793__$1 = state_50793;
var statearr_50795_53206 = state_50793__$1;
(statearr_50795_53206[(2)] = inst_50786);

(statearr_50795_53206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (20))){
var inst_50689 = (state_50793[(7)]);
var inst_50703 = cljs.core.first(inst_50689);
var inst_50704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50703,(0),null);
var inst_50705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50703,(1),null);
var state_50793__$1 = (function (){var statearr_50796 = state_50793;
(statearr_50796[(8)] = inst_50704);

return statearr_50796;
})();
if(cljs.core.truth_(inst_50705)){
var statearr_50797_53209 = state_50793__$1;
(statearr_50797_53209[(1)] = (22));

} else {
var statearr_50798_53210 = state_50793__$1;
(statearr_50798_53210[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (27))){
var inst_50658 = (state_50793[(9)]);
var inst_50740 = (state_50793[(10)]);
var inst_50735 = (state_50793[(11)]);
var inst_50733 = (state_50793[(12)]);
var inst_50740__$1 = cljs.core._nth(inst_50733,inst_50735);
var inst_50741 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50740__$1,inst_50658,done);
var state_50793__$1 = (function (){var statearr_50805 = state_50793;
(statearr_50805[(10)] = inst_50740__$1);

return statearr_50805;
})();
if(cljs.core.truth_(inst_50741)){
var statearr_50806_53211 = state_50793__$1;
(statearr_50806_53211[(1)] = (30));

} else {
var statearr_50807_53213 = state_50793__$1;
(statearr_50807_53213[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (1))){
var state_50793__$1 = state_50793;
var statearr_50808_53214 = state_50793__$1;
(statearr_50808_53214[(2)] = null);

(statearr_50808_53214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (24))){
var inst_50689 = (state_50793[(7)]);
var inst_50710 = (state_50793[(2)]);
var inst_50711 = cljs.core.next(inst_50689);
var inst_50667 = inst_50711;
var inst_50668 = null;
var inst_50669 = (0);
var inst_50670 = (0);
var state_50793__$1 = (function (){var statearr_50809 = state_50793;
(statearr_50809[(13)] = inst_50669);

(statearr_50809[(14)] = inst_50668);

(statearr_50809[(15)] = inst_50667);

(statearr_50809[(16)] = inst_50670);

(statearr_50809[(17)] = inst_50710);

return statearr_50809;
})();
var statearr_50811_53215 = state_50793__$1;
(statearr_50811_53215[(2)] = null);

(statearr_50811_53215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (39))){
var state_50793__$1 = state_50793;
var statearr_50815_53218 = state_50793__$1;
(statearr_50815_53218[(2)] = null);

(statearr_50815_53218[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (4))){
var inst_50658 = (state_50793[(9)]);
var inst_50658__$1 = (state_50793[(2)]);
var inst_50659 = (inst_50658__$1 == null);
var state_50793__$1 = (function (){var statearr_50819 = state_50793;
(statearr_50819[(9)] = inst_50658__$1);

return statearr_50819;
})();
if(cljs.core.truth_(inst_50659)){
var statearr_50820_53221 = state_50793__$1;
(statearr_50820_53221[(1)] = (5));

} else {
var statearr_50821_53222 = state_50793__$1;
(statearr_50821_53222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (15))){
var inst_50669 = (state_50793[(13)]);
var inst_50668 = (state_50793[(14)]);
var inst_50667 = (state_50793[(15)]);
var inst_50670 = (state_50793[(16)]);
var inst_50685 = (state_50793[(2)]);
var inst_50686 = (inst_50670 + (1));
var tmp50812 = inst_50669;
var tmp50813 = inst_50668;
var tmp50814 = inst_50667;
var inst_50667__$1 = tmp50814;
var inst_50668__$1 = tmp50813;
var inst_50669__$1 = tmp50812;
var inst_50670__$1 = inst_50686;
var state_50793__$1 = (function (){var statearr_50823 = state_50793;
(statearr_50823[(13)] = inst_50669__$1);

(statearr_50823[(14)] = inst_50668__$1);

(statearr_50823[(15)] = inst_50667__$1);

(statearr_50823[(16)] = inst_50670__$1);

(statearr_50823[(18)] = inst_50685);

return statearr_50823;
})();
var statearr_50828_53223 = state_50793__$1;
(statearr_50828_53223[(2)] = null);

(statearr_50828_53223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (21))){
var inst_50714 = (state_50793[(2)]);
var state_50793__$1 = state_50793;
var statearr_50832_53225 = state_50793__$1;
(statearr_50832_53225[(2)] = inst_50714);

(statearr_50832_53225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (31))){
var inst_50740 = (state_50793[(10)]);
var inst_50744 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50740);
var state_50793__$1 = state_50793;
var statearr_50833_53226 = state_50793__$1;
(statearr_50833_53226[(2)] = inst_50744);

(statearr_50833_53226[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (32))){
var inst_50735 = (state_50793[(11)]);
var inst_50734 = (state_50793[(19)]);
var inst_50732 = (state_50793[(20)]);
var inst_50733 = (state_50793[(12)]);
var inst_50746 = (state_50793[(2)]);
var inst_50747 = (inst_50735 + (1));
var tmp50829 = inst_50734;
var tmp50830 = inst_50732;
var tmp50831 = inst_50733;
var inst_50732__$1 = tmp50830;
var inst_50733__$1 = tmp50831;
var inst_50734__$1 = tmp50829;
var inst_50735__$1 = inst_50747;
var state_50793__$1 = (function (){var statearr_50837 = state_50793;
(statearr_50837[(11)] = inst_50735__$1);

(statearr_50837[(19)] = inst_50734__$1);

(statearr_50837[(21)] = inst_50746);

(statearr_50837[(20)] = inst_50732__$1);

(statearr_50837[(12)] = inst_50733__$1);

return statearr_50837;
})();
var statearr_50838_53229 = state_50793__$1;
(statearr_50838_53229[(2)] = null);

(statearr_50838_53229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (40))){
var inst_50759 = (state_50793[(22)]);
var inst_50763 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50759);
var state_50793__$1 = state_50793;
var statearr_50839_53232 = state_50793__$1;
(statearr_50839_53232[(2)] = inst_50763);

(statearr_50839_53232[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (33))){
var inst_50750 = (state_50793[(23)]);
var inst_50752 = cljs.core.chunked_seq_QMARK_(inst_50750);
var state_50793__$1 = state_50793;
if(inst_50752){
var statearr_50840_53233 = state_50793__$1;
(statearr_50840_53233[(1)] = (36));

} else {
var statearr_50841_53234 = state_50793__$1;
(statearr_50841_53234[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (13))){
var inst_50679 = (state_50793[(24)]);
var inst_50682 = cljs.core.async.close_BANG_(inst_50679);
var state_50793__$1 = state_50793;
var statearr_50842_53235 = state_50793__$1;
(statearr_50842_53235[(2)] = inst_50682);

(statearr_50842_53235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (22))){
var inst_50704 = (state_50793[(8)]);
var inst_50707 = cljs.core.async.close_BANG_(inst_50704);
var state_50793__$1 = state_50793;
var statearr_50844_53237 = state_50793__$1;
(statearr_50844_53237[(2)] = inst_50707);

(statearr_50844_53237[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (36))){
var inst_50750 = (state_50793[(23)]);
var inst_50754 = cljs.core.chunk_first(inst_50750);
var inst_50755 = cljs.core.chunk_rest(inst_50750);
var inst_50756 = cljs.core.count(inst_50754);
var inst_50732 = inst_50755;
var inst_50733 = inst_50754;
var inst_50734 = inst_50756;
var inst_50735 = (0);
var state_50793__$1 = (function (){var statearr_50847 = state_50793;
(statearr_50847[(11)] = inst_50735);

(statearr_50847[(19)] = inst_50734);

(statearr_50847[(20)] = inst_50732);

(statearr_50847[(12)] = inst_50733);

return statearr_50847;
})();
var statearr_50848_53238 = state_50793__$1;
(statearr_50848_53238[(2)] = null);

(statearr_50848_53238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (41))){
var inst_50750 = (state_50793[(23)]);
var inst_50765 = (state_50793[(2)]);
var inst_50766 = cljs.core.next(inst_50750);
var inst_50732 = inst_50766;
var inst_50733 = null;
var inst_50734 = (0);
var inst_50735 = (0);
var state_50793__$1 = (function (){var statearr_50850 = state_50793;
(statearr_50850[(25)] = inst_50765);

(statearr_50850[(11)] = inst_50735);

(statearr_50850[(19)] = inst_50734);

(statearr_50850[(20)] = inst_50732);

(statearr_50850[(12)] = inst_50733);

return statearr_50850;
})();
var statearr_50851_53243 = state_50793__$1;
(statearr_50851_53243[(2)] = null);

(statearr_50851_53243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (43))){
var state_50793__$1 = state_50793;
var statearr_50852_53244 = state_50793__$1;
(statearr_50852_53244[(2)] = null);

(statearr_50852_53244[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (29))){
var inst_50774 = (state_50793[(2)]);
var state_50793__$1 = state_50793;
var statearr_50853_53245 = state_50793__$1;
(statearr_50853_53245[(2)] = inst_50774);

(statearr_50853_53245[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (44))){
var inst_50783 = (state_50793[(2)]);
var state_50793__$1 = (function (){var statearr_50858 = state_50793;
(statearr_50858[(26)] = inst_50783);

return statearr_50858;
})();
var statearr_50859_53246 = state_50793__$1;
(statearr_50859_53246[(2)] = null);

(statearr_50859_53246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (6))){
var inst_50724 = (state_50793[(27)]);
var inst_50723 = cljs.core.deref(cs);
var inst_50724__$1 = cljs.core.keys(inst_50723);
var inst_50725 = cljs.core.count(inst_50724__$1);
var inst_50726 = cljs.core.reset_BANG_(dctr,inst_50725);
var inst_50731 = cljs.core.seq(inst_50724__$1);
var inst_50732 = inst_50731;
var inst_50733 = null;
var inst_50734 = (0);
var inst_50735 = (0);
var state_50793__$1 = (function (){var statearr_50860 = state_50793;
(statearr_50860[(11)] = inst_50735);

(statearr_50860[(19)] = inst_50734);

(statearr_50860[(27)] = inst_50724__$1);

(statearr_50860[(28)] = inst_50726);

(statearr_50860[(20)] = inst_50732);

(statearr_50860[(12)] = inst_50733);

return statearr_50860;
})();
var statearr_50861_53247 = state_50793__$1;
(statearr_50861_53247[(2)] = null);

(statearr_50861_53247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (28))){
var inst_50750 = (state_50793[(23)]);
var inst_50732 = (state_50793[(20)]);
var inst_50750__$1 = cljs.core.seq(inst_50732);
var state_50793__$1 = (function (){var statearr_50862 = state_50793;
(statearr_50862[(23)] = inst_50750__$1);

return statearr_50862;
})();
if(inst_50750__$1){
var statearr_50863_53248 = state_50793__$1;
(statearr_50863_53248[(1)] = (33));

} else {
var statearr_50864_53249 = state_50793__$1;
(statearr_50864_53249[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (25))){
var inst_50735 = (state_50793[(11)]);
var inst_50734 = (state_50793[(19)]);
var inst_50737 = (inst_50735 < inst_50734);
var inst_50738 = inst_50737;
var state_50793__$1 = state_50793;
if(cljs.core.truth_(inst_50738)){
var statearr_50865_53251 = state_50793__$1;
(statearr_50865_53251[(1)] = (27));

} else {
var statearr_50866_53252 = state_50793__$1;
(statearr_50866_53252[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (34))){
var state_50793__$1 = state_50793;
var statearr_50867_53253 = state_50793__$1;
(statearr_50867_53253[(2)] = null);

(statearr_50867_53253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (17))){
var state_50793__$1 = state_50793;
var statearr_50868_53254 = state_50793__$1;
(statearr_50868_53254[(2)] = null);

(statearr_50868_53254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (3))){
var inst_50788 = (state_50793[(2)]);
var state_50793__$1 = state_50793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50793__$1,inst_50788);
} else {
if((state_val_50794 === (12))){
var inst_50719 = (state_50793[(2)]);
var state_50793__$1 = state_50793;
var statearr_50869_53255 = state_50793__$1;
(statearr_50869_53255[(2)] = inst_50719);

(statearr_50869_53255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (2))){
var state_50793__$1 = state_50793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50793__$1,(4),ch);
} else {
if((state_val_50794 === (23))){
var state_50793__$1 = state_50793;
var statearr_50875_53257 = state_50793__$1;
(statearr_50875_53257[(2)] = null);

(statearr_50875_53257[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (35))){
var inst_50772 = (state_50793[(2)]);
var state_50793__$1 = state_50793;
var statearr_50876_53258 = state_50793__$1;
(statearr_50876_53258[(2)] = inst_50772);

(statearr_50876_53258[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (19))){
var inst_50689 = (state_50793[(7)]);
var inst_50695 = cljs.core.chunk_first(inst_50689);
var inst_50696 = cljs.core.chunk_rest(inst_50689);
var inst_50697 = cljs.core.count(inst_50695);
var inst_50667 = inst_50696;
var inst_50668 = inst_50695;
var inst_50669 = inst_50697;
var inst_50670 = (0);
var state_50793__$1 = (function (){var statearr_50877 = state_50793;
(statearr_50877[(13)] = inst_50669);

(statearr_50877[(14)] = inst_50668);

(statearr_50877[(15)] = inst_50667);

(statearr_50877[(16)] = inst_50670);

return statearr_50877;
})();
var statearr_50878_53262 = state_50793__$1;
(statearr_50878_53262[(2)] = null);

(statearr_50878_53262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (11))){
var inst_50689 = (state_50793[(7)]);
var inst_50667 = (state_50793[(15)]);
var inst_50689__$1 = cljs.core.seq(inst_50667);
var state_50793__$1 = (function (){var statearr_50888 = state_50793;
(statearr_50888[(7)] = inst_50689__$1);

return statearr_50888;
})();
if(inst_50689__$1){
var statearr_50889_53263 = state_50793__$1;
(statearr_50889_53263[(1)] = (16));

} else {
var statearr_50890_53264 = state_50793__$1;
(statearr_50890_53264[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (9))){
var inst_50721 = (state_50793[(2)]);
var state_50793__$1 = state_50793;
var statearr_50891_53266 = state_50793__$1;
(statearr_50891_53266[(2)] = inst_50721);

(statearr_50891_53266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (5))){
var inst_50665 = cljs.core.deref(cs);
var inst_50666 = cljs.core.seq(inst_50665);
var inst_50667 = inst_50666;
var inst_50668 = null;
var inst_50669 = (0);
var inst_50670 = (0);
var state_50793__$1 = (function (){var statearr_50892 = state_50793;
(statearr_50892[(13)] = inst_50669);

(statearr_50892[(14)] = inst_50668);

(statearr_50892[(15)] = inst_50667);

(statearr_50892[(16)] = inst_50670);

return statearr_50892;
})();
var statearr_50893_53267 = state_50793__$1;
(statearr_50893_53267[(2)] = null);

(statearr_50893_53267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (14))){
var state_50793__$1 = state_50793;
var statearr_50894_53270 = state_50793__$1;
(statearr_50894_53270[(2)] = null);

(statearr_50894_53270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (45))){
var inst_50780 = (state_50793[(2)]);
var state_50793__$1 = state_50793;
var statearr_50895_53273 = state_50793__$1;
(statearr_50895_53273[(2)] = inst_50780);

(statearr_50895_53273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (26))){
var inst_50724 = (state_50793[(27)]);
var inst_50776 = (state_50793[(2)]);
var inst_50777 = cljs.core.seq(inst_50724);
var state_50793__$1 = (function (){var statearr_50898 = state_50793;
(statearr_50898[(29)] = inst_50776);

return statearr_50898;
})();
if(inst_50777){
var statearr_50899_53274 = state_50793__$1;
(statearr_50899_53274[(1)] = (42));

} else {
var statearr_50900_53275 = state_50793__$1;
(statearr_50900_53275[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (16))){
var inst_50689 = (state_50793[(7)]);
var inst_50692 = cljs.core.chunked_seq_QMARK_(inst_50689);
var state_50793__$1 = state_50793;
if(inst_50692){
var statearr_50901_53277 = state_50793__$1;
(statearr_50901_53277[(1)] = (19));

} else {
var statearr_50902_53278 = state_50793__$1;
(statearr_50902_53278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (38))){
var inst_50769 = (state_50793[(2)]);
var state_50793__$1 = state_50793;
var statearr_50903_53279 = state_50793__$1;
(statearr_50903_53279[(2)] = inst_50769);

(statearr_50903_53279[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (30))){
var state_50793__$1 = state_50793;
var statearr_50905_53280 = state_50793__$1;
(statearr_50905_53280[(2)] = null);

(statearr_50905_53280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (10))){
var inst_50668 = (state_50793[(14)]);
var inst_50670 = (state_50793[(16)]);
var inst_50678 = cljs.core._nth(inst_50668,inst_50670);
var inst_50679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50678,(0),null);
var inst_50680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50678,(1),null);
var state_50793__$1 = (function (){var statearr_50906 = state_50793;
(statearr_50906[(24)] = inst_50679);

return statearr_50906;
})();
if(cljs.core.truth_(inst_50680)){
var statearr_50911_53285 = state_50793__$1;
(statearr_50911_53285[(1)] = (13));

} else {
var statearr_50912_53286 = state_50793__$1;
(statearr_50912_53286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (18))){
var inst_50717 = (state_50793[(2)]);
var state_50793__$1 = state_50793;
var statearr_50913_53287 = state_50793__$1;
(statearr_50913_53287[(2)] = inst_50717);

(statearr_50913_53287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (42))){
var state_50793__$1 = state_50793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50793__$1,(45),dchan);
} else {
if((state_val_50794 === (37))){
var inst_50658 = (state_50793[(9)]);
var inst_50759 = (state_50793[(22)]);
var inst_50750 = (state_50793[(23)]);
var inst_50759__$1 = cljs.core.first(inst_50750);
var inst_50760 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50759__$1,inst_50658,done);
var state_50793__$1 = (function (){var statearr_50914 = state_50793;
(statearr_50914[(22)] = inst_50759__$1);

return statearr_50914;
})();
if(cljs.core.truth_(inst_50760)){
var statearr_50915_53289 = state_50793__$1;
(statearr_50915_53289[(1)] = (39));

} else {
var statearr_50916_53290 = state_50793__$1;
(statearr_50916_53290[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50794 === (8))){
var inst_50669 = (state_50793[(13)]);
var inst_50670 = (state_50793[(16)]);
var inst_50672 = (inst_50670 < inst_50669);
var inst_50673 = inst_50672;
var state_50793__$1 = state_50793;
if(cljs.core.truth_(inst_50673)){
var statearr_50917_53291 = state_50793__$1;
(statearr_50917_53291[(1)] = (10));

} else {
var statearr_50918_53292 = state_50793__$1;
(statearr_50918_53292[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__49651__auto__ = null;
var cljs$core$async$mult_$_state_machine__49651__auto____0 = (function (){
var statearr_50921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50921[(0)] = cljs$core$async$mult_$_state_machine__49651__auto__);

(statearr_50921[(1)] = (1));

return statearr_50921;
});
var cljs$core$async$mult_$_state_machine__49651__auto____1 = (function (state_50793){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_50793);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e50922){var ex__49654__auto__ = e50922;
var statearr_50923_53297 = state_50793;
(statearr_50923_53297[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_50793[(4)]))){
var statearr_50924_53298 = state_50793;
(statearr_50924_53298[(1)] = cljs.core.first((state_50793[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53299 = state_50793;
state_50793 = G__53299;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49651__auto__ = function(state_50793){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49651__auto____1.call(this,state_50793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49651__auto____0;
cljs$core$async$mult_$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49651__auto____1;
return cljs$core$async$mult_$_state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_50927 = f__49758__auto__();
(statearr_50927[(6)] = c__49757__auto___53204);

return statearr_50927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__50930 = arguments.length;
switch (G__50930) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_53304 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_53304(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53308 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_53308(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53310 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53310(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53315 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_53315(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53318 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53318(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53323 = arguments.length;
var i__4865__auto___53324 = (0);
while(true){
if((i__4865__auto___53324 < len__4864__auto___53323)){
args__4870__auto__.push((arguments[i__4865__auto___53324]));

var G__53326 = (i__4865__auto___53324 + (1));
i__4865__auto___53324 = G__53326;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50994){
var map__50995 = p__50994;
var map__50995__$1 = cljs.core.__destructure_map(map__50995);
var opts = map__50995__$1;
var statearr_50996_53331 = state;
(statearr_50996_53331[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50999_53332 = state;
(statearr_50999_53332[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_51000_53333 = state;
(statearr_51000_53333[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50975){
var G__50976 = cljs.core.first(seq50975);
var seq50975__$1 = cljs.core.next(seq50975);
var G__50977 = cljs.core.first(seq50975__$1);
var seq50975__$2 = cljs.core.next(seq50975__$1);
var G__50978 = cljs.core.first(seq50975__$2);
var seq50975__$3 = cljs.core.next(seq50975__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50976,G__50977,G__50978,seq50975__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51012 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51013){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51013 = meta51013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51014,meta51013__$1){
var self__ = this;
var _51014__$1 = this;
return (new cljs.core.async.t_cljs$core$async51012(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51013__$1));
}));

(cljs.core.async.t_cljs$core$async51012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51014){
var self__ = this;
var _51014__$1 = this;
return self__.meta51013;
}));

(cljs.core.async.t_cljs$core$async51012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51012.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51013","meta51013",832595580,null)], null);
}));

(cljs.core.async.t_cljs$core$async51012.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51012");

(cljs.core.async.t_cljs$core$async51012.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51012");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51012.
 */
cljs.core.async.__GT_t_cljs$core$async51012 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51012(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51013){
return (new cljs.core.async.t_cljs$core$async51012(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51013));
});

}

return (new cljs.core.async.t_cljs$core$async51012(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49757__auto___53347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_51092){
var state_val_51093 = (state_51092[(1)]);
if((state_val_51093 === (7))){
var inst_51051 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
if(cljs.core.truth_(inst_51051)){
var statearr_51098_53348 = state_51092__$1;
(statearr_51098_53348[(1)] = (8));

} else {
var statearr_51099_53349 = state_51092__$1;
(statearr_51099_53349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (20))){
var inst_51044 = (state_51092[(7)]);
var state_51092__$1 = state_51092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51092__$1,(23),out,inst_51044);
} else {
if((state_val_51093 === (1))){
var inst_51026 = calc_state();
var inst_51027 = cljs.core.__destructure_map(inst_51026);
var inst_51028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51027,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51027,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51027,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51031 = inst_51026;
var state_51092__$1 = (function (){var statearr_51100 = state_51092;
(statearr_51100[(8)] = inst_51029);

(statearr_51100[(9)] = inst_51031);

(statearr_51100[(10)] = inst_51028);

(statearr_51100[(11)] = inst_51030);

return statearr_51100;
})();
var statearr_51101_53352 = state_51092__$1;
(statearr_51101_53352[(2)] = null);

(statearr_51101_53352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (24))){
var inst_51035 = (state_51092[(12)]);
var inst_51031 = inst_51035;
var state_51092__$1 = (function (){var statearr_51104 = state_51092;
(statearr_51104[(9)] = inst_51031);

return statearr_51104;
})();
var statearr_51105_53353 = state_51092__$1;
(statearr_51105_53353[(2)] = null);

(statearr_51105_53353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (4))){
var inst_51044 = (state_51092[(7)]);
var inst_51046 = (state_51092[(13)]);
var inst_51043 = (state_51092[(2)]);
var inst_51044__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51043,(0),null);
var inst_51045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51043,(1),null);
var inst_51046__$1 = (inst_51044__$1 == null);
var state_51092__$1 = (function (){var statearr_51106 = state_51092;
(statearr_51106[(14)] = inst_51045);

(statearr_51106[(7)] = inst_51044__$1);

(statearr_51106[(13)] = inst_51046__$1);

return statearr_51106;
})();
if(cljs.core.truth_(inst_51046__$1)){
var statearr_51111_53355 = state_51092__$1;
(statearr_51111_53355[(1)] = (5));

} else {
var statearr_51112_53359 = state_51092__$1;
(statearr_51112_53359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (15))){
var inst_51065 = (state_51092[(15)]);
var inst_51036 = (state_51092[(16)]);
var inst_51065__$1 = cljs.core.empty_QMARK_(inst_51036);
var state_51092__$1 = (function (){var statearr_51116 = state_51092;
(statearr_51116[(15)] = inst_51065__$1);

return statearr_51116;
})();
if(inst_51065__$1){
var statearr_51117_53360 = state_51092__$1;
(statearr_51117_53360[(1)] = (17));

} else {
var statearr_51118_53362 = state_51092__$1;
(statearr_51118_53362[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (21))){
var inst_51035 = (state_51092[(12)]);
var inst_51031 = inst_51035;
var state_51092__$1 = (function (){var statearr_51119 = state_51092;
(statearr_51119[(9)] = inst_51031);

return statearr_51119;
})();
var statearr_51120_53363 = state_51092__$1;
(statearr_51120_53363[(2)] = null);

(statearr_51120_53363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (13))){
var inst_51058 = (state_51092[(2)]);
var inst_51059 = calc_state();
var inst_51031 = inst_51059;
var state_51092__$1 = (function (){var statearr_51121 = state_51092;
(statearr_51121[(17)] = inst_51058);

(statearr_51121[(9)] = inst_51031);

return statearr_51121;
})();
var statearr_51122_53364 = state_51092__$1;
(statearr_51122_53364[(2)] = null);

(statearr_51122_53364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (22))){
var inst_51085 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51123_53365 = state_51092__$1;
(statearr_51123_53365[(2)] = inst_51085);

(statearr_51123_53365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (6))){
var inst_51045 = (state_51092[(14)]);
var inst_51049 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51045,change);
var state_51092__$1 = state_51092;
var statearr_51124_53366 = state_51092__$1;
(statearr_51124_53366[(2)] = inst_51049);

(statearr_51124_53366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (25))){
var state_51092__$1 = state_51092;
var statearr_51125_53367 = state_51092__$1;
(statearr_51125_53367[(2)] = null);

(statearr_51125_53367[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (17))){
var inst_51037 = (state_51092[(18)]);
var inst_51045 = (state_51092[(14)]);
var inst_51067 = (inst_51037.cljs$core$IFn$_invoke$arity$1 ? inst_51037.cljs$core$IFn$_invoke$arity$1(inst_51045) : inst_51037.call(null,inst_51045));
var inst_51068 = cljs.core.not(inst_51067);
var state_51092__$1 = state_51092;
var statearr_51126_53368 = state_51092__$1;
(statearr_51126_53368[(2)] = inst_51068);

(statearr_51126_53368[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (3))){
var inst_51089 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51092__$1,inst_51089);
} else {
if((state_val_51093 === (12))){
var state_51092__$1 = state_51092;
var statearr_51130_53369 = state_51092__$1;
(statearr_51130_53369[(2)] = null);

(statearr_51130_53369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (2))){
var inst_51035 = (state_51092[(12)]);
var inst_51031 = (state_51092[(9)]);
var inst_51035__$1 = cljs.core.__destructure_map(inst_51031);
var inst_51036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51035__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51035__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51035__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51092__$1 = (function (){var statearr_51131 = state_51092;
(statearr_51131[(18)] = inst_51037);

(statearr_51131[(12)] = inst_51035__$1);

(statearr_51131[(16)] = inst_51036);

return statearr_51131;
})();
return cljs.core.async.ioc_alts_BANG_(state_51092__$1,(4),inst_51038);
} else {
if((state_val_51093 === (23))){
var inst_51076 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
if(cljs.core.truth_(inst_51076)){
var statearr_51134_53370 = state_51092__$1;
(statearr_51134_53370[(1)] = (24));

} else {
var statearr_51135_53371 = state_51092__$1;
(statearr_51135_53371[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (19))){
var inst_51071 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51136_53372 = state_51092__$1;
(statearr_51136_53372[(2)] = inst_51071);

(statearr_51136_53372[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (11))){
var inst_51045 = (state_51092[(14)]);
var inst_51055 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51045);
var state_51092__$1 = state_51092;
var statearr_51137_53373 = state_51092__$1;
(statearr_51137_53373[(2)] = inst_51055);

(statearr_51137_53373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (9))){
var inst_51062 = (state_51092[(19)]);
var inst_51045 = (state_51092[(14)]);
var inst_51036 = (state_51092[(16)]);
var inst_51062__$1 = (inst_51036.cljs$core$IFn$_invoke$arity$1 ? inst_51036.cljs$core$IFn$_invoke$arity$1(inst_51045) : inst_51036.call(null,inst_51045));
var state_51092__$1 = (function (){var statearr_51141 = state_51092;
(statearr_51141[(19)] = inst_51062__$1);

return statearr_51141;
})();
if(cljs.core.truth_(inst_51062__$1)){
var statearr_51142_53374 = state_51092__$1;
(statearr_51142_53374[(1)] = (14));

} else {
var statearr_51143_53375 = state_51092__$1;
(statearr_51143_53375[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (5))){
var inst_51046 = (state_51092[(13)]);
var state_51092__$1 = state_51092;
var statearr_51144_53376 = state_51092__$1;
(statearr_51144_53376[(2)] = inst_51046);

(statearr_51144_53376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (14))){
var inst_51062 = (state_51092[(19)]);
var state_51092__$1 = state_51092;
var statearr_51145_53377 = state_51092__$1;
(statearr_51145_53377[(2)] = inst_51062);

(statearr_51145_53377[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (26))){
var inst_51081 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51150_53378 = state_51092__$1;
(statearr_51150_53378[(2)] = inst_51081);

(statearr_51150_53378[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (16))){
var inst_51073 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
if(cljs.core.truth_(inst_51073)){
var statearr_51154_53379 = state_51092__$1;
(statearr_51154_53379[(1)] = (20));

} else {
var statearr_51155_53380 = state_51092__$1;
(statearr_51155_53380[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (10))){
var inst_51087 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51156_53381 = state_51092__$1;
(statearr_51156_53381[(2)] = inst_51087);

(statearr_51156_53381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (18))){
var inst_51065 = (state_51092[(15)]);
var state_51092__$1 = state_51092;
var statearr_51160_53382 = state_51092__$1;
(statearr_51160_53382[(2)] = inst_51065);

(statearr_51160_53382[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (8))){
var inst_51044 = (state_51092[(7)]);
var inst_51053 = (inst_51044 == null);
var state_51092__$1 = state_51092;
if(cljs.core.truth_(inst_51053)){
var statearr_51161_53383 = state_51092__$1;
(statearr_51161_53383[(1)] = (11));

} else {
var statearr_51162_53384 = state_51092__$1;
(statearr_51162_53384[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__49651__auto__ = null;
var cljs$core$async$mix_$_state_machine__49651__auto____0 = (function (){
var statearr_51164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51164[(0)] = cljs$core$async$mix_$_state_machine__49651__auto__);

(statearr_51164[(1)] = (1));

return statearr_51164;
});
var cljs$core$async$mix_$_state_machine__49651__auto____1 = (function (state_51092){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_51092);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e51168){var ex__49654__auto__ = e51168;
var statearr_51172_53387 = state_51092;
(statearr_51172_53387[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_51092[(4)]))){
var statearr_51173_53389 = state_51092;
(statearr_51173_53389[(1)] = cljs.core.first((state_51092[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53390 = state_51092;
state_51092 = G__53390;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49651__auto__ = function(state_51092){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49651__auto____1.call(this,state_51092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49651__auto____0;
cljs$core$async$mix_$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49651__auto____1;
return cljs$core$async$mix_$_state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_51174 = f__49758__auto__();
(statearr_51174[(6)] = c__49757__auto___53347);

return statearr_51174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_53391 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53391(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53394 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53394(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53397 = (function() {
var G__53398 = null;
var G__53398__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53398__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53398 = function(p,v){
switch(arguments.length){
case 1:
return G__53398__1.call(this,p);
case 2:
return G__53398__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53398.cljs$core$IFn$_invoke$arity$1 = G__53398__1;
G__53398.cljs$core$IFn$_invoke$arity$2 = G__53398__2;
return G__53398;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51193 = arguments.length;
switch (G__51193) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53397(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53397(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51199 = arguments.length;
switch (G__51199) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51197_SHARP_){
if(cljs.core.truth_((p1__51197_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51197_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51197_SHARP_.call(null,topic)))){
return p1__51197_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51197_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51202 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51203){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51203 = meta51203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51204,meta51203__$1){
var self__ = this;
var _51204__$1 = this;
return (new cljs.core.async.t_cljs$core$async51202(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51203__$1));
}));

(cljs.core.async.t_cljs$core$async51202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51204){
var self__ = this;
var _51204__$1 = this;
return self__.meta51203;
}));

(cljs.core.async.t_cljs$core$async51202.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51202.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51202.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51202.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51203","meta51203",-524564094,null)], null);
}));

(cljs.core.async.t_cljs$core$async51202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51202");

(cljs.core.async.t_cljs$core$async51202.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51202.
 */
cljs.core.async.__GT_t_cljs$core$async51202 = (function cljs$core$async$__GT_t_cljs$core$async51202(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51203){
return (new cljs.core.async.t_cljs$core$async51202(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51203));
});

}

return (new cljs.core.async.t_cljs$core$async51202(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49757__auto___53407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_51338){
var state_val_51339 = (state_51338[(1)]);
if((state_val_51339 === (7))){
var inst_51333 = (state_51338[(2)]);
var state_51338__$1 = state_51338;
var statearr_51340_53409 = state_51338__$1;
(statearr_51340_53409[(2)] = inst_51333);

(statearr_51340_53409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (20))){
var state_51338__$1 = state_51338;
var statearr_51341_53410 = state_51338__$1;
(statearr_51341_53410[(2)] = null);

(statearr_51341_53410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (1))){
var state_51338__$1 = state_51338;
var statearr_51342_53411 = state_51338__$1;
(statearr_51342_53411[(2)] = null);

(statearr_51342_53411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (24))){
var inst_51316 = (state_51338[(7)]);
var inst_51325 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51316);
var state_51338__$1 = state_51338;
var statearr_51343_53412 = state_51338__$1;
(statearr_51343_53412[(2)] = inst_51325);

(statearr_51343_53412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (4))){
var inst_51216 = (state_51338[(8)]);
var inst_51216__$1 = (state_51338[(2)]);
var inst_51217 = (inst_51216__$1 == null);
var state_51338__$1 = (function (){var statearr_51344 = state_51338;
(statearr_51344[(8)] = inst_51216__$1);

return statearr_51344;
})();
if(cljs.core.truth_(inst_51217)){
var statearr_51345_53413 = state_51338__$1;
(statearr_51345_53413[(1)] = (5));

} else {
var statearr_51346_53414 = state_51338__$1;
(statearr_51346_53414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (15))){
var inst_51310 = (state_51338[(2)]);
var state_51338__$1 = state_51338;
var statearr_51347_53415 = state_51338__$1;
(statearr_51347_53415[(2)] = inst_51310);

(statearr_51347_53415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (21))){
var inst_51330 = (state_51338[(2)]);
var state_51338__$1 = (function (){var statearr_51349 = state_51338;
(statearr_51349[(9)] = inst_51330);

return statearr_51349;
})();
var statearr_51350_53417 = state_51338__$1;
(statearr_51350_53417[(2)] = null);

(statearr_51350_53417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (13))){
var inst_51240 = (state_51338[(10)]);
var inst_51242 = cljs.core.chunked_seq_QMARK_(inst_51240);
var state_51338__$1 = state_51338;
if(inst_51242){
var statearr_51352_53419 = state_51338__$1;
(statearr_51352_53419[(1)] = (16));

} else {
var statearr_51353_53420 = state_51338__$1;
(statearr_51353_53420[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (22))){
var inst_51322 = (state_51338[(2)]);
var state_51338__$1 = state_51338;
if(cljs.core.truth_(inst_51322)){
var statearr_51354_53421 = state_51338__$1;
(statearr_51354_53421[(1)] = (23));

} else {
var statearr_51355_53424 = state_51338__$1;
(statearr_51355_53424[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (6))){
var inst_51318 = (state_51338[(11)]);
var inst_51316 = (state_51338[(7)]);
var inst_51216 = (state_51338[(8)]);
var inst_51316__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51216) : topic_fn.call(null,inst_51216));
var inst_51317 = cljs.core.deref(mults);
var inst_51318__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51317,inst_51316__$1);
var state_51338__$1 = (function (){var statearr_51356 = state_51338;
(statearr_51356[(11)] = inst_51318__$1);

(statearr_51356[(7)] = inst_51316__$1);

return statearr_51356;
})();
if(cljs.core.truth_(inst_51318__$1)){
var statearr_51357_53425 = state_51338__$1;
(statearr_51357_53425[(1)] = (19));

} else {
var statearr_51358_53426 = state_51338__$1;
(statearr_51358_53426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (25))){
var inst_51327 = (state_51338[(2)]);
var state_51338__$1 = state_51338;
var statearr_51359_53427 = state_51338__$1;
(statearr_51359_53427[(2)] = inst_51327);

(statearr_51359_53427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (17))){
var inst_51240 = (state_51338[(10)]);
var inst_51249 = cljs.core.first(inst_51240);
var inst_51250 = cljs.core.async.muxch_STAR_(inst_51249);
var inst_51299 = cljs.core.async.close_BANG_(inst_51250);
var inst_51304 = cljs.core.next(inst_51240);
var inst_51226 = inst_51304;
var inst_51227 = null;
var inst_51228 = (0);
var inst_51229 = (0);
var state_51338__$1 = (function (){var statearr_51361 = state_51338;
(statearr_51361[(12)] = inst_51299);

(statearr_51361[(13)] = inst_51229);

(statearr_51361[(14)] = inst_51228);

(statearr_51361[(15)] = inst_51226);

(statearr_51361[(16)] = inst_51227);

return statearr_51361;
})();
var statearr_51362_53429 = state_51338__$1;
(statearr_51362_53429[(2)] = null);

(statearr_51362_53429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (3))){
var inst_51335 = (state_51338[(2)]);
var state_51338__$1 = state_51338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51338__$1,inst_51335);
} else {
if((state_val_51339 === (12))){
var inst_51312 = (state_51338[(2)]);
var state_51338__$1 = state_51338;
var statearr_51363_53430 = state_51338__$1;
(statearr_51363_53430[(2)] = inst_51312);

(statearr_51363_53430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (2))){
var state_51338__$1 = state_51338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51338__$1,(4),ch);
} else {
if((state_val_51339 === (23))){
var state_51338__$1 = state_51338;
var statearr_51364_53433 = state_51338__$1;
(statearr_51364_53433[(2)] = null);

(statearr_51364_53433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (19))){
var inst_51318 = (state_51338[(11)]);
var inst_51216 = (state_51338[(8)]);
var inst_51320 = cljs.core.async.muxch_STAR_(inst_51318);
var state_51338__$1 = state_51338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51338__$1,(22),inst_51320,inst_51216);
} else {
if((state_val_51339 === (11))){
var inst_51226 = (state_51338[(15)]);
var inst_51240 = (state_51338[(10)]);
var inst_51240__$1 = cljs.core.seq(inst_51226);
var state_51338__$1 = (function (){var statearr_51367 = state_51338;
(statearr_51367[(10)] = inst_51240__$1);

return statearr_51367;
})();
if(inst_51240__$1){
var statearr_51368_53436 = state_51338__$1;
(statearr_51368_53436[(1)] = (13));

} else {
var statearr_51369_53437 = state_51338__$1;
(statearr_51369_53437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (9))){
var inst_51314 = (state_51338[(2)]);
var state_51338__$1 = state_51338;
var statearr_51371_53438 = state_51338__$1;
(statearr_51371_53438[(2)] = inst_51314);

(statearr_51371_53438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (5))){
var inst_51223 = cljs.core.deref(mults);
var inst_51224 = cljs.core.vals(inst_51223);
var inst_51225 = cljs.core.seq(inst_51224);
var inst_51226 = inst_51225;
var inst_51227 = null;
var inst_51228 = (0);
var inst_51229 = (0);
var state_51338__$1 = (function (){var statearr_51373 = state_51338;
(statearr_51373[(13)] = inst_51229);

(statearr_51373[(14)] = inst_51228);

(statearr_51373[(15)] = inst_51226);

(statearr_51373[(16)] = inst_51227);

return statearr_51373;
})();
var statearr_51374_53440 = state_51338__$1;
(statearr_51374_53440[(2)] = null);

(statearr_51374_53440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (14))){
var state_51338__$1 = state_51338;
var statearr_51378_53441 = state_51338__$1;
(statearr_51378_53441[(2)] = null);

(statearr_51378_53441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (16))){
var inst_51240 = (state_51338[(10)]);
var inst_51244 = cljs.core.chunk_first(inst_51240);
var inst_51245 = cljs.core.chunk_rest(inst_51240);
var inst_51246 = cljs.core.count(inst_51244);
var inst_51226 = inst_51245;
var inst_51227 = inst_51244;
var inst_51228 = inst_51246;
var inst_51229 = (0);
var state_51338__$1 = (function (){var statearr_51380 = state_51338;
(statearr_51380[(13)] = inst_51229);

(statearr_51380[(14)] = inst_51228);

(statearr_51380[(15)] = inst_51226);

(statearr_51380[(16)] = inst_51227);

return statearr_51380;
})();
var statearr_51381_53443 = state_51338__$1;
(statearr_51381_53443[(2)] = null);

(statearr_51381_53443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (10))){
var inst_51229 = (state_51338[(13)]);
var inst_51228 = (state_51338[(14)]);
var inst_51226 = (state_51338[(15)]);
var inst_51227 = (state_51338[(16)]);
var inst_51234 = cljs.core._nth(inst_51227,inst_51229);
var inst_51235 = cljs.core.async.muxch_STAR_(inst_51234);
var inst_51236 = cljs.core.async.close_BANG_(inst_51235);
var inst_51237 = (inst_51229 + (1));
var tmp51375 = inst_51228;
var tmp51376 = inst_51226;
var tmp51377 = inst_51227;
var inst_51226__$1 = tmp51376;
var inst_51227__$1 = tmp51377;
var inst_51228__$1 = tmp51375;
var inst_51229__$1 = inst_51237;
var state_51338__$1 = (function (){var statearr_51383 = state_51338;
(statearr_51383[(17)] = inst_51236);

(statearr_51383[(13)] = inst_51229__$1);

(statearr_51383[(14)] = inst_51228__$1);

(statearr_51383[(15)] = inst_51226__$1);

(statearr_51383[(16)] = inst_51227__$1);

return statearr_51383;
})();
var statearr_51384_53444 = state_51338__$1;
(statearr_51384_53444[(2)] = null);

(statearr_51384_53444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (18))){
var inst_51307 = (state_51338[(2)]);
var state_51338__$1 = state_51338;
var statearr_51386_53447 = state_51338__$1;
(statearr_51386_53447[(2)] = inst_51307);

(statearr_51386_53447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51339 === (8))){
var inst_51229 = (state_51338[(13)]);
var inst_51228 = (state_51338[(14)]);
var inst_51231 = (inst_51229 < inst_51228);
var inst_51232 = inst_51231;
var state_51338__$1 = state_51338;
if(cljs.core.truth_(inst_51232)){
var statearr_51387_53448 = state_51338__$1;
(statearr_51387_53448[(1)] = (10));

} else {
var statearr_51388_53452 = state_51338__$1;
(statearr_51388_53452[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_51389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51389[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_51389[(1)] = (1));

return statearr_51389;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_51338){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_51338);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e51390){var ex__49654__auto__ = e51390;
var statearr_51391_53457 = state_51338;
(statearr_51391_53457[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_51338[(4)]))){
var statearr_51393_53458 = state_51338;
(statearr_51393_53458[(1)] = cljs.core.first((state_51338[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53459 = state_51338;
state_51338 = G__53459;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_51338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_51338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_51394 = f__49758__auto__();
(statearr_51394[(6)] = c__49757__auto___53407);

return statearr_51394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51398 = arguments.length;
switch (G__51398) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51404 = arguments.length;
switch (G__51404) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51408 = arguments.length;
switch (G__51408) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__49757__auto___53475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_51463){
var state_val_51464 = (state_51463[(1)]);
if((state_val_51464 === (7))){
var state_51463__$1 = state_51463;
var statearr_51469_53476 = state_51463__$1;
(statearr_51469_53476[(2)] = null);

(statearr_51469_53476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (1))){
var state_51463__$1 = state_51463;
var statearr_51470_53477 = state_51463__$1;
(statearr_51470_53477[(2)] = null);

(statearr_51470_53477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (4))){
var inst_51418 = (state_51463[(7)]);
var inst_51419 = (state_51463[(8)]);
var inst_51421 = (inst_51419 < inst_51418);
var state_51463__$1 = state_51463;
if(cljs.core.truth_(inst_51421)){
var statearr_51473_53479 = state_51463__$1;
(statearr_51473_53479[(1)] = (6));

} else {
var statearr_51476_53480 = state_51463__$1;
(statearr_51476_53480[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (15))){
var inst_51448 = (state_51463[(9)]);
var inst_51453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51448);
var state_51463__$1 = state_51463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51463__$1,(17),out,inst_51453);
} else {
if((state_val_51464 === (13))){
var inst_51448 = (state_51463[(9)]);
var inst_51448__$1 = (state_51463[(2)]);
var inst_51449 = cljs.core.some(cljs.core.nil_QMARK_,inst_51448__$1);
var state_51463__$1 = (function (){var statearr_51479 = state_51463;
(statearr_51479[(9)] = inst_51448__$1);

return statearr_51479;
})();
if(cljs.core.truth_(inst_51449)){
var statearr_51480_53484 = state_51463__$1;
(statearr_51480_53484[(1)] = (14));

} else {
var statearr_51481_53485 = state_51463__$1;
(statearr_51481_53485[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (6))){
var state_51463__$1 = state_51463;
var statearr_51482_53486 = state_51463__$1;
(statearr_51482_53486[(2)] = null);

(statearr_51482_53486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (17))){
var inst_51455 = (state_51463[(2)]);
var state_51463__$1 = (function (){var statearr_51493 = state_51463;
(statearr_51493[(10)] = inst_51455);

return statearr_51493;
})();
var statearr_51495_53489 = state_51463__$1;
(statearr_51495_53489[(2)] = null);

(statearr_51495_53489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (3))){
var inst_51460 = (state_51463[(2)]);
var state_51463__$1 = state_51463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51463__$1,inst_51460);
} else {
if((state_val_51464 === (12))){
var _ = (function (){var statearr_51499 = state_51463;
(statearr_51499[(4)] = cljs.core.rest((state_51463[(4)])));

return statearr_51499;
})();
var state_51463__$1 = state_51463;
var ex51483 = (state_51463__$1[(2)]);
var statearr_51500_53492 = state_51463__$1;
(statearr_51500_53492[(5)] = ex51483);


if((ex51483 instanceof Object)){
var statearr_51504_53493 = state_51463__$1;
(statearr_51504_53493[(1)] = (11));

(statearr_51504_53493[(5)] = null);

} else {
throw ex51483;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (2))){
var inst_51417 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51418 = cnt;
var inst_51419 = (0);
var state_51463__$1 = (function (){var statearr_51508 = state_51463;
(statearr_51508[(7)] = inst_51418);

(statearr_51508[(11)] = inst_51417);

(statearr_51508[(8)] = inst_51419);

return statearr_51508;
})();
var statearr_51522_53494 = state_51463__$1;
(statearr_51522_53494[(2)] = null);

(statearr_51522_53494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (11))){
var inst_51423 = (state_51463[(2)]);
var inst_51425 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51463__$1 = (function (){var statearr_51524 = state_51463;
(statearr_51524[(12)] = inst_51423);

return statearr_51524;
})();
var statearr_51525_53496 = state_51463__$1;
(statearr_51525_53496[(2)] = inst_51425);

(statearr_51525_53496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (9))){
var inst_51419 = (state_51463[(8)]);
var _ = (function (){var statearr_51526 = state_51463;
(statearr_51526[(4)] = cljs.core.cons((12),(state_51463[(4)])));

return statearr_51526;
})();
var inst_51432 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51419) : chs__$1.call(null,inst_51419));
var inst_51433 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51419) : done.call(null,inst_51419));
var inst_51434 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51432,inst_51433);
var ___$1 = (function (){var statearr_51528 = state_51463;
(statearr_51528[(4)] = cljs.core.rest((state_51463[(4)])));

return statearr_51528;
})();
var state_51463__$1 = state_51463;
var statearr_51529_53497 = state_51463__$1;
(statearr_51529_53497[(2)] = inst_51434);

(statearr_51529_53497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (5))){
var inst_51444 = (state_51463[(2)]);
var state_51463__$1 = (function (){var statearr_51531 = state_51463;
(statearr_51531[(13)] = inst_51444);

return statearr_51531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51463__$1,(13),dchan);
} else {
if((state_val_51464 === (14))){
var inst_51451 = cljs.core.async.close_BANG_(out);
var state_51463__$1 = state_51463;
var statearr_51533_53498 = state_51463__$1;
(statearr_51533_53498[(2)] = inst_51451);

(statearr_51533_53498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (16))){
var inst_51458 = (state_51463[(2)]);
var state_51463__$1 = state_51463;
var statearr_51534_53499 = state_51463__$1;
(statearr_51534_53499[(2)] = inst_51458);

(statearr_51534_53499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (10))){
var inst_51419 = (state_51463[(8)]);
var inst_51437 = (state_51463[(2)]);
var inst_51438 = (inst_51419 + (1));
var inst_51419__$1 = inst_51438;
var state_51463__$1 = (function (){var statearr_51536 = state_51463;
(statearr_51536[(8)] = inst_51419__$1);

(statearr_51536[(14)] = inst_51437);

return statearr_51536;
})();
var statearr_51537_53501 = state_51463__$1;
(statearr_51537_53501[(2)] = null);

(statearr_51537_53501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51464 === (8))){
var inst_51442 = (state_51463[(2)]);
var state_51463__$1 = state_51463;
var statearr_51539_53502 = state_51463__$1;
(statearr_51539_53502[(2)] = inst_51442);

(statearr_51539_53502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_51543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51543[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_51543[(1)] = (1));

return statearr_51543;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_51463){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_51463);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e51545){var ex__49654__auto__ = e51545;
var statearr_51547_53504 = state_51463;
(statearr_51547_53504[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_51463[(4)]))){
var statearr_51548_53505 = state_51463;
(statearr_51548_53505[(1)] = cljs.core.first((state_51463[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53508 = state_51463;
state_51463 = G__53508;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_51463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_51463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_51549 = f__49758__auto__();
(statearr_51549[(6)] = c__49757__auto___53475);

return statearr_51549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51555 = arguments.length;
switch (G__51555) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49757__auto___53512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_51591){
var state_val_51592 = (state_51591[(1)]);
if((state_val_51592 === (7))){
var inst_51570 = (state_51591[(7)]);
var inst_51571 = (state_51591[(8)]);
var inst_51570__$1 = (state_51591[(2)]);
var inst_51571__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51570__$1,(0),null);
var inst_51572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51570__$1,(1),null);
var inst_51573 = (inst_51571__$1 == null);
var state_51591__$1 = (function (){var statearr_51599 = state_51591;
(statearr_51599[(7)] = inst_51570__$1);

(statearr_51599[(9)] = inst_51572);

(statearr_51599[(8)] = inst_51571__$1);

return statearr_51599;
})();
if(cljs.core.truth_(inst_51573)){
var statearr_51601_53513 = state_51591__$1;
(statearr_51601_53513[(1)] = (8));

} else {
var statearr_51604_53514 = state_51591__$1;
(statearr_51604_53514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51592 === (1))){
var inst_51559 = cljs.core.vec(chs);
var inst_51561 = inst_51559;
var state_51591__$1 = (function (){var statearr_51607 = state_51591;
(statearr_51607[(10)] = inst_51561);

return statearr_51607;
})();
var statearr_51608_53516 = state_51591__$1;
(statearr_51608_53516[(2)] = null);

(statearr_51608_53516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51592 === (4))){
var inst_51561 = (state_51591[(10)]);
var state_51591__$1 = state_51591;
return cljs.core.async.ioc_alts_BANG_(state_51591__$1,(7),inst_51561);
} else {
if((state_val_51592 === (6))){
var inst_51587 = (state_51591[(2)]);
var state_51591__$1 = state_51591;
var statearr_51610_53517 = state_51591__$1;
(statearr_51610_53517[(2)] = inst_51587);

(statearr_51610_53517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51592 === (3))){
var inst_51589 = (state_51591[(2)]);
var state_51591__$1 = state_51591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51591__$1,inst_51589);
} else {
if((state_val_51592 === (2))){
var inst_51561 = (state_51591[(10)]);
var inst_51563 = cljs.core.count(inst_51561);
var inst_51564 = (inst_51563 > (0));
var state_51591__$1 = state_51591;
if(cljs.core.truth_(inst_51564)){
var statearr_51612_53520 = state_51591__$1;
(statearr_51612_53520[(1)] = (4));

} else {
var statearr_51613_53521 = state_51591__$1;
(statearr_51613_53521[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51592 === (11))){
var inst_51561 = (state_51591[(10)]);
var inst_51580 = (state_51591[(2)]);
var tmp51611 = inst_51561;
var inst_51561__$1 = tmp51611;
var state_51591__$1 = (function (){var statearr_51614 = state_51591;
(statearr_51614[(11)] = inst_51580);

(statearr_51614[(10)] = inst_51561__$1);

return statearr_51614;
})();
var statearr_51615_53524 = state_51591__$1;
(statearr_51615_53524[(2)] = null);

(statearr_51615_53524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51592 === (9))){
var inst_51571 = (state_51591[(8)]);
var state_51591__$1 = state_51591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51591__$1,(11),out,inst_51571);
} else {
if((state_val_51592 === (5))){
var inst_51585 = cljs.core.async.close_BANG_(out);
var state_51591__$1 = state_51591;
var statearr_51618_53525 = state_51591__$1;
(statearr_51618_53525[(2)] = inst_51585);

(statearr_51618_53525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51592 === (10))){
var inst_51583 = (state_51591[(2)]);
var state_51591__$1 = state_51591;
var statearr_51619_53527 = state_51591__$1;
(statearr_51619_53527[(2)] = inst_51583);

(statearr_51619_53527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51592 === (8))){
var inst_51570 = (state_51591[(7)]);
var inst_51572 = (state_51591[(9)]);
var inst_51571 = (state_51591[(8)]);
var inst_51561 = (state_51591[(10)]);
var inst_51575 = (function (){var cs = inst_51561;
var vec__51566 = inst_51570;
var v = inst_51571;
var c = inst_51572;
return (function (p1__51551_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51551_SHARP_);
});
})();
var inst_51576 = cljs.core.filterv(inst_51575,inst_51561);
var inst_51561__$1 = inst_51576;
var state_51591__$1 = (function (){var statearr_51621 = state_51591;
(statearr_51621[(10)] = inst_51561__$1);

return statearr_51621;
})();
var statearr_51622_53530 = state_51591__$1;
(statearr_51622_53530[(2)] = null);

(statearr_51622_53530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_51636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51636[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_51636[(1)] = (1));

return statearr_51636;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_51591){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_51591);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e51638){var ex__49654__auto__ = e51638;
var statearr_51640_53533 = state_51591;
(statearr_51640_53533[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_51591[(4)]))){
var statearr_51642_53534 = state_51591;
(statearr_51642_53534[(1)] = cljs.core.first((state_51591[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53535 = state_51591;
state_51591 = G__53535;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_51591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_51591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_51646 = f__49758__auto__();
(statearr_51646[(6)] = c__49757__auto___53512);

return statearr_51646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51655 = arguments.length;
switch (G__51655) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49757__auto___53538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_51685){
var state_val_51686 = (state_51685[(1)]);
if((state_val_51686 === (7))){
var inst_51664 = (state_51685[(7)]);
var inst_51664__$1 = (state_51685[(2)]);
var inst_51665 = (inst_51664__$1 == null);
var inst_51666 = cljs.core.not(inst_51665);
var state_51685__$1 = (function (){var statearr_51690 = state_51685;
(statearr_51690[(7)] = inst_51664__$1);

return statearr_51690;
})();
if(inst_51666){
var statearr_51693_53539 = state_51685__$1;
(statearr_51693_53539[(1)] = (8));

} else {
var statearr_51698_53540 = state_51685__$1;
(statearr_51698_53540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51686 === (1))){
var inst_51657 = (0);
var state_51685__$1 = (function (){var statearr_51701 = state_51685;
(statearr_51701[(8)] = inst_51657);

return statearr_51701;
})();
var statearr_51702_53541 = state_51685__$1;
(statearr_51702_53541[(2)] = null);

(statearr_51702_53541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51686 === (4))){
var state_51685__$1 = state_51685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51685__$1,(7),ch);
} else {
if((state_val_51686 === (6))){
var inst_51680 = (state_51685[(2)]);
var state_51685__$1 = state_51685;
var statearr_51710_53544 = state_51685__$1;
(statearr_51710_53544[(2)] = inst_51680);

(statearr_51710_53544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51686 === (3))){
var inst_51682 = (state_51685[(2)]);
var inst_51683 = cljs.core.async.close_BANG_(out);
var state_51685__$1 = (function (){var statearr_51717 = state_51685;
(statearr_51717[(9)] = inst_51682);

return statearr_51717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51685__$1,inst_51683);
} else {
if((state_val_51686 === (2))){
var inst_51657 = (state_51685[(8)]);
var inst_51659 = (inst_51657 < n);
var state_51685__$1 = state_51685;
if(cljs.core.truth_(inst_51659)){
var statearr_51722_53547 = state_51685__$1;
(statearr_51722_53547[(1)] = (4));

} else {
var statearr_51725_53548 = state_51685__$1;
(statearr_51725_53548[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51686 === (11))){
var inst_51657 = (state_51685[(8)]);
var inst_51671 = (state_51685[(2)]);
var inst_51672 = (inst_51657 + (1));
var inst_51657__$1 = inst_51672;
var state_51685__$1 = (function (){var statearr_51731 = state_51685;
(statearr_51731[(10)] = inst_51671);

(statearr_51731[(8)] = inst_51657__$1);

return statearr_51731;
})();
var statearr_51733_53549 = state_51685__$1;
(statearr_51733_53549[(2)] = null);

(statearr_51733_53549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51686 === (9))){
var state_51685__$1 = state_51685;
var statearr_51736_53550 = state_51685__$1;
(statearr_51736_53550[(2)] = null);

(statearr_51736_53550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51686 === (5))){
var state_51685__$1 = state_51685;
var statearr_51737_53551 = state_51685__$1;
(statearr_51737_53551[(2)] = null);

(statearr_51737_53551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51686 === (10))){
var inst_51677 = (state_51685[(2)]);
var state_51685__$1 = state_51685;
var statearr_51738_53552 = state_51685__$1;
(statearr_51738_53552[(2)] = inst_51677);

(statearr_51738_53552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51686 === (8))){
var inst_51664 = (state_51685[(7)]);
var state_51685__$1 = state_51685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51685__$1,(11),out,inst_51664);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_51747 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51747[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_51747[(1)] = (1));

return statearr_51747;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_51685){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_51685);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e51749){var ex__49654__auto__ = e51749;
var statearr_51750_53553 = state_51685;
(statearr_51750_53553[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_51685[(4)]))){
var statearr_51751_53554 = state_51685;
(statearr_51751_53554[(1)] = cljs.core.first((state_51685[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53558 = state_51685;
state_51685 = G__53558;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_51685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_51685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_51753 = f__49758__auto__();
(statearr_51753[(6)] = c__49757__auto___53538);

return statearr_51753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51756 = (function (f,ch,meta51757){
this.f = f;
this.ch = ch;
this.meta51757 = meta51757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51758,meta51757__$1){
var self__ = this;
var _51758__$1 = this;
return (new cljs.core.async.t_cljs$core$async51756(self__.f,self__.ch,meta51757__$1));
}));

(cljs.core.async.t_cljs$core$async51756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51758){
var self__ = this;
var _51758__$1 = this;
return self__.meta51757;
}));

(cljs.core.async.t_cljs$core$async51756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51763 = (function (f,ch,meta51757,_,fn1,meta51764){
this.f = f;
this.ch = ch;
this.meta51757 = meta51757;
this._ = _;
this.fn1 = fn1;
this.meta51764 = meta51764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51765,meta51764__$1){
var self__ = this;
var _51765__$1 = this;
return (new cljs.core.async.t_cljs$core$async51763(self__.f,self__.ch,self__.meta51757,self__._,self__.fn1,meta51764__$1));
}));

(cljs.core.async.t_cljs$core$async51763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51765){
var self__ = this;
var _51765__$1 = this;
return self__.meta51764;
}));

(cljs.core.async.t_cljs$core$async51763.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51754_SHARP_){
var G__51780 = (((p1__51754_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51754_SHARP_) : self__.f.call(null,p1__51754_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51780) : f1.call(null,G__51780));
});
}));

(cljs.core.async.t_cljs$core$async51763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51757","meta51757",-728565796,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51756","cljs.core.async/t_cljs$core$async51756",-45442574,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51764","meta51764",-1531724174,null)], null);
}));

(cljs.core.async.t_cljs$core$async51763.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51763");

(cljs.core.async.t_cljs$core$async51763.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51763");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51763.
 */
cljs.core.async.__GT_t_cljs$core$async51763 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51763(f__$1,ch__$1,meta51757__$1,___$2,fn1__$1,meta51764){
return (new cljs.core.async.t_cljs$core$async51763(f__$1,ch__$1,meta51757__$1,___$2,fn1__$1,meta51764));
});

}

return (new cljs.core.async.t_cljs$core$async51763(self__.f,self__.ch,self__.meta51757,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51789 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51789) : self__.f.call(null,G__51789));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51757","meta51757",-728565796,null)], null);
}));

(cljs.core.async.t_cljs$core$async51756.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51756");

(cljs.core.async.t_cljs$core$async51756.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51756");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51756.
 */
cljs.core.async.__GT_t_cljs$core$async51756 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51756(f__$1,ch__$1,meta51757){
return (new cljs.core.async.t_cljs$core$async51756(f__$1,ch__$1,meta51757));
});

}

return (new cljs.core.async.t_cljs$core$async51756(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51798 = (function (f,ch,meta51799){
this.f = f;
this.ch = ch;
this.meta51799 = meta51799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51800,meta51799__$1){
var self__ = this;
var _51800__$1 = this;
return (new cljs.core.async.t_cljs$core$async51798(self__.f,self__.ch,meta51799__$1));
}));

(cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51800){
var self__ = this;
var _51800__$1 = this;
return self__.meta51799;
}));

(cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51799","meta51799",-1848465443,null)], null);
}));

(cljs.core.async.t_cljs$core$async51798.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51798");

(cljs.core.async.t_cljs$core$async51798.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51798");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51798.
 */
cljs.core.async.__GT_t_cljs$core$async51798 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51798(f__$1,ch__$1,meta51799){
return (new cljs.core.async.t_cljs$core$async51798(f__$1,ch__$1,meta51799));
});

}

return (new cljs.core.async.t_cljs$core$async51798(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51820 = (function (p,ch,meta51821){
this.p = p;
this.ch = ch;
this.meta51821 = meta51821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51822,meta51821__$1){
var self__ = this;
var _51822__$1 = this;
return (new cljs.core.async.t_cljs$core$async51820(self__.p,self__.ch,meta51821__$1));
}));

(cljs.core.async.t_cljs$core$async51820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51822){
var self__ = this;
var _51822__$1 = this;
return self__.meta51821;
}));

(cljs.core.async.t_cljs$core$async51820.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51820.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51820.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51820.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51820.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51820.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51820.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51821","meta51821",-154990951,null)], null);
}));

(cljs.core.async.t_cljs$core$async51820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51820");

(cljs.core.async.t_cljs$core$async51820.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51820.
 */
cljs.core.async.__GT_t_cljs$core$async51820 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51820(p__$1,ch__$1,meta51821){
return (new cljs.core.async.t_cljs$core$async51820(p__$1,ch__$1,meta51821));
});

}

return (new cljs.core.async.t_cljs$core$async51820(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__51858 = arguments.length;
switch (G__51858) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49757__auto___53569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_51887){
var state_val_51888 = (state_51887[(1)]);
if((state_val_51888 === (7))){
var inst_51883 = (state_51887[(2)]);
var state_51887__$1 = state_51887;
var statearr_51898_53570 = state_51887__$1;
(statearr_51898_53570[(2)] = inst_51883);

(statearr_51898_53570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51888 === (1))){
var state_51887__$1 = state_51887;
var statearr_51902_53571 = state_51887__$1;
(statearr_51902_53571[(2)] = null);

(statearr_51902_53571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51888 === (4))){
var inst_51869 = (state_51887[(7)]);
var inst_51869__$1 = (state_51887[(2)]);
var inst_51870 = (inst_51869__$1 == null);
var state_51887__$1 = (function (){var statearr_51928 = state_51887;
(statearr_51928[(7)] = inst_51869__$1);

return statearr_51928;
})();
if(cljs.core.truth_(inst_51870)){
var statearr_51930_53573 = state_51887__$1;
(statearr_51930_53573[(1)] = (5));

} else {
var statearr_51937_53574 = state_51887__$1;
(statearr_51937_53574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51888 === (6))){
var inst_51869 = (state_51887[(7)]);
var inst_51874 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51869) : p.call(null,inst_51869));
var state_51887__$1 = state_51887;
if(cljs.core.truth_(inst_51874)){
var statearr_51941_53576 = state_51887__$1;
(statearr_51941_53576[(1)] = (8));

} else {
var statearr_51942_53577 = state_51887__$1;
(statearr_51942_53577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51888 === (3))){
var inst_51885 = (state_51887[(2)]);
var state_51887__$1 = state_51887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51887__$1,inst_51885);
} else {
if((state_val_51888 === (2))){
var state_51887__$1 = state_51887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51887__$1,(4),ch);
} else {
if((state_val_51888 === (11))){
var inst_51877 = (state_51887[(2)]);
var state_51887__$1 = state_51887;
var statearr_51943_53579 = state_51887__$1;
(statearr_51943_53579[(2)] = inst_51877);

(statearr_51943_53579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51888 === (9))){
var state_51887__$1 = state_51887;
var statearr_51947_53580 = state_51887__$1;
(statearr_51947_53580[(2)] = null);

(statearr_51947_53580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51888 === (5))){
var inst_51872 = cljs.core.async.close_BANG_(out);
var state_51887__$1 = state_51887;
var statearr_51949_53581 = state_51887__$1;
(statearr_51949_53581[(2)] = inst_51872);

(statearr_51949_53581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51888 === (10))){
var inst_51880 = (state_51887[(2)]);
var state_51887__$1 = (function (){var statearr_51950 = state_51887;
(statearr_51950[(8)] = inst_51880);

return statearr_51950;
})();
var statearr_51951_53582 = state_51887__$1;
(statearr_51951_53582[(2)] = null);

(statearr_51951_53582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51888 === (8))){
var inst_51869 = (state_51887[(7)]);
var state_51887__$1 = state_51887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51887__$1,(11),out,inst_51869);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_51959 = [null,null,null,null,null,null,null,null,null];
(statearr_51959[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_51959[(1)] = (1));

return statearr_51959;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_51887){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_51887);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e51961){var ex__49654__auto__ = e51961;
var statearr_51965_53584 = state_51887;
(statearr_51965_53584[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_51887[(4)]))){
var statearr_51966_53585 = state_51887;
(statearr_51966_53585[(1)] = cljs.core.first((state_51887[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53587 = state_51887;
state_51887 = G__53587;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_51887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_51887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_51969 = f__49758__auto__();
(statearr_51969[(6)] = c__49757__auto___53569);

return statearr_51969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51975 = arguments.length;
switch (G__51975) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_52097){
var state_val_52098 = (state_52097[(1)]);
if((state_val_52098 === (7))){
var inst_52092 = (state_52097[(2)]);
var state_52097__$1 = state_52097;
var statearr_52105_53590 = state_52097__$1;
(statearr_52105_53590[(2)] = inst_52092);

(statearr_52105_53590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (20))){
var inst_52058 = (state_52097[(7)]);
var inst_52072 = (state_52097[(2)]);
var inst_52073 = cljs.core.next(inst_52058);
var inst_51997 = inst_52073;
var inst_51998 = null;
var inst_51999 = (0);
var inst_52000 = (0);
var state_52097__$1 = (function (){var statearr_52109 = state_52097;
(statearr_52109[(8)] = inst_52000);

(statearr_52109[(9)] = inst_51999);

(statearr_52109[(10)] = inst_51998);

(statearr_52109[(11)] = inst_51997);

(statearr_52109[(12)] = inst_52072);

return statearr_52109;
})();
var statearr_52116_53593 = state_52097__$1;
(statearr_52116_53593[(2)] = null);

(statearr_52116_53593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (1))){
var state_52097__$1 = state_52097;
var statearr_52118_53594 = state_52097__$1;
(statearr_52118_53594[(2)] = null);

(statearr_52118_53594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (4))){
var inst_51986 = (state_52097[(13)]);
var inst_51986__$1 = (state_52097[(2)]);
var inst_51987 = (inst_51986__$1 == null);
var state_52097__$1 = (function (){var statearr_52120 = state_52097;
(statearr_52120[(13)] = inst_51986__$1);

return statearr_52120;
})();
if(cljs.core.truth_(inst_51987)){
var statearr_52122_53595 = state_52097__$1;
(statearr_52122_53595[(1)] = (5));

} else {
var statearr_52123_53596 = state_52097__$1;
(statearr_52123_53596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (15))){
var state_52097__$1 = state_52097;
var statearr_52128_53597 = state_52097__$1;
(statearr_52128_53597[(2)] = null);

(statearr_52128_53597[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (21))){
var state_52097__$1 = state_52097;
var statearr_52132_53598 = state_52097__$1;
(statearr_52132_53598[(2)] = null);

(statearr_52132_53598[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (13))){
var inst_52000 = (state_52097[(8)]);
var inst_51999 = (state_52097[(9)]);
var inst_51998 = (state_52097[(10)]);
var inst_51997 = (state_52097[(11)]);
var inst_52047 = (state_52097[(2)]);
var inst_52053 = (inst_52000 + (1));
var tmp52124 = inst_51999;
var tmp52125 = inst_51998;
var tmp52126 = inst_51997;
var inst_51997__$1 = tmp52126;
var inst_51998__$1 = tmp52125;
var inst_51999__$1 = tmp52124;
var inst_52000__$1 = inst_52053;
var state_52097__$1 = (function (){var statearr_52136 = state_52097;
(statearr_52136[(8)] = inst_52000__$1);

(statearr_52136[(9)] = inst_51999__$1);

(statearr_52136[(10)] = inst_51998__$1);

(statearr_52136[(11)] = inst_51997__$1);

(statearr_52136[(14)] = inst_52047);

return statearr_52136;
})();
var statearr_52137_53599 = state_52097__$1;
(statearr_52137_53599[(2)] = null);

(statearr_52137_53599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (22))){
var state_52097__$1 = state_52097;
var statearr_52140_53600 = state_52097__$1;
(statearr_52140_53600[(2)] = null);

(statearr_52140_53600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (6))){
var inst_51986 = (state_52097[(13)]);
var inst_51995 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51986) : f.call(null,inst_51986));
var inst_51996 = cljs.core.seq(inst_51995);
var inst_51997 = inst_51996;
var inst_51998 = null;
var inst_51999 = (0);
var inst_52000 = (0);
var state_52097__$1 = (function (){var statearr_52145 = state_52097;
(statearr_52145[(8)] = inst_52000);

(statearr_52145[(9)] = inst_51999);

(statearr_52145[(10)] = inst_51998);

(statearr_52145[(11)] = inst_51997);

return statearr_52145;
})();
var statearr_52148_53601 = state_52097__$1;
(statearr_52148_53601[(2)] = null);

(statearr_52148_53601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (17))){
var inst_52058 = (state_52097[(7)]);
var inst_52062 = cljs.core.chunk_first(inst_52058);
var inst_52063 = cljs.core.chunk_rest(inst_52058);
var inst_52065 = cljs.core.count(inst_52062);
var inst_51997 = inst_52063;
var inst_51998 = inst_52062;
var inst_51999 = inst_52065;
var inst_52000 = (0);
var state_52097__$1 = (function (){var statearr_52153 = state_52097;
(statearr_52153[(8)] = inst_52000);

(statearr_52153[(9)] = inst_51999);

(statearr_52153[(10)] = inst_51998);

(statearr_52153[(11)] = inst_51997);

return statearr_52153;
})();
var statearr_52154_53602 = state_52097__$1;
(statearr_52154_53602[(2)] = null);

(statearr_52154_53602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (3))){
var inst_52094 = (state_52097[(2)]);
var state_52097__$1 = state_52097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52097__$1,inst_52094);
} else {
if((state_val_52098 === (12))){
var inst_52082 = (state_52097[(2)]);
var state_52097__$1 = state_52097;
var statearr_52160_53603 = state_52097__$1;
(statearr_52160_53603[(2)] = inst_52082);

(statearr_52160_53603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (2))){
var state_52097__$1 = state_52097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52097__$1,(4),in$);
} else {
if((state_val_52098 === (23))){
var inst_52090 = (state_52097[(2)]);
var state_52097__$1 = state_52097;
var statearr_52163_53604 = state_52097__$1;
(statearr_52163_53604[(2)] = inst_52090);

(statearr_52163_53604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (19))){
var inst_52077 = (state_52097[(2)]);
var state_52097__$1 = state_52097;
var statearr_52169_53605 = state_52097__$1;
(statearr_52169_53605[(2)] = inst_52077);

(statearr_52169_53605[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (11))){
var inst_51997 = (state_52097[(11)]);
var inst_52058 = (state_52097[(7)]);
var inst_52058__$1 = cljs.core.seq(inst_51997);
var state_52097__$1 = (function (){var statearr_52172 = state_52097;
(statearr_52172[(7)] = inst_52058__$1);

return statearr_52172;
})();
if(inst_52058__$1){
var statearr_52174_53606 = state_52097__$1;
(statearr_52174_53606[(1)] = (14));

} else {
var statearr_52175_53607 = state_52097__$1;
(statearr_52175_53607[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (9))){
var inst_52084 = (state_52097[(2)]);
var inst_52085 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52097__$1 = (function (){var statearr_52178 = state_52097;
(statearr_52178[(15)] = inst_52084);

return statearr_52178;
})();
if(cljs.core.truth_(inst_52085)){
var statearr_52179_53608 = state_52097__$1;
(statearr_52179_53608[(1)] = (21));

} else {
var statearr_52182_53609 = state_52097__$1;
(statearr_52182_53609[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (5))){
var inst_51989 = cljs.core.async.close_BANG_(out);
var state_52097__$1 = state_52097;
var statearr_52185_53611 = state_52097__$1;
(statearr_52185_53611[(2)] = inst_51989);

(statearr_52185_53611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (14))){
var inst_52058 = (state_52097[(7)]);
var inst_52060 = cljs.core.chunked_seq_QMARK_(inst_52058);
var state_52097__$1 = state_52097;
if(inst_52060){
var statearr_52188_53612 = state_52097__$1;
(statearr_52188_53612[(1)] = (17));

} else {
var statearr_52190_53613 = state_52097__$1;
(statearr_52190_53613[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (16))){
var inst_52080 = (state_52097[(2)]);
var state_52097__$1 = state_52097;
var statearr_52192_53615 = state_52097__$1;
(statearr_52192_53615[(2)] = inst_52080);

(statearr_52192_53615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (10))){
var inst_52000 = (state_52097[(8)]);
var inst_51998 = (state_52097[(10)]);
var inst_52031 = cljs.core._nth(inst_51998,inst_52000);
var state_52097__$1 = state_52097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52097__$1,(13),out,inst_52031);
} else {
if((state_val_52098 === (18))){
var inst_52058 = (state_52097[(7)]);
var inst_52070 = cljs.core.first(inst_52058);
var state_52097__$1 = state_52097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52097__$1,(20),out,inst_52070);
} else {
if((state_val_52098 === (8))){
var inst_52000 = (state_52097[(8)]);
var inst_51999 = (state_52097[(9)]);
var inst_52002 = (inst_52000 < inst_51999);
var inst_52003 = inst_52002;
var state_52097__$1 = state_52097;
if(cljs.core.truth_(inst_52003)){
var statearr_52197_53616 = state_52097__$1;
(statearr_52197_53616[(1)] = (10));

} else {
var statearr_52198_53617 = state_52097__$1;
(statearr_52198_53617[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49651__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49651__auto____0 = (function (){
var statearr_52202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52202[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49651__auto__);

(statearr_52202[(1)] = (1));

return statearr_52202;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49651__auto____1 = (function (state_52097){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_52097);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e52204){var ex__49654__auto__ = e52204;
var statearr_52205_53618 = state_52097;
(statearr_52205_53618[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_52097[(4)]))){
var statearr_52208_53619 = state_52097;
(statearr_52208_53619[(1)] = cljs.core.first((state_52097[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53620 = state_52097;
state_52097 = G__53620;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49651__auto__ = function(state_52097){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49651__auto____1.call(this,state_52097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49651__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49651__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_52211 = f__49758__auto__();
(statearr_52211[(6)] = c__49757__auto__);

return statearr_52211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));

return c__49757__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52216 = arguments.length;
switch (G__52216) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52232 = arguments.length;
switch (G__52232) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52263 = arguments.length;
switch (G__52263) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49757__auto___53624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_52304){
var state_val_52305 = (state_52304[(1)]);
if((state_val_52305 === (7))){
var inst_52299 = (state_52304[(2)]);
var state_52304__$1 = state_52304;
var statearr_52311_53625 = state_52304__$1;
(statearr_52311_53625[(2)] = inst_52299);

(statearr_52311_53625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52305 === (1))){
var inst_52280 = null;
var state_52304__$1 = (function (){var statearr_52312 = state_52304;
(statearr_52312[(7)] = inst_52280);

return statearr_52312;
})();
var statearr_52313_53626 = state_52304__$1;
(statearr_52313_53626[(2)] = null);

(statearr_52313_53626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52305 === (4))){
var inst_52284 = (state_52304[(8)]);
var inst_52284__$1 = (state_52304[(2)]);
var inst_52285 = (inst_52284__$1 == null);
var inst_52286 = cljs.core.not(inst_52285);
var state_52304__$1 = (function (){var statearr_52314 = state_52304;
(statearr_52314[(8)] = inst_52284__$1);

return statearr_52314;
})();
if(inst_52286){
var statearr_52317_53627 = state_52304__$1;
(statearr_52317_53627[(1)] = (5));

} else {
var statearr_52318_53628 = state_52304__$1;
(statearr_52318_53628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52305 === (6))){
var state_52304__$1 = state_52304;
var statearr_52320_53629 = state_52304__$1;
(statearr_52320_53629[(2)] = null);

(statearr_52320_53629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52305 === (3))){
var inst_52301 = (state_52304[(2)]);
var inst_52302 = cljs.core.async.close_BANG_(out);
var state_52304__$1 = (function (){var statearr_52321 = state_52304;
(statearr_52321[(9)] = inst_52301);

return statearr_52321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52304__$1,inst_52302);
} else {
if((state_val_52305 === (2))){
var state_52304__$1 = state_52304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52304__$1,(4),ch);
} else {
if((state_val_52305 === (11))){
var inst_52284 = (state_52304[(8)]);
var inst_52293 = (state_52304[(2)]);
var inst_52280 = inst_52284;
var state_52304__$1 = (function (){var statearr_52323 = state_52304;
(statearr_52323[(10)] = inst_52293);

(statearr_52323[(7)] = inst_52280);

return statearr_52323;
})();
var statearr_52325_53631 = state_52304__$1;
(statearr_52325_53631[(2)] = null);

(statearr_52325_53631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52305 === (9))){
var inst_52284 = (state_52304[(8)]);
var state_52304__$1 = state_52304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52304__$1,(11),out,inst_52284);
} else {
if((state_val_52305 === (5))){
var inst_52280 = (state_52304[(7)]);
var inst_52284 = (state_52304[(8)]);
var inst_52288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52284,inst_52280);
var state_52304__$1 = state_52304;
if(inst_52288){
var statearr_52328_53632 = state_52304__$1;
(statearr_52328_53632[(1)] = (8));

} else {
var statearr_52330_53633 = state_52304__$1;
(statearr_52330_53633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52305 === (10))){
var inst_52296 = (state_52304[(2)]);
var state_52304__$1 = state_52304;
var statearr_52331_53634 = state_52304__$1;
(statearr_52331_53634[(2)] = inst_52296);

(statearr_52331_53634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52305 === (8))){
var inst_52280 = (state_52304[(7)]);
var tmp52326 = inst_52280;
var inst_52280__$1 = tmp52326;
var state_52304__$1 = (function (){var statearr_52332 = state_52304;
(statearr_52332[(7)] = inst_52280__$1);

return statearr_52332;
})();
var statearr_52334_53635 = state_52304__$1;
(statearr_52334_53635[(2)] = null);

(statearr_52334_53635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_52336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52336[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_52336[(1)] = (1));

return statearr_52336;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_52304){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_52304);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e52337){var ex__49654__auto__ = e52337;
var statearr_52339_53640 = state_52304;
(statearr_52339_53640[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_52304[(4)]))){
var statearr_52342_53641 = state_52304;
(statearr_52342_53641[(1)] = cljs.core.first((state_52304[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53642 = state_52304;
state_52304 = G__53642;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_52304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_52304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_52354 = f__49758__auto__();
(statearr_52354[(6)] = c__49757__auto___53624);

return statearr_52354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52360 = arguments.length;
switch (G__52360) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49757__auto___53644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_52440){
var state_val_52441 = (state_52440[(1)]);
if((state_val_52441 === (7))){
var inst_52436 = (state_52440[(2)]);
var state_52440__$1 = state_52440;
var statearr_52444_53645 = state_52440__$1;
(statearr_52444_53645[(2)] = inst_52436);

(statearr_52444_53645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52441 === (1))){
var inst_52376 = (new Array(n));
var inst_52377 = inst_52376;
var inst_52378 = (0);
var state_52440__$1 = (function (){var statearr_52445 = state_52440;
(statearr_52445[(7)] = inst_52377);

(statearr_52445[(8)] = inst_52378);

return statearr_52445;
})();
var statearr_52449_53646 = state_52440__$1;
(statearr_52449_53646[(2)] = null);

(statearr_52449_53646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52441 === (4))){
var inst_52407 = (state_52440[(9)]);
var inst_52407__$1 = (state_52440[(2)]);
var inst_52408 = (inst_52407__$1 == null);
var inst_52409 = cljs.core.not(inst_52408);
var state_52440__$1 = (function (){var statearr_52451 = state_52440;
(statearr_52451[(9)] = inst_52407__$1);

return statearr_52451;
})();
if(inst_52409){
var statearr_52452_53648 = state_52440__$1;
(statearr_52452_53648[(1)] = (5));

} else {
var statearr_52453_53649 = state_52440__$1;
(statearr_52453_53649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52441 === (15))){
var inst_52430 = (state_52440[(2)]);
var state_52440__$1 = state_52440;
var statearr_52454_53650 = state_52440__$1;
(statearr_52454_53650[(2)] = inst_52430);

(statearr_52454_53650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52441 === (13))){
var state_52440__$1 = state_52440;
var statearr_52456_53651 = state_52440__$1;
(statearr_52456_53651[(2)] = null);

(statearr_52456_53651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52441 === (6))){
var inst_52378 = (state_52440[(8)]);
var inst_52426 = (inst_52378 > (0));
var state_52440__$1 = state_52440;
if(cljs.core.truth_(inst_52426)){
var statearr_52458_53652 = state_52440__$1;
(statearr_52458_53652[(1)] = (12));

} else {
var statearr_52459_53653 = state_52440__$1;
(statearr_52459_53653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52441 === (3))){
var inst_52438 = (state_52440[(2)]);
var state_52440__$1 = state_52440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52440__$1,inst_52438);
} else {
if((state_val_52441 === (12))){
var inst_52377 = (state_52440[(7)]);
var inst_52428 = cljs.core.vec(inst_52377);
var state_52440__$1 = state_52440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52440__$1,(15),out,inst_52428);
} else {
if((state_val_52441 === (2))){
var state_52440__$1 = state_52440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52440__$1,(4),ch);
} else {
if((state_val_52441 === (11))){
var inst_52420 = (state_52440[(2)]);
var inst_52421 = (new Array(n));
var inst_52377 = inst_52421;
var inst_52378 = (0);
var state_52440__$1 = (function (){var statearr_52466 = state_52440;
(statearr_52466[(7)] = inst_52377);

(statearr_52466[(10)] = inst_52420);

(statearr_52466[(8)] = inst_52378);

return statearr_52466;
})();
var statearr_52467_53655 = state_52440__$1;
(statearr_52467_53655[(2)] = null);

(statearr_52467_53655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52441 === (9))){
var inst_52377 = (state_52440[(7)]);
var inst_52418 = cljs.core.vec(inst_52377);
var state_52440__$1 = state_52440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52440__$1,(11),out,inst_52418);
} else {
if((state_val_52441 === (5))){
var inst_52377 = (state_52440[(7)]);
var inst_52407 = (state_52440[(9)]);
var inst_52412 = (state_52440[(11)]);
var inst_52378 = (state_52440[(8)]);
var inst_52411 = (inst_52377[inst_52378] = inst_52407);
var inst_52412__$1 = (inst_52378 + (1));
var inst_52414 = (inst_52412__$1 < n);
var state_52440__$1 = (function (){var statearr_52497 = state_52440;
(statearr_52497[(11)] = inst_52412__$1);

(statearr_52497[(12)] = inst_52411);

return statearr_52497;
})();
if(cljs.core.truth_(inst_52414)){
var statearr_52498_53656 = state_52440__$1;
(statearr_52498_53656[(1)] = (8));

} else {
var statearr_52499_53657 = state_52440__$1;
(statearr_52499_53657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52441 === (14))){
var inst_52433 = (state_52440[(2)]);
var inst_52434 = cljs.core.async.close_BANG_(out);
var state_52440__$1 = (function (){var statearr_52504 = state_52440;
(statearr_52504[(13)] = inst_52433);

return statearr_52504;
})();
var statearr_52506_53658 = state_52440__$1;
(statearr_52506_53658[(2)] = inst_52434);

(statearr_52506_53658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52441 === (10))){
var inst_52424 = (state_52440[(2)]);
var state_52440__$1 = state_52440;
var statearr_52507_53659 = state_52440__$1;
(statearr_52507_53659[(2)] = inst_52424);

(statearr_52507_53659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52441 === (8))){
var inst_52377 = (state_52440[(7)]);
var inst_52412 = (state_52440[(11)]);
var tmp52501 = inst_52377;
var inst_52377__$1 = tmp52501;
var inst_52378 = inst_52412;
var state_52440__$1 = (function (){var statearr_52536 = state_52440;
(statearr_52536[(7)] = inst_52377__$1);

(statearr_52536[(8)] = inst_52378);

return statearr_52536;
})();
var statearr_52538_53660 = state_52440__$1;
(statearr_52538_53660[(2)] = null);

(statearr_52538_53660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_52554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52554[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_52554[(1)] = (1));

return statearr_52554;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_52440){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_52440);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e52557){var ex__49654__auto__ = e52557;
var statearr_52559_53662 = state_52440;
(statearr_52559_53662[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_52440[(4)]))){
var statearr_52560_53664 = state_52440;
(statearr_52560_53664[(1)] = cljs.core.first((state_52440[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53665 = state_52440;
state_52440 = G__53665;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_52440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_52440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_52562 = f__49758__auto__();
(statearr_52562[(6)] = c__49757__auto___53644);

return statearr_52562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52572 = arguments.length;
switch (G__52572) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49757__auto___53675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49758__auto__ = (function (){var switch__49650__auto__ = (function (state_52629){
var state_val_52630 = (state_52629[(1)]);
if((state_val_52630 === (7))){
var inst_52625 = (state_52629[(2)]);
var state_52629__$1 = state_52629;
var statearr_52632_53676 = state_52629__$1;
(statearr_52632_53676[(2)] = inst_52625);

(statearr_52632_53676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (1))){
var inst_52582 = [];
var inst_52583 = inst_52582;
var inst_52584 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52629__$1 = (function (){var statearr_52634 = state_52629;
(statearr_52634[(7)] = inst_52584);

(statearr_52634[(8)] = inst_52583);

return statearr_52634;
})();
var statearr_52636_53677 = state_52629__$1;
(statearr_52636_53677[(2)] = null);

(statearr_52636_53677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (4))){
var inst_52587 = (state_52629[(9)]);
var inst_52587__$1 = (state_52629[(2)]);
var inst_52588 = (inst_52587__$1 == null);
var inst_52589 = cljs.core.not(inst_52588);
var state_52629__$1 = (function (){var statearr_52640 = state_52629;
(statearr_52640[(9)] = inst_52587__$1);

return statearr_52640;
})();
if(inst_52589){
var statearr_52641_53680 = state_52629__$1;
(statearr_52641_53680[(1)] = (5));

} else {
var statearr_52642_53681 = state_52629__$1;
(statearr_52642_53681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (15))){
var inst_52583 = (state_52629[(8)]);
var inst_52617 = cljs.core.vec(inst_52583);
var state_52629__$1 = state_52629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52629__$1,(18),out,inst_52617);
} else {
if((state_val_52630 === (13))){
var inst_52612 = (state_52629[(2)]);
var state_52629__$1 = state_52629;
var statearr_52645_53685 = state_52629__$1;
(statearr_52645_53685[(2)] = inst_52612);

(statearr_52645_53685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (6))){
var inst_52583 = (state_52629[(8)]);
var inst_52614 = inst_52583.length;
var inst_52615 = (inst_52614 > (0));
var state_52629__$1 = state_52629;
if(cljs.core.truth_(inst_52615)){
var statearr_52653_53686 = state_52629__$1;
(statearr_52653_53686[(1)] = (15));

} else {
var statearr_52654_53687 = state_52629__$1;
(statearr_52654_53687[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (17))){
var inst_52622 = (state_52629[(2)]);
var inst_52623 = cljs.core.async.close_BANG_(out);
var state_52629__$1 = (function (){var statearr_52659 = state_52629;
(statearr_52659[(10)] = inst_52622);

return statearr_52659;
})();
var statearr_52660_53688 = state_52629__$1;
(statearr_52660_53688[(2)] = inst_52623);

(statearr_52660_53688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (3))){
var inst_52627 = (state_52629[(2)]);
var state_52629__$1 = state_52629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52629__$1,inst_52627);
} else {
if((state_val_52630 === (12))){
var inst_52583 = (state_52629[(8)]);
var inst_52605 = cljs.core.vec(inst_52583);
var state_52629__$1 = state_52629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52629__$1,(14),out,inst_52605);
} else {
if((state_val_52630 === (2))){
var state_52629__$1 = state_52629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52629__$1,(4),ch);
} else {
if((state_val_52630 === (11))){
var inst_52591 = (state_52629[(11)]);
var inst_52587 = (state_52629[(9)]);
var inst_52583 = (state_52629[(8)]);
var inst_52602 = inst_52583.push(inst_52587);
var tmp52662 = inst_52583;
var inst_52583__$1 = tmp52662;
var inst_52584 = inst_52591;
var state_52629__$1 = (function (){var statearr_52670 = state_52629;
(statearr_52670[(7)] = inst_52584);

(statearr_52670[(12)] = inst_52602);

(statearr_52670[(8)] = inst_52583__$1);

return statearr_52670;
})();
var statearr_52674_53691 = state_52629__$1;
(statearr_52674_53691[(2)] = null);

(statearr_52674_53691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (9))){
var inst_52584 = (state_52629[(7)]);
var inst_52598 = cljs.core.keyword_identical_QMARK_(inst_52584,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52629__$1 = state_52629;
var statearr_52680_53692 = state_52629__$1;
(statearr_52680_53692[(2)] = inst_52598);

(statearr_52680_53692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (5))){
var inst_52584 = (state_52629[(7)]);
var inst_52594 = (state_52629[(13)]);
var inst_52591 = (state_52629[(11)]);
var inst_52587 = (state_52629[(9)]);
var inst_52591__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52587) : f.call(null,inst_52587));
var inst_52594__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52591__$1,inst_52584);
var state_52629__$1 = (function (){var statearr_52684 = state_52629;
(statearr_52684[(13)] = inst_52594__$1);

(statearr_52684[(11)] = inst_52591__$1);

return statearr_52684;
})();
if(inst_52594__$1){
var statearr_52689_53695 = state_52629__$1;
(statearr_52689_53695[(1)] = (8));

} else {
var statearr_52691_53696 = state_52629__$1;
(statearr_52691_53696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (14))){
var inst_52591 = (state_52629[(11)]);
var inst_52587 = (state_52629[(9)]);
var inst_52607 = (state_52629[(2)]);
var inst_52608 = [];
var inst_52609 = inst_52608.push(inst_52587);
var inst_52583 = inst_52608;
var inst_52584 = inst_52591;
var state_52629__$1 = (function (){var statearr_52692 = state_52629;
(statearr_52692[(14)] = inst_52607);

(statearr_52692[(7)] = inst_52584);

(statearr_52692[(15)] = inst_52609);

(statearr_52692[(8)] = inst_52583);

return statearr_52692;
})();
var statearr_52693_53699 = state_52629__$1;
(statearr_52693_53699[(2)] = null);

(statearr_52693_53699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (16))){
var state_52629__$1 = state_52629;
var statearr_52697_53702 = state_52629__$1;
(statearr_52697_53702[(2)] = null);

(statearr_52697_53702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (10))){
var inst_52600 = (state_52629[(2)]);
var state_52629__$1 = state_52629;
if(cljs.core.truth_(inst_52600)){
var statearr_52700_53703 = state_52629__$1;
(statearr_52700_53703[(1)] = (11));

} else {
var statearr_52702_53705 = state_52629__$1;
(statearr_52702_53705[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (18))){
var inst_52619 = (state_52629[(2)]);
var state_52629__$1 = state_52629;
var statearr_52704_53706 = state_52629__$1;
(statearr_52704_53706[(2)] = inst_52619);

(statearr_52704_53706[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52630 === (8))){
var inst_52594 = (state_52629[(13)]);
var state_52629__$1 = state_52629;
var statearr_52707_53708 = state_52629__$1;
(statearr_52707_53708[(2)] = inst_52594);

(statearr_52707_53708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49651__auto__ = null;
var cljs$core$async$state_machine__49651__auto____0 = (function (){
var statearr_52714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52714[(0)] = cljs$core$async$state_machine__49651__auto__);

(statearr_52714[(1)] = (1));

return statearr_52714;
});
var cljs$core$async$state_machine__49651__auto____1 = (function (state_52629){
while(true){
var ret_value__49652__auto__ = (function (){try{while(true){
var result__49653__auto__ = switch__49650__auto__(state_52629);
if(cljs.core.keyword_identical_QMARK_(result__49653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49653__auto__;
}
break;
}
}catch (e52717){var ex__49654__auto__ = e52717;
var statearr_52719_53713 = state_52629;
(statearr_52719_53713[(2)] = ex__49654__auto__);


if(cljs.core.seq((state_52629[(4)]))){
var statearr_52720_53714 = state_52629;
(statearr_52720_53714[(1)] = cljs.core.first((state_52629[(4)])));

} else {
throw ex__49654__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53715 = state_52629;
state_52629 = G__53715;
continue;
} else {
return ret_value__49652__auto__;
}
break;
}
});
cljs$core$async$state_machine__49651__auto__ = function(state_52629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49651__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49651__auto____1.call(this,state_52629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49651__auto____0;
cljs$core$async$state_machine__49651__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49651__auto____1;
return cljs$core$async$state_machine__49651__auto__;
})()
})();
var state__49759__auto__ = (function (){var statearr_52721 = f__49758__auto__();
(statearr_52721[(6)] = c__49757__auto___53675);

return statearr_52721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49759__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
