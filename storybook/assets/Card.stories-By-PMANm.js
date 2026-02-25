import{c as i,b as p,f as u,a as f,r as l,g as h,o as m}from"./iframe-BOIs_yFd.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const c={name:"EhmdsCard",props:{title:{type:String,default:""},background:{type:String,default:"#fff"},border:{type:String,default:"#e0e0e0"}}},C={key:0,class:"ehmds-card-header"},b={class:"ehmds-card-body"},E={key:1,class:"ehmds-card-footer"};function y(e,k,s,_,v,S){return m(),i("div",{class:"ehmds-card",style:h({backgroundColor:s.background,borderColor:s.border})},[s.title?(m(),i("header",C,[p("h3",null,u(s.title),1)])):f("",!0),p("div",b,[l(e.$slots,"default",{},void 0,!0)]),e.$slots.footer?(m(),i("footer",E,[l(e.$slots,"footer",{},void 0,!0)])):f("",!0)],4)}const r=g(c,[["render",y],["__scopeId","data-v-8fc82af6"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{displayName:"EhmdsCard",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"background",type:{name:"string"},defaultValue:{func:!1,value:'"#fff"'}},{name:"border",type:{name:"string"},defaultValue:{func:!1,value:'"#e0e0e0"'}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/Users/patrik/repo/ehmds-docs-poc-01/src/components/Card.vue"]});const V={title:"EHMDS/Card",component:r,tags:["autodocs"],argTypes:{title:{control:"text",description:"Card title displayed in header",table:{defaultValue:{summary:""}}},background:{control:"color",description:"Card background color",table:{defaultValue:{summary:"#fff"}}},border:{control:"color",description:"Card border color",table:{defaultValue:{summary:"#e0e0e0"}}}},parameters:{docs:{description:{component:"Default export for Storybook metadata"}}}},t={args:{title:"Card Title",background:"#ffffff",border:"#e0e0e0"},render:e=>({components:{EhmdsCard:r},setup(){return{args:e}},template:`
      <EhmdsCard v-bind="args">
        <p>This is the card content. You can put any content here including text, images, or other components.</p>
      </EhmdsCard>
    `})},a={args:{background:"#ffffff",border:"#e0e0e0"},render:e=>({components:{EhmdsCard:r},setup(){return{args:e}},template:`
      <EhmdsCard v-bind="args">
        <p>This card has no title header, just content.</p>
      </EhmdsCard>
    `})},n={args:{title:"Card with Footer",background:"#ffffff",border:"#e0e0e0"},render:e=>({components:{EhmdsCard:r},setup(){return{args:e}},template:`
      <EhmdsCard v-bind="args">
        <template #default>
          <p>This card has a footer section with action buttons.</p>
        </template>
        <template #footer>
          <button>Cancel</button>
          <button style="margin-left: 8px;">Confirm</button>
        </template>
      </EhmdsCard>
    `})},o={args:{title:"Custom Styled Card",background:"#f0f4f8",border:"#2c5aa0"},render:e=>({components:{EhmdsCard:r},setup(){return{args:e}},template:`
      <EhmdsCard v-bind="args">
        <p>This card uses EHMDS theme colors for background and border.</p>
      </EhmdsCard>
    `})},d={render:()=>({components:{EhmdsCard:r},template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
        <EhmdsCard title="Card 1" background="#ffffff" border="#e0e0e0">
          <p>Content for card 1</p>
        </EhmdsCard>
        <EhmdsCard title="Card 2" background="#f0f4f8" border="#2c5aa0">
          <p>Content for card 2</p>
        </EhmdsCard>
        <EhmdsCard title="Card 3" background="#fff5f0" border="#ff6b35">
          <p>Content for card 3</p>
        </EhmdsCard>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    background: '#ffffff',
    border: '#e0e0e0'
  },
  render: args => ({
    components: {
      EhmdsCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <EhmdsCard v-bind="args">
        <p>This is the card content. You can put any content here including text, images, or other components.</p>
      </EhmdsCard>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"Basic card with title and content",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    background: '#ffffff',
    border: '#e0e0e0'
  },
  render: args => ({
    components: {
      EhmdsCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <EhmdsCard v-bind="args">
        <p>This card has no title header, just content.</p>
      </EhmdsCard>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"Card without title",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card with Footer',
    background: '#ffffff',
    border: '#e0e0e0'
  },
  render: args => ({
    components: {
      EhmdsCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <EhmdsCard v-bind="args">
        <template #default>
          <p>This card has a footer section with action buttons.</p>
        </template>
        <template #footer>
          <button>Cancel</button>
          <button style="margin-left: 8px;">Confirm</button>
        </template>
      </EhmdsCard>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:"Card with footer slot",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Card',
    background: '#f0f4f8',
    border: '#2c5aa0'
  },
  render: args => ({
    components: {
      EhmdsCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <EhmdsCard v-bind="args">
        <p>This card uses EHMDS theme colors for background and border.</p>
      </EhmdsCard>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:"Card with custom styling",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      EhmdsCard
    },
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
        <EhmdsCard title="Card 1" background="#ffffff" border="#e0e0e0">
          <p>Content for card 1</p>
        </EhmdsCard>
        <EhmdsCard title="Card 2" background="#f0f4f8" border="#2c5aa0">
          <p>Content for card 2</p>
        </EhmdsCard>
        <EhmdsCard title="Card 3" background="#fff5f0" border="#ff6b35">
          <p>Content for card 3</p>
        </EhmdsCard>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:"Multiple cards in a grid",...d.parameters?.docs?.description}}};const N=["Basic","NoTitle","WithFooter","CustomStyled","CardGrid"];export{t as Basic,d as CardGrid,o as CustomStyled,a as NoTitle,n as WithFooter,N as __namedExportsOrder,V as default};
