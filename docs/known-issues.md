---
sidebar_position: 6
slug: /known-issues
---

# Known Issues

## Fishing

### :small_orange_diamond: Tiny Carp isn't supported

The WoW add-on API makes it too difficult to detect salt water versus fresh water. Therefore, at this time the Tiny Carp companions cannot be supported by Rarity. See also: [#299](https://github.com/WowRarity/Rarity/issues/299)

### :small_orange_diamond: Fishing detection doesn't always work

The game doesn't give us an easy way to tell what you're fishing in. To make sure Rarity counts all your fishing pool attempts, do this: right after you cast your line, make sure to mouseover the pool of fish. Then when you loot the bobber, Rarity should count the attempt.

## Archaeology

### :small_orange_diamond: Archaeology pets are not included in Rarity

The only archaeology pet that is considered actually rare is the Crawling Claw. However, this item has a problem because it shows up in your archaeology journal as Mummified Monkey Paw. At this time, Rarity does not support archaeology detection for items whose journal name differs from the actual item name, so Crawling Claw is not available for detection.

### :small_orange_diamond: Completing the quest "Fun For The Little Ones" results in Rarity counting an Archaeology attempt

This is a limitation in the way Rarity detects Archaeology project solutions, which is fairly awkward to do given the current API. See also: [#301](https://github.com/WowRarity/Rarity/issues/301)

## Darkmoon Faire

### :small_orange_diamond: Darkmoon Rabbit isn't supported

Due to limitations in the Blizzard API for add-ons, this item cannot be supported. See also: [#248](https://github.com/WowRarity/Rarity/issues/248)

## Statistics

### :small_orange_diamond: LFR kills in Dragon Soul count as attempts when they shouldn't

Killing a boss in Dragon Soul on LFR difficulty causes Rarity to detect an attempt on Normal mode. This is because Blizzard tracks LFR kills in Dragon Soul under your Statistics as a "normal" kill. This can't be fixed. However, raids in Mists of Pandaria and up implement separate statistics for LFR, so this issue does not exist in tiers above Dragon Soul.
