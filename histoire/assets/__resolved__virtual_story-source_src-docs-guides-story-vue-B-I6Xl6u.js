const __resolved__virtual_storySource_srcDocsGuidesStoryVue = `<script setup lang="ts">
// Histoire story for Design System Guides
<\/script>

<template>
  <Story title="Documentation/Guides">
    <Variant title="Design System Guides">
      <div class="guides-container">
        <h1>Guides</h1>
        <p>Here you will find guides for working with the EHM Design System.</p>

        <h2>Design Principles</h2>
        <p>The EHM Design System is built on the following principles:</p>

        <h3>1. Accessibility First</h3>
        <p>All components are designed with accessibility in mind. We follow WCAG 2.2 AA guidelines and ensure our components are usable for everyone.</p>

        <h3>2. Consistency</h3>
        <p>Use the same components in the same way throughout your application. This creates a consistent and predictable user experience.</p>

        <h3>3. Simplicity</h3>
        <p>Our components are simple to use and understand. We avoid unnecessary complexity and focus on what's important.</p>

        <h2>Color Usage</h2>

        <h3>Primary Color</h3>
        <p>Use the primary dark blue color (<code>hsla(228, 46%, 48%, 1)</code>) for:</p>
        <ul>
          <li>Primary buttons</li>
          <li>Links</li>
          <li>Active states</li>
          <li>Accent color</li>
        </ul>

        <h3>Secondary Color</h3>
        <p>Use the secondary light blue color (<code>hsla(219, 29%, 53%, 1)</code>) for:</p>
        <ul>
          <li>Hover states</li>
          <li>Secondary interactive elements</li>
        </ul>

        <h2>Typography</h2>

        <h3>Headings</h3>
        <p>Use <strong>Roboto Slab</strong> for main headings (H1). This creates a clear visual hierarchy.</p>

        <h3>Body Text</h3>
        <p>Use <strong>Noto Sans</strong> for all body text. It's a readable font that works well on all screen sizes.</p>

        <h2>Component Selection</h2>

        <h3>When should I use a button?</h3>
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

        <h3>When should I use a card?</h3>
        <p>Use cards for:</p>
        <ul>
          <li>Grouping related content</li>
          <li>Presenting information in a scannable format</li>
          <li>Creating clickable panels</li>
        </ul>

        <h2>Best Practices</h2>
        <ol>
          <li><strong>Use only one primary button per view</strong> - This helps the user focus on the most important action</li>
          <li><strong>Provide clear labels</strong> - Avoid generic labels like "OK" or "Done"</li>
          <li><strong>Test on real devices</strong> - Ensure your components work on different screen sizes</li>
          <li><strong>Write clear text</strong> - Use simple and clear language</li>
        </ol>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.guides-container {
  max-width: 800px;
  padding: 2rem;
  font-family: var(--ehmds-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  line-height: 1.6;
  color: var(--ehmds-color-text-primary, #0f172a);
}

.guides-container h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--ehmds-color-primary, #2563eb);
}

.guides-container h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--ehmds-color-neutral-200, #e2e8f0);
  padding-bottom: 0.5rem;
}

.guides-container h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.guides-container p {
  margin-bottom: 1rem;
}

.guides-container ul,
.guides-container ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.guides-container li {
  margin-bottom: 0.5rem;
}

.guides-container code {
  background: var(--ehmds-color-neutral-100, #f1f5f9);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9em;
}
</style>
`;
export {
  __resolved__virtual_storySource_srcDocsGuidesStoryVue as default
};
