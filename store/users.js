const state = () => ({
  users: [],
});

const getters = {
  users: state => state.users,
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
};

const actions = {
  fetchUsers(context) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get("/users")
        .then(response => {
          const { data } = response;
          context.commit("SET_USERS", data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};

export default { state, getters, mutations, actions };
