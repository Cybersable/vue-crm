<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a
          href="#"
          @click.prevent="$emit('toggleSidebar')"
        >
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date("datetime") }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link :to="{ name: 'profile' }" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import M from "materialize-css/dist/js/materialize.min";
export default {
  name: "Navbar",
  emits: ["toggleSidebar"],
  data() {
    return {
      date: new Date(),
      interval: null,
      dropdown: null
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    });
  },
  methods: {
    logout() {
      this.$router.push({ name: "login", params: { message: "logout" }});
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  }
};
</script>

<style scoped>

</style>
