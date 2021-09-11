<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-generate-test</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Logo from '../../../components/Logo.vue'
export default Vue.extend({
  components: {
    Logo,
  },
  asyncData({ payload }) {
    return {
      number: payload,
    }
  },
  async asyncData({$axios, $seoMeta, route}) {
    const type = route.params.type
    const id = route.params.id
    const path = type ==='read'? '/restApi/misc/share/read': '/restApi/misc/share/write'
    let result = await $axios.get(`${path}?id=${id}`);
    const res = result.data.res
    $seoMeta({
      title: 'See my perfect handwriting? You can get it!',
      description: "Congratulations! You got the score was " + res.ascore,
      image: res.onpic
    })
 },
  data() {
    return {
      number: '',
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 2px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
