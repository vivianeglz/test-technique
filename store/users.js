const state = () => ({
  users: [],
  totalPages: 0,
});

const getters = {
  users: state => state.users,
  totalPages: state => state.totalPages,
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_TOTAL_PAGES: (state, totalPages) => {
    state.totalPages = totalPages;
  },
};

const actions = {
  fetchUsers(context, params) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get("/users", { params })
        .then(response => {
          const { data, total_pages } = response;
          context.commit("SET_USERS", data);
          context.commit("SET_TOTAL_PAGES", total_pages);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};

export default { state, getters, mutations, actions };
