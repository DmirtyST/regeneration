<template>
  <div class="footer">
    <div class="footer_row">
      <div class="footer_contacts">
        <ul class="footer_lists">
          <li class="footer_list">
            <a class="footer_docs" href="tel:+380663844645">Code of Conduct</a>
          </li>
          <li class="footer_list">|</li>
          <li class="footer_list">
            <a class="footer_contact" href="tel:+380663844645">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="footer_main">
        <div class="footer_content">
          <div class="footer_item">
            <div class="footer_logo"><VImg ps="contain" :sourse="logoFooter" /></div>
            <div class="footer_sub">
              RESOLVE forges sustainable solutions to critical social, health, and
              environmental challenges by creating innovative partnerships where they are
              least likely and most needed.
            </div>
          </div>
          <div class="footer_social"></div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="footer_desc">
          © Copyright 2021 <span>Resolve, INC </span> | Site design by
          <span>Gage Hunt Creative</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import logoFooter from '../Image/logoFooter.png';
  import VImg from '../UI/Img/VImg.vue';
</script>

<style lang="scss" scoped>
  .footer {
    &_row {
      height: 36rem;
      display: flex;
      flex-direction: column;
      @include font(1rem, 1.1rem, 0, 500);
    }
    &_contacts {
      padding: 3.6rem 5rem;
      background-color: #242323;
      text-transform: uppercase;
      font-family: 'Roboto';
    }

    &_lists {
      @include flex(row);
      gap: 1rem;
    }

    &_list {
      color: $gray;
    }

    &_docs {
      color: $gray;
    }

    &_contact {
      color: $gray;
    }

    &_content {
      height: 100%;
      width: 100%;
      @include flex(row, space-between, center);
    }
    &_main {
      padding: 0 5rem;
      flex: 1 1 auto;
    }

    &_item {
    }

    &_logo {
      width: 13rem;
      height: 2rem;
      position: relative;
      margin-bottom: 1.7rem;
    }

    &_sub {
      width: 44rem;
      font-family: Roboto;
      @include font(1.2rem, 1.8rem, 0, 400);
      color: $gray;
    }

    &_social {
    }

    &_bottom {
      padding: 3.6rem 5rem;
      border-top: 1px solid #383838;
    }

    &_desc {
      color: $gray;
      span {
        color: $white;
      }
    }
  }
  @include media('max', 'sm') {
    .footer {
      &_row {
        height: 36rem;
        display: flex;
        flex-direction: column;
        @include font(0.9rem, 1.1rem, 0, 500);
      }
      &_logo {
        width: 10rem;
        margin-bottom: 1.3rem;
      }
      &_sub {
        width: 100%;
        font-family: Roboto;
        @include font(1.2rem, 1.8rem, 0, 400);
        color: $gray;
      }
    }
  }
</style>
