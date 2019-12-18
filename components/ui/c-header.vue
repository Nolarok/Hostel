<template>
  <header class="main-header">
    <div class="user">
      <div class="user__name">{{GET_USER_INFO('name')}}</div>
      <c-button
        v-if="GET_USER_INFO('role') !== ''"
        type="svg"
        :action="logout"
      >
        <c-svg svg="sign_in"
          :prop="{
            height: '2.4rem',
            color: '#ffffff'
          }"
        />
      </c-button>
    </div>
  </header>
</template>

<script>
  import CSvg from "./c-svg"
  import CButton from "./c-button"
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: "c-header",
    components: {CButton, CSvg},
    methods: {
      ...mapMutations('user', ['SET_CURRENT_USER', 'CLEAR']),

      logout() {
        this.$cookies.remove('token')
        this.$router.push('/login')
        this.CLEAR()
      }
    },
    computed: {
      ...mapGetters('user', ['GET_USER_INFO'])
    },
    async mounted() {
      let response

      try {
        response = await this.$axios.post('/users/name', {}, {
          headers: {
            Authorization: 'Bearer ' + this.$cookies.get('token')
          }
        })
      } catch (error) {
        console.error(error)
        return
      }

      const {name, role} = response.data.data

      if (name && role) {
        this.SET_CURRENT_USER({
          name, role
        })
      }
    }
  }
</script>

<style scoped>

</style>
