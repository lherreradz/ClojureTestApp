goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4251__auto__ = c;
if(cljs.core.truth_(and__4251__auto__)){
return ident;
} else {
return and__4251__auto__;
}
})())){
var map__57995 = app__$1;
var map__57995__$1 = cljs.core.__destructure_map(map__57995);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57995__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4253__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__57997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__57998 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__57997,G__57998) : com.fulcrologic.fulcro.components.computed.call(null,G__57997,G__57998));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,1093912095,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__58000 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__58000) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__58000));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,1205508198,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__58002 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__58003 = null;
var count__58004 = (0);
var i__58005 = (0);
while(true){
if((i__58005 < count__58004)){
var c = chunk__58003.cljs$core$IIndexed$_nth$arity$2(null,i__58005);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__58111 = seq__58002;
var G__58112 = chunk__58003;
var G__58113 = count__58004;
var G__58114 = (i__58005 + (1));
seq__58002 = G__58111;
chunk__58003 = G__58112;
count__58004 = G__58113;
i__58005 = G__58114;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58002);
if(temp__5753__auto__){
var seq__58002__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58002__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58002__$1);
var G__58115 = cljs.core.chunk_rest(seq__58002__$1);
var G__58116 = c__4679__auto__;
var G__58117 = cljs.core.count(c__4679__auto__);
var G__58118 = (0);
seq__58002 = G__58115;
chunk__58003 = G__58116;
count__58004 = G__58117;
i__58005 = G__58118;
continue;
} else {
var c = cljs.core.first(seq__58002__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__58119 = cljs.core.next(seq__58002__$1);
var G__58120 = null;
var G__58121 = (0);
var G__58122 = (0);
seq__58002 = G__58119;
chunk__58003 = G__58120;
count__58004 = G__58121;
i__58005 = G__58122;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__58010 = app__$1;
var map__58010__$1 = cljs.core.__destructure_map(map__58010);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58010__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__58011 = cljs.core.deref(runtime_atom);
var map__58011__$1 = cljs.core.__destructure_map(map__58011);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58011__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__58012 = indexes;
var map__58012__$1 = cljs.core.__destructure_map(map__58012);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58012__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58012__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58012__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__58013 = cljs.core.seq(classes);
var chunk__58014 = null;
var count__58015 = (0);
var i__58016 = (0);
while(true){
if((i__58016 < count__58015)){
var class$ = chunk__58014.cljs$core$IIndexed$_nth$arity$2(null,i__58016);
var seq__58033_58124 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__58035_58125 = null;
var count__58036_58126 = (0);
var i__58037_58127 = (0);
while(true){
if((i__58037_58127 < count__58036_58126)){
var component_58128 = chunk__58035_58125.cljs$core$IIndexed$_nth$arity$2(null,i__58037_58127);
var component_ident_58129 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58128) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58128));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58129,component_58128);


var G__58130 = seq__58033_58124;
var G__58131 = chunk__58035_58125;
var G__58132 = count__58036_58126;
var G__58133 = (i__58037_58127 + (1));
seq__58033_58124 = G__58130;
chunk__58035_58125 = G__58131;
count__58036_58126 = G__58132;
i__58037_58127 = G__58133;
continue;
} else {
var temp__5753__auto___58135 = cljs.core.seq(seq__58033_58124);
if(temp__5753__auto___58135){
var seq__58033_58136__$1 = temp__5753__auto___58135;
if(cljs.core.chunked_seq_QMARK_(seq__58033_58136__$1)){
var c__4679__auto___58137 = cljs.core.chunk_first(seq__58033_58136__$1);
var G__58138 = cljs.core.chunk_rest(seq__58033_58136__$1);
var G__58139 = c__4679__auto___58137;
var G__58140 = cljs.core.count(c__4679__auto___58137);
var G__58142 = (0);
seq__58033_58124 = G__58138;
chunk__58035_58125 = G__58139;
count__58036_58126 = G__58140;
i__58037_58127 = G__58142;
continue;
} else {
var component_58143 = cljs.core.first(seq__58033_58136__$1);
var component_ident_58144 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58143) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58143));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58144,component_58143);


