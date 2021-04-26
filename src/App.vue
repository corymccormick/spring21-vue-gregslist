<template>
  <header>
    <Navbar />
  </header>
  <!-- NOTE router-view allows the router to determine the component that should be injected -->
  <main>
    <router-view />
    <CreateCarModal />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import CreateCarModal from './components/CreateCarModal.vue'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar,
    CreateCarModal
  }
}
</script>

<style lang="css">
</style>
