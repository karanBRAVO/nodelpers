"use strict";(self.webpackChunknodelpers_docs=self.webpackChunknodelpers_docs||[]).push([[812],{9572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"utils/date-time/date-diff","title":"dateDiff","description":"Returns the absolute difference between two dates in the specified unit.","source":"@site/docs/utils/date-time/dateDiff.md","sourceDirName":"utils/date-time","slug":"/utils/date-time/date-diff","permalink":"/nodelpers/docs/utils/date-time/date-diff","draft":false,"unlisted":false,"editUrl":"https://github.com/karanBRAVO/nodelpers/tree/main/docs/docs/utils/date-time/dateDiff.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"date-diff","sidebar_label":"Date Difference","sidebar_position":8},"sidebar":"docSidebar","previous":{"title":"Month","permalink":"/nodelpers/docs/utils/date-time/get-month"},"next":{"title":"Add Time","permalink":"/nodelpers/docs/utils/date-time/add-time"}}');var s=n(4848),d=n(8453);const r={id:"date-diff",sidebar_label:"Date Difference",sidebar_position:8},a="dateDiff",o={},l=[];function c(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"datediff",children:"dateDiff"})}),"\n",(0,s.jsx)(t.p,{children:"Returns the absolute difference between two dates in the specified unit."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"import the method"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { dateDiff } from "nodelpers";\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"params"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'d1: TDate;\nd2: TDate;\nunit: TDateUnits;\nabsolute: boolean;\n\nTDate = number | string | Date;\nTDateUnits =\n  | "year"\n  | "month"\n  | "day"\n  | "hour"\n  | "minute"\n  | "second"\n  | "milliseconds";\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"usage"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"dateDiff(2000, 1000); // 1000\n"})})]})}function u(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},d=i.createContext(s);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);