"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[479],{5745:(e,t,r)=>{r.d(t,{II:()=>i,Mm:()=>d,Wi:()=>a,__:()=>c,l0:()=>o,qi:()=>l,vw:()=>s});var n=r(9202);const o=n.Z.form`
   padding: 0 10px;
   margin: 0 auto;
`,s=n.Z.p`
    color:  ${e=>{let{theme:t}=e;return t.colors.primaryBlack}};
    margin-bottom: 20px;
    font-weight: 800;
    text-align: center;  
`,a=n.Z.div`
    display: flex;
    flex-direction: column;
    
    &:nth-of-type(2) {
        margin-top: 10px;
    }
`,c=n.Z.label`
    font-size: 12px;
    color: ${e=>{let{theme:t}=e;return t.colors.primaryBlack}};
    margin-bottom: 4px; 
`,i=n.Z.input`
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBlack}};
    border-radius: 10px; 
    padding: 12px;
    padding-left: 35px;  
    outline: rgba(0,0,0,0);
    background-color: transparent;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ::placeholder{
        font-size: 14px; 
        align-items:center;
        color: ${e=>{let{theme:t}=e;return t.colors.primaryGreen}};               
    }
  
    &:hover, :focus  {
        border-color: ${e=>{let{theme:t}=e;return t.colors.accentOrange}};
    }

    &:hover + svg, :focus +svg  {
        fill: ${e=>{let{theme:t}=e;return t.colors.accentOrange}};
    }
`,l=n.Z.div`
    position: relative;

    svg {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
    }
`,d=n.Z.button`
    display:flex;
    align-items: center;
    justify-content: space-between;
    min-width: 120px; 
    padding: 8px 16px;
    margin: 20px auto 0;
    background-color: ${e=>{let{theme:t}=e;return t.colors.primaryGreen}};
    color: ${e=>{let{theme:t}=e;return t.colors.milky}};
    border: none;
    border-radius:10px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    font-weight: 600; 
    letter-spacing: .06em;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
         
    :hover, :focus {
        color: ${e=>{let{theme:t}=e;return t.colors.accentOrange}};        
    }

    svg {
        width: 18px;
        height: 18px; 
    }   
`},7479:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var n=r(2791),o=r(3553);const s=e=>e.filter.name,a=e=>e.contacts.contactsList,c=e=>e.contacts.isLoadingDelete,i=e=>e.contacts.isLoadingPage,l=e=>e.contacts.isLoadingAdd,d=e=>e.contacts.error,x=e=>e.contacts.deleteContactId,p=(0,o.P1)([a,s],((e,t)=>{const r=t.toLocaleLowerCase();return e.filter((e=>e.name.toLocaleLowerCase().includes(r)))}));var m=r(4420),u=r(3050),h=r(7306),g=r(7694),b=r(7409),f=r(5804),j=r(5745),v=r(184);function y(){const e=(0,m.I0)(),t=(0,m.v9)(a),r=(0,m.v9)(l);return(0,v.jsxs)(j.l0,{onSubmit:r=>{r.preventDefault();const n=r.target,o=n.elements.contactName.value,s=n.elements.contactNumber.value;if(t.find((e=>e.name.toLowerCase()===o.toLowerCase())))return g.Report.info("Enter a unique name!",`Contact's name "${o}" already exists.`,"OK",{fontFamily:"inherit",borderRadius:"10px",info:{svgColor:"#f8b400",buttonBackground:"#2c786c",titleColor:"#323232",messageColor:"#323232",buttonColor:"#faf5e4",backOverlayColor:"rgba(43, 117, 106, 0.2)"}});e((0,h.uK)({name:o,number:s})),n.reset()},children:[(0,v.jsx)(j.vw,{children:"Create a contact"}),(0,v.jsxs)(j.Wi,{children:[(0,v.jsx)(j.__,{children:"Name"}),(0,v.jsxs)(j.qi,{children:[(0,v.jsx)(j.II,{type:"text",name:"contactName",placeholder:"Name Surname",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0}),(0,v.jsx)(f.HHm,{})]})]}),(0,v.jsxs)(j.Wi,{children:[(0,v.jsx)(j.__,{children:"Number "}),(0,v.jsxs)(j.qi,{children:[(0,v.jsx)(j.II,{type:"tel",name:"contactNumber",placeholder:"+xx (xxx) xxx-xx-xx",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,v.jsx)(f.lfG,{})]})]}),(0,v.jsxs)(j.Mm,{type:"submit",children:["Save",r?(0,v.jsx)(b.RL,{color:"#f8b400"}):(0,v.jsx)(f.RYR,{})]})]})}var Z=r(1273),w=r(9202);const $=w.Z.p`
    text-align: center;
    color: ${e=>{let{theme:t}=e;return t.colors.primaryBlack}};
    margin-top: 20px; 
`;const k=function(e){let{message:t}=e;return(0,v.jsx)($,{children:t})},C=w.Z.div`
    padding: 10px;
    margin: 0 auto;       
