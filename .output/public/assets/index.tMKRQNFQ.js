import{u as l}from"./count.UD69tn0-.js";import{H as u,x as i,y as o,z as c,G as p,v as m}from"./entry.Q0aXqg1M.js";import"./state.sZbuQ4sd.js";const d={__name:"index",async setup(_){let e,s;const n=l(),r=([e,s]=u(()=>$fetch("/api/Hello")),e=await e,s(),e);return console.log(r),(f,t)=>(m(),i("div",null,[o("h1",null,"Count: "+c(p(n)),1),o("button",{onClick:t[0]||(t[0]=a=>n.value++)},"Increment"),o("button",{onClick:t[1]||(t[1]=a=>n.value--)},"Decrement")]))}};export{d as default};