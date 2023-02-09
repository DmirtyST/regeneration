<template>
  <section id="partner" class="partner panel">
    <div class="partner_titles">
      <VTitles>
        <template v-slot:sub>Partner with us</template>
        <template v-slot:title>Be a Part of Regeneration</template>
      </VTitles>
    </div>
    <VContainer width="110rem">
      <div class="partner_row">
        <div class="partner_item">
          <VAccordion>
            <template v-slot:title>
              <div class="partner_introduction">
                <div class="partner-introduction_title">Donors & Investors</div>
              </div>
            </template>
            <div class="partner_box">
              <div class="partner_text">
                Regeneration offers donors and investors opportunities at the company,
                regional, and site level. As our projects get underway there will be
                opportunity for investment in new technologies.
              </div>
              <div class="partner_contacts">
                <div class="partner-contacts_title">Contact:</div>
                <div class="partner-contacts_contact">Nicholas Mitchell</div>
                <div class="partner-contacts_email">
                  nmitchell@regneration.enterprises
                </div>
              </div>
            </div>
          </VAccordion>
        </div>
        <div class="partner_item">
          <VAccordion>
            <template v-slot:title>
              <div class="partner_introduction">
                <div class="partner-introduction_title">Mining Partners & Agencies</div>
              </div>
            </template>
            <div class="partner_box">
              <div class="partner_text">
                Mining companies can invest in Regeneration, engage us at legacy sites,
                and support local efforts. Companies can also subscribe to our services
                and be a part of the Regeneration movement. Governments are encouraged to
                work with Regeneration to address orphan mine issues, fund innovation, and
                support community-based partnerships.
              </div>
              <div class="partner_contacts">
                <div class="partner-contacts_title">Contact:</div>
                <div class="partner-contacts_contact">Nicholas Mitchell</div>
                <div class="partner-contacts_email">
                  nmitchell@regneration.enterprises
                </div>
              </div>
            </div>
          </VAccordion>
        </div>
        <div class="partner_item">
          <VAccordion>
            <template v-slot:title>
              <div class="partner_introduction">
                <div class="partner-introduction_title">Innovators and Experts</div>
              </div>
            </template>
            <div class="partner_box">
              <div class="partner_text">
                We work with innovators and entrepreneurs developing new technologies for
                remining, reprocessing, water treatment, and restoration. Experts in a
                range of disciplines including geology, engineering, finance, policy and
                law, restoration, water, and social and cultural issues can partner with
                Regeneration globally and locally.
              </div>
              <div class="partner_contacts">
                <div class="partner-contacts_title">Contact:</div>
                <div class="partner-contacts_contact">Nicholas Mitchell</div>
                <div class="partner-contacts_email">
                  nmitchell@regneration.enterprises
                </div>
              </div>
            </div>
          </VAccordion>
        </div>
        <div class="partner_item">
          <VAccordion>
            <template v-slot:title>
              <div class="partner_introduction">
                <div class="partner-introduction_title">Manufacturers and Brands</div>
              </div>
            </template>
            <div class="partner_box">
              <div class="partner_text">
                Manufacturers and brands can invest in Regeneration, sponsor projects, and
                source minerals.
              </div>
              <div class="partner_contacts">
                <div class="partner-contacts_title">Contact:</div>
                <div class="partner-contacts_contact">Nicholas Mitchell</div>
                <div class="partner-contacts_email">
                  nmitchell@regneration.enterprises
                </div>
              </div>
            </div>
          </VAccordion>
        </div>
        <div class="partner_item">
          <VAccordion>
            <template v-slot:title>
              <div class="partner_introduction">
                <div class="partner-introduction_title">Communities</div>
              </div>
            </template>
            <div class="partner_box">
              <div class="partner_text">
                Regeneration is forming partnerships with Indigenous and other communities
                to create economic opportunities that build on traditional environmental
                and cultural knowledge.
              </div>
              <div class="partner_contacts">
                <div class="partner-contacts_title">Contact:</div>
                <div class="partner-contacts_contact">Nicholas Mitchell</div>
                <div class="partner-contacts_email">
                  nmitchell@regneration.enterprises
                </div>
              </div>
            </div>
          </VAccordion>
        </div>
      </div>
    </VContainer>
  </section>
</template>

<script setup>
  import VAccordion from '../UI/Accordion/VAccordion.vue';
  import VContainer from '../UI/Container/VContainer.vue';
  import VTitles from '../UI/Titles/VTitles.vue';
  import {gsap} from 'gsap';
  import {onMounted} from 'vue';
  onMounted(() => {
    let item = document.querySelectorAll('.partner_item');
    item.forEach((item) => {
      gsap.to(item, {
        translateX: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: 'top 70%',
        },
      });
    });
  });
</script>

<style lang="scss" scoped>
  .partner {
    background-color: $white;
    padding-top: 16rem;
    padding-bottom: 13rem;
    min-height: 50rem;
    color: $black;

    &_titles {
      margin: 0 auto;
      margin-bottom: 12rem;
    }

    &_row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 8rem;
      row-gap: 8rem;
    }

    &_item {
      position: relative;
      transform: translateX(80rem);
      opacity: 0;
      &:hover {
        .partner-introduction_title {
          &::before {
            opacity: 1;
            transform: scale(1);
            transition: all ease 0.4s;
          }
        }
      }
    }

    &_introduction {
      font-family: Source Serif Pro;
      @include font(2.4rem, 3.2rem, 0, 400);

      cursor: pointer;
      position: relative;
    }

    &_box {
      width: 30rem;
      padding-left: 5rem;
      @include font(1.5rem, 2.4rem, 0, 500);
      font-family: Roboto;
    }

    &_text {
      opacity: 0.8;
      color: $gray;
      margin-bottom: 2rem;
      padding-top: 1rem;
    }
  }
  .partner-contacts {
    &_contact {
      font-weight: 600;
    }

    &_email {
      color: $brick;
    }
  }

  .partner-introduction {
    &_title {
      position: relative;
      height: 5rem;
      width: 11em;
      display: flex;
      align-items: center;
      &::before {
        content: '';
        position: absolute;
        left: -44%;
        top: -150%;
        width: 20rem;
        height: 20rem;
        background-color: rgba($brick, 0.1);
        border-radius: 50%;
        transform: scale(0.6);
        opacity: 0;
        transition: all ease 0.4s;
      }
    }
  }
  @include media('max', 'lg') {
    .partner {
      &_row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 8rem;
        row-gap: 8rem;
      }
      .partner-introduction {
        &_title {
          &::before {
            content: '';
            display: none;
          }
        }
      }
    }
  }
  @include media('max', 'sm') {
    .partner {
      padding-top: 5rem;
      padding-bottom: 10rem;
      &_titles {
        margin-bottom: 5rem;
      }

      &_row {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 0rem;
        row-gap: 3.1rem;
      }
      &_item {
        padding-left: 0rem;
      }
      &_introduction {
        @include font(2rem, 2.5rem, 0, 400);
        gap: 1.6rem;
      }
      &_box {
        width: 100%;
        padding-left: 4.9rem;
      }
      .partner-introduction {
        &_title {
          width: 100%;
          &::before {
            content: '';
            display: none;
          }
        }
      }
    }
  }
</style>
