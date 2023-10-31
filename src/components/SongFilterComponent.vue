<script>
export default {
  props: {
    songs: Array,
  },
  data() {
    return {
      activeFilter: 'None',
    };
  },
  computed: {
    filteredSongs() {
      if (this.activeFilter === 'None') {
        return this.songs;
      } else if (this.activeFilter === 'Name') {
        return this.songs.slice().sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.activeFilter === 'Artist') {
        return this.songs.slice().sort((a, b) => a.artist.localeCompare(b.artist));
      }
    },
  },
  methods: {
    applyFilter(filter) {
      this.activeFilter = filter;
      this.$emit('filtered', this.filteredSongs);
    },
  },
};
</script>

<template>
<div class="filter-buttons">
  <h6>Sort By:</h6>
  <button @click="applyFilter('None')" :class="{ active: activeFilter === 'None' }">None</button>
  <button @click="applyFilter('Name')" :class="{ active: activeFilter === 'Name' }">Name</button>
  <button @click="applyFilter('Artist')" :class="{ active: activeFilter === 'Artist' }">Artist</button>
</div>
</template>

<style>
  .filter-buttons {
    margin-top: 60px;
    display: flex;
    align-items: center; 
    gap: 10px;
    color: #ffffff;
  }

  .filter-buttons h6 {
    margin: 0;
    text-align: center;
  }

  .filter-buttons button {
    background-color: #191621;
    color: #ffffff;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    padding: 5px 20px;
    display: inline-block;
  }

  .filter-buttons button.active {
      color: #FB0048;
      background-color: rgb(251, 0, 72, 0.20);
  }
</style>
