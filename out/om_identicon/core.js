// Compiled by ClojureScript 0.0-2173
goog.provide('om_identicon.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
om_identicon.core.byte_vec = (function byte_vec(n){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255 & n),(255 & (n >> 8)),(255 & (n >> 16)),(255 & (n >> 24))], null);
});
om_identicon.core.hex_color = (function hex_color(r,g,b){var pad = (function (v){var G__7402 = cljs.core.count.call(null,v);if(cljs.core._EQ_.call(null,2,G__7402))
{return v;
} else
{if(cljs.core._EQ_.call(null,1,G__7402))
{return [cljs.core.str("0"),cljs.core.str(v)].join('');
} else
{if(cljs.core._EQ_.call(null,0,G__7402))
{return "00";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "ff";
} else
{return null;
}
}
}
}
});var red = pad.call(null,r.toString(16));var grn = pad.call(null,g.toString(16));var blu = pad.call(null,b.toString(16));return [cljs.core.str("#"),cljs.core.str(red),cljs.core.str(grn),cljs.core.str(blu)].join('');
});
om_identicon.core.canvas_context = (function canvas_context(h,w){var canvas = document.createElement("canvas");canvas.height = h;
canvas.width = w;
return canvas.getContext("2d");
});
om_identicon.core.make_identicon = (function make_identicon(n,size){var h = (cljs.core.hash.call(null,n) * 1234567);var gs = 8;var vec__7408 = om_identicon.core.byte_vec.call(null,h);var b1 = cljs.core.nth.call(null,vec__7408,0,null);var b2 = cljs.core.nth.call(null,vec__7408,1,null);var b3 = cljs.core.nth.call(null,vec__7408,2,null);var b4 = cljs.core.nth.call(null,vec__7408,3,null);var px = h.toString(2);var cx = om_identicon.core.canvas_context.call(null,size,size);var s = (size / gs);cx.fillStyle = om_identicon.core.hex_color.call(null,(function (){var x__3757__auto__ = 200;var y__3758__auto__ = b1;return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})(),(function (){var x__3757__auto__ = 200;var y__3758__auto__ = b2;return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})(),(function (){var x__3757__auto__ = 200;var y__3758__auto__ = b3;return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})());
var seq__7409_7413 = cljs.core.seq.call(null,cljs.core.range.call(null,32));var chunk__7410_7414 = null;var count__7411_7415 = 0;var i__7412_7416 = 0;while(true){
if((i__7412_7416 < count__7411_7415))
{var i_7417 = cljs.core._nth.call(null,chunk__7410_7414,i__7412_7416);var x_7418 = ((i_7417 / gs) | 0);var y_7419 = cljs.core.mod.call(null,i_7417,gs);if(cljs.core._EQ_.call(null,"1",cljs.core.get.call(null,px,i_7417,"0")))
{cx.fillRect((x_7418 * s),(y_7419 * s),s,s);
cx.fillRect(((size - (x_7418 * s)) - s),(y_7419 * s),s,s);
} else
{}
{
var G__7420 = seq__7409_7413;
var G__7421 = chunk__7410_7414;
var G__7422 = count__7411_7415;
var G__7423 = (i__7412_7416 + 1);
seq__7409_7413 = G__7420;
chunk__7410_7414 = G__7421;
count__7411_7415 = G__7422;
i__7412_7416 = G__7423;
continue;
}
} else
{var temp__4092__auto___7424 = cljs.core.seq.call(null,seq__7409_7413);if(temp__4092__auto___7424)
{var seq__7409_7425__$1 = temp__4092__auto___7424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7409_7425__$1))
{var c__4191__auto___7426 = cljs.core.chunk_first.call(null,seq__7409_7425__$1);{
var G__7427 = cljs.core.chunk_rest.call(null,seq__7409_7425__$1);
var G__7428 = c__4191__auto___7426;
var G__7429 = cljs.core.count.call(null,c__4191__auto___7426);
var G__7430 = 0;
seq__7409_7413 = G__7427;
chunk__7410_7414 = G__7428;
count__7411_7415 = G__7429;
i__7412_7416 = G__7430;
continue;
}
} else
{var i_7431 = cljs.core.first.call(null,seq__7409_7425__$1);var x_7432 = ((i_7431 / gs) | 0);var y_7433 = cljs.core.mod.call(null,i_7431,gs);if(cljs.core._EQ_.call(null,"1",cljs.core.get.call(null,px,i_7431,"0")))
{cx.fillRect((x_7432 * s),(y_7433 * s),s,s);
cx.fillRect(((size - (x_7432 * s)) - s),(y_7433 * s),s,s);
} else
{}
{
var G__7434 = cljs.core.next.call(null,seq__7409_7425__$1);
var G__7435 = null;
var G__7436 = 0;
var G__7437 = 0;
seq__7409_7413 = G__7434;
chunk__7410_7414 = G__7435;
count__7411_7415 = G__7436;
i__7412_7416 = G__7437;
continue;
}
}
} else
{}
}
break;
}
return cx.canvas.toDataURL("image/png");
});
om_identicon.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-name","user-name",1307069119),"CRM TEST AUDI ADMIN",new cljs.core.Keyword(null,"identicon-src","identicon-src",3394187250),om_identicon.core.make_identicon.call(null,"CRM TEST AUDI ADMIN",128)], null));
om_identicon.core.identicon_maker = (function identicon_maker(data,owner){if(typeof om_identicon.core.t7442 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_identicon.core.t7442 = (function (owner,data,identicon_maker,meta7443){
this.owner = owner;
this.data = data;
this.identicon_maker = identicon_maker;
this.meta7443 = meta7443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_identicon.core.t7442.cljs$lang$type = true;
om_identicon.core.t7442.cljs$lang$ctorStr = "om-identicon.core/t7442";
om_identicon.core.t7442.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-identicon.core/t7442");
});
om_identicon.core.t7442.prototype.om$core$IRender$ = true;
om_identicon.core.t7442.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.img({"width": 64, "height": 64, "src": new cljs.core.Keyword(null,"identicon-src","identicon-src",3394187250).cljs$core$IFn$_invoke$arity$1(self__.data)}),React.DOM.div({"className": "pure-form pure-form-stacked"},om.dom.input.call(null,{"className": "pure-input-1", "type": "text", "value": new cljs.core.Keyword(null,"user-name","user-name",1307069119).cljs$core$IFn$_invoke$arity$1(self__.data), "onChange": (function (p1__7438_SHARP_){return cljs.core.swap_BANG_.call(null,om_identicon.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user-name","user-name",1307069119),p1__7438_SHARP_.target.value,new cljs.core.Keyword(null,"identicon-src","identicon-src",3394187250),om_identicon.core.make_identicon.call(null,cljs.core.hash.call(null,p1__7438_SHARP_.target.value),128));
})})));
});
om_identicon.core.t7442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7444){var self__ = this;
var _7444__$1 = this;return self__.meta7443;
});
om_identicon.core.t7442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7444,meta7443__$1){var self__ = this;
var _7444__$1 = this;return (new om_identicon.core.t7442(self__.owner,self__.data,self__.identicon_maker,meta7443__$1));
});
om_identicon.core.__GT_t7442 = (function __GT_t7442(owner__$1,data__$1,identicon_maker__$1,meta7443){return (new om_identicon.core.t7442(owner__$1,data__$1,identicon_maker__$1,meta7443));
});
}
return (new om_identicon.core.t7442(owner,data,identicon_maker,null));
});
om.core.root.call(null,om_identicon.core.identicon_maker,om_identicon.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map