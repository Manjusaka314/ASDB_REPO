import{_ as l}from"./Category.7d14a878.js";import{p as e,i as n,o as a,c as o,a as t,t as i,F as s,r as d,E as c,b as m,d as _,h as r,f as u,g as p}from"./index.5ea3d074.js";import"./@pixi.ba7a7c6f.js";const h={components:{Category:l},inject:["socket","moment"],data:()=>({drawcard:[{id:1,icon:"main_20210617_image_1",open:null,close:null,name:"新人專屬召集",pet_icon_list:["head1_1600111","head1_1600291","head1_1600891","head1_1600251"]},{id:10001,icon:"main_20210617_image_2",open:null,close:null,name:"常駐標準召集",pet_icon_list:["head1_1600381","head1_1601031","head1_1600961","head1_1600011"]},{id:20001,icon:"main_20210617_image_3",open:"2021-05-01 00:00:00",close:"2021-07-07 09:00:00",name:"淒白之月限時召集",pet_icon_list:["head1_1600061"]},{id:20002,icon:"main_20210617_image_4",open:"2021-05-01 00:00:00",close:"2021-07-07 09:00:00",name:"虛無業火限時召集",pet_icon_list:["head1_1600261"]},{id:20003,icon:"main_20210617_image_7",open:"2021-07-08 02:00:00",close:"2021-07-28 09:00:00",name:"赤眼風暴限時召集",pet_icon_list:["head1_1600301","head1_1601051"]},{id:20004,icon:"main_20210729_image_1",open:"2021-07-29 09:00:00",close:"2021-08-18 09:00:00",name:"雲山之櫻限時召集",pet_icon_list:["head1_1500711","head1_1600021"]},{id:20005,icon:"main_20210818_image_20005",open:"2021-08-06 09:00:00",close:"2021-09-08 09:00:00",name:"結晶血域限時召集",pet_icon_list:["head1_1601111"]},{id:20006,icon:"main_20210818_image_20006",open:"2021-08-06 09:00:00",close:"2021-09-08 09:00:00",name:"藍顏禍水限時召集",pet_icon_list:["head1_1601161"]},{id:20007,icon:"main_20210908_image_20007",open:"2021-09-09 09:00:00",close:"2021-09-29 09:00:00",name:"蠍獅火吻限時召集",pet_icon_list:["head1_1501141","head1_1601121"]},{id:20008,icon:"main_drawcard_image_20008",open:"2021-09-30 04:00:00",close:"2021-10-21 4:00:00",name:"勇士之鋒限時召集",pet_icon_list:["head1_1601171"]},{id:20009,icon:"main_drawcard_image_20009",open:"2021-09-30 04:00:00",close:"2021-10-21 4:00:00",name:"鈞雷灼刃限時召集",pet_icon_list:["head1_1601191"]},{id:30001,icon:"main_20210630_image_30001",open:"2021-06-29 09:00:00",close:"2021-07-19 09:00:00",name:"輪換推薦召集",pet_icon_list:["head1_1600891","head1_1600931"]},{id:30002,icon:"main_20210720_image_30002",open:"2021-07-20 09:00:00",close:"2021-08-09 09:00:00",name:"輪換推薦召集",pet_icon_list:["head1_1501001","head1_1500361","head1_1600112"]},{id:30003,icon:"main_20210810_image_30003",open:"2021-08-10 09:00:00",close:"2021-08-30 09:00:00",name:"輪換推薦召集",pet_icon_list:["head1_1500761","head1_1601032","head1_1500901"]},{id:30004,icon:"main_drawcard_image_30004",open:"2021-08-31 09:00:00",close:"2021-09-20 09:00:00",name:"輪換推薦召集",pet_icon_list:["head1_1600282","head1_1500091","head1_1500131"]},{id:30005,icon:"main_drawcard_image_30005",open:"2021-09-21 09:00:00",close:"2021-09-28 09:00:00",name:"輪換推薦召集",pet_icon_list:["head1_1600292","head1_1500921","head1_1500421"]},{id:30006,icon:"main_drawcard_image_30006",open:"2021-09-28 09:00:00",close:"2021-10-05 09:00:00",name:"輪換推薦召集",pet_icon_list:["head1_1600282","head1_1500091","head1_1500131"]},{id:30007,icon:"main_drawcard_image_30008",open:"2021-10-05 09:00:00",close:"2021-10-12 09:00:00",name:"輪換推薦召集",pet_icon_list:["head1_1600251","head1_1600141","head1_1500991"]},{id:30008,icon:"main_drawcard_image_30007",open:"2021-10-12 09:00:00",close:"2021-10-19 09:00:00",name:"輪換推薦召集",pet_icon_list:["head1_1600382","head1_1500842","head1_1400441"]},{id:30009,icon:"main_drawcard_image_30009",open:"2021-10-19 09:00:00",close:"2021-10-26 09:00:00",name:"輪換推薦召集",pet_icon_list:["head1_1600011","head1_1500751","head1_1500971"]}]}),computed:{drawcard_2:function(){let l=this;if(this.drawcard){let e=function(e){return function(n,a){var o=0,t=0;return null!=n[e]&&(o=l.moment(n[e]).format("X")),null!=a[e]&&(t=l.moment(a[e]).format("X")),o-t}},n=this.drawcard;return n.sort(e("open")),n.forEach((l=>{if(!l.open)return;const e=new Date(l.open),n=new Date(l.close);l.open=new Date(e-6e4*e.getTimezoneOffset()),l.open<16238916e5&&(l.open=16238916e5),l.close=new Date(n-6e4*n.getTimezoneOffset())})),n}return[]},drawcard_3:function(){return this.drawcard_2.concat().reverse()}},mounted(){}},w=r("data-v-cd585144");e("data-v-cd585144");const g={id:"toc"},f={class:"nomobile"},b={class:"nomobile"},k={key:0},$={class:"nodesktop"},y=t("hr",null,null,-1),C={class:"pool_img"},O={class:"nomobile"},T=t("hr",null,null,-1),D={class:"nodesktop"},v=t("hr",null,null,-1),U=t("br",null,null,-1),j=t("br",null,null,-1),N={class:"nomobile"},x=t("br",null,null,-1),z=c(" ~ "),E=t("br",null,null,-1),X=t("br",null,null,-1),F=t("br",null,null,-1),I={class:"nomobile"},q={class:"nomobile"},A={class:"nomobile"},B={key:0},G={class:"nodesktop"},H=t("hr",null,null,-1),J={class:"pool_img"},K={class:"nomobile"},L=t("hr",null,null,-1),M={class:"nodesktop"},P=t("hr",null,null,-1),Q=t("br",null,null,-1),R=t("br",null,null,-1),S={class:"nomobile"},V=t("br",null,null,-1),W=c(" ~ "),Y=t("br",null,null,-1),Z=t("br",null,null,-1),ll=t("br",null,null,-1),el={class:"nomobile"},nl={class:"nomobile"},al={class:"nomobile"},ol={key:0},tl={class:"nodesktop"},il=t("hr",null,null,-1),sl={class:"pool_img"},dl={class:"nomobile"},cl=t("hr",null,null,-1),ml={class:"nodesktop"},_l=t("hr",null,null,-1),rl=t("br",null,null,-1),ul={class:"nomobile"},pl=t("br",null,null,-1),hl=c(" ~ "),wl=t("br",null,null,-1),gl=t("br",null,null,-1),fl={class:"nomobile"},bl={class:"nomobile"},kl={class:"nomobile"},$l={key:0},yl={class:"nodesktop"},Cl=t("hr",null,null,-1),Ol={class:"pool_img"},Tl={class:"nomobile"},Dl=t("hr",null,null,-1),vl={class:"nodesktop"},Ul=t("hr",null,null,-1),jl=t("br",null,null,-1),Nl={class:"nomobile"},xl=t("br",null,null,-1),zl=c(" ~ "),El=t("br",null,null,-1),Xl=t("br",null,null,-1),Fl={class:"nomobile"},Il={class:"nomobile"},ql={key:0},Al={class:"nodesktop"},Bl=t("hr",null,null,-1),Gl={width:"320",height:"125"},Hl={class:"nomobile"},Jl=t("hr",null,null,-1),Kl={class:"nomobile"};n();const Ll=w(((l,e,n,r,h,w)=>{const Ll=u("Category"),Ml=p("lazy");return a(),o(s,null,[t("h1",null,i(l.$t("main_view.drawcard_data")),1),t("div",g,[t(Ll)]),t("h2",null,i(l.$t("drawcard.now")),1),t("table",{set:l.now=Date.now()},[t("th",null,i(l.$t("drawcard.pool")),1),t("th",f,i(l.$t("drawcard.time")),1),t("th",b,i(l.$t("drawcard.up")),1),(a(!0),o(s,null,d(w.drawcard_2,(e=>(a(),o(s,{key:e.id},[e.open<=l.now&&e.close>l.now&&e.open?(a(),o("tr",k,[t("td",null,[t("span",$,[c(i(e.name),1),y]),m(t("img",C,null,512),[[Ml,"/main_caroursel/"+e.icon+"_scale.png"]]),t("span",O,[T,c(i(e.name),1)]),t("span",D,[v,c(i(w.moment(e.open).format("lll"))+" ~ ",1),U,c(i(w.moment(e.close).format("lll"))+" ("+i("UTC + "+w.moment().utcOffset()/60)+")",1),j,c(i(w.moment(e.close).fromNow())+" "+i(l.$t("drawcard.close")),1)])]),t("td",N,[c(i(w.moment(e.open).format("lll")),1),x,z,E,c(i(w.moment(e.close).format("lll"))+" ",1),X,c("("+i("UTC + "+w.moment().utcOffset()/60)+")",1),F,c(i(w.moment(e.close).fromNow())+" "+i(l.$t("drawcard.close")),1)]),t("td",I,[(a(!0),o(s,null,d(e.pet_icon_list,(l=>m((a(),o("img",{key:l,width:"64",height:"64"},null,512)),[[Ml,"/pet_head/"+l+"_scale.png"]]))),128))])])):_("",!0)],64)))),128))],8,["set"]),t("h2",null,i(l.$t("drawcard.future")),1),t("table",{set:l.now=Date.now()},[t("th",null,i(l.$t("drawcard.pool")),1),t("th",q,i(l.$t("drawcard.time")),1),t("th",A,i(l.$t("drawcard.up")),1),(a(!0),o(s,null,d(w.drawcard_2,(e=>(a(),o(s,{key:e.id},[e.open>l.now&&e.open?(a(),o("tr",B,[t("td",null,[t("span",G,[c(i(e.name),1),H]),m(t("img",J,null,512),[[Ml,"/main_caroursel/"+e.icon+"_scale.png"]]),t("span",K,[L,c(i(e.name),1)]),t("span",M,[P,c(i(w.moment(e.open).format("lll"))+" ~ ",1),Q,c(i(w.moment(e.close).format("lll"))+" ("+i("UTC + "+w.moment().utcOffset()/60)+")",1),R,c(i(w.moment(e.open).fromNow())+" "+i(l.$t("drawcard.open")),1)])]),t("td",S,[c(i(w.moment(e.open).format("lll")),1),V,W,Y,c(i(w.moment(e.close).format("lll"))+" ",1),Z,c("("+i("UTC + "+w.moment().utcOffset()/60)+")",1),ll,c(i(w.moment(e.open).fromNow())+" "+i(l.$t("drawcard.open")),1)]),t("td",el,[(a(!0),o(s,null,d(e.pet_icon_list,(l=>m((a(),o("img",{key:l,width:"64",height:"64"},null,512)),[[Ml,"/pet_head/"+l+"_scale.png"]]))),128))])])):_("",!0)],64)))),128))],8,["set"]),t("h2",null,i(l.$t("drawcard.all")),1),t("h3",null,i(l.$t("drawcard.type_2")),1),t("table",{set:l.now=Date.now()},[t("th",null,i(l.$t("drawcard.pool")),1),t("th",nl,i(l.$t("drawcard.time")),1),t("th",al,i(l.$t("drawcard.up")),1),(a(!0),o(s,null,d(w.drawcard_3,(l=>(a(),o(s,{key:l.id},[l.id>2e4&&l.id<3e4?(a(),o("tr",ol,[t("td",null,[t("span",tl,[c(i(l.name),1),il]),m(t("img",sl,null,512),[[Ml,"/main_caroursel/"+l.icon+"_scale.png"]]),t("span",dl,[cl,c(i(l.name),1)]),t("span",ml,[_l,c(i(w.moment(l.open).format("lll"))+" ~ ",1),rl,c(i(w.moment(l.close).format("lll"))+" ("+i("UTC + "+w.moment().utcOffset()/60)+")",1)])]),t("td",ul,[c(i(w.moment(l.open).format("lll")),1),pl,hl,wl,c(i(w.moment(l.close).format("lll"))+" ",1),gl,c("("+i("UTC + "+w.moment().utcOffset()/60)+")",1)]),t("td",fl,[(a(!0),o(s,null,d(l.pet_icon_list,(l=>m((a(),o("img",{key:l,width:"64",height:"64"},null,512)),[[Ml,"/pet_head/"+l+"_scale.png"]]))),128))])])):_("",!0)],64)))),128))],8,["set"]),t("h3",null,i(l.$t("drawcard.type_3")),1),t("table",{set:l.now=Date.now()},[t("th",null,i(l.$t("drawcard.pool")),1),t("th",bl,i(l.$t("drawcard.time")),1),t("th",kl,i(l.$t("drawcard.up")),1),(a(!0),o(s,null,d(w.drawcard_3,(l=>(a(),o(s,{key:l.id},[l.id>3e4&&l.id<4e4?(a(),o("tr",$l,[t("td",null,[t("span",yl,[c(i(l.name),1),Cl]),m(t("img",Ol,null,512),[[Ml,"/main_caroursel/"+l.icon+"_scale.png"]]),t("span",Tl,[Dl,c(i(l.name),1)]),t("span",vl,[Ul,c(i(w.moment(l.open).format("lll"))+" ~ ",1),jl,c(i(w.moment(l.close).format("lll"))+" ("+i("UTC + "+w.moment().utcOffset()/60)+")",1)])]),t("td",Nl,[c(i(w.moment(l.open).format("lll")),1),xl,zl,El,c(i(w.moment(l.close).format("lll"))+" ",1),Xl,c("("+i("UTC + "+w.moment().utcOffset()/60)+")",1)]),t("td",Fl,[(a(!0),o(s,null,d(l.pet_icon_list,(l=>m((a(),o("img",{key:l,width:"64",height:"64"},null,512)),[[Ml,"/pet_head/"+l+"_scale.png"]]))),128))])])):_("",!0)],64)))),128))],8,["set"]),t("h3",null,i(l.$t("drawcard.type_1")),1),t("table",{set:l.now=Date.now()},[t("th",null,i(l.$t("drawcard.pool")),1),t("th",Il,i(l.$t("drawcard.cover")),1),(a(!0),o(s,null,d(w.drawcard_3,(l=>(a(),o(s,{key:l.id},[l.id<2e4?(a(),o("tr",ql,[t("td",null,[t("span",Al,[c(i(l.name),1),Bl]),m(t("img",Gl,null,512),[[Ml,"/main_caroursel/"+l.icon+"_scale.png"]]),t("span",Hl,[Jl,c(i(l.name),1)])]),t("td",Kl,[(a(!0),o(s,null,d(l.pet_icon_list,(l=>m((a(),o("img",{key:l,width:"64",height:"64"},null,512)),[[Ml,"/pet_head/"+l+"_scale.png"]]))),128))])])):_("",!0)],64)))),128))],8,["set"])],64)}));h.render=Ll,h.__scopeId="data-v-cd585144";export default h;
