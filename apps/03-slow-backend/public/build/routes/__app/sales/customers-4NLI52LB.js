import{a as f}from"/build/_shared/chunk-VTL4VDFE.js";import{g as d}from"/build/_shared/chunk-5XHGT72L.js";import{f as s,i as a,p as i}from"/build/_shared/chunk-UPRF7IWN.js";import{a as p}from"/build/_shared/chunk-47ZWW2WL.js";import{c as t,e,f as o}from"/build/_shared/chunk-UIDRLFYU.js";o();o();var v=t(p()),g=t(f());function n(){let{customers:l}=i();return e.createElement("div",{className:"flex overflow-hidden rounded-lg border border-gray-100"},e.createElement("div",{className:"w-1/2 border-r border-gray-100"},e.createElement(a,{to:"new",prefetch:"intent",className:({isActive:r})=>"block border-b-4 border-gray-100 py-3 px-4 hover:bg-gray-50 "+(r?"bg-gray-50":"")},e.createElement("span",{className:"flex gap-1"},e.createElement(d,null)," ",e.createElement("span",null,"Create new customer"))),e.createElement("div",{className:"max-h-96 overflow-y-scroll"},l.map(r=>e.createElement(a,{key:r.id,to:r.id,className:({isActive:m})=>"block border-b border-gray-50 py-3 px-4 hover:bg-gray-50 "+(m?"bg-gray-50":"")},e.createElement("div",{className:"flex justify-between text-[length:14px] font-bold leading-6"},e.createElement("div",null,r.name)),e.createElement("div",{className:"flex justify-between text-[length:12px] font-medium leading-4 text-gray-400"},e.createElement("div",null,r.email)))))),e.createElement("div",{className:"flex w-1/2 flex-col justify-between"},e.createElement(s,null),e.createElement("small",{className:"p-2 text-center"},"Note: this is arbitrarily slow to demonstrate pending UI.")))}export{n as default};