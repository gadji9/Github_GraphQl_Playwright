import{e as c,j as e,L as l}from"./index-ab3828fc.js";import{g as o,b as t,D as m}from"./DefaultLayout-307eeb34.js";const x=o`
  query GetRepository($id: ID!) {
    node(id: $id) {
      ... on Repository {
        name
        description
        url
        pushedAt
        primaryLanguage {
          name
        }
        languages(first: 10) {
          nodes {
            name
          }
        }
        owner {
          id
          avatarUrl
          ... on Organization {
            url
            email
            name
          }
          ... on User {
            url
            name
          }
        }
      }
    }
  }
`,u=()=>{var a;const r=c(),{data:s}=t(x,{variables:{id:r.id}});return s?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"h-1/2 flex gap-10",children:[e.jsx("div",{className:"border w-80 h-full",children:e.jsx("img",{width:320,src:(a=s==null?void 0:s.node)==null?void 0:a.owner.avatarUrl,alt:""})}),e.jsxs("div",{className:"flex flex-col gap-10 leading-7 max-w-xl",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Владелец: "}),e.jsxs("div",{className:"pl-2",children:["Имя: ",s.node.owner.name]}),e.jsxs("div",{className:"pl-2",children:["Ссылка:"," ",e.jsx(l,{to:s.node.owner.url,className:"text-cyan-700",children:s.node.owner.url})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Репозиторий: "}),e.jsxs("div",{className:"pl-2",children:["Название: ",s.node.name]}),e.jsxs("div",{className:"pl-2",children:["Ссылка:"," ",e.jsx(l,{to:s.node.url,className:"text-cyan-700",children:s.node.url})]}),e.jsxs("div",{className:"pl-2",children:["Последние изменения: ",s.node.pushedAt]}),e.jsxs("div",{className:"pl-2",children:["Используемые языки:"," ",s.node.languages.nodes.map((n,i,d)=>i===d.length-1?n.name:n.name+", ")]}),e.jsxs("div",{className:"pl-2",children:["Основной язык: ",s.node.primaryLanguage.name]}),e.jsxs("div",{className:"pl-2",children:["Описание: ",s.node.description||"Отсутствует"]})]})]})]})}):e.jsx("div",{})},j=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:e.jsx("div",{className:"w-full h-full flex flex-column justify-center items-center",children:e.jsx(u,{})})})});export{j as default};
