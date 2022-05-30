<template>
  <div class="users-list">
    <user-card v-for="user in users" :key="user.id" :user="user" class="users-list__item" />
  </div>
</template>

<script>
import UserCard from "@/components/globals/users/UserCard";

export default {
  name: "SegmentUsersList",
  components: {
    UserCard,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>
