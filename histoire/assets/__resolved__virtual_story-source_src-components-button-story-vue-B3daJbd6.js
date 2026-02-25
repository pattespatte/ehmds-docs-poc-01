const __resolved__virtual_storySource_srcComponentsButtonStoryVue = `<script setup lang="ts">
import EhmdsButton from './Button.vue'
<\/script>

<template>
  <Story title="EHMDS/Button">
    <Variant title="EHMDS Primary">
      <EhmdsButton variant="ehmds-primary" label="Primary Button" />
    </Variant>

    <Variant title="EHMDS Secondary">
      <EhmdsButton variant="ehmds-secondary" label="Secondary Button" />
    </Variant>

    <Variant title="EHMDS Accent">
      <EhmdsButton variant="ehmds-accent" label="Accent Button" />
    </Variant>

    <Variant title="FKUI Primary">
      <EhmdsButton variant="primary" label="FKUI Primary" />
    </Variant>

    <Variant title="FKUI Secondary">
      <EhmdsButton variant="secondary" label="FKUI Secondary" />
    </Variant>

    <Variant title="FKUI Tertiary">
      <EhmdsButton variant="tertiary" label="FKUI Tertiary" />
    </Variant>

    <Variant title="Sizes">
      <div style="display: flex; gap: 1rem; align-items: center;">
        <EhmdsButton variant="ehmds-primary" size="small" label="Small" />
        <EhmdsButton variant="ehmds-primary" size="medium" label="Medium" />
        <EhmdsButton variant="ehmds-primary" size="large" label="Large" />
      </div>
    </Variant>

    <Variant title="Rounded">
      <EhmdsButton variant="ehmds-primary" label="Rounded Button" rounded />
    </Variant>

    <Variant title="With Shadow">
      <EhmdsButton variant="ehmds-primary" label="Shadow Button" shadow />
    </Variant>

    <Variant title="Full Width">
      <EhmdsButton variant="ehmds-primary" label="Full Width Button" full-width />
    </Variant>

    <Variant title="Disabled">
      <EhmdsButton variant="ehmds-primary" label="Disabled Button" disabled />
    </Variant>

    <Variant title="Loading">
      <EhmdsButton variant="ehmds-primary" label="Loading Button" loading />
    </Variant>

    <Variant title="All Variants">
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
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsButtonStoryVue as default
};
