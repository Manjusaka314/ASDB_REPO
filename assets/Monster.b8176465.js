import{o as a,c as n,a as i,t,F as s,r as e,b as l,g as o}from"./index.544bd217.js";import"./@pixi.ba7a7c6f.js";const r={inject:["socket"],data:()=>({monster_data:[]}),mounted(){}},d={class:"aurorian"},u={width:"96",height:"96"};r.render=function(r,c,m,p,_,k){const h=o("lazy");return a(),n(s,null,[i("h1",null,t(r.$t("main_view.monster_data")),1),(a(!0),n(s,null,e(_.monster_data,(o=>(a(),n("div",{key:o},[i("div",d,[(a(!0),n(s,null,e(r.pets[r.star],(s=>(a(),n("div",{key:s.id,class:"aurorian_detail",onClick:a=>r.$router.push("/Aurorian/"+s.id)},[l(i("img",u,null,512),[[h,"/item_icon/"+s.icon+"_scale.png"]]),i("p",null,t(s.nickname),1),i("p",null,t(s.name),1)],8,["onClick"])))),128))])])))),128))],64)};export default r;