var G__58145 = cljs.core.next(seq__58033_58136__$1);
var G__58146 = null;
var G__58147 = (0);
var G__58148 = (0);
seq__58033_58124 = G__58145;
chunk__58035_58125 = G__58146;
count__58036_58126 = G__58147;
i__58037_58127 = G__58148;
continue;
}
} else {
}
}
break;
}


var G__58149 = seq__58013;
var G__58150 = chunk__58014;
var G__58151 = count__58015;
var G__58152 = (i__58016 + (1));
seq__58013 = G__58149;
chunk__58014 = G__58150;
count__58015 = G__58151;
i__58016 = G__58152;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58013);
if(temp__5753__auto__){
var seq__58013__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58013__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58013__$1);
var G__58153 = cljs.core.chunk_rest(seq__58013__$1);
var G__58154 = c__4679__auto__;
var G__58155 = cljs.core.count(c__4679__auto__);
var G__58156 = (0);
seq__58013 = G__58153;
chunk__58014 = G__58154;
count__58015 = G__58155;
i__58016 = G__58156;
continue;
} else {
var class$ = cljs.core.first(seq__58013__$1);
var seq__58042_58157 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__58044_58158 = null;
var count__58045_58159 = (0);
var i__58046_58160 = (0);
while(true){
if((i__58046_58160 < count__58045_58159)){
var component_58161 = chunk__58044_58158.cljs$core$IIndexed$_nth$arity$2(null,i__58046_58160);
var component_ident_58162 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58161) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58161));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58162,component_58161);


var G__58163 = seq__58042_58157;
var G__58164 = chunk__58044_58158;
var G__58165 = count__58045_58159;
var G__58166 = (i__58046_58160 + (1));
seq__58042_58157 = G__58163;
chunk__58044_58158 = G__58164;
count__58045_58159 = G__58165;
i__58046_58160 = G__58166;
continue;
} else {
var temp__5753__auto___58168__$1 = cljs.core.seq(seq__58042_58157);
if(temp__5753__auto___58168__$1){
var seq__58042_58170__$1 = temp__5753__auto___58168__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58042_58170__$1)){
var c__4679__auto___58171 = cljs.core.chunk_first(seq__58042_58170__$1);
var G__58172 = cljs.core.chunk_rest(seq__58042_58170__$1);
var G__58173 = c__4679__auto___58171;
var G__58174 = cljs.core.count(c__4679__auto___58171);
var G__58175 = (0);
seq__58042_58157 = G__58172;
chunk__58044_58158 = G__58173;
count__58045_58159 = G__58174;
i__58046_58160 = G__58175;
continue;
} else {
var component_58176 = cljs.core.first(seq__58042_58170__$1);
var component_ident_58177 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58176) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58176));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58177,component_58176);


var G__58178 = cljs.core.next(seq__58042_58170__$1);
var G__58179 = null;
var G__58180 = (0);
var G__58181 = (0);
seq__58042_58157 = G__58178;
chunk__58044_58158 = G__58179;
count__58045_58159 = G__58180;
i__58046_58160 = G__58181;
continue;
}
} else {
}
}
break;
}


