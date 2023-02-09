<template>
  <section id="process" class="process panel">
    <div class="process_title">
      <VTitles>
        <template v-slot:sub>Our Process</template>
        <template v-slot:title>
          Turning Legacy Sites into Environmental & Community Assets
        </template>
      </VTitles>
    </div>
    <div class="process_row">
      <div class="process_item">
        <div class="process_list">
          <div class="process_number">01</div>
          <div class="process_lines">
            <div class="process-lines_substrate"></div>
            <div class="process-lines_line"></div>
          </div>
        </div>
        <div class="process_info">
          <div class="process-info_title">
            <VHtag size="sm" tag="h3">Identify Sites</VHtag>
          </div>
          <div class="process-info_text">
            <VTypography size="lg">
              We target the growing inventory of legacy mine sites, both those in company
              portfolios and orphan sites where governments seek innovative
              approaches.</VTypography
            >
          </div>
        </div>
      </div>
      <div class="process_item">
        <div class="process_list">
          <div class="process_number">02</div>

          <div class="process_lines">
            <div class="process-lines_substrate"></div>
            <div class="process-lines_line"></div>
          </div>
        </div>

        <div class="process_info">
          <div class="process-info_title">
            <VHtag size="sm" tag="h3">Apply Innovative Technologies & Methods</VHtag>
          </div>
          <div class="process-info_text">
            <VTypography size="lg">
              Our full value mining strategy utilizes new technologies and methods to
              safely remine and reprocess tailings, waste rock, and water to extract
              minerals and metals. We then provide these materials to support the energy
              transition, green tech, and sustainable brands.</VTypography
            >
          </div>
        </div>
      </div>
      <div class="process_item">
        <div class="process_list">
          <div class="process_number">03</div>
          <div class="process_lines">
            <div class="process-lines_substrate"></div>
            <div class="process-lines_line"></div>
          </div>
        </div>
        <div class="process_info">
          <div class="process-info_title">
            <VHtag size="sm" tag="h3">Restore Biodiversity</VHtag>
          </div>
          <div class="process-info_text">
            <VTypography size="lg">
              Going beyond closure commitments and government mandates, we restore and
              renew biological and ecological systems such as forests, streams, and
              wetlands. We document our restoration progress, methods, and impact through
              site-based reports and by producing quantifiable biodiversity and carbon
              credits.</VTypography
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import VHtag from '../UI/Htag/VHtag.vue';
  import VTitles from '../UI/Titles/VTitles.vue';
  import VTypography from '../UI/Typography/VTypography.vue';
  import {gsap} from 'gsap';
  import {ScrollTrigger} from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let line = document.querySelectorAll('.process_item .process-lines_line');
    line.forEach((item) => {
      gsap.to(item, {
        top: '110%',
        translateY: 0,
        scrollTrigger: {
          trigger: item,
          scrub: 4,
          start: 'top 50%',
          end: 'top 20%',
        },
      });
    });
  });
</script>

<style lang="scss" scoped>
  .process {
    padding: 12rem 0;
    background-color: $white;
    padding-bottom: 5rem;
    &_title {
      width: 80rem;
      margin: 0 auto 8rem;
    }

    &_item {
      display: grid;
      grid-template-columns: minmax(19rem, 7.8rem) 1fr;
      min-height: 15rem;
      border-top: 1px solid #d1d1d1;
      padding: 3.3rem 0;
      &:last-child {
        border-bottom: 1px solid #d1d1d1;
      }
    }
    &_row {
      max-width: 100rem;
      margin: 0 auto;
    }

    &_list {
      font-family: Roboto Condensed;
      @include font(6rem, 7.1rem, 0, 400);
      color: #d1d1d1;
      position: relative;
    }
    &_number {
      @include size(100%, 100%);
      @include flex(row, center, center);
      position: relative;
      overflow: hidden;
    }
    &_info {
      padding: 1.3rem 0;
      padding-left: 7rem;
      padding-right: 6rem;
      color: $black;
    }

    &_lines {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      overflow: hidden;
    }
    &-lines {
      &_substrate {
        height: 100%;
        background-color: #d1d1d1;
        width: 2px;
        position: absolute;
        right: 0;
      }

      &_line {
        height: 35%;
        width: 2px;
        background-color: $orange;
        position: absolute;
        right: 0;
        top: -5rem;
        transform: translateY(-7rem);
        z-index: 22;
        opacity: 1;
      }
    }
  }

  .process-info {
    &_title {
      margin-bottom: 1.3rem;
      color: $black;
    }

    &_text {
      width: 60rem;
    }
  }
  @include media('max', 'lg') {
    .process-info {
      &_title {
        margin-bottom: 1.3rem;
        color: $black;
      }

      &_text {
        width: 100%;
      }
    }
  }

  @include media('max', 'sm') {
    .process {
      padding-bottom: 4.8rem;
      &_title {
        width: 100%;
        margin: 0 auto 4.8rem;
      }
      &_list {
        @include font(4rem, 4.7rem, 0, 400);
        min-width: 7.8rem;
      }
      &_info {
        padding: 0rem 0;
        padding-left: 2.3rem;
        padding-right: 2.7rem;
      }
      &_item {
        display: flex;
        padding: 2.5rem 0;
      }
    }
    .process-info {
      &_title {
        margin-bottom: 0.8rem;
        color: $black;
      }

      &_text {
        width: 100%;
      }
    }
  }
</style>
