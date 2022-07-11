import"./index.7c3200e7.js";import{a as s,j as l}from"./jsx-runtime.12b518f2.js";const n=({primary:t=!1,backgroundColor:u,size:e,label:r})=>{const a=t?"storybook-button--primary":"storybook-button--secondary";return s("button",{type:"button",className:["storybook-button",`storybook-button--${e}`,a].join(" "),children:[r,r]})};n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},required:!1}}};var g={parameters:{storySource:{source:`import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},secondary:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},large:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},small:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}}}}},title:"Atoms/Button",component:n,argTypes:{backgroundColor:{control:"color"}}};const o=t=>l(n,{...t}),c=o.bind({});c.args={primary:!0,label:"Button"};const i=o.bind({});i.args={label:"Button"};const d=o.bind({});d.args={size:"large",label:"Button"};const p=o.bind({});p.args={size:"small",label:"Button"};const b=["Primary","Secondary","Large","Small"];export{d as Large,c as Primary,i as Secondary,p as Small,b as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories.b4916c97.js.map
