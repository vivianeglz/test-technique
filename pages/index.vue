<template>
  <page-users
    :loading="loading"
    :error-message="errorMessage"
    :users="filteredUsers"
    :page="page"
    :total-pages="totalPages"
    :query="query"
    @change-page="onChangePage"
    @filter="onFilter"
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
      query: {},
    };
  },
  computed: {
    ...mapGetters({
      users: "users/users",
      totalPages: "users/totalPages",
    }),
    filteredUsers() {
      return this.query.searchString
        ? this.users.filter(
            user =>
              user.first_name?.toLowerCase()?.includes(this.query.searchString.toLowerCase()) ||
              user.last_name?.toLowerCase()?.includes(this.query.searchString.toLowerCase())
          )
        : this.users;
    },
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
    onFilter(query) {
      this.query = query;
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
