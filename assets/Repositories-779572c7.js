import{r as d,m as O,_ as w,j as e,R as P,u as L,a as A,s as G,b as R,c as M,d as _,L as q}from"./index-ab3828fc.js";import{u as z,a as Q,g as T,D as H}from"./DefaultLayout-307eeb34.js";var U=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function F(r,n){var s,t=d.useRef(),l=d.useRef(),f=d.useRef(),c=t.current?O(n,t.current):n,u=(s=c==null?void 0:c.query)!==null&&s!==void 0?s:r;l.current=c,f.current=u;var o=z(Q(n&&n.client),u),i=o.useQuery(w(w({},c),{skip:!t.current})),h=i.observable.options.initialFetchPolicy||o.getDefaultFetchPolicy(),x=Object.assign(i,{called:!!t.current}),y=d.useMemo(function(){for(var g={},v=function(k){var $=x[k];g[k]=function(){return t.current||(t.current=Object.create(null),o.forceUpdate()),$.apply(this,arguments)}},j=0,C=U;j<C.length;j++){var S=C[j];v(S)}return g},[]);Object.assign(x,y);var N=d.useCallback(function(g){t.current=g?w(w({},g),{fetchPolicy:g.fetchPolicy||h}):{fetchPolicy:h};var v=O(l.current,w({query:f.current},t.current)),j=o.executeQuery(w(w({},v),{skip:!1})).then(function(C){return Object.assign(C,y)});return j.catch(function(){}),j},[]);return[N,x]}const Z=({data:r=[],fields:n={},isLoading:s=!1,loadingRow:t=NaN,sort:l=[],onSortUpdate:f=()=>{},children:c})=>{const[u,o]=d.useState([]),i=()=>{const h=[];for(let x=0;x<r.length;x++){const y=r[x];for(const N of Object.keys(n))h.push({key:N,row:y,rowIndex:x})}o(h)};return d.useEffect(()=>{i()},[r,n]),e.jsx(d.Fragment,{children:e.jsxs("div",{className:"grid-table w-full grid gap-y-[2px] bg-[#f1f1f1] border-[#f1f1f1] border-[2px] rounded-lg",style:{gridTemplateColumns:`repeat(${Object.keys(n).length}, auto)`},children:[Object.keys(n).map((h,x)=>e.jsx(V,{field:n[h],fieldName:h,index:x,isLoading:s,sortType:l[1],sortField:l[0],onClick:f},h+x)),s&&e.jsx(I,{fieldsCount:Object.keys(n).length,children:e.jsx("div",{className:"h-16",children:e.jsx(B,{})})}),!s&&!!u.length&&u.map((h,x)=>e.jsx(W,{item:h,index:x,fields:n,loadingRow:t},h.key+x)),!s&&!u.length&&e.jsx(I,{className:"py-6",fieldsCount:Object.keys(n).length,children:c||"No data"})]})})},m=r=>e.jsx("div",{...r,className:`${r.className} grid-table-cell text-[14px] bg-white flex items-center ${r.align?`justify-${r.align}`:"justify-center"}  p-2 `,children:r.children}),I=({className:r,fieldsCount:n,children:s})=>e.jsx(m,{className:r,style:{gridColumn:`1/${n+1}`},children:s}),V=({field:r={},fieldName:n,index:s,isLoading:t=!1,sortType:l,sortField:f,onClick:c=()=>{}})=>typeof r.label=="function"?r.label(n,s):e.jsxs(m,{className:`grid-table-column-title text-[#808080] text-center group ${r.sortBy&&!t?"cursor-pointer":"pointer-events-none"}`,align:r.align,onClick:()=>c([r.sortBy,l==="asc"?"desc":"asc"]),children:[r.sortBy===f&&e.jsxs("svg",{width:"6",height:"11",viewBox:"0 0 6 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:" mr-[6px]",children:[e.jsx("path",{d:"M2.99999 11L0.401917 8H5.59807L2.99999 11Z",fill:"#808080",fillOpacity:`${l!=="asc"?"1":"0.4"}`}),e.jsx("path",{d:"M2.99999 0L5.59807 3H0.401917L2.99999 0Z",fill:"#808080",fillOpacity:`${l==="asc"?"1":"0.4"}`})]}),e.jsx("span",{className:r.sortBy?"mr-[12px]":"",children:r.label||""})]},n+s),W=({item:r,index:n,fields:s,loadingRow:t=NaN})=>{var u,o,i,h;const l=s==null?void 0:s[r.key],f=Object.keys(s);if(t===r.rowIndex)return r.key===f[0]?e.jsx(I,{fieldsCount:f.length,children:e.jsx(B,{})}):e.jsx(e.Fragment,{});if(l.component&&(u=r.row)!=null&&u[r.key])return l.component((o=r.row)==null?void 0:o[r.key],n,r.row,r.rowIndex);let c=(i=r.row)==null?void 0:i[r.key];return c=typeof c=="number"||typeof c=="string"?c:"-",l.formatter&&(c=l.formatter((h=r.row)==null?void 0:h[r.key],n,r.row,r.rowIndex)),e.jsx(m,{children:c},n)},B=()=>e.jsx("div",{children:e.jsx("div",{className:"loader-container",children:e.jsx("div",{className:"spinner"})})}),X=({fill:r="#5F5F5F",width:n="800",height:s="800"})=>e.jsxs("svg",{fill:r,height:s,width:n,version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"transition",children:[e.jsx("g",{children:e.jsx("g",{children:e.jsx("path",{d:`M503.847,432.949l-89.897-89.897c-0.002-0.002-0.003-0.003-0.006-0.006s-0.003-0.003-0.006-0.006l-32.135-32.135\r
			c-10.855-10.856-28.522-10.86-39.381,0l-3.939,3.939l-13.571-13.571c26.587-31.878,42.607-72.861,42.607-117.519\r
			C367.517,82.432,285.085,0,183.762,0S0.009,82.432,0.009,183.754s82.43,183.754,183.753,183.754\r
			c44.658,0,85.641-16.02,117.519-42.606l13.571,13.57l-3.94,3.94c-10.854,10.857-10.854,28.523,0.002,39.381l122.043,122.043\r
			c10.881,10.883,28.499,10.886,39.383,0.001l31.506-31.506C514.705,461.474,514.705,443.808,503.847,432.949z M183.762,334.091\r
			c-82.896,0-150.337-67.441-150.337-150.337S100.866,33.417,183.762,33.417S334.1,100.858,334.1,183.754\r
			S266.658,334.091,183.762,334.091z M338.482,362.103l23.629-23.629l16.388,16.388l-23.629,23.629L338.482,362.103z\r
			 M452.649,476.269l-74.15-74.15l23.629-23.629l74.15,74.15L452.649,476.269z`})})}),e.jsx("g",{children:e.jsx("g",{children:e.jsx("path",{d:`M183.76,66.835c-9.228,0-16.709,7.481-16.709,16.709c0,9.228,7.481,16.709,16.709,16.709\r
			c46.045,0,83.505,37.457,83.505,83.5c0,9.228,7.481,16.709,16.709,16.709c9.228,0,16.709-7.481,16.709-16.709\r
			C300.683,119.284,248.231,66.835,183.76,66.835z`})})})]});function Y(r,n=300){let s;return(...t)=>{clearTimeout(s),s=setTimeout(()=>{r.apply(this,t)},n)}}const J=({onSearch:r})=>{const n=L(u=>u.search.value),[s,t]=d.useState(!1),[l,f]=d.useState(n),c=d.useRef(0);return d.useEffect(()=>{c.current>1?Y(r)(l):c.current++},[l]),d.useEffect(()=>{const u=o=>{var i,h;o&&o.target&&o.target.className&&((h=String((i=o.target)==null?void 0:i.className))!=null&&h.includes("searchMore")?t(!0):t(!1))};return document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}},[]),e.jsx(d.Fragment,{children:e.jsxs("div",{className:"flex flex-row gap-2 border rounded-2xl hover:shadow-lg transition items-center pl-3 overflow-hidden searchMore border-gray-300 h-10 mb-2",children:[e.jsx("label",{htmlFor:"searchInput searchMore",children:e.jsx("span",{className:"pointer-events-none",children:e.jsx("div",{className:"transition",children:e.jsx(X,{width:"14",fill:s?"#002E81":"#cccccc"})})})}),e.jsx("input",{value:l,onChange:u=>f(u.target.value),id:"searchInput",type:"text",placeholder:"Поиск",className:`w-[288px] h-7 pr-1 text-xs  outline-none transition-all duration-300 focus:placeholder-brandLight ${s&&"lg:w-[288px]"} searchMore`}),e.jsx("button",{"aria-label":"Close",className:`relative right-3 transition-opacity duration-500 ${l?"opacity-100":"opacity-0 cursor-default"}`,onClick:()=>f(""),children:"X"})]})})},K=P.memo(J),ee=({fill:r="#5F5F5F",width:n="800",height:s="800"})=>e.jsxs("svg",{width:n,height:s,viewBox:"-4.5 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:r,children:[e.jsx("title",{children:"arrow_right [#336]"}),e.jsx("desc",{children:"Created with Sketch."}),e.jsx("defs",{}),e.jsx("g",{id:"Page-1",stroke:"none",fill:"none",children:e.jsx("g",{id:"Dribbble-Light-Preview",transform:"translate(-305.000000, -6679.000000)",fill:"#000000",children:e.jsx("g",{id:"icons",transform:"translate(56.000000, 160.000000)",children:e.jsx("path",{d:"M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769",id:"arrow_right-[#336]"})})})})]}),re=({fill:r="#5F5F5F",width:n="800",height:s="800"})=>e.jsxs("svg",{width:n,height:s,viewBox:"-4.5 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:r,children:[e.jsx("title",{children:"arrow_left [#335]"}),e.jsx("desc",{children:"Created with Sketch."}),e.jsx("defs",{}),e.jsx("g",{id:"Page-1",stroke:"none",fill:"none",children:e.jsx("g",{id:"Dribbble-Light-Preview",transform:"translate(-345.000000, -6679.000000)",fill:"#000000",children:e.jsx("g",{id:"icons",transform:"translate(56.000000, 160.000000)",children:e.jsx("path",{d:"M299.633777,6519.29231 L299.633777,6519.29231 C299.228878,6518.90256 298.573377,6518.90256 298.169513,6519.29231 L289.606572,6527.55587 C288.797809,6528.33636 288.797809,6529.60253 289.606572,6530.38301 L298.231646,6538.70754 C298.632403,6539.09329 299.27962,6539.09828 299.685554,6538.71753 L299.685554,6538.71753 C300.100809,6538.32879 300.104951,6537.68821 299.696945,6537.29347 L291.802968,6529.67648 C291.398069,6529.28574 291.398069,6528.65315 291.802968,6528.26241 L299.633777,6520.70538 C300.038676,6520.31563 300.038676,6519.68305 299.633777,6519.29231",id:"arrow_left-[#335]"})})})})]}),se=({totalPages:r=1,setPage:n,disabled:s=!1,activePage:t=1,alignment:l="justify-start"})=>{const[f,c]=d.useState([]),u=o=>{s||o===t||o>r||o<1||Math.abs(t-o)!=1||n(o)};return d.useEffect(()=>{const o=[];if(r<=8)for(let i=1;i<=r;i++)o.push(i);else if(t<=3){for(let i=1;i<=5;i++)o.push(i);o.push(NaN,r)}else if(t>=r-4){o.push(1,NaN);for(let i=r-4;i<=r;i++)o.push(i)}else o.push(1,NaN,t-1,t,t+1,NaN,r);c(o)},[r,t]),e.jsx("div",{className:`flex flex-row w-full ${l} pr-4 pl-4`,children:e.jsxs("div",{className:"flex flex-row gap-1 px-2 py-5 items-center",children:[e.jsx("div",{className:t===1?"opacity-30":"cursor-pointer",onClick:()=>u(t-1),children:e.jsx(re,{width:"20",height:"20"})}),f.map((o,i)=>isNaN(o)?e.jsx("div",{className:"w-[32px] h-[32px] text-[#3072C4] flex items-center justify-center cursor-pointer",children:"..."},i):e.jsx("div",{onClick:()=>u(o),className:"min-w-[32px] h-[32px] text-[#3072C4] flex items-center justify-center "+(o===t&&" bg-[#E5E5E5] rounded-full text-black")+(Math.abs(t-o)===1?" cursor-pointer":" cursor-default")+(s?" opacity-50":""),children:o},i)),e.jsx("div",{className:t===r?"opacity-30":"cursor-pointer",onClick:()=>u(t+1),children:e.jsx(ee,{width:"20",height:"20"})})]})})},b=10,te=T`
  query GetRepositories(
    $repositoryName: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    search(
      query: $repositoryName
      type: REPOSITORY
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          name
          pushedAt
          url
          description
          primaryLanguage {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`,ne=T`
  query GetOwnRepositories(
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    viewer {
      repositories(first: $first, last: $last, after: $after, before: $before) {
        totalCount
        nodes {
          id
          name
          pushedAt
          url
          description
          primaryLanguage {
            name
          }
        }

        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`,oe={name:{label:"Название",sortBy:"sort_name",component:(r,n,s)=>e.jsx(m,{className:"flex-col text-xs cursor-pointer",children:e.jsx(q,{to:s.id,className:"text-cyan-700 text-center",children:r})})},primaryLanguage:{label:"Основной язык",sortBy:"sort_primary_language",component:r=>e.jsx(m,{className:"flex-col text-xs",children:e.jsx("p",{children:r.name})})},pushedAt:{label:"Последний коммит",sortBy:"sort_last_commit",component:r=>e.jsx(m,{className:"flex-col text-xs",children:e.jsx("p",{children:r})})},url:{label:"Ссылка",sortBy:"sort_link",component:r=>e.jsx(m,{className:"flex-col text-xs",children:e.jsx("p",{children:r})})},description:{label:"Описание",sortBy:"sort_link",component:r=>e.jsx(m,{className:"flex-col text-xs ",children:e.jsx("p",{className:"max-w-xl max-h-8 text-ellipsis overflow-hidden whitespace-nowrap text-center",children:r})})}},ae=()=>{const r=L(a=>a.repositories.repositories),n=L(a=>a.repositories.totalCount),s=L(a=>a.search.value),t=L(a=>a.page.value),l=A(),[f,c]=d.useState(),[u,o]=d.useState(),i=d.useCallback(v,[]),[h,{loading:x,data:y}]=F(ne),[N,{loading:g}]=F(te,{notifyOnNetworkStatusChange:!0});d.useEffect(()=>{if(!(t>1)){if(s.length){v(s);return}S({first:b})}},[]);function v(a){if(l(G(a)),a.length===0){C();return}k({repositoryName:a,first:b}),l(R(1))}const j=a=>{const p=$(a);if(s.length===0){S(p),l(R(a));return}k({repositoryName:s,...p}),l(R(a))},C=()=>{y?E(y):S({first:b}),l(R(1))},S=a=>{h({variables:a,onCompleted:p=>{E(p)}})},k=a=>{N({variables:a,onCompleted:p=>{D(p)}})},$=a=>{let p={};return a<=t?p={before:f,last:b}:p={after:u,first:b},p},E=a=>{a&&(l(M(a.viewer.repositories.nodes)),c(a.viewer.repositories.pageInfo.startCursor||""),o(a.viewer.repositories.pageInfo.endCursor||""),l(_(a.viewer.repositories.totalCount)))},D=a=>{a&&(l(M(a.search.nodes)),c(a.search.pageInfo.startCursor||""),o(a.search.pageInfo.endCursor||""),l(_(a.search.repositoryCount)))};return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"w-full flex",children:[e.jsxs("div",{className:"w-1/2",children:[e.jsx("h1",{className:"text-2xl ml-3",children:"Репозитории"})," "]}),e.jsx("div",{className:"w-full flex justify-end",children:e.jsx(K,{onSearch:i})})]}),e.jsx(Z,{data:r||[],fields:oe,isLoading:x||g}),e.jsx(se,{totalPages:Math.ceil(n/b),setPage:j,activePage:t,alignment:"justify-end"})]})},ce=()=>e.jsx(H,{children:e.jsx("div",{className:"w-full h-full flex justify-center items-center",children:e.jsx(ae,{})})});export{ce as default};
