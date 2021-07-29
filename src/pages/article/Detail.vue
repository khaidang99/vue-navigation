<template>
  <div class="row justify-content-center">
    <div class="card p-0" style="width: 18rem">
      <img
        class="card-img-top"
        :src="detailArticle.image"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ detailArticle.title }}</h5>
        <p class="card-text">{{ detailArticle.content }}</p>
        <router-link to="/articles" class="btn btn-primary">
          To List
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Article from "@/models/Article";
export default {
  name: "Detail",
  beforeRouteEnter: async (to, from, next) => {
    const resq = await Article.getArticleDetail(to.params.id);
    to.meta.detail = resq.data;
    return next();
  },
  data() {
    return {
      detailArticle: null,
    };
  },
  created() {
    this.detailArticle = this.$route.meta.detail;
  },
};
</script>
