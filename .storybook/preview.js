/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    },
    docs: {
      page: null,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'ehmds', icon: 'paintbrush', title: 'EHMDS Theme' },
          { value: 'fkui', icon: 'circlehollow', title: 'FKUI Default' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;