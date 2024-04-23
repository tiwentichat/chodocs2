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
    

features:
  - icon: 💭
    title: 视频面试自测
    details: 视频模拟面试+AI反馈评价，视频保存下来，方便复盘表现~
    link: https://selfview.GetOffer.Help
    linkText: 去自测
  - icon: 🌱
    title: 求职信
    details: 求职信，一键生成
    link: https://coverletter.getoffer.help/
    linkText: 写，忘情的写！
  - icon: 📋
    title: PDF简历
    details: 快速写PDF简历的模板工具
    link: https://cv.GetOffer.help
    linkText: 去写简历
  - icon: ❤️
    title: 视频面试自测-使用指南
    details: 视频面试自测的用法说明
    link: https://guide.getoffer.help/selfview
    linkText: 阅读
  

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