var G__58182 = cljs.core.next(seq__58013__$1);
var G__58183 = null;
var G__58184 = (0);
var G__58185 = (0);
seq__58013 = G__58182;
chunk__58014 = G__58183;
count__58015 = G__58184;
i__58016 = G__58185;
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
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__58050 = app__$1;
var map__58050__$1 = cljs.core.__destructure_map(map__58050);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58050__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__58051 = cljs.core.deref(runtime_atom);
var map__58051__$1 = cljs.core.__destructure_map(map__58051);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58051__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__58052 = indexes;
var map__58052__$1 = cljs.core.__destructure_map(map__58052);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58052__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58052__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__58048_SHARP_,p2__58049_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__58048_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__58049_SHARP_) : class__GT_components.call(null,p2__58049_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__58056 = app__$1;
var map__58056__$1 = cljs.core.__destructure_map(map__58056);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58056__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58056__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__58057 = cljs.core.deref(runtime_atom);
var map__58057__$1 = cljs.core.__destructure_map(map__58057);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__58058 = indexes;
var map__58058__$1 = cljs.core.__destructure_map(map__58058);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__58061 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__58061__$1 = cljs.core.__destructure_map(map__58061);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58061__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58061__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__58062_58189 = cljs.core.seq(limited_to_render);
var chunk__58064_58190 = null;
var count__58065_58191 = (0);
var i__58066_58192 = (0);
while(true){
if((i__58066_58192 < count__58065_58191)){
var c_58194 = chunk__58064_58190.cljs$core$IIndexed$_nth$arity$2(null,i__58066_58192);
var ident_58195 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58194) : com.fulcrologic.fulcro.components.get_ident.call(null,c_58194));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58195,c_58194);


var G__58197 = seq__58062_58189;
var G__58198 = chunk__58064_58190;
var G__58199 = count__58065_58191;
var G__58200 = (i__58066_58192 + (1));
seq__58062_58189 = G__58197;
chunk__58064_58190 = G__58198;
count__58065_58191 = G__58199;
i__58066_58192 = G__58200;
continue;
} else {
var temp__5753__auto___58201 = cljs.core.seq(seq__58062_58189);
if(temp__5753__auto___58201){
var seq__58062_58203__$1 = temp__5753__auto___58201;
if(cljs.core.chunked_seq_QMARK_(seq__58062_58203__$1)){
var c__4679__auto___58204 = cljs.core.chunk_first(seq__58062_58203__$1);
var G__58205 = cljs.core.chunk_rest(seq__58062_58203__$1);
var G__58206 = c__4679__auto___58204;
var G__58207 = cljs.core.count(c__4679__auto___58204);
var G__58208 = (0);
seq__58062_58189 = G__58205;
chunk__58064_58190 = G__58206;
count__58065_58191 = G__58207;
i__58066_58192 = G__58208;
continue;
} else {
var c_58209 = cljs.core.first(seq__58062_58203__$1);
var ident_58210 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58209) : com.fulcrologic.fulcro.components.get_ident.call(null,c_58209));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58210,c_58209);


var G__58211 = cljs.core.next(seq__58062_58203__$1);
var G__58212 = null;
var G__58213 = (0);
var G__58214 = (0);
seq__58062_58189 = G__58211;
chunk__58064_58190 = G__58212;
count__58065_58191 = G__58213;
i__58066_58192 = G__58214;
continue;
}
} else {
}
}
break;
}

