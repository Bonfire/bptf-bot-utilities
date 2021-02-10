# backpack.tf Bot Utilities

This user script provides various TF2Autobot (and TF2-Automatic) utilities on [backpack.tf](https://backpack.tf/).

If this script helped you out, feel free to become a [⭐Stargazer⭐](https://github.com/Bonfire/bptf-bot-utilities/stargazers)!

If you have any suggestions or bug reports, please create an [Issue](https://github.com/Bonfire/bptf-bot-utilities/issues).

## Features

- "Item SKU" button on item hover
- "Add to pricelist" button on item hover
- "Update pricelist" button on item hover
- "Remove from pricelist" button on item hover
- "Pricecheck item" button on item hover

## Installation

To use user scripts you need to first install a user script manager. Here are managers for various browsers:

- [Greasemonkey](http://www.greasespot.net/) - Firefox
- [Tampermonkey](https://tampermonkey.net/) - Chrome, Microsoft Edge, Safari, Opera, Firefox (also with support for mobile Dolphin Browser and UC Browser)
- [Violentmonkey](https://violentmonkey.github.io/) - Chrome, Firefox, Maxthon, Opera

To install this user script, simply navigate to [this link](https://github.com/Bonfire/bptf-bot-utilities/raw/master/bptf-bot-utilities.user.js) and click "Install".

You can also install this script by manually pasting the code found in the above link into a new user script.

**Note: To receive automatic updates when this script updates, please be sure to enable automatic update checking for this script on your preferred User Script Manager.**

## Example

![Item Hover Buttons](https://i.imgur.com/NszrSKc.png)

_Newly added buttons for easily copying commands are highlighted above_

## Changelog

**1.0.7**

Fixed:

- Stock item mapping for the "Construction PDA" and "Sapper"

**1.0.6**

Fixed:

- Wrong def index mapping for stock items

**1.0.5**

Improved:

- Add "Target" item attribute to SKU lookup

**1.0.4**

Improved:

- "Pricecheck item" button on item hover (Reverted)
- Removed text from SKU button and condensed text for Pricecheck button
- Add "Australium" item quality to SKU lookup
- Add "Crate Series" item attribute to SKU lookup

**1.0.3**

Added:

- "Item SKU" button on item hover - [@idinium96](https://github.com/idinium96)

Removed:

- "Pricecheck item" button on item hover (due to very niche use cases)

**1.0.2**

Added:

- "Pricecheck item" button on item hover - [@luigia](https://github.com/luigia)

**1.0.1**

Improved:

- Moved pricelist buttons to above the search link buttons

**1.0.0**

Added:

- "Add to pricelist" button on item hover
- "Update pricelist" button on item hover
- "Remove from pricelist" button on item hover

## Credits

- Thank you to [@NetroScript](https://github.com/NetroScript) for their [similar project](https://github.com/NetroScript/backpack.tf-miscellaneous-extensions/) of which I used as a great reference for interacting with the backpack.tf UI.
