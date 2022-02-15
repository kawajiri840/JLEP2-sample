<script lang="ts" setup>
import { useRoute } from "vue-router"
import Video from "@/components/Video.vue"
import { videos, getReadableDate, Video as VideoType } from "@/utils"

const id = useRoute().query.v
let video: VideoType

for (const [channel, vids] of Object.entries(videos)) {
  const findVideo = vids.find(video => video.id === id)
  if (findVideo) { video = findVideo; break }
}
</script>

<template>
  <main>
    <section class="watch">
      <aside class="video">
        <!-- <iframe class="video-frame" :src="`https://www.youtube.com/embed/${id}?autoplay=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> -->
    <img class="thumbnail" :src="`/${video.id}.png`" alt="thumbnail" draggable="false">
        <figure class="details">
          <h1 class="title">{{ video.title }}</h1>
          <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          <p>XXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          <div class="bottom">
            <span class="views">250K views &nbsp;•&nbsp; {{ getReadableDate(video.publishedAt as unknown as Date) }}</span>
            <aside>
              <a class="like">
                <i class="material-icons-outlined">thumb_up</i> 10K
              </a>
              <!-- <a class="dislike">
                <i class="material-icons-outlined">thumb_down</i> Dislike
              </a> -->
              <!-- <a class="share">
                <i class="material-icons-outlined">reply</i> 共有
              </a> -->
              <a class="dislike">
                <i class="material-icons-outlined">quiz</i> テスト
              </a>
              <a class="dislike">
                <i class="material-icons-outlined">info</i> 情報
              </a>
              <a class="dislike">
                <i class="material-icons-outlined">settings</i> 設定
              </a>
            </aside>
          </div>
          <hr>
          <figure class="channel-info">
            <img class="avatar" :src="`/${video.publisher.toLowerCase()}.png`" draggable="false" @click="$router.push(`/c?name=${video.publisher}`)">
            <div class="sub-info">
              <aside class="left">
                <h1 class="name" @click="$router.push(`/c?name=${video.publisher}`)">{{ video.publisher }}</h1>
                <p class="subscribers">195K subs</p>
              </aside>
              <!-- <a class="button subscribe">SUBSCRIBE</a> -->
            </div>
          </figure>
          <iframe src="https://webmodern.s3.ap-northeast-1.amazonaws.com/sub/contents.html" width="100%" height="1200px"></iframe>
        </figure>
      </aside>


      <aside class="suggestions-comments">
        <section class="tabs">
          <a class="tab active">おすすめ</a>
          <a class="tab">コメント <span>1.3K</span></a>
        </section>

        <section class="suggested-content">
          <!-- <label>Up Next</label> -->
          <div class="videos">
            <Video v-for="video in videos['JICE']" :video="video" />
          </div>
        </section>
      </aside>
    </section>
  </main>
</template>



