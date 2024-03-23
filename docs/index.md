---
layout: home
layoutClass: 'm-home-layout'


title: Doc-demo
titleTemplate: GetOffer.Help的内容发布

hero:
  name: Doc-demo
  text: "GetOffer.Help document"
  tagline: |
    GetOffer.Help的内容：写简历、面试、谈Offer
  image:
    src: /logo.png
    alt: GetOffer.Help 
  actions:
    - theme: alt
      text: 写简历
      link: /guide
    - theme: brand
      text: 面试
      link: /interview
    - theme: alt
      text: 谈Offer
      link: /program/
features:
  - icon: 📋
    title: 面试专栏
    details: 海量前端面试问题解答，一站式阅读体验。
    link: /interview/
    linkText: 开始刷题
  - icon: 💬
    title: 编程学习
    details: 同步 B 站视频，文档用于巩固知识。
    link: /program/npm-package/
    linkText: 编程学习
  - icon: 📓
    title: 前端算法
    details: 不再畏惧面试算法，提供刷题路线。
    link: /algorithm/guide/
    linkText: 开始刷题
  
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


