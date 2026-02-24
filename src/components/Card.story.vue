<script setup lang="ts">
import EhmdsCard from './Card.vue'
</script>

<template>
  <Story title="EHMDS/Card">
    <Variant title="Basic">
      <EhmdsCard
        title="Card Title"
        background="#ffffff"
        border="#e0e0e0"
      >
        <p>This is the card content. You can put any content here including text, images, or other components.</p>
      </EhmdsCard>
    </Variant>

    <Variant title="No Title">
      <EhmdsCard
        background="#ffffff"
        border="#e0e0e0"
      >
        <p>This card has no title header, just content.</p>
      </EhmdsCard>
    </Variant>

    <Variant title="With Footer">
      <EhmdsCard
        title="Card with Footer"
        background="#ffffff"
        border="#e0e0e0"
      >
        <template #default>
          <p>This card has a footer section with action buttons.</p>
        </template>
        <template #footer>
          <button>Cancel</button>
          <button style="margin-left: 8px;">Confirm</button>
        </template>
      </EhmdsCard>
    </Variant>

    <Variant title="Custom Styled">
      <EhmdsCard
        title="Custom Styled Card"
        background="#f0f4f8"
        border="#2c5aa0"
      >
        <p>This card uses EHMDS theme colors for background and border.</p>
      </EhmdsCard>
    </Variant>

    <Variant title="Card Grid">
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
    </Variant>
  </Story>
</template>
