<script lang="ts" setup>
import { videos } from "@/utils"
import { ref, watchEffect } from "vue"
import Video from "@/components/Video.vue"

let activeTag = ref<HTMLElement>()

watchEffect(() => {
  document.querySelectorAll("a.tag")?.forEach((tab: Element) => tab.classList.remove("active"))
  activeTag.value?.classList.add("active")
})

const featured = [
  {
    name: "JICE",
    avatar: "jice"
  },
  {
    name: "Fireship",
    avatar: "fireship"
  },
  {
    name: "Kanji",
    avatar: "kanji"
  }
]
</script>

<template>
  <main>
    <section class="explore-page">
      <section class="tags">
        <label>EXPLORE</label>
        <div class="container" @click="($event.target as HTMLElement).tagName === 'A' && (activeTag = $event.target as HTMLElement)">
          <a class="tag active">All</a>
          <a class="tag" v-for="tag in ['Music', 'Piano', 'Movies', 'Trailers', 'Gaming', 'Website', 'Computers', 'Avdan', 'iPhonedo', 'Fireship']">{{ tag }}</a>
        </div>
      </section>

      <section class="featured-creators">
        <label>FEATURED CREATORS</label>
        <div class="container">
          <figure class="channel-info" v-for="creator in featured">
            <img class="avatar" :src="`/${creator.avatar}.png`" draggable="false" @click="$router.push(`/c?name=${creator.name}`)">
            <div class="sub-info">
              <aside class="left">
                <h1 class="name" @click="$router.push(`/c?name=${creator.name}`)">{{ creator.name }}</h1>
                <p class="subscribers">195K subs</p>
              </aside>
              <a class="button subscribe">SUBSCRIBE</a>
            </div>
          </figure>
        </div>
      </section>

      <section class="explore-content">
        <label>POPULAR VIDEOS</label>
        <div class="container">
          <div class="videos">
            <Video v-for="video in [...videos['Avdan'], ...videos['Fireship']]" :video="video" />
          </div>
        </div>
      </section>
    </section>
  </main>
</template>