---
sidebar_position: 5
slug: /faq
---

# Questions and Answers

## Development Process

### :small_orange_diamond: Why does it take so long to add new stuff/fix major problems?

Firstly, the addon is made by volunteers, who are generally very busy. All work is done by them for free and in their spare time. There's some community contributions (thanks!), but overall not enough to resolve all the issues that have accumulated over the years in a reasonable time frame... or even just the most important ones.

Additionally, the addon's code base is very old and difficult to work with. We're slowly changing this with the goal of reducing the overhead to fix those long-standing problems, but it's neither fast nor simple to do. More background information can be found [here](https://en.wikipedia.org/wiki/Technical_debt).

Hopefully you understand we're doing what we can. The reality is, your help is needed to improve the addon! If there's something you see that needs work, please don't hesitate to [give it a try](/docs/develop/getting-started) - and feel free to ask if you're at all unsure.

## Missing Features

### :small_orange_diamond: Can Rarity be used on (TBC) classic realms?

Currently, the answer is no. It's something we'd like to make possible, but it requires a major rework of the addon core, which is ongoing but progressing slowly, and as such isn't easily done.

For more details see the [most recent discussion on Discord](https://discord.com/channels/788119147740790854/788120439947395113/848637479434190858) pertaining to this topic, as well as the [related GitHub issue](https://github.com/WowRarity/Rarity/issues/132), where more information on the complications has been given.

## Localization

### :small_orange_diamond: I'm using a non-English client locale and Rarity isn't detecting attempts when I loot an object or container in the world

We rely on scanning the game tooltip and checking for predefined container/object names since Blizzard doesn't provide any way of detecting when you loot them. While this should work out of the box on English clients, others require the English phrase to be translated in our localization system.

Please go [here](https://www.wowace.com/projects/rarity/localization) and verify the object that isn't registering is already translated correctly.

## Tracking Data

### :small_orange_diamond: I've somehow lost my attempts! Can they be restored?

his problem is likely caused by your client corrupting the saved variables file, e.g. in the event of an abrupt shutdown.

Your best bet is searching for a ``Rarity.lua.bak`` file in your WTF folder and to manually restore it (by replacing the Rarity.lua file with it after making a backup) and to keep automated backups of your settings in the future. The file can usually be found under ``WTF/Account/<YourAccountName>/SavedVariables/Rarity.lua.bak`` inside your WOW folder.

Rarity will restore any attempts it can query via Blizzard's statistics API, but many items don't support this and there's nothing we can do.

### :small_orange_diamond: How do I edit my attempt counts?

Type ``/rarity``, or press ESCAPE and select Interface, click the AddOns tab, and scroll down to find the Rarity category. Within the Rarity options, choose the tab that applies (Mounts, Companions, Items, or Custom). Find the item you want to adjust in the list that appears on the left, and click it. Edit the "Attempts" number.


## Attempts Detection

### :small_orange_diamond: You say Rarity automatically uses statistics to determine attempt counts, but it's not working for some of my items. Why?

Rarity can only use statistics which exist in the Statistics tab in your Achievements window. If the statistic isn't there, Rarity can't use it. This means that the majority of items Rarity tracks do not have statistics, and cannot be retroactively tracked. You'll need to ask Blizzard if you want a statistic that is missing.

### :small_orange_diamond: Rarity isn't counting all my fishing pool attempts. Why?

The game doesn't give us an easy way to tell what you're fishing in. To make sure Rarity counts all your fishing pool attempts, do this: right after you cast your line, make sure to mouseover the pool of fish. Then when you loot the bobber, Rarity should count the attempt.

## Third-Party Addons

### :small_orange_diamond: Rarity isn't counting my loots. Why?

Rarity has known conflicts with certain auto-loot add-ons, particularly Magnet Continued and AutoLootPlus. Unfortunately, these add-ons severely modify the game's normal loot system and are not compatible with Rarity. They must be disabled.

## Drop Rates

### :small_orange_diamond: Where does Rarity get its drop chance from?

As you know, Blizzard does not publish the drop chance for anything. Luckily, WowHead tracks the actual drop rate for most things. We've done extensive research on WowHead to determine a best guess at the drop rate for any item. Don't agree with us? You can change the drop rate from the Options screen—you aren't stuck with what we decided on.

Archaeology projects are particularly difficult to estimate. For those, we've had to read through hundreds of individual comments on WowHead and determine a best guess. In reality, archaeology projects vary wildly from one extreme to the other, so there isn't really any practical way to know the average number of projects it takes to obtain an item.

### :small_orange_diamond: How does Rarity determine if I'm "lucky" or "unlucky"?

Rarity calculates the median number of attempts to obtain an item. If you're at or below this value, you're considered lucky. Otherwise, you're not. See the article linked in the question above for a more thorough discussion.

### :small_orange_diamond: How are the percentages calculated?

Take a look at [this extensive article](https://www.iamcal.com/beating-the-rng/) written by the creator of Bunny Hunter. Rarity uses the same calculations.

## Multiple Accounts

### :small_orange_diamond: Can Rarity track cross-account attempts if I farm on multiple characters?

Yes. Rarity can track attempts across all characters on a single World of Warcraft license. It cannot track attempts across multiple licenses within a single Battle.net account, because World of Warcraft does not permit this.

If you just installed Rarity for the first time, it should automatically track attempts across a single license. You don't need to do anything. (Note: some players find that this is not the case.)

### :small_orange_diamond: Can Rarity track attempts across multiple licenses on the same Battle.net account?

No. Blizzard does not allow add-ons to share data between separate licenses. Your mounts, pets, and toys will work across these licenses, but Rarity is not allowed to track the attempts together.
