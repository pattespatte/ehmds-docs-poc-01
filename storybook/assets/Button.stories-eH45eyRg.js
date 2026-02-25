import{t as L,c as g,u as r,a as S,r as w,b as $,n as T,m as U,d as K,o as B,e as C,f as N}from"./iframe-BOIs_yFd.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const j=["type","disabled"],O={key:0,class:"ehmds-button__loading","aria-hidden":"true"},Y={key:1,class:"ehmds-button__icon"},Z=["primary","secondary","tertiary","success","warning","error"],q=["ehmds-primary","ehmds-secondary","ehmds-accent"],V=[...Z,...q],D=["small","medium","large"],_=["button","submit","reset"],f=Object.assign({name:"EhmdsButton",inheritAttrs:!1},{__name:"Button",props:{variant:{type:String,default:"primary",validator:e=>{const t=V.includes(e);return t||console.warn(`[EhmdsButton] Invalid variant '${e}'. Expected one of: ${V.join(", ")}`),t}},size:{type:String,default:"medium",validator:e=>{const t=D.includes(e);return t||console.warn(`[EhmdsButton] Invalid size '${e}'. Expected one of: ${D.join(", ")}`),t}},label:{type:String,default:""},type:{type:String,default:"button",validator:e=>{const t=_.includes(e);return t||console.warn(`[EhmdsButton] Invalid type '${e}'. Expected one of: ${_.join(", ")}`),t}},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:{click:e=>e instanceof MouseEvent},setup(e,{expose:t,emit:x}){const A=e,I=x,{variant:M,disabled:v,rounded:k,shadow:F,fullWidth:z,loading:n,size:H}=L(A),P=K(()=>{const a=["ehmds-button",`ehmds-button--${M.value}`,`ehmds-button--${H.value}`];return k.value&&a.push("ehmds-button--rounded"),F.value&&a.push("ehmds-button--shadow"),z.value&&a.push("ehmds-button--full-width"),n.value&&a.push("ehmds-button--loading"),v.value&&a.push("ehmds-button--disabled"),a}),W=a=>{if(v.value||n.value){a.preventDefault(),a.stopPropagation();return}I("click",a)};return t({focus:()=>{}}),(a,G)=>(B(),g("button",U({class:P.value,type:e.type,disabled:r(v)||r(n)},a.$attrs,{onClick:W}),[r(n)?(B(),g("span",O)):S("",!0),a.$slots.icon&&!r(n)?(B(),g("span",Y,[w(a.$slots,"icon",{},void 0,!0)])):S("",!0),$("span",{class:T(["ehmds-button__content",{"ehmds-button__content--loading":r(n)}])},[w(a.$slots,"default",{},()=>[C(N(e.label),1)],!0)],2)],16,j))}}),E=R(f,[["__scopeId","data-v-75c42348"]]);f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{name:"EhmdsButton",exportName:"default",displayName:"Button",description:"",tags:{},expose:[{name:"focus"}],props:[{name:"variant",description:"Button variant - extends FKUI variants with EHMDS custom variants",tags:{type:[{title:"type",type:{name:"'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'ehmds-primary' | 'ehmds-secondary' | 'ehmds-accent'"}}]},values:["primary","secondary","tertiary","success","warning","error","ehmds-primary","ehmds-secondary","ehmds-accent"],type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",description:"Button size",tags:{type:[{title:"type",type:{name:"'small' | 'medium' | 'large'"}}]},values:["small","medium","large"],type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}},{name:"label",description:"Button label text - used as fallback when no slot content is provided",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",description:"Button type attribute for form handling",tags:{type:[{title:"type",type:{name:"'button' | 'submit' | 'reset'"}}]},values:["button","submit","reset"],type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"disabled",description:"Disabled state",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",description:"Add rounded corners (EHMDS enhancement)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"shadow",description:"Add shadow effect (EHMDS enhancement)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fullWidth",description:"Full width button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",description:"Loading state - prevents interaction and shows loading indicator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Emitted when button is clicked",properties:[{type:{names:["MouseEvent"]},name:"event",description:"The click event"}],tags:[{title:"param",type:{name:"MouseEvent"},name:"event",description:"The click event"}]}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["/Users/patrik/repo/ehmds-docs-poc-01/src/components/Button.vue"]});const ee={title:"EHMDS/Button",component:E,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","success","warning","error","ehmds-primary","ehmds-secondary","ehmds-accent"],description:"Button variant style",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"Button size",table:{defaultValue:{summary:"medium"}}},label:{control:"text",description:"Button label text (fallback when no slot content)"},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Loading state - shows spinner and prevents interaction",table:{defaultValue:{summary:!1}}},rounded:{control:"boolean",description:"Add rounded corners (EHMDS enhancement)",table:{defaultValue:{summary:!1}}},shadow:{control:"boolean",description:"Add shadow effect (EHMDS enhancement)",table:{defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Full width button",table:{defaultValue:{summary:!1}}},type:{control:"select",options:["button","submit","reset"],description:"Button type attribute for form handling",table:{defaultValue:{summary:"button"}}},onClick:{action:"clicked"}},parameters:{docs:{description:{component:"Default export for Storybook metadata"}}}},s={args:{variant:"ehmds-primary",label:"Primary Button"}},o={args:{variant:"ehmds-secondary",label:"Secondary Button"}},i={args:{variant:"ehmds-accent",label:"Accent Button"}},d={args:{variant:"primary",label:"FKUI Primary"}},l={render:e=>({components:{EhmdsButton:E},setup(){return{args:e}},template:`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <EhmdsButton v-bind="args" size="small" label="Small" />
        <EhmdsButton v-bind="args" size="medium" label="Medium" />
        <EhmdsButton v-bind="args" size="large" label="Large" />
      </div>
    `}),args:{variant:"ehmds-primary"}},c={args:{variant:"ehmds-primary",label:"Rounded Button",rounded:!0}},m={args:{variant:"ehmds-primary",label:"Shadow Button",shadow:!0}},u={args:{variant:"ehmds-primary",label:"Full Width Button",fullWidth:!0}},p={args:{variant:"ehmds-primary",label:"Disabled Button",disabled:!0}},y={args:{variant:"ehmds-primary",label:"Loading Button",loading:!0}},h={render:e=>({components:{EhmdsButton:E},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 2rem;">
        <div>
          <h3>EHMDS Variants</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <EhmdsButton variant="ehmds-primary" label="EHMDS Primary" />
            <EhmdsButton variant="ehmds-secondary" label="EHMDS Secondary" />
            <EhmdsButton variant="ehmds-accent" label="EHMDS Accent" />
          </div>
        </div>
        <div>
          <h3>FKUI Variants</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <EhmdsButton variant="primary" label="Primary" />
            <EhmdsButton variant="secondary" label="Secondary" />
            <EhmdsButton variant="tertiary" label="Tertiary" />
            <EhmdsButton variant="success" label="Success" />
            <EhmdsButton variant="warning" label="Warning" />
            <EhmdsButton variant="error" label="Error" />
          </div>
        </div>
      </div>
    `})},b={args:{variant:"ehmds-primary",label:"Click Me"},play:async({canvasElement:e})=>{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ehmds-primary',
    label: 'Primary Button'
  }
}`,...s.parameters?.docs?.source},description:{story:"Primary button with default EHMDS styling",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ehmds-secondary',
    label: 'Secondary Button'
  }
}`,...o.parameters?.docs?.source},description:{story:"Secondary button with subtle styling",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ehmds-accent',
    label: 'Accent Button'
  }
}`,...i.parameters?.docs?.source},description:{story:"Accent button for highlights and CTAs",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'FKUI Primary'
  }
}`,...d.parameters?.docs?.source},description:{story:"FKUI compatible primary button",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      EhmdsButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <EhmdsButton v-bind="args" size="small" label="Small" />
        <EhmdsButton v-bind="args" size="medium" label="Medium" />
        <EhmdsButton v-bind="args" size="large" label="Large" />
      </div>
    \`
  }),
  args: {
    variant: 'ehmds-primary'
  }
}`,...l.parameters?.docs?.source},description:{story:"Button size variations",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ehmds-primary',
    label: 'Rounded Button',
    rounded: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Rounded button variant",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ehmds-primary',
    label: 'Shadow Button',
    shadow: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Button with shadow effect",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ehmds-primary',
    label: 'Full Width Button',
    fullWidth: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Full width button",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ehmds-primary',
    label: 'Disabled Button',
    disabled: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Disabled button state",...p.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ehmds-primary',
    label: 'Loading Button',
    loading: true
  }
}`,...y.parameters?.docs?.source},description:{story:"Loading button state",...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      EhmdsButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 2rem;">
        <div>
          <h3>EHMDS Variants</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <EhmdsButton variant="ehmds-primary" label="EHMDS Primary" />
            <EhmdsButton variant="ehmds-secondary" label="EHMDS Secondary" />
            <EhmdsButton variant="ehmds-accent" label="EHMDS Accent" />
          </div>
        </div>
        <div>
          <h3>FKUI Variants</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <EhmdsButton variant="primary" label="Primary" />
            <EhmdsButton variant="secondary" label="Secondary" />
            <EhmdsButton variant="tertiary" label="Tertiary" />
            <EhmdsButton variant="success" label="Success" />
            <EhmdsButton variant="warning" label="Warning" />
            <EhmdsButton variant="error" label="Error" />
          </div>
        </div>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source},description:{story:"All FKUI and EHMDS variants",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ehmds-primary',
    label: 'Click Me'
  },
  play: async ({
    canvasElement
  }) => {
    // For testing interactions
  }
}`,...b.parameters?.docs?.source},description:{story:"Interactive button with click handler",...b.parameters?.docs?.description}}};const ae=["Primary","Secondary","Accent","FKUIPrimary","Sizes","Rounded","WithShadow","FullWidth","Disabled","Loading","AllVariants","Interactive"];export{i as Accent,h as AllVariants,p as Disabled,d as FKUIPrimary,u as FullWidth,b as Interactive,y as Loading,s as Primary,c as Rounded,o as Secondary,l as Sizes,m as WithShadow,ae as __namedExportsOrder,ee as default};
