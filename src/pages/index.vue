<script lang="ts" setup>
import { videos } from "@/utils"
import Video from "@/components/Video.vue";
</script>

<template>
  <main>
<div class="example">
  <img src="/home.png" />
  <p>JLE Plus</p>	
</div>

    <section class="home-page">
      <section class="home-content">
        <div class="container">
          <div class="videos">
            <Video v-for="video in [...videos['JICE'], ...videos['Fireship'], ...videos['kanji']]" :video="video" />
          </div>
        </div>
      </section>
      <section class="watch-later">
        <label class="cat-title">会話</label>
        <div class="videos">
          <Video v-for="video in videos['JICE']" :video="video" />
        </div>
      </section>
      <section class="watch-later">
        <label class="cat-title">発音</label>
        <div class="videos">
          <Video v-for="video in videos['Fireship']" :video="video" />
        </div>
      </section>
      <section class="watch-later">
        <label class="cat-title">漢字</label>
        <div class="videos">
          <Video v-for="video in videos['kanji']" :video="video" />
        </div>
      </section>
      <section class="watch-later">
         <label class="cat-title">　</label>
     </section>
    </section>
  </main>
</template>

<style>
.example {/*親div*/
  position: relative;
  }
.example p {
  position: absolute;
  color: #ffffff;/*文字は白に*/
  font-weight: bold; /*太字に*/
  font-size: 2em;/*サイズ2倍*/
  font-family :Quicksand, sans-serif;/*Google Font*/
  text-shadow: 1px 2px 5px #808080;
  top: 0;
  left: 10px;
  }
.example img {
  width: 100%;
  }
.cat-title {
  font-weight: bold; /*太字に*/
  font-size: 2em;/*サイズ2倍*/
  font-family :Quicksand, sans-serif;/*Google Font*/
}
.watch-later {
  margin-top: 20px;
}
</style>