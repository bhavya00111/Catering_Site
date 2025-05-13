<template>
  <div>
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'ContactOnly',
  components: {
    ContactSection,FooterSection
  }
};
</script>
