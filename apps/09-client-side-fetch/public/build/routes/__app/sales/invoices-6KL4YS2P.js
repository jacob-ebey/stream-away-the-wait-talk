import{a as g}from"/build/_shared/chunk-CLA73AZB.js";import{a as s}from"/build/_shared/chunk-U2XHCC3L.js";import{e as i,g as m}from"/build/_shared/chunk-JBQFAOEL.js";import{f as l,i as a,p as d}from"/build/_shared/chunk-RDTL4OUY.js";import{a as p}from"/build/_shared/chunk-47ZWW2WL.js";import{c as u,e,f as n}from"/build/_shared/chunk-UIDRLFYU.js";n();n();var x=u(g());var c=u(p());function f(){let t=d(),r=t.dueSoonAmount+t.overdueAmount,o=Math.floor(t.dueSoonAmount/r*100);return e.createElement("div",{className:"relative"},e.createElement("div",{className:"flex items-center justify-between gap-4"},e.createElement(v,{label:"Overdue",amount:t.overdueAmount}),e.createElement("div",{className:"flex h-4 flex-1 overflow-hidden rounded-full"},e.createElement("div",{className:"flex-1 bg-yellow-brand"}),e.createElement("div",{className:"bg-green-brand",style:{width:`${o}%`}})),e.createElement(v,{label:"Due Soon",amount:t.dueSoonAmount,right:!0})),e.createElement("div",{className:"h-4"}),e.createElement(i,null,"Invoice List"),e.createElement("div",{className:"h-2"}),e.createElement(y,null,e.createElement(l,null)))}function v({label:t,amount:r,right:o}){return e.createElement("div",{className:o?"text-right":""},e.createElement(i,null,t),e.createElement("div",{className:"text-[length:18px] text-black"},s.format(r)))}function y({children:t}){let{invoiceListItems:r}=d();return e.createElement("div",{className:"flex overflow-hidden rounded-lg border border-gray-100"},e.createElement("div",{className:"w-1/2 border-r border-gray-100"},e.createElement(a,{to:"new",prefetch:"intent",className:({isActive:o})=>"block border-b-4 border-gray-100 py-3 px-4 hover:bg-gray-50 "+(o?"bg-gray-50":"")},e.createElement("span",{className:"flex gap-1"},e.createElement(m,null)," ",e.createElement("span",null,"Create new invoice"))),e.createElement("div",{className:"max-h-96 overflow-y-scroll"},r.map(o=>e.createElement(a,{key:o.id,to:o.id,prefetch:"intent",className:({isActive:b})=>"block border-b border-gray-50 py-3 px-4 hover:bg-gray-50 "+(b?"bg-gray-50":"")},e.createElement("div",{className:"flex justify-between text-[length:14px] font-bold leading-6"},e.createElement("div",null,o.name),e.createElement("div",null,s.format(o.totalAmount))),e.createElement("div",{className:"flex justify-between text-[length:12px] font-medium leading-4 text-gray-400"},e.createElement("div",null,o.number),e.createElement("div",{className:"uppercase "+(o.dueStatus==="paid"?"text-green-brand":o.dueStatus==="overdue"?"text-red-brand":"")},o.dueStatusDisplay)))))),e.createElement("div",{className:"w-1/2"},t))}export{f as default};
