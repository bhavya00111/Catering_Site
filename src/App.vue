<template>
<div>
    <AppNavbar>
    </AppNavbar>

    <HeroSection>
    </HeroSection>

    <AboutSection>
    </AboutSection>
    <!-- Separator Line -->
    <div class="px-8 md:px-32">
            <hr class="my-12 border-t border-gray-300" />
    </div>
    <MenuSection>
    </MenuSection>

    <!-- Separator Line -->
    <div class="px-8 md:px-32">
            <hr class="my-12 border-t border-gray-300" />
    </div>

  <ContactSection>
  </ContactSection>
  
  <FooterSection>
  </FooterSection>
</div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import MenuSection from './components/MenuSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';
export default {
    name: 'App',
    components: 
    {AppNavbar,
    HeroSection,
    AboutSection, 
    MenuSection,
    ContactSection,
    FooterSection}
}
</script>

<style>

</style>
