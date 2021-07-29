<template>
  <li>
    <router-link
      :to="{ name: 'Articles.detail', params: { id: value.id } }"
      class="media item-article mb-0"
    >
      <img class="article-image mr-3" v-bind:src="value.image" alt="photo" />
      <div class="media-body article-body">
        <h5 class="mt-0 mb-1 article-title">{{ value.title }}</h5>
        <p class="article-content">{{ value.content }}</p>
        <p class="article-time mb-0">{{ getCreatedAt }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
import moment from "moment";

export default {
  name: "ItemArticle",
  props: {
    value: {
      type: Object,
      default: null,
    },
  },
  computed: {
    getCreatedAt() {
      if (this.value.createdAt) {
        return moment(this.value.createdAt).format("hh:mm DD/MM/YYYY");
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.item-article {
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(211, 208, 208);
  color: #aeaeaf;
  text-decoration: none;
  padding: 10px 5px;
  &:hover {
    background-color: rgb(248, 248, 253);
  }
  .article-image {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .article-body {
    flex: 1 0 0;
    text-align: start;
    .article-content {
      margin-bottom: 10px;
    }
    .article-time {
      text-align: end;
      font-size: 12px;
      color: #c3caca;
      margin-bottom: 10px;
    }
  }
}
</style>
