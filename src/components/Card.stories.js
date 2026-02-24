import EhmdsCard from './Card.vue';

/**
 * Default export for Storybook metadata
 */
export default {
  title: 'EHMDS/Card',
  component: EhmdsCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title displayed in header',
      table: {
        defaultValue: { summary: '' }
      }
    },
    background: {
      control: 'color',
      description: 'Card background color',
      table: {
        defaultValue: { summary: '#fff' }
      }
    },
    border: {
      control: 'color',
      description: 'Card border color',
      table: {
        defaultValue: { summary: '#e0e0e0' }
      }
    }
  }
};

/**
 * Basic card with title and content
 */
export const Basic = {
  args: {
    title: 'Card Title',
    background: '#ffffff',
    border: '#e0e0e0',
  },
  render: (args) => ({
    components: { EhmdsCard },
    setup() {
      return { args };
    },
    template: `
      <EhmdsCard v-bind="args">
        <p>This is the card content. You can put any content here including text, images, or other components.</p>
      </EhmdsCard>
    `
  })
};

/**
 * Card without title
 */
export const NoTitle = {
  args: {
    background: '#ffffff',
    border: '#e0e0e0',
  },
  render: (args) => ({
    components: { EhmdsCard },
    setup() {
      return { args };
    },
    template: `
      <EhmdsCard v-bind="args">
        <p>This card has no title header, just content.</p>
      </EhmdsCard>
    `
  })
};

/**
 * Card with footer slot
 */
export const WithFooter = {
  args: {
    title: 'Card with Footer',
    background: '#ffffff',
    border: '#e0e0e0',
  },
  render: (args) => ({
    components: { EhmdsCard },
    setup() {
      return { args };
    },
    template: `
      <EhmdsCard v-bind="args">
        <template #default>
          <p>This card has a footer section with action buttons.</p>
        </template>
        <template #footer>
          <button>Cancel</button>
          <button style="margin-left: 8px;">Confirm</button>
        </template>
      </EhmdsCard>
    `
  })
};

/**
 * Card with custom styling
 */
export const CustomStyled = {
  args: {
    title: 'Custom Styled Card',
    background: '#f0f4f8',
    border: '#2c5aa0',
  },
  render: (args) => ({
    components: { EhmdsCard },
    setup() {
      return { args };
    },
    template: `
      <EhmdsCard v-bind="args">
        <p>This card uses EHMDS theme colors for background and border.</p>
      </EhmdsCard>
    `
  })
};

/**
 * Multiple cards in a grid
 */
export const CardGrid = {
  render: () => ({
    components: { EhmdsCard },
    template: `
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
    `
  })
};
