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

<img src="/azure-meetup-logo.png" class="absolute top-15 right-30 w-60 rounded" />
<div class="absolute left-20 pt-12 w-140 text-left">
  <p><ph:users-four class="inline text-yellow-500"/> 26.03.2024</p>
  <span @click="$slidev.nav.next" class="text-3xl font-semibold rounded cursor-pointer text-gray-800">
    <logos:microsoft-azure class="inline text-yellow-500"/>zure Meetup Hamburg
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
      <ph-user class="h-40 w-40 rounded-full filter grayscale" />
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
      <ph-user class="h-40 w-40 rounded-full filter grayscale" />
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

# Meetup structure

<v-clicks>

- <ph-house class="inline" /> **Alle 2 Monate**
- <simple-icons-github class="inline" /> **Zentrales repo fuer Vortraege: https://github.com/it-insights/azure-meetup-hamburg**
- <simple-icons-discord class="inline" /> **Fragen und Diskussionen auf Discord**
- <simple-icons-sessionize class="inline" /> **Eigene Vorträge einreichen auf Sessionize: https://sessionize.com/azure-meetup-hamburg/**

</v-clicks>

---
transition: slide-up
---

# Azure topics

<div class="h-85% w-full grid grid-cols-2 grid-rows-4 gap-7">
  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 1">
      Infrastructure as Code (IaC)
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 2">
      Cloud Native
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 3">
      Identity
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 4">
      Data
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 4">
      AI/CoPilot
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 4">
      Storage
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 4">
      Networking
    </ServiceCard>
  </v-click>

  <v-click>
    <ServiceCard :active="$slidev.nav.clicks === 4">
      Pricing
    </ServiceCard>
  </v-click>
</div>

---
transition: slide-up
---

# Infrastructure as Code

<v-clicks>

- Bicep
- Deployment Stacks

</v-clicks>

---
transition: slide-up
---

# Cloud Native

<v-clicks>

- AKS
- Retina
- Dapr
- Radius
- Container Apps
- Functions
- Container Apps
- SWA
- DevOps vs. GitHub

</v-clicks>

---
transition: slide-up
---

# Identity/Security

<v-clicks>

- Azure AD -> Entra ID
- Microsoft Defender for Endpoint
- Microsoft Defender for Identity
- Microsoft Defender for Office 365
- Microsoft Defender for Cloud Apps
- Microsoft Defender for Cloud
  - Agentless scanning
  - Attack path
  - KQL interface for recommendations
  - DevOps integration (Azure DevOps/Github, DevOps recommendations)

</v-clicks>

---
transition: slide-up
---

# Data

<v-clicks>

- OneLake
- Fabric

</v-clicks>

---
transition: slide-up
---

# AI/CoPilot

<v-clicks>

- AI OpenAI Model Support
- Exclusive model support of Mistral AI
- Microsoft own SLMs (Phi-2)
- Azure copilot
	- Resource graph queries
	- Cost insights

</v-clicks>

---
transition: slide-up
---

# Storage

<v-clicks>

- Azure Storage Actions
- SAN/Hybrid Storage Updates
- NetApp
- Azure Blob Storage Cold Tier

</v-clicks>

---
transition: slide-up
---

# Network

<v-clicks>

- Frontdoor
- DDoS

</v-clicks>

---
transition: slide-up
---

# Pricing

<v-clicks>

- Egress costs?
- Cost Management massive updates

</v-clicks>

---
transition: slide-up
layout: center
---

# Global Azure Hamburg 2024

<img class="absolute blur-4 top-0 left-0" src="azure-saturday-banner.png" />
<div class="absolute text-white top-40 right-50 text-4xl p-4 w-150">
  <div class="absolute left-0 top-4 w-full h-14 bg-gray opacity-80 rounded-2" />
  <p class="left-10 absolute rounded-2 text-center font-bold">Global Azure Hamburg 2024</p>
  <br><br>
  <p class="text-2xl text-center font-bold">April 19, 2024 · In-person Hamburg</p>
  <p class="text-2xl text-center font-bold">https://www.meetup.com/de-DE/azure-meetup-hamburg/</p>
</div>
