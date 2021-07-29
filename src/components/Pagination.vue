<template>
  <nav
    aria-label="Page navigation example"
    class="custom-pagination row justify-content-end"
  >
    <ul class="pagination col-auto mb-1">
      <li class="page-item" v-on:click="setCurrentPage(value - 1)">
        <a class="page-link" href="#">Previous</a>
      </li>
      <li
        v-for="number in totalPage"
        :key="number"
        v-on:click="setCurrentPage(number)"
        class="page-item"
        v-bind:class="{ active: value === number }"
      >
        <a class="page-link">{{ number }}</a>
      </li>
      <li class="page-item" v-on:click="setCurrentPage(value + 1)">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
    <select
      v-if="pageSizeOptions"
      v-model="perPage"
      v-on:change="setCurrentPage(1)"
      class="custom-select col-auto mb-1"
    >
      <option
        v-for="size in pageSizeOptions"
        :value="size"
        :key="size"
        class="custom-size-page"
      >
        {{ size }} / page
      </option>
    </select>
  </nav>
</template>
<script>
export default {
  name: "Pagination",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      tupe: Number,
    },
    total: {
      type: Number,
      require: true,
    },
    pageSizeOptions: {
      type: Array,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      perPage: this.pageSize,
    };
  },
  computed: {
    totalPage: function () {
      return Math.ceil(this.total / this.pageSize);
    },
  },
  methods: {
    setCurrentPage: function (currentPage) {
      if (currentPage <= 0 || currentPage > this.totalPage) {
        return;
      }
      this.$emit("onShowSizeChange", currentPage, this.perPage);
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-pagination {
  margin-right: 0;
  .navigation {
    .page-item {
      &.active {
        color: #fff;
        background-color: #007bff;
      }
    }
  }
  .custom-select {
    border: 1px solid #dee2e6;
    color: #488ef9;
    padding: 0.375rem 0.75rem;
    .custom-size-page {
      color: #488ef9;
    }
  }
}
</style>
