<template>
  <div class="margin-m">
    <p v-if="loading">Chargement en cours...</p>
    <div v-else>
      <p v-if="errorMessage">{{ errorMessage }}</p>
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

export default {
  name: "PageUsers",
  components: {
    PaginationList,
    SegmentUsersList,
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
  },
};
</script>
