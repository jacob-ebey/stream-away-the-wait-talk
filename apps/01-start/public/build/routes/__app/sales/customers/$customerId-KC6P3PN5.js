import{a as u}from"/build/_shared/chunk-U2XHCC3L.js";import{n as i}from"/build/_shared/chunk-5XHGT72L.js";import{e as s,h as a,j as n}from"/build/_shared/chunk-UPRF7IWN.js";import{a as l}from"/build/_shared/chunk-47ZWW2WL.js";import{c as m,e as t,f as r}from"/build/_shared/chunk-UIDRLFYU.js";r();r();var p=m(l());var c="border-t border-gray-100 text-[14px] h-[56px]";function d(){let o={customerInfo:{email:"todo@todo.com",name:"TODO"},invoiceDetails:[{id:"todo",number:0,dueStatus:"paid",dueStatusDisplay:"todo",totalAmount:0}]};return t.createElement("div",{className:"relative p-10"},t.createElement("div",{className:"text-[length:14px] font-bold leading-6"},o.customerInfo.email),t.createElement("div",{className:"text-[length:32px] font-bold leading-[40px]"},o.customerInfo.name),t.createElement("div",{className:"h-4"}),t.createElement("div",{className:"text-m-h3 font-bold leading-8"},"Invoices"),t.createElement("div",{className:"h-4"}),t.createElement("table",{className:"w-full"},t.createElement("tbody",null,o.invoiceDetails.map(e=>t.createElement("tr",{key:e.id,className:c},t.createElement("td",null,t.createElement(n,{className:"text-blue-600 underline",to:`../../invoices/${e.id}`},e.number)),t.createElement("td",{className:"text-center uppercase "+(e.dueStatus==="paid"?"text-green-brand":e.dueStatus==="overdue"?"text-red-brand":"")},e.dueStatusDisplay),t.createElement("td",{className:"text-right"},u.format(e.totalAmount)))))))}function f(){let o=a(),e=s();if(o.status===404)return t.createElement("div",{className:"relative h-full"},t.createElement(i,{message:`No customer found with the ID of "${e.customerId}"`}));throw new Error(`Unexpected caught response with status: ${o.status}`)}export{f as CatchBoundary,d as default};
