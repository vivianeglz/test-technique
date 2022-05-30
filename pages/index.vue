<template>
  <page-users :loading="loading" :error-message="errorMessage" :users="users" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PageUsers from "@/components/pages/users";

export default {
  name: "IndexPage",
  components: {
    PageUsers,
  },
  data() {
    return {
      errorMessage: null,
      loading: true,
    };
  },
  computed: {
    ...mapGetters({
      users: "users/users",
    }),
  },
  created() {
    this.loading = true;
    this.fetchUsers()
      .catch(() => {
        this.errorMessage = "Une erreur est survenue lors de la récupération des utilisateurs.";
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions({
      fetchUsers: "users/fetchUsers",
    }),
  },
};
</script>
