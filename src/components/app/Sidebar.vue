<template>
  <ul class="sidenav app-sidenav" :class="{ open: isOpen }">
    <router-link
      v-for="link in links"
      :key="link.name"
      tag="li"
      :to="{ name: link.name }"
    >
      <a href="#" class="waves-effect waves-orange pointer">
        {{ link.title }}
      </a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isOpen: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      links: [
        {
          title: "Счет",
          name: "home"
        },
        {
          title: "История",
          name: "history"
        },
        {
          title: "Планирование",
          name: "planing"
        },
        {
          title: "Новая запись",
          name: "record"
        },
        {
          title: "Категории",
          name: "categories"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
