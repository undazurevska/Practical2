<script>
export default {
  props: {
    songs: Array,
  },
};
</script>

<template>
<div class="song-list">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Artist</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="song in songs" :key="song.id">
        <td>{{ song.name }}</td>
        <td>{{ song.artist }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
}

tr th {
  color: #464157;
  border-bottom: 2px solid #464157;
}

td {
  color: #fff;
}
</style>
