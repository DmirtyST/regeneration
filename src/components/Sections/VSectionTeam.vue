<template>
  <section class="team">
    <div class="team_introduction">
      <div>Regeneration was created by <span>RESOLVE</span>.</div>
      <div>
        <span>Rio Tinto</span> is a catalytic first investor, and site and technology
        partner.
      </div>
    </div>
    <div class="team_row">
      <div class="team_titles">
        <VTitles>
          <template v-slot:sub>The TeAm</template>
          <template v-slot:title>Governance</template>
        </VTitles>
      </div>
      <div class="team_content">
        <div v-for="item in dataItemGovernance" :key="item.id" class="team_item">
          <div class="team_title">{{ item.title }}</div>
          <div class="team_sub">{{ item.desc }}</div>
        </div>
      </div>
      <div class="team_titles">
        <VTitles>
          <template v-slot:title>Management, Experts, Advisors</template>
        </VTitles>
      </div>
      <div class="team_content">
        <div v-for="item in dataItemManagement" :key="item.id" class="team_item">
          <div class="team_title">{{ item.title }}</div>
          <div class="team_sub">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import VTitles from '@comps/UI/Titles/VTitles.vue';
  import {gsap} from 'gsap';
  import {ScrollTrigger} from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  gsap.registerPlugin(ScrollTrigger);
  const dataItemGovernance = [
    {id: 1, title: `Stephen D'Esposito`, desc: 'Founder, Board President'},
    {id: 2, title: 'Britt Banks', desc: 'Board Chair and Secretary'},
    {id: 3, title: 'Peter Harvey', desc: 'Board Member'},
    {id: 4, title: 'John Thompson', desc: 'Board Member'},
    {id: 5, title: 'Sandy Stash', desc: 'Board Member'},
    {id: 6, title: 'Melanie Stutsel', desc: 'Board Observer'},
    {id: 7, title: 'David Baker', desc: 'Board Observer'},
  ];
  const dataItemManagement = [
    {id: 1, title: `Stephen D'Esposito`, desc: 'Chief Executive Officer'},
    {id: 2, title: 'David Baker', desc: 'Chief Operating Officer'},
    {id: 3, title: 'John Thompson', desc: 'Chief Innovation Officer'},
    {id: 4, title: 'Gillian Davidson', desc: 'Chief Sustainability Officer'},
    {id: 5, title: 'Mikael Stenius', desc: 'Chief Business Officer'},
    {id: 6, title: 'Nicholas Mitchell', desc: 'Program Manager and Policy Analyst'},
    {id: 7, title: 'David Turner', desc: 'Senior Geoscientist'},
    {id: 8, title: 'Olenka Forde', desc: 'Senior Environmental Geoscientist'},
    {id: 9, title: 'Chris Tucker', desc: 'Sector Advisor'},
  ];

  onMounted(() => {
    let content = document.querySelectorAll('.team_content');
    gsap.to('.team_introduction', {
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.team',
        start: 'top 70%',
        end: 'top 50%',
        toggleActions: 'restart none none reverse',
      },
    });
    content.forEach((content) => {
      gsap.to(content, {
        translateY: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: content,
          start: 'top 98%',
        },
      });
    });
  });
</script>

<style lang="scss" scoped>
  .team {
    min-height: 80rem;
    padding-top: 10rem;
    padding-bottom: 25rem;
    background: #eeeeee;
    &_introduction {
      font-family: Source Serif Pro;
      @include font(2.1rem, 3rem, 0, 400);
      text-align: center;
      transform: translateY(22rem);
      margin: 0 auto 10rem;

      span {
        color: $brick;
      }
    }

    &_row {
      padding-bottom: 1rem;
      max-width: 120rem;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    &_titles {
      margin-bottom: 4.5rem;
    }

    &_content {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      justify-content: center;
      gap: 7.6rem;
      margin-bottom: 5rem;
      transform: translateY(20rem);
      opacity: 0;
    }

    &_item {
      text-align: center;
      height: 5rem;
    }

    &_title {
      @include font(2.1rem, 2.6rem, 0, 400);
      margin-bottom: 0.7rem;
      white-space: nowrap;
    }

    &_sub {
      @include font(1.4rem, 1.6rem, 0, 400);
      color: gray;
    }
  }
  @include media('max', 'lg') {
    .team {
      &_title {
        @include font(1.8rem, 2.4rem, 0, 400);
        margin-bottom: 0.7rem;
      }

      &_sub {
        @include font(1.1rem, 1.3rem, 0, 400);
        color: gray;
      }
      &_content {
        gap: 5.1rem;
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  @include media('max', 'sm') {
    .team {
      padding-bottom: 5rem;
      &_title {
        @include font(1.4rem, 1.6rem, 0, 400);
        white-space: pre-wrap;
      }
      &_item {
      }
      &_sub {
        @include font(1rem, 1.2rem, 0, 400);
        color: gray;
      }

      &_content {
        gap: 1.6rem;
        transform: translateY(0rem);
        grid-template-columns: repeat(2, 1fr);
      }
      &_introduction {
        margin-bottom: 7rem;
        transform: translateY(0rem);
        @include font(1.5rem, 2.4rem, 0, 400);
        text-align: center;
      }
    }
  }
</style>
