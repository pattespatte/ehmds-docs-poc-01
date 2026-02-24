import EhmdsButton from './Button.vue';

/**
 * Default export for Storybook metadata
 */
export default {
  title: 'EHMDS/Button',
  component: EhmdsButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'ehmds-primary',
        'ehmds-secondary',
        'ehmds-accent'
      ],
      description: 'Button variant style',
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
      table: {
        defaultValue: { summary: 'medium' }
      }
    },
    label: {
      control: 'text',
      description: 'Button label text (fallback when no slot content)'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        defaultValue: { summary: false }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Loading state - shows spinner and prevents interaction',
      table: {
        defaultValue: { summary: false }
      }
    },
    rounded: {
      control: 'boolean',
      description: 'Add rounded corners (EHMDS enhancement)',
      table: {
        defaultValue: { summary: false }
      }
    },
    shadow: {
      control: 'boolean',
      description: 'Add shadow effect (EHMDS enhancement)',
      table: {
        defaultValue: { summary: false }
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
      table: {
        defaultValue: { summary: false }
      }
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute for form handling',
      table: {
        defaultValue: { summary: 'button' }
      }
    },
    onClick: { action: 'clicked' }
  }
};

/**
 * Primary button with default EHMDS styling
 */
export const Primary = {
  args: {
    variant: 'ehmds-primary',
    label: 'Primary Button',
  },
};

/**
 * Secondary button with subtle styling
 */
export const Secondary = {
  args: {
    variant: 'ehmds-secondary',
    label: 'Secondary Button',
  },
};

/**
 * Accent button for highlights and CTAs
 */
export const Accent = {
  args: {
    variant: 'ehmds-accent',
    label: 'Accent Button',
  },
};

/**
 * FKUI compatible primary button
 */
export const FKUIPrimary = {
  args: {
    variant: 'primary',
    label: 'FKUI Primary',
  },
};

/**
 * Button size variations
 */
export const Sizes = {
  render: (args) => ({
    components: { EhmdsButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <EhmdsButton v-bind="args" size="small" label="Small" />
        <EhmdsButton v-bind="args" size="medium" label="Medium" />
        <EhmdsButton v-bind="args" size="large" label="Large" />
      </div>
    `,
  }),
  args: {
    variant: 'ehmds-primary',
  },
};

/**
 * Rounded button variant
 */
export const Rounded = {
  args: {
    variant: 'ehmds-primary',
    label: 'Rounded Button',
    rounded: true,
  },
};

/**
 * Button with shadow effect
 */
export const WithShadow = {
  args: {
    variant: 'ehmds-primary',
    label: 'Shadow Button',
    shadow: true,
  },
};

/**
 * Full width button
 */
export const FullWidth = {
  args: {
    variant: 'ehmds-primary',
    label: 'Full Width Button',
    fullWidth: true,
  },
};

/**
 * Disabled button state
 */
export const Disabled = {
  args: {
    variant: 'ehmds-primary',
    label: 'Disabled Button',
    disabled: true,
  },
};

/**
 * Loading button state
 */
export const Loading = {
  args: {
    variant: 'ehmds-primary',
    label: 'Loading Button',
    loading: true,
  },
};

/**
 * All FKUI and EHMDS variants
 */
export const AllVariants = {
  render: (args) => ({
    components: { EhmdsButton },
    setup() {
      return { args };
    },
    template: `
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
    `,
  }),
};

/**
 * Interactive button with click handler
 */
export const Interactive = {
  args: {
    variant: 'ehmds-primary',
    label: 'Click Me',
  },
  play: async ({ canvasElement }) => {
    // For testing interactions
  },
};
