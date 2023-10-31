<script>
import songList from '../song-list.json';
import SongFilter from './SongFilterComponent.vue'
import SongList from './SongListComponent.vue';

export default {
  data() {
    return {
      songs: songList,
      filteredSongs: songList, 
    };
  },
  methods: {
    updateFilteredSongs(filteredSongs) {
      this.filteredSongs = filteredSongs;
    },
  },
  components: {
    SongFilter,
    SongList,
  },
};
</script>

<template>
<div class="home">
  <h1>HOME</h1>
  <SongFilter :songs="songs" @filtered="updateFilteredSongs" />
  <SongList :songs="filteredSongs" />
</div>
</template>

<style>
.home{
      padding: 20px;
  }

.home h1 {
    font-size: 30px;
    color: white;
}
</style>


