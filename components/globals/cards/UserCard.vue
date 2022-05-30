<template>
  <div class="user-card">
    <figure class="user-card__avatar">
      <img :src="userAvatar" :alt="altAvatar" />
    </figure>
    <div class="user-card__content">
      <h4 class="user-card__content__title margin-null">{{ userName }}</h4>
      <p class="margin-null">{{ userEmail }}</p>
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
      return `Avatar de ${this.user?.first_name || "- -"} ${this.user?.last_name || "- -"}`;
    },
    userName() {
      return `${this.user?.first_name || "- -"} ${this.user?.last_name || "- -"}`;
    },
    userEmail() {
      return this.user?.email || "- -";
    },
    userAvatar() {
      return this.user?.avatar || "";
    },
  },
};
</script>