var seq__58071 = cljs.core.seq(limited_idents);
var chunk__58072 = null;
var count__58073 = (0);
var i__58074 = (0);
while(true){
if((i__58074 < count__58073)){
var i = chunk__58072.cljs$core$IIndexed$_nth$arity$2(null,i__58074);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58215 = seq__58071;
var G__58216 = chunk__58072;
var G__58217 = count__58073;
var G__58218 = (i__58074 + (1));
seq__58071 = G__58215;
chunk__58072 = G__58216;
count__58073 = G__58217;
i__58074 = G__58218;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58071);
if(temp__5753__auto__){
var seq__58071__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58071__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58071__$1);
var G__58219 = cljs.core.chunk_rest(seq__58071__$1);
var G__58220 = c__4679__auto__;
var G__58221 = cljs.core.count(c__4679__auto__);
var G__58222 = (0);
seq__58071 = G__58219;
chunk__58072 = G__58220;
count__58073 = G__58221;
i__58074 = G__58222;
continue;
} else {
var i = cljs.core.first(seq__58071__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58223 = cljs.core.next(seq__58071__$1);
var G__58224 = null;
var G__58225 = (0);
var G__58226 = (0);
seq__58071 = G__58223;
chunk__58072 = G__58224;
count__58073 = G__58225;
i__58074 = G__58226;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__58077 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__58077__$1 = cljs.core.__destructure_map(map__58077);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58077__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58077__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__58081_58227 = cljs.core.seq(all_idents);
var chunk__58082_58228 = null;
var count__58083_58229 = (0);
var i__58084_58230 = (0);
while(true){
if((i__58084_58230 < count__58083_58229)){
var i_58231 = chunk__58082_58228.cljs$core$IIndexed$_nth$arity$2(null,i__58084_58230);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58231);


var G__58232 = seq__58081_58227;
var G__58233 = chunk__58082_58228;
var G__58234 = count__58083_58229;
var G__58235 = (i__58084_58230 + (1));
seq__58081_58227 = G__58232;
chunk__58082_58228 = G__58233;
count__58083_58229 = G__58234;
i__58084_58230 = G__58235;
continue;
} else {
var temp__5753__auto___58236 = cljs.core.seq(seq__58081_58227);
if(temp__5753__auto___58236){
var seq__58081_58237__$1 = temp__5753__auto___58236;
if(cljs.core.chunked_seq_QMARK_(seq__58081_58237__$1)){
var c__4679__auto___58238 = cljs.core.chunk_first(seq__58081_58237__$1);
var G__58239 = cljs.core.chunk_rest(seq__58081_58237__$1);
var G__58240 = c__4679__auto___58238;
var G__58241 = cljs.core.count(c__4679__auto___58238);
var G__58242 = (0);
seq__58081_58227 = G__58239;
chunk__58082_58228 = G__58240;
count__58083_58229 = G__58241;
i__58084_58230 = G__58242;
continue;
} else {
var i_58243 = cljs.core.first(seq__58081_58237__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58243);


var G__58244 = cljs.core.next(seq__58081_58237__$1);
var G__58245 = null;
var G__58246 = (0);
var G__58247 = (0);
seq__58081_58227 = G__58244;
chunk__58082_58228 = G__58245;
count__58083_58229 = G__58246;
i__58084_58230 = G__58247;
continue;
}
} else {
}
}
break;
}

var seq__58087 = cljs.core.seq(extra_to_force);
var chunk__58088 = null;
var count__58089 = (0);
var i__58090 = (0);
while(true){
if((i__58090 < count__58089)){
var c = chunk__58088.cljs$core$IIndexed$_nth$arity$2(null,i__58090);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__58248 = seq__58087;
var G__58249 = chunk__58088;
var G__58250 = count__58089;
var G__58251 = (i__58090 + (1));
seq__58087 = G__58248;
chunk__58088 = G__58249;
count__58089 = G__58250;
i__58090 = G__58251;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58087);
if(temp__5753__auto__){
var seq__58087__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58087__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58087__$1);
var G__58252 = cljs.core.chunk_rest(seq__58087__$1);
var G__58253 = c__4679__auto__;
var G__58254 = cljs.core.count(c__4679__auto__);
var G__58255 = (0);
seq__58087 = G__58252;
chunk__58088 = G__58253;
count__58089 = G__58254;
i__58090 = G__58255;
continue;
} else {
var c = cljs.core.first(seq__58087__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__58256 = cljs.core.next(seq__58087__$1);
var G__58257 = null;
var G__58258 = (0);
var G__58259 = (0);
seq__58087 = G__58256;
chunk__58088 = G__58257;
count__58089 = G__58258;
i__58090 = G__58259;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__58097 = arguments.length;
switch (G__58097) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__58101){
var map__58102 = p__58101;
var map__58102__$1 = cljs.core.__destructure_map(map__58102);
var options = map__58102__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58102__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58102__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4253__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e58105){var e = e58105;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,627023035,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
