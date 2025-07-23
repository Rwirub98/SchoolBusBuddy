<template>
  <nav>
  <div class="nav-header">
    <div class="nav-logo">
      <a href="#">SchoolBus<span>Buddy.</span></a>
    </div>

    <div class="nav-menu-btn" @click="toggleMenu">
      <span><i :class="menuOpen ? 'ri-close-line' : 'ri-menu-line'"></i></span>
    </div>
  </div>

  <ul class="nav-links" :class="{ open: menuOpen }" @click="closeMenu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Features</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <div class="nav-btns">
    <button class="btn sign-up">Sign Up</button>
    <button class="btn sign-in">Sign In</button>
  </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>


