import"/build/_shared/chunk-U2XHCC3L.js";import{b as a,f as y}from"/build/_shared/chunk-A72FN5UM.js";import{g as w,n as x,q as v}from"/build/_shared/chunk-RDTL4OUY.js";import{a as U}from"/build/_shared/chunk-47ZWW2WL.js";import{b as L,c as s,d as E,f as t}from"/build/_shared/chunk-UIDRLFYU.js";var N=L((P,h)=>{t();h.exports={}});t();t();var e=s(E()),F=s(U()),i=s(N());var T=()=>({title:"Login to Fakebooks"});function k(){var m,l,d,u,c;let[A]=w(),R=(m=A.get("redirectTo"))!=null?m:"",r=v(),o=e.useRef(null),n=e.useRef(null);return e.useEffect(()=>{var p,f,b,g;((p=r==null?void 0:r.errors)==null?void 0:p.email)?(f=o.current)==null||f.focus():((b=r==null?void 0:r.errors)==null?void 0:b.password)&&((g=n.current)==null||g.focus())},[r]),e.createElement("div",{className:"flex min-h-full flex-col justify-center"},e.createElement("h1",{className:"mb-12"},e.createElement(y,{size:"lg",position:"center"})),e.createElement("div",{className:"mx-auto w-full max-w-md px-8"},e.createElement(x,{method:"post",className:"space-y-6"},e.createElement("div",null,e.createElement("label",{htmlFor:"email",className:"text-sm block font-medium text-gray-700"},"Email address"),e.createElement("div",{className:"mt-1"},e.createElement("input",{ref:o,id:"email",required:!0,autoFocus:!0,name:"email",type:"email",autoComplete:"email","aria-invalid":((l=r==null?void 0:r.errors)==null?void 0:l.email)?!0:void 0,"aria-describedby":"email-error",className:a}),((d=r==null?void 0:r.errors)==null?void 0:d.email)&&e.createElement("div",{className:"pt-1 text-red-700",id:"email-error"},r.errors.email))),e.createElement("div",null,e.createElement("label",{htmlFor:"password",className:"text-sm block font-medium text-gray-700"},"Password"),e.createElement("div",{className:"mt-1"},e.createElement("input",{id:"password",ref:n,name:"password",type:"password",autoComplete:"current-password","aria-invalid":((u=r==null?void 0:r.errors)==null?void 0:u.password)?!0:void 0,"aria-describedby":"password-error",className:a}),((c=r==null?void 0:r.errors)==null?void 0:c.password)&&e.createElement("div",{className:"pt-1 text-red-700",id:"password-error"},r.errors.password))),e.createElement("input",{type:"hidden",name:"redirectTo",value:R}),e.createElement("div",{className:"flex flex-col gap-4 md:flex-row md:gap-6"},e.createElement("button",{type:"submit",name:"intent",value:"login",className:"w-full rounded bg-green-500 py-2 px-4 text-white hover:bg-green-600 focus:bg-green-400"},"Log in"),e.createElement("button",{type:"submit",name:"intent",value:"signup",className:"w-full rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"},"Sign Up")),e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",{className:"flex items-center"},e.createElement("input",{id:"remember",name:"remember",type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),e.createElement("label",{htmlFor:"remember",className:"text-sm ml-2 block text-gray-900"},"Remember me"))))))}export{k as default,T as meta};
