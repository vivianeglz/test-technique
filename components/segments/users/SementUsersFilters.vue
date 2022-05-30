<template>
  <div class="input-container">
    <label for="searchString" class="input-container__label">Filtrer sur le prénom / nom</label>
    <input
      id="searchString"
      v-model="searchString"
      type="text"
      name="searchString"
      placeholder="ex: Jean Jeannot"
      class="input-container__input"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: "UsersListFilters",
  props: {
    query: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      searchString: this.query.searchString || null,
      debounce: null,
    };
  },
  methods: {
    onInput() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.$emit("filter", { searchString: this.searchString });
      }, 800);
    },
  },
};
</script>
