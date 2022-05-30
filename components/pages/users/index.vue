<template>
  <div class="margin-m">
    <p v-if="loading">Chargement en cours...</p>
    <div v-else>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <segment-users-filters :query="query" class="margin-bottom-s" @filter="query => $emit('filter', query)" />
      <pagination-list
        :page="page"
        :total-pages="totalPages"
        class="margin-bottom-s"
        @change-page="page => $emit('change-page', page)"
      />
      <segment-users-list :users="users" />
    </div>
  </div>
</template>

<script>
import PaginationList from "@/components/globals/pagination-list";
import SegmentUsersList from "@/components/segments/users/SegmentUsersList";
import SegmentUsersFilters from "@/components/segments/users/SementUsersFilters";

export default {
  name: "PageUsers",
  components: {
    PaginationList,
    SegmentUsersList,
    SegmentUsersFilters,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
    errorMessage: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    page: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 0,
    },
    query: {
      type: Object,
      required: true,
    },
  },
};
</script>
