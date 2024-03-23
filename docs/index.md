---
layout: home
layoutClass: 'm-home-layout'


title: GetOffer.Help
titleTemplate: GetOffer.Help的内容发布

hero:
  name: GetOffer.Help
  text: "助力拿到每一个Offer"
  tagline: |
    写简历、面试自测、谈Offer
  image:
    src: /logo.png
    alt: GetOffer.Help 
  actions:
    - theme: alt
      text: 写简历
      link: https://cv.GetOffer.help
    - theme: brand
      text: 面试自测
      link: https://selfview.GetOffer.Help
    - theme: alt
      text: 谈Offer
      link: /program/


  
---




<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import { icons } from './socialIcons';

const members = [
  {
    avatar: 'https://www.github.com/getofferhelp.png',
    name: 'GetOffer.Help',
    title: 'Get Your Offer',
    desc: 'Get Your Offer<br/>Creator @ <a href="https://github.com/getofferhlp/getofferhelp" target="_blank">GetOffer.Help</a>',
    links: [
      { icon: 'github', link: 'https://github.com/getofferhelp' },
      
    ]
  },
  
]
</script>

<DataPanel/>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      核心成员介绍
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<!--
  <HomeContributors/>
-->