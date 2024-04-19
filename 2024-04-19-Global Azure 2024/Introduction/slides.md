---
theme: default
colorSchema: light
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  ## Azure Meetup Hamburg 032024
drawings:
  persist: false
transition: slide-left
title: Welcome
mdc: true
---

<img src="/GlobalAzure2024.png" class="absolute top-15 right-30 w-60 rounded" />
<div class="absolute left-20 pt-12 w-140 text-left">
  <p><ph:users-four class="inlinetext-yellow-500"/> 19.04.2024</p>
  <span @click="$slidev.nav.next" class="text-5xl font-semibold rounded cursor-pointer text-gray-800">
    Global <logos:microsoft-azure class="inline text-yellow-500"/>zure 2024 Hamburg
  </span>
</div>

---
transition: slide-up
hideInToc: true
---

# Agenda

<Toc />

---
transition: slide-up
---

# Organizer

<div class="flex space-x-10 justify-center">
  <div class="flex flex-col items-center border-2 rounded-4 p-2 w-60">
    <div>
      <img src="/jan-henrik_damaschke.jpg" class="h-40 w-40 rounded-full filter grayscale" />
    </div>
    <div class="mt-2 flex flex-col space-y-2 text-center">
      <div class="font-bold text-xl">Jan-Henrik Damaschke</div>
      <div>Azure MVP, CTO, Senior Cloud/Application Architect @ Visorian</div>
      <div><ion-logo-twitter class="inline mr-2" />@JanDamaschke</div>
      <div><ion-logo-linkedin class="inline mr-2" />/in/jan-henrik-damaschke</div>
      <div><ion-ios-paper class="inline mr-2" />itinsights.org</div>
    </div>
  </div>
    <div class="flex flex-col items-center border-2 rounded-4 p-2 w-60">
    <div>
     <img src="/jmeissner.jpg" class="h-40 w-40 rounded-full filter grayscale" />
    </div>
    <div class="mt-2 flex flex-col space-y-2 text-center">
      <div class="font-bold text-xl">Jacob Meißner</div>
      <div>CEO / Senior Cloud Architect @ Visorian</div>
      <div><ion-logo-linkedin class="inline mr-2" />/in/jacob-meissner</div>
      <div><ion-ios-paper class="inline mr-2" />itinsights.org</div>
    </div>
  </div>
    <div class="flex flex-col items-center border-2 rounded-4 p-2 w-60">
    <div>
      <img src="/cburmeister.jpg" class="h-40 w-40 rounded-full filter grayscale" />
    </div>
    <div class="mt-2 flex flex-col space-y-2 text-center">
      <div class="font-bold text-xl">Christoph Burmeister</div>
      <div>Azure MVP, Principal Solutions Architect</div>
      <div><ion-logo-twitter class="inline mr-2" />@cburmeister</div>
      <div><ion-logo-linkedin class="inline mr-2" />/in/christoph-burmeister</div>
      <div><ion-ios-paper class="inline mr-2" />itinsights.org</div>
    </div>
  </div>
</div>

---
transition: slide-up
---

# Agenda
global.azure.hamburg


<iframe
  src="https://global.azure.hamburg"
  style="width:100%; height:100%;"
></iframe>
---


# Event information

<div class="h-85% w-full grid grid-cols-2 grid-rows-4 gap-7">
  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 1">
      Sessions / Workshps
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 2">
      Zeitplanung
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 3">
      Rauchen
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 4">
      Parken
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 4">
      Toiletten
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 4">
      Mittagessen & Getränke
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 4">
      Ausweise
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 4">
      Fragen?!
    </ServiceCard>
  </v-click>
</div>

---
transition: slide-up
---

# Disclaimer
 </br> 
Mit der Anmeldung und dem Erscheinen stimmt ihr zu, dass ggf. Bilder von euch auf der Veranstaltung zu Werbezwecken auf Social Media gepostet werden.
 <br> <br> <br>

# Feedback

 <img src="/formazg.png" class="h-80 w-80" />