<template>
  <page-users
    :loading="loading"
    :error-message="errorMessage"
    :users="users"
    :page="page"
    :total-pages="totalPages"
    @change-page="onChangePage"
  />
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
      page: 1,
    };
  },
  computed: {
    ...mapGetters({
      users: "users/users",
      totalPages: "users/totalPages",
    }),
  },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions({
      fetchUsers: "users/fetchUsers",
    }),
    onChangePage(page) {
      this.page = page;
      this.getUsers();
    },
    getUsers() {
      this.loading = true;
      this.fetchUsers({ page: this.page })
        .catch(() => {
          this.errorMessage = "Une erreur est survenue lors de la récupération des utilisateurs.";
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
