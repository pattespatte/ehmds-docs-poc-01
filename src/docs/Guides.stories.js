/**
 * Design System Guides - Documentation Story
 */

export default {
  title: 'Documentation/Guides',
  parameters: {
    docs: {
      description: {
        component: 'Here you will find guides for working with the EHM Design System.',
      },
    },
  },
  tags: ['autodocs'],
};

/**
 * Design Principles
 */
export const DesignPrinciples = {
  name: 'Design Principles',
  render: () => ({
    template: `
      <div style="max-width: 800px; padding: 2rem; font-family: system-ui, sans-serif; line-height: 1.6;">
        <h1>Design Principles</h1>
        <p>The EHM Design System is built on the following principles:</p>

        <h2>1. Accessibility First</h2>
        <p>All components are designed with accessibility in mind. We follow WCAG 2.2 AA guidelines and ensure our components are usable for everyone.</p>

        <h2>2. Consistency</h2>
        <p>Use the same components in the same way throughout your application. This creates a consistent and predictable user experience.</p>

        <h2>3. Simplicity</h2>
        <p>Our components are simple to use and understand. We avoid unnecessary complexity and focus on what's important.</p>
      </div>
    `,
  }),
};

/**
 * Color Usage
 */
export const ColorUsage = {
  name: 'Color Usage',
  render: () => ({
    template: `
      <div style="max-width: 800px; padding: 2rem; font-family: system-ui, sans-serif; line-height: 1.6;">
        <h1>Color Usage</h1>

        <h2>Primary Color</h2>
        <p>Use the primary dark blue color (<code>hsla(228, 46%, 48%, 1)</code>) for:</p>
        <ul>
          <li>Primary buttons</li>
          <li>Links</li>
          <li>Active states</li>
          <li>Accent color</li>
        </ul>

        <h2>Secondary Color</h2>
        <p>Use the secondary light blue color (<code>hsla(219, 29%, 53%, 1)</code>) for:</p>
        <ul>
          <li>Hover states</li>
          <li>Secondary interactive elements</li>
        </ul>
      </div>
    `,
  }),
};

/**
 * Typography
 */
export const Typography = {
  name: 'Typography',
  render: () => ({
    template: `
      <div style="max-width: 800px; padding: 2rem; font-family: system-ui, sans-serif; line-height: 1.6;">
        <h1>Typography</h1>

        <h2>Headings</h2>
        <p>Use <strong>Roboto Slab</strong> for main headings (H1). This creates a clear visual hierarchy.</p>

        <h2>Body Text</h2>
        <p>Use <strong>Noto Sans</strong> for all body text. It's a readable font that works well on all screen sizes.</p>
      </div>
    `,
  }),
};

/**
 * Component Selection
 */
export const ComponentSelection = {
  name: 'Component Selection',
  render: () => ({
    template: `
      <div style="max-width: 800px; padding: 2rem; font-family: system-ui, sans-serif; line-height: 1.6;">
        <h1>Component Selection</h1>

        <h2>When should I use a button?</h2>
        <p>Use buttons for:</p>
        <ul>
          <li>Actions that save, submit, or delete data</li>
          <li>Navigation to a new page</li>
          <li>Triggering a modal or dialog</li>
        </ul>

        <p>Use links for:</p>
        <ul>
          <li>Navigation to another page</li>
          <li>Fetching more information</li>
        </ul>

        <h2>When should I use a card?</h2>
        <p>Use cards for:</p>
        <ul>
          <li>Grouping related content</li>
          <li>Presenting information in a scannable format</li>
          <li>Creating clickable panels</li>
        </ul>
      </div>
    `,
  }),
};

/**
 * Best Practices
 */
export const BestPractices = {
  name: 'Best Practices',
  render: () => ({
    template: `
      <div style="max-width: 800px; padding: 2rem; font-family: system-ui, sans-serif; line-height: 1.6;">
        <h1>Best Practices</h1>
        <ol>
          <li><strong>Use only one primary button per view</strong> - This helps the user focus on the most important action</li>
          <li><strong>Provide clear labels</strong> - Avoid generic labels like "OK" or "Done"</li>
          <li><strong>Test on real devices</strong> - Ensure your components work on different screen sizes</li>
          <li><strong>Write clear text</strong> - Use simple and clear language</li>
        </ol>
      </div>
    `,
  }),
};
