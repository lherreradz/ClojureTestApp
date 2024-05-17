goog.provide('app.ui');

var options__48898__auto___52146 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52117 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52117__$1 = cljs.core.__destructure_map(map__52117);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52117__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52117__$1,new cljs.core.Keyword("person","age","person/age",387881455));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__50829__auto__ = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__50829__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (age: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(age),")"].join('');
var G__52118 = a__50829__auto__;
if(cljs.core.map_QMARK_(a__50829__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:8"], null),G__52118], 0));
} else {
return G__52118;
}
})()], null),null);
var G__52119 = a__50829__auto__;
if(cljs.core.map_QMARK_(a__50829__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:7"], null),G__52119], 0));
} else {
return G__52119;
}
})()], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Person = (function app$ui$Person(props__48899__auto__){
var this__48900__auto__ = this;
var temp__5751__auto___52147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48898__auto___52146,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52147)){
var init_state__48901__auto___52148 = temp__5751__auto___52147;
(this__48900__auto__.state = (function (){var obj52121 = ({"fulcro$state":(function (){var G__52122 = this__48900__auto__;
var G__52123 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48899__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48899__auto__,"fulcro$value"));
return (init_state__48901__auto___52148.cljs$core$IFn$_invoke$arity$2 ? init_state__48901__auto___52148.cljs$core$IFn$_invoke$arity$2(G__52122,G__52123) : init_state__48901__auto___52148.call(null,G__52122,G__52123));
})()});
return obj52121;
})());
} else {
(this__48900__auto__.state = (function (){var obj52125 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52125;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Person,new cljs.core.Keyword("app.ui","Person","app.ui/Person",-174089889),options__48898__auto___52146);
app.ui.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","name","person/name",549444500)], null));

var options__48898__auto___52149 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52126 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52126__$1 = cljs.core.__destructure_map(map__52126);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52126__$1,new cljs.core.Keyword("list","label","list/label",1746874574));
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52126__$1,new cljs.core.Keyword("list","people","list/people",1438389142));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__50829__auto__ = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__50829__auto__ = label;
var G__52127 = a__50829__auto__;
if(cljs.core.map_QMARK_(a__50829__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:15"], null),G__52127], 0));
} else {
return G__52127;
}
})()], null),null);
var G__52128 = a__50829__auto__;
if(cljs.core.map_QMARK_(a__50829__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:14"], null),G__52128], 0));
} else {
return G__52128;
}
})(),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__50829__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.ui.ui_person,people);
var G__52129 = a__50829__auto__;
if(cljs.core.map_QMARK_(a__50829__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:16"], null),G__52129], 0));
} else {
return G__52129;
}
})()], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.PersonList = (function app$ui$PersonList(props__48899__auto__){
var this__48900__auto__ = this;
var temp__5751__auto___52150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48898__auto___52149,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52150)){
var init_state__48901__auto___52151 = temp__5751__auto___52150;
(this__48900__auto__.state = (function (){var obj52131 = ({"fulcro$state":(function (){var G__52132 = this__48900__auto__;
var G__52133 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48899__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48899__auto__,"fulcro$value"));
return (init_state__48901__auto___52151.cljs$core$IFn$_invoke$arity$2 ? init_state__48901__auto___52151.cljs$core$IFn$_invoke$arity$2(G__52132,G__52133) : init_state__48901__auto___52151.call(null,G__52132,G__52133));
})()});
return obj52131;
})());
} else {
(this__48900__auto__.state = (function (){var obj52135 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52135;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.PersonList,new cljs.core.Keyword("app.ui","PersonList","app.ui/PersonList",55373572),options__48898__auto___52149);
app.ui.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.PersonList);

var options__48898__auto___52152 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52136 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52136__$1 = cljs.core.__destructure_map(map__52136);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52136__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var ui_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","label","list/label",1746874574),"Friends",new cljs.core.Keyword("list","people","list/people",1438389142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Sally",new cljs.core.Keyword("person","age","person/age",387881455),(32)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Joe",new cljs.core.Keyword("person","age","person/age",387881455),(22)], null)], null)], null),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","label","list/label",1746874574),"Enemies",new cljs.core.Keyword("list","people","list/people",1438389142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Fred",new cljs.core.Keyword("person","age","person/age",387881455),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person","name","person/name",549444500),"Bobby",new cljs.core.Keyword("person","age","person/age",387881455),(55)], null)], null)], null)], null);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__50829__auto__ = (function (){var G__52137 = new cljs.core.Keyword(null,"friends","friends",-127631374).cljs$core$IFn$_invoke$arity$1(ui_data);
return (app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(G__52137) : app.ui.ui_person_list.call(null,G__52137));
})();
var G__52138 = a__50829__auto__;
if(cljs.core.map_QMARK_(a__50829__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:28"], null),G__52138], 0));
} else {
return G__52138;
}
})(),(function (){var G__52139 = new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(ui_data);
return (app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_person_list.cljs$core$IFn$_invoke$arity$1(G__52139) : app.ui.ui_person_list.call(null,G__52139));
})()], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__48899__auto__){
var this__48900__auto__ = this;
var temp__5751__auto___52153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48898__auto___52152,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52153)){
var init_state__48901__auto___52154 = temp__5751__auto___52153;
(this__48900__auto__.state = (function (){var obj52141 = ({"fulcro$state":(function (){var G__52142 = this__48900__auto__;
var G__52143 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48899__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48899__auto__,"fulcro$value"));
return (init_state__48901__auto___52154.cljs$core$IFn$_invoke$arity$2 ? init_state__48901__auto___52154.cljs$core$IFn$_invoke$arity$2(G__52142,G__52143) : init_state__48901__auto___52154.call(null,G__52142,G__52143));
})()});
return obj52141;
})());
} else {
(this__48900__auto__.state = (function (){var obj52145 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52145;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__48898__auto___52152);

//# sourceMappingURL=app.ui.js.map
