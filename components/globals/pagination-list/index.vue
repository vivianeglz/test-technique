<template>
  <div class="pagination-list">
    <button
      v-for="index in totalPages"
      :key="index"
      :class="getClassName(index)"
      class="pagination-list__btn"
      @click.prevent="() => onClick(index)"
    >
      {{ index }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationList",
  props: {
    totalPages: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    getClassName(currentIndex) {
      return this.page === currentIndex ? "pagination-list__btn--active" : "";
    },
    onClick(index) {
      if (index === this.page) return;
      this.$emit("change-page", index);
    },
  },
};
</script>
