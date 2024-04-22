---
layout: home
layoutClass: 'm-home-layout'


title: GetOffer.Help
titleTemplate: GetOffer.Help的内容发布

hero:
  name: GetOffer.Help
  text: "助力拿到每一个Offer"
  tagline: |
    写简历、面试自测、谈Offer，一个免费平台~
  image:
    src: /logo.png
    alt: GetOffer.Help 
  actions:
    - theme: brand
      text: 面试自测
      link: https://selfview.GetOffer.Help
    - theme: alt
      text: 求职信
      link: https://coverletter.getoffer.help/
    - theme: alt
      text: PDF简历工具
      link: https://cv.GetOffer.help
    


  
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
    avatar: 'https://photo.bolebook.com/2024/04/retouch_2024032401155277.jpg',
    name: '预祝',
    title: '一切顺利',
    desc: '拿到Offer后，就请来<br/>欣赏 <a href="https://yanhua.getoffer.help" target="_blank">美丽的烟花</a>吧！<br/>(记得打开声音~）',
    
    
  },
  
]
</script>

<DataPanel/>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      延伸
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<!--
  <HomeContributors/>
-->