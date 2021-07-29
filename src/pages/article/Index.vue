<template>
  <div class="container-page">
    <div class="container-article">
      <Search :value="filter" @handleFilter="handleFilter" />
      <div class="row mb-3">
        <ul class="col-12 col-md-offset-1 mb-3 list-unstyled group-article">
          <ItemArticle
            v-for="(item, index) in articles"
            :key="index"
            :value="item"
          />
        </ul>
      </div>
      <Pagination
        v-model="filter.page"
        :total="totalArticle"
        :pageSize="filter.limit"
        :pageSizeOptions="pageSizeOptions"
        @onShowSizeChange="onShowSizeChange"
        :currentPage="filter.page"
      />
    </div>
  </div>
</template>

<script>
import ItemArticle from "@/components/Item/ItemArticle";
import Pagination from "@/components/Pagination";
import Search from "./Search";
import Article from "@/models/Article";
export default {
  name: "Index",
  data() {
    return {
      pageSizeOptions: [5, 10, 20, 30, 40, 50],
      articles: [],
      totalArticle: 0,
      filter: {
        search: "",
        sortBy: "created",
        order: "asc",
        limit: 5,
        page: 1,
      },
    };
  },
  components: {
    ItemArticle,
    Search,
    Pagination,
  },
  async beforeRouteEnter(to, from, next) {
    const resq = await Article.getArticles({
      params: {
        sortBy: "created",
        order: "asc",
        limit: 5,
        page: 1,
      },
    });
    const totalArticle = await Article.getArticles({ params: {} });
    to.meta.listArticle = resq.data;
    to.meta.totalArticle = totalArticle.data.length;
    return next();
  },
  created() {
    this.articles = this.$route.meta.listArticle;
    this.totalArticle = this.$route.meta.totalArticle;
  },
  methods: {
    handleFilter: function (value) {
      this.filter = value;
      this.getTotalArticle();
      const params = this.cleanParams();
      this.getArticles(params);
    },
    getArticles: async function (params) {
      const resq = await Article.getArticles({ params });
      this.articles = resq.data;
    },
    getTotalArticle: async function () {
      let params = { ...this.filter };
      delete params.limit;
      const resp = await Article.getArticles({ params });
      this.totalArticle = resp.data.length;
    },
    cleanParams: function () {
      return Object.keys(this.filter)
        .filter((key) => this.filter[key] && this.filter[key] !== "")
        .reduce((res, key) => ((res[key] = this.filter[key]), res), {});
    },
    onShowSizeChange: function (currentPage, pageSize) {
      this.filter.page = currentPage;
      this.filter.limit = pageSize;
      this.handleFilter(this.filter);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-page {
  display: flex;
  justify-content: center;
  padding: 20px;
  .container-article {
    max-width: 768px;
    width: 100%;
  }
}
</style>
