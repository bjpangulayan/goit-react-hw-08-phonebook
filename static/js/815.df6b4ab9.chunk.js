"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[815],{2390:(e,r,t)=>{t.d(r,{J_:()=>l,Wi:()=>i,hq:()=>s});var o=t(1087),n=t(9202);const i=n.Z.div`
    display: flex;
    flex-direction: column;
    
    &:nth-of-type(2) {
        margin-top: 10px;       
    }
`,l=n.Z.div`
    text-align: center;
    margin-top: 20px;
    color:  ${e=>{let{theme:r}=e;return r.colors.primaryBlack}};
`,s=(0,n.Z)(o.rU)`
    color: ${e=>{let{theme:r}=e;return r.colors.accentOrange}};
    font-weight: 400;  
    margin-left: 10px;    
`},5745:(e,r,t)=>{t.d(r,{II:()=>a,Mm:()=>p,Wi:()=>l,__:()=>s,l0:()=>n,qi:()=>c,vw:()=>i});var o=t(9202);const n=o.Z.form`
   padding: 0 10px;
   margin: 0 auto;
`,i=o.Z.p`
    color:  ${e=>{let{theme:r}=e;return r.colors.primaryBlack}};
    margin-bottom: 20px;
    font-weight: 800;
    text-align: center;  
`,l=o.Z.div`
    display: flex;
    flex-direction: column;
    
    &:nth-of-type(2) {
        margin-top: 10px;
    }
`,s=o.Z.label`
    font-size: 12px;
    color: ${e=>{let{theme:r}=e;return r.colors.primaryBlack}};
    margin-bottom: 4px; 
`,a=o.Z.input`
    border: 1px solid ${e=>{let{theme:r}=e;return r.colors.primaryBlack}};
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
        color: ${e=>{let{theme:r}=e;return r.colors.primaryGreen}};               
    }
  
    &:hover, :focus  {
        border-color: ${e=>{let{theme:r}=e;return r.colors.accentOrange}};
    }

    &:hover + svg, :focus +svg  {
        fill: ${e=>{let{theme:r}=e;return r.colors.accentOrange}};
    }
`,c=o.Z.div`
    position: relative;

    svg {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
    }
`,p=o.Z.button`
    display:flex;
    align-items: center;
    justify-content: space-between;
    min-width: 120px; 
    padding: 8px 16px;
    margin: 20px auto 0;
    background-color: ${e=>{let{theme:r}=e;return r.colors.primaryGreen}};
    color: ${e=>{let{theme:r}=e;return r.colors.milky}};
    border: none;
    border-radius:10px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    font-weight: 600; 
    letter-spacing: .06em;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
         
    :hover, :focus {
        color: ${e=>{let{theme:r}=e;return r.colors.accentOrange}};        
    }

    svg {
        width: 18px;
        height: 18px; 
    }   
`},3246:(e,r,t)=>{t.d(r,{Wi:()=>l,l0:()=>n,vw:()=>i});var o=t(9202);const n=o.Z.form`
   padding: 0 10px;  
`,i=o.Z.p`
    color:  ${e=>{let{theme:r}=e;return r.colors.primaryBlack}};
    margin-bottom: 20px;
    font-weight: 800;
    text-align: center;  
`,l=o.Z.div`
    display: flex;
    flex-direction: column;
    
    &:nth-of-type(2n) {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`},2815:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var o=t(3050),n=t(5804),i=t(2187),l=t(6847),s=t(4420),a=t(7409),c=t(9068),p=t(4217),d=t(5745),m=t(3246),x=t(2390),h=t(184);const u=function(){const e=(0,s.I0)(),r=(0,s.v9)(p.JY);return(0,h.jsxs)(m.l0,{onSubmit:r=>{r.preventDefault();const t=r.target,o={name:t.elements.userName.value,email:t.elements.userEmail.value,password:t.elements.userPassword.value};e((0,c.l9)(o)),t.reset()},children:[(0,h.jsx)(m.vw,{children:"Join us. It`s free!"}),(0,h.jsxs)(m.Wi,{children:[(0,h.jsx)(d.__,{htmlFor:"userName",children:"User name"}),(0,h.jsxs)(d.qi,{children:[(0,h.jsx)(d.II,{type:"text",name:"userName",placeholder:"Name Surname",required:!0}),(0,h.jsx)(n.HHm,{})]})]}),(0,h.jsxs)(m.Wi,{children:[(0,h.jsx)(d.__,{htmlFor:"userEmail",children:"Email"}),(0,h.jsxs)(d.qi,{children:[(0,h.jsx)(d.II,{type:"email",name:"userEmail",placeholder:"user@email.com",required:!0}),(0,h.jsx)(l.rJi,{})]})]}),(0,h.jsxs)(m.Wi,{children:[(0,h.jsx)(d.__,{htmlFor:"userPassword",children:"Password"}),(0,h.jsxs)(d.qi,{children:[(0,h.jsx)(d.II,{type:"password",name:"userPassword",placeholder:"********",required:!0}),(0,h.jsx)(i.Q6l,{})]})]}),(0,h.jsxs)(x.J_,{children:[(0,h.jsx)("b",{children:"Already have an account?"}),(0,h.jsx)(x.hq,{to:"/login",children:"Login Here"})]}),(0,h.jsxs)(d.Mm,{type:"submit",children:["Signup",r?(0,h.jsx)(a.RL,{color:"#f8b400"}):(0,h.jsx)(n.pPZ,{})]})]})};var g=t(767);const f=function(){return(0,h.jsxs)(o.B6,{children:[(0,h.jsx)(o.ql,{children:(0,h.jsx)("title",{children:"Register"})}),(0,h.jsx)(g.h,{children:(0,h.jsx)(g.Y,{children:(0,h.jsx)(u,{})})})]})}},767:(e,r,t)=>{t.d(r,{Y:()=>i,h:()=>n});var o=t(9202);const n=o.Z.section`
    padding-top: 60px;
    padding-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
`,i=o.Z.div`
   padding:0 30px; 
   display: flex;
   justify-content: center;   
`}}]);
//# sourceMappingURL=815.df6b4ab9.chunk.js.map