<template>
  <section id="tasks" class="tasks panel">
    <div class="tasks_row">
      <div class="tasks_item">
        <div class="tasks_letter">Re</div>
        <div class="tasks_title">
          <VTitles :title="false">
            <template v-slot:sub>OUR MISSION</template>
            <template v-slot:title>
              <VTypography size="xl"
                >Regeneration enables biodiversity, community, and climate positive
                minerals for the energy transition, green tech, and sustainable brands
                through remining, reprocessing, and restoration.
              </VTypography>
            </template>
          </VTitles>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import VTitles from '@comps/UI/Titles/VTitles.vue';
  import VTypography from '@comps/UI/Typography/VTypography.vue';
</script>

<style lang="scss" scoped>
  .tasks {
    padding-top: 5rem;
    background-color: $white;

    &_row {
      height: 60rem;
      @include flex(column, center, center);
      padding: 0 15px;
    }

    &_item {
      width: 70rem;
      position: relative;
      z-index: 1;
    }

    &_letter {
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(-25%);
      @include font(55.2rem, 40rem, 0rem, 600);

      font-family: Source Serif Pro;
      color: rgba(27, 27, 27, 0.08);
    }
  }
  @include media('max', 'sm') {
    .tasks {
      &_letter {
        @include font(30.2rem, 40rem, 0rem, 600);
      }
      &_item {
        width: 100%;
      }
      &_row {
        height: 40rem;
        @include flex(column, center, center);
      }
    }
  }
</style>