`;const _=function(){const e=(0,m.v9)(a),t=(0,m.v9)(s),r=(0,m.v9)(i),n=(0,m.v9)(d),o=(0,m.I0)();return(0,v.jsx)(v.Fragment,{children:e.length>0?(0,v.jsx)(C,{children:(0,v.jsxs)(j.Wi,{children:[(0,v.jsx)(j.__,{children:"Find contacts by name"}),(0,v.jsxs)(j.qi,{children:[(0,v.jsx)(j.II,{type:"text",name:"name",value:t,onChange:e=>{o((0,Z.T)(e.currentTarget.value.trim()))}}),(0,v.jsx)(f.dVI,{})]})]})}):(0,v.jsx)(v.Fragment,{children:!r&&!n&&(0,v.jsx)(k,{message:"There is no contacts"})})})},I=w.Z.div`
`,L=w.Z.p`
    margin-bottom: 10px; 
    font-weight: 500;
    font-size: 20px; 
    color: ${e=>{let{theme:t}=e;return t.colors.primaryGreen}};    
`,z=w.Z.button`
    text-align: center;
    padding: 10px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.primaryGreen}};
    color: ${e=>{let{theme:t}=e;return t.colors.milky}};
    border: none;
    border-radius:50%;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    svg {
        width: 20px;
        height: 20px;
    }

    :hover, :focus {
        color: ${e=>{let{theme:t}=e;return t.colors.accentOrange}};
        transform: scale(1.1);
    }
`;const B=function(e){let{contact:t}=e;const r=(0,m.I0)(),n=(0,m.v9)(c),o=(0,m.v9)(x),s=n&&t.id===o;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(I,{children:[(0,v.jsx)(L,{children:t.name}),(0,v.jsx)("p",{children:t.number})]}),(0,v.jsx)(z,{onClick:()=>{r((0,h.GK)(t.id))},type:"button",children:s?(0,v.jsx)(b.RL,{color:"#f8b400"}):(0,v.jsx)(f.VgY,{})})]})},q=w.Z.ul`
    list-style: none;
    padding: 10px;
    margin: 20px auto 0; 
`,N=w.Z.li`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px; 
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBlack}}; 
    border-radius: 10px; 

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    &:hover, 
    :focus {
        border-color: ${e=>{let{theme:t}=e;return t.colors.accentOrange}}; 
    }
`;const F=function(){const e=(0,m.v9)(p),t=(0,m.v9)(a),r=(0,m.v9)(s);return(0,v.jsx)(q,{children:t.length>0&&0===e.length?(0,v.jsx)(k,{message:`Contact's name "${r}" not found.`}):(0,v.jsx)(v.Fragment,{children:e.map((e=>(0,v.jsx)(N,{children:(0,v.jsx)(B,{contact:e})},e.id)))})})},O=w.Z.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;       
`,G=w.Z.p`
    color:  ${e=>{let{theme:t}=e;return t.colors.primaryBlack}};
    margin-top: 10px;
`;const R=function(e){let{message:t}=e;return(0,v.jsxs)(O,{children:[(0,v.jsx)(b.g4,{color:"#f8b400"}),(0,v.jsx)(G,{children:t})]})},W=w.Z.section`
    padding-top: 60px; 
    padding-bottom: 60px; 
`,A=w.Z.section`
    padding-bottom: 60px; 
`,P=w.Z.div`
    padding:0 30px;
`,S=w.Z.div`
    padding:0 30px; 
    display: flex;
    flex-direction: column; 
    justify-content: center;    
    font-size: 16px;
    color: ${e=>{let{theme:t}=e;return t.colors.primaryBlack}};
    letter-spacing: .03em;
`,K=(w.Z.div`
   height: 40px;
   margin-top: 20px;
`,w.Z.h1`
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px; 
`,w.Z.h2`
    text-align: center;
    margin-top: 20px;     
`,w.Z.span`
    color: ${e=>{let{theme:t}=e;return t.colors.blue}};
    text-transform: uppercase;
`,w.Z.p`
    text-align: center;
    color: ${e=>{let{theme:t}=e;return t.colors.grey}};
    margin-top: 20px; 
`);const T=function(){const e=(0,m.v9)(d),t=(0,m.v9)(i),r=(0,m.I0)();return(0,n.useEffect)((()=>{r((0,h.yF)())}),[r]),(0,v.jsxs)(u.B6,{children:[(0,v.jsx)(u.ql,{children:(0,v.jsx)("title",{children:"Phonebook"})}),(0,v.jsx)(W,{children:(0,v.jsx)(S,{children:(0,v.jsx)(y,{})})}),(0,v.jsx)(A,{children:(0,v.jsxs)(P,{children:[(0,v.jsx)(_,{}),t&&!e&&(0,v.jsx)(R,{message:"Wait! Loading saved contacts..."}),e&&(0,v.jsx)(K,{children:"Something went wrong."}),(0,v.jsx)(F,{})]})})]})}}}]);
//# sourceMappingURL=479.9961fa2d.chunk.js.map