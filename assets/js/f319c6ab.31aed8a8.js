(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[379],{1161:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var o=i(2122),s=i(9756),n=(i(7294),i(3905)),a=["components"],r={sidebar_position:6,slug:"/known-issues"},u="Known Issues",l={unversionedId:"known-issues",id:"known-issues",isDocsHomePage:!1,title:"Known Issues",description:"Fishing",source:"@site/docs/known-issues.md",sourceDirName:".",slug:"/known-issues",permalink:"/docs/known-issues",editUrl:"https://github.com/WowRarity/Rarity/edit/main/docusaurus/docs/known-issues.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/known-issues"},sidebar:"tutorialSidebar",previous:{title:"Questions and Answers",permalink:"/docs/faq"},next:{title:"Report a Problem",permalink:"/docs/reporting-a-problem"}},d=[{value:"Fishing",id:"fishing",children:[{value:"\ud83d\udd38 Tiny Carp isn&#39;t supported",id:"-tiny-carp-isnt-supported",children:[]},{value:"\ud83d\udd38 Fishing detection doesn&#39;t always work",id:"-fishing-detection-doesnt-always-work",children:[]}]},{value:"Archaeology",id:"archaeology",children:[{value:"\ud83d\udd38 Archaeology pets are not included in Rarity",id:"-archaeology-pets-are-not-included-in-rarity",children:[]},{value:"\ud83d\udd38 Completing the quest &quot;Fun For The Little Ones&quot; results in Rarity counting an Archaeology attempt",id:"-completing-the-quest-fun-for-the-little-ones-results-in-rarity-counting-an-archaeology-attempt",children:[]}]},{value:"Darkmoon Faire",id:"darkmoon-faire",children:[{value:"\ud83d\udd38 Darkmoon Rabbit isn&#39;t supported",id:"-darkmoon-rabbit-isnt-supported",children:[]}]},{value:"Statistics",id:"statistics",children:[{value:"\ud83d\udd38 LFR kills in Dragon Soul count as attempts when they shouldn&#39;t",id:"-lfr-kills-in-dragon-soul-count-as-attempts-when-they-shouldnt",children:[]}]}],h={toc:d};function c(t){var e=t.components,i=(0,s.Z)(t,a);return(0,n.kt)("wrapper",(0,o.Z)({},h,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"known-issues"},"Known Issues"),(0,n.kt)("h2",{id:"fishing"},"Fishing"),(0,n.kt)("h3",{id:"-tiny-carp-isnt-supported"},"\ud83d\udd38 Tiny Carp isn't supported"),(0,n.kt)("p",null,"The WoW add-on API makes it too difficult to detect salt water versus fresh water. Therefore, at this time the Tiny Carp companions cannot be supported by Rarity. See also: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WowRarity/Rarity/issues/299"},"#299")),(0,n.kt)("h3",{id:"-fishing-detection-doesnt-always-work"},"\ud83d\udd38 Fishing detection doesn't always work"),(0,n.kt)("p",null,"The game doesn't give us an easy way to tell what you're fishing in. To make sure Rarity counts all your fishing pool attempts, do this: right after you cast your line, make sure to mouseover the pool of fish. Then when you loot the bobber, Rarity should count the attempt."),(0,n.kt)("h2",{id:"archaeology"},"Archaeology"),(0,n.kt)("h3",{id:"-archaeology-pets-are-not-included-in-rarity"},"\ud83d\udd38 Archaeology pets are not included in Rarity"),(0,n.kt)("p",null,"The only archaeology pet that is considered actually rare is the Crawling Claw. However, this item has a problem because it shows up in your archaeology journal as Mummified Monkey Paw. At this time, Rarity does not support archaeology detection for items whose journal name differs from the actual item name, so Crawling Claw is not available for detection."),(0,n.kt)("h3",{id:"-completing-the-quest-fun-for-the-little-ones-results-in-rarity-counting-an-archaeology-attempt"},'\ud83d\udd38 Completing the quest "Fun For The Little Ones" results in Rarity counting an Archaeology attempt'),(0,n.kt)("p",null,"This is a limitation in the way Rarity detects Archaeology project solutions, which is fairly awkward to do given the current API. See also: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WowRarity/Rarity/issues/301"},"#301")),(0,n.kt)("h2",{id:"darkmoon-faire"},"Darkmoon Faire"),(0,n.kt)("h3",{id:"-darkmoon-rabbit-isnt-supported"},"\ud83d\udd38 Darkmoon Rabbit isn't supported"),(0,n.kt)("p",null,"Due to limitations in the Blizzard API for add-ons, this item cannot be supported. See also: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WowRarity/Rarity/issues/248"},"#248")),(0,n.kt)("h2",{id:"statistics"},"Statistics"),(0,n.kt)("h3",{id:"-lfr-kills-in-dragon-soul-count-as-attempts-when-they-shouldnt"},"\ud83d\udd38 LFR kills in Dragon Soul count as attempts when they shouldn't"),(0,n.kt)("p",null,'Killing a boss in Dragon Soul on LFR difficulty causes Rarity to detect an attempt on Normal mode. This is because Blizzard tracks LFR kills in Dragon Soul under your Statistics as a "normal" kill. This can\'t be fixed. However, raids in Mists of Pandaria and up implement separate statistics for LFR, so this issue does not exist in tiers above Dragon Soul.'))}c.isMDXComponent=!0}}]);