<template>
  <div>
    <MenuSection />
    <FooterSection />
  </div>
</template>

<script>
import MenuSection from '@/components/MenuSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'MenuOnly',
  components: {
    MenuSection,
    FooterSection
  }
};
</script>
