"use strict";(self.webpackChunknodelpers_docs=self.webpackChunknodelpers_docs||[]).push([[228],{4657:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"utils/crypto/verify-string-hash","title":"verifyStringHash","description":"Verifies if the provided string, when hashed using the given algorithm and encoding, matches the provided hash.","source":"@site/docs/utils/crypto/generateStringHash.md","sourceDirName":"utils/crypto","slug":"/utils/crypto/verify-string-hash","permalink":"/nodelpers/docs/utils/crypto/verify-string-hash","draft":false,"unlisted":false,"editUrl":"https://github.com/karanBRAVO/nodelpers/tree/main/docs/docs/utils/crypto/generateStringHash.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"verify-string-hash","sidebar_label":"Verify Hash","sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"Generate Hash","permalink":"/nodelpers/docs/utils/crypto/generate-string-hash"},"next":{"title":"Generate Random Bytes","permalink":"/nodelpers/docs/utils/crypto/generate-random-bytes"}}');var i=s(4848),t=s(8453);const o={id:"verify-string-hash",sidebar_label:"Verify Hash",sidebar_position:2},a="verifyStringHash",d={},c=[];function h(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"verifystringhash",children:"verifyStringHash"})}),"\n",(0,i.jsx)(n.p,{children:"Verifies if the provided string, when hashed using the given algorithm and encoding, matches the provided hash."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"algorithm"})," to use for hashing. Defaults to ",(0,i.jsx)(n.code,{children:'"SHA256"'}),"."]}),"\n",(0,i.jsx)(n.p,{children:'Available options: "SHA256", "SHA1", "MD5", "SHA512", "SHA224", "SHA384".'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"encoding"})," The encoding format for the hash output. Defaults to ",(0,i.jsx)(n.code,{children:'"hex"'}),"."]}),"\n",(0,i.jsx)(n.p,{children:'Available options: "hex", "base64", "binary", "base64url".'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"import the method"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { verifyStringHash } from "nodelpers";\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"params"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"s: string;\nhash: string;\nalgo: TAlgorithmKey;\nencoding: TEncoding;\n\nTAlgorithmKey = keyof typeof HASH_ALGORITHMS;\nTEncoding = BinaryToTextEncoding;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"usage"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'verifyStringHash(\n  "Hello World!!",\n  "096c0a72c31f9a2d65126d8e8a401a2ab2f2e21d0a282a6ffe6642bbef65ffd9"\n);\n'})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(6540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);