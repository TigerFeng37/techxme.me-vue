<template>
  <v-container>
    <div class="main-content-wrapper">
      <div class="card-group">
        <v-card
        :loading="loading"
        class="mr-4"
        v-for="item in ImageData"
        :key="item.index"
        id="meme-card"
        >
        <v-img
          min-height="18em"
          :src="require(`../assets/img/${item.filename}`)"
          />
        <v-card-text>
          <h5>{{item.title}}<h5>
        </v-card-text>
      </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
  import ImageData from '../assets/data/ImageData.json';

  export default {
    name: 'MainView',

    data () {
      return {
        ImageData: ImageData,
      }
    }
  }
</script>
