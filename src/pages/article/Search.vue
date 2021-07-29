<template>
  <form class="row form-search">
    <div class="col-md-auto flex-grow-1 col-sm-12">
      <div class="input-group mb-3">
        <input
          type="text"
          v-model="value.search"
          class="form-control"
          placeholder="Search"
        />
      </div>
    </div>
    <div class="col-auto">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">
            sortBy
          </label>
        </div>
        <select v-model="value.sortBy" class="custom-select">
          <option v-for="(item, index) in valueSort" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <div class="col-auto">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">order</label>
        </div>
        <select v-model="value.order" class="custom-select">
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>
    </div>
    <div class="col-auto">
      <div class="input-group-append">
        <button
          v-on:click="handleSearch"
          class="btn btn-outline-primary"
          type="button"
          id="button-addon2"
        >
          Serach
        </button>
      </div>
    </div>
  </form>
</template>

<script>
const valueSort = ["title", "content", "created"];

export default {
  name: "SearchArticle",
  data() {
    return {
      valueSort,
    };
  },
  props: {
    value: {
      type: Object,
      default: null,
    },
  },
  methods: {
    handleSearch: async function (e) {
      this.value.page = 1;
      this.$emit("handleFilter", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-search {
  margin-bottom: 20px;
  box-shadow: 0px 0px 11px rgb(0 0 0 / 20%);
  padding-top: 1rem;
  .custom-select {
    border: 1px solid #d8d5d5;
  }
}
</style>
