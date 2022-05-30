<template>
  <div>
    <p v-if="loading">Chargement en cours...</p>
    <div v-else>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <segment-users-list :users="users" />
    </div>
  </div>
</template>

<script>
import SegmentUsersList from "@/components/segments/users/SegmentUsersList";

export default {
  name: "PageUsers",
  components: {
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
  },
};
</script>
