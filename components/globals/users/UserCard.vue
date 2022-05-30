<template>
  <div class="user-card">
    <figure class="user-card__avatar">
      <img :src="user.avatar" :alt="altAvatar" />
    </figure>
    <div class="user-card__content">
      <h4 class="user-card__content__title margin-null">{{ user.first_name }} {{ user.last_name }}</h4>
      <p class="margin-null">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    altAvatar() {
      return `Avatar de ${this.user.first_name} ${this.user.last_name}`;
    },
  },
};
</script>
