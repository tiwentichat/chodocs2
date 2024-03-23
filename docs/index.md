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



<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>

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
    name: '预祝',
    title: '一切顺利',
    desc: '如果拿到Offer的话，就请<br/>欣赏 <a href="https://yanhua.getoffer.help" target="_blank">美丽的烟花</a>吧！',
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