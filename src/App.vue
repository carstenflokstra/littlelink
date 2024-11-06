<template>
  <div class="gradient-bg">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div class="gradients-container">
      <div class="g1"></div>
      <div class="g2"></div>
      <div class="g3"></div>
      <div class="g4"></div>
      <div class="g5"></div>
      <div class="interactive"></div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="column">
        <img :src="avatar" alt="Carsten Flokstra Avatar">
        <h1>Carsten Flokstra</h1>
        <p>Hey you! Let's introduce myself a little bit. I'm a developer at <strong><a target="_blank" href="https://www.nedap.com">@Nedap</a></strong> and I have a big love for coding and coffee. ☕️💻</p>

        <div v-for="(link, index) in socialLinks" :key="index">
          <a target="_blank" :class="['button', `button-${link.type}`]" :href="link.href">
            <img class="icon" :src="link.icon" :alt="`${link.type} Icon`">{{ link.text }}
          </a>
          <br>
        </div>

        <p>Build your own by forking <a href="https://littlelink.io">LittleLink</a>.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import './style.scss'

// Remove CSS imports since they're in index.html now

const avatar = '/images/avatar.png'

const socialLinks = [
  { type: 'github', icon: '/icons/github.svg', href: 'https://www.github.com/carstenflokstra', text: 'Github' },
  { type: 'discord', icon: '/icons/discord.svg', href: 'https://discord.gg/SdGVnDJ', text: 'Join the ItsFlokkie Army!' },
  { type: 'instagram', icon: '/icons/instagram.svg', href: 'https://www.instagram.com/carstenflokstra', text: 'Instagram' },
  { type: 'linkedin', icon: '/icons/linkedin.svg', href: 'https://www.linkedin.com/in/carstenflokstra', text: 'LinkedIn' },
  { type: 'youtube', icon: '/icons/youtube.svg', href: 'https://www.youtube.com/channel/UCYb8S3f3g-rBSpUDZ8CE8Og', text: 'YouTube' },
  { type: 'twitch', icon: '/icons/twitch.svg', href: 'https://twitch.tv/itsflokkie', text: 'Twitch' },
  { type: 'snapchat', icon: '/icons/snapchat.svg', href: 'https://www.snapchat.com/add/cflokkie', text: 'Snapchat' },
  { type: 'spotify', icon: '/icons/spotify.svg', href: 'https://open.spotify.com/user/cflokkie?si=13f501219baa4e90', text: 'Spotify' },
  { type: 'soundcloud', icon: '/icons/soundcloud.svg', href: 'https://soundcloud.com/djchivarez', text: 'SoundCloud' },
  { type: 'steam', icon: '/icons/steam.svg', href: 'https://steamcommunity.com/id/itsflokkie/', text: 'Steam' },
]
</script>