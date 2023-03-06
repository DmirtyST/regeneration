<!-- @format -->

<template>
  <div class="home">
    <ul class="home_menu">
      <li class="home_list" v-for="link in dataLinksSection" :key="link.id">
        <router-link :to="`#${link.path}`">
          <div class="home_link">
            {{ link.name }}
          </div>
        </router-link>
      </li>
    </ul>
    <VSectionScreen />
    <div class="home_scroll-panell">
      <VSectionInnovative />
      <VSectionTasks />
      <VSectionProcess />
      <VSectionPartner />
    </div>
    <VSectionTeam />
  </div>
</template>

<script setup>
  import VSectionScreen from '@/components/Sections/VSectionScreen.vue';
  import VSectionInnovative from '@/components/Sections/VSectionInnovative.vue';
  import VSectionTasks from '@/components/Sections/VSectionTasks.vue';
  import VSectionProcess from '@/components/Sections/VSectionProcess.vue';
  import VSectionPartner from '@/components/Sections/VSectionPartner.vue';
  import VSectionTeam from '@/components/Sections/VSectionTeam.vue';
  import {gsap} from 'gsap';
  import {ScrollTrigger} from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  gsap.registerPlugin(ScrollTrigger);
  const dataLinksSection = [
    {id: 1, path: 'innovative'},
    {id: 2, path: 'tasks'},
    {id: 3, path: 'process'},
    {id: 4, path: 'partner'},
  ];
  onMounted(() => {
    const panels = gsap.utils.toArray('.panel');
    const panelsLinks = gsap.utils.toArray('.home_link');
    let mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      gsap.to('.home_menu', {
        opacity: 1,
        translateX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.home_scroll-panell',
          endTrigger: '.home_scroll-panell',
          toggleActions: 'restart reverse restart reverse',
          start: 'top 30%',
          end: () => `+=${document.querySelector('.home_scroll-panell').offsetHeight}`,
        },
      });
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top center',
          end: 'bottom center',

          onEnter: () => {
            panelsLinks.forEach((e) => {
              e.classList.remove('active');
            });
            panelsLinks[i].classList.add('active');
          },
          onEnterBack: () => {
            panelsLinks.forEach((e) => {
              e.classList.remove('active');
            });
            panelsLinks[i].classList.add('active');
          },
        });
      });
    });
  });
</script>
<style lang="scss" scoped>
  .home {
    &_menu {
      position: fixed;
      right: 3.2rem;
      top: 50%;
      transform: translateY(-50%) translateX(10rem);
      z-index: 9999;
      opacity: 0;
      @include flex(column, center, center);
    }
    &_link {
      width: 1rem;
      height: 1rem;
      background-color: $grayLight;
      margin-bottom: 1.5rem;
      border-radius: 50%;
      transition: all ease 0.4s;

      &.active {
        transition: all ease 0.4s;
        box-shadow: inset 0 0 0 5px #ff7b3e;
        width: 1.5rem;
        height: 1.5rem;
        background-color: $whiteLight;
      }
    }
  }
  @include media('max', 'lg') {
    .home {
      &_nav {
        display: none;
      }
    }
  }
</style>
