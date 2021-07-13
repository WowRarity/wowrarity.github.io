---
sidebar_position: 3
slug: /manual/accessing-historical-data
---

# Accessing Historical Data

You might occasionally want to access tracking data for items you've already obtained. With some limitations, you can do this.

## Displaying Recorded Attempts

There currently isn't a great way to inspect the data Rarity stores, but as of ``r710`` you can find some basic statistics in the Options UI:

![Displaying past attempts](03-display-past-attempts.png)

Needless to say, this is a *very* basic initial proof-of-concept. A more advanced history inspection tool will be implemented soon™.

## Inspecting the Saved Variables

If you need more data than what the above display includes, you currently have two (somewhat awkward) options:

* You can go to your ``World of Warcraft\_retail_\WTF\Account\<AccountID>\SavedVariables\`` folder and open ``Rarity.lua`` in a text editor
* Ingame, you can type ``/tinspect Rarity.db.profile`` to open the database in Blizzard's Table Inspector

:::danger Beware

This will give you direct access to the Lua table that Rarity stores its database in. There's going to be a lot of confusing stuff here! It's perfectly safe to look, but if you edit the database manually and accidentally corrupt it, it could become unusable (worst case scenario). Be careful when making changes to the database, and always be ready to restore a backup if you must modifiy it.

:::

Use this at your own peril! Only manually edit in case of emergency.

## Restoring Database Backups

If you lost your attempts and wish to see whether they're still in there, you may however need to open the database and restore it from ``Rarity.lua.bak`` (located in the same folder) if it's empty. You can usually guess which version has more data inside because the file size will be bigger, and then restore the larger one if needed.

The WOW client creates this backup file automatically, but it's overwritten with the latest version whenever the database itself is saved to disk. If you suspect some or all data was lost, you should go and save the current backup file immediately **without exiting the game or logging out**, as this prompts the client to update the SavedVariables. Otherwise the backup file will be useless to you.

:::note

Frequently, it will be too late to restore data from ``Rarity.lua.bak`` by the time you notice there's an issue, which is why having a backup strategy for your personal data is highly recommended. You can (and should) use automated tools for this so you never have to think about it.

:::