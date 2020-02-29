<template>
  <form @submit.prevent="login">
    <input ref="email" name="email" type="email" required :disabled="!undecided" />
    <template v-if="undecided">
      <input type="button" value="Next" @click="decide" />
    </template>
    <template v-else-if="loggingIn">
      <input name="password" type="password" required />
      <input type="submit" value="Log in" />
    </template>
    <template v-else>
      <span>Email not found. <a @click="action = ''">Try again?</a></span>
      <input name="username" type="text" required />
      <input name="password" type="password" required />
      <input name="password-confirm" type="password" required />
      <input type="submit" value="Register" disabled />
    </template>
  </form>
</template>

<script>
export default {
  name: 'Login',
  props: {
    suggestedAction: String,
    nextUrl: String,
  },
  data() {
    return {
      // FIXME: Currently we load a list of valid emails from .env for testing purposes.
      validEmails: (process.env.VUE_APP_VALID_EMAILS || "").split(","),
      action: this.suggestedAction,
    };
  },
  computed: {
    registering() {
      return this.action === "register";
    },
    loggingIn() {
      return this.action === "login";
    },
    undecided() {
      return !this.registering && !this.loggingIn;
    },
  },
  methods: {
    decide() {
      const email = this.$refs.email.value;
      if (this.isRegistered(email)) {
        this.action = "login";
      } else {
        this.action = "register";
      }
    },
    isRegistered(email) {
      return this.validEmails.indexOf(email) !== -1;
    },
    login() {
      // FIXME: Password validation
      localStorage.setItem("username", this.$refs.email.value);
      this.$router.push(this.nextUrl || "/");
    },
  },
}
</script>
