// ==UserScript==
// @name         Backpack.tf - Bot Utilities
// @namespace    https://github.com/Bonfire
// @version      1.0
// @description  A script to provide various TF2Autobot utilities on backpack.tf
// @author       Bon
// @include      /^https?:\/\/backpack\.tf\/.*
// @grant        GM_setClipboard
// @require      https://code.jquery.com/jquery-3.5.1.slim.min.js
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";

    // Modify popover
    $(document).on("mouseover", ".item", function () {
        let hoveredItem = this;
        let itemElement = $(hoveredItem)[0];

        let popoverLoad = setInterval(function () {
            // Add the "bot utility elements row"
            if ($(hoveredItem).next().hasClass("popover")) {
                if (!$("#bot-utility-elements").length) {
                    let botUtilityElements = document.createElement('dd');
                    botUtilityElements.className = 'popover-btns';
                    botUtilityElements.id = 'bot-utility-elements';
                    $(".popover-content")[0].appendChild(botUtilityElements);
                }

                let addUtilitiesLoad = setInterval(function () {
                    let itemSKU = itemLookup(itemElement);

                    // Add the "Add Item" button
                    if (!$("#add-item-button").length) {
                        let addItemButton = document.createElement('a');
                        addItemButton.id = 'add-item-button';
                        addItemButton.className = 'btn btn-default btn-xs';
                        addItemButton.textContent = ' Add';

                        let plusIcon = document.createElement('i');
                        plusIcon.className = 'fa fa-plus';

                        let itemCommand = `!add sku=${itemSKU}`;

                        $(addItemButton).data('itemCommand', itemCommand);
                        $(plusIcon).data('itemCommand', itemCommand);
                        addItemButton.prepend(plusIcon);
                        $('#bot-utility-elements').append(addItemButton);
                    }

                    // Add the "Update Item" button
                    if (!$("#update-item-button").length) {
                        let updateItemButton = document.createElement('a');
                        updateItemButton.id = 'update-item-button';
                        updateItemButton.className = 'btn btn-default btn-xs';
                        updateItemButton.textContent = ' Update';

                        let editIcon = document.createElement('i');
                        editIcon.className = 'fa fa-edit';

                        let itemCommand = `!update sku=${itemSKU}`;
                        $(updateItemButton).data('itemCommand', itemCommand);
                        $(editIcon).data('itemCommand', itemCommand);

                        updateItemButton.prepend(editIcon);
                        $('#bot-utility-elements').append(updateItemButton);
                    }

                    // Add the "Remove Item" button
                    if (!$("#remove-item-button").length) {
                        let removeItemButton = document.createElement('a');
                        removeItemButton.id = 'remove-item-button';
                        removeItemButton.className = 'btn btn-default btn-xs';
                        removeItemButton.textContent = ' Remove';

                        let minusIcon = document.createElement('i');
                        minusIcon.className = 'fa fa-minus';

                        let itemCommand = `!remove sku=${itemSKU}`;
                        $(removeItemButton).data('itemCommand', itemCommand);
                        $(minusIcon).data('itemCommand', itemCommand);

                        removeItemButton.prepend(minusIcon);
                        $('#bot-utility-elements').append(removeItemButton);
                    }

                    $('#add-item-button').on('click', event => {
                        GM_setClipboard($(event.target).data('itemCommand'), 'text/plain');
                    })

                    $('#update-item-button').on('click', event => {
                        GM_setClipboard($(event.target).data('itemCommand'), 'text/plain');
                    })

                    $('#remove-item-button').on('click', event => {
                        GM_setClipboard($(event.target).data('itemCommand'), 'text/plain');
                    })

                    clearInterval(addUtilitiesLoad);
                }, 50);

                setTimeout(function () {
                    clearInterval(addUtilitiesLoad);
                }, 1000);

                clearInterval(popoverLoad);
            }
        }, 50);

        setTimeout(function () {
            clearInterval(popoverLoad);
        }, 750);
    });

    function itemLookup(itemElement) {
        let item = $(itemElement);

        let itemDefIndex = item.attr("data-defindex");
        let itemQuality = item.attr("data-quality");
        let isUncraftable = item.attr("data-craftable") !== "1";
        let itemEffectID = item.attr("data-effect_id");

        let itemSkinInfo = item.find(".item-icon");
        let itemWear, itemSkin;
        if (itemSkinInfo.length > 0) {
            itemSkinInfo = itemSkinInfo.css("background-image").match(/warpaint\/[(?!_)\S]+_[0-9]+_[0-9]+_[0-9]+\.png/g);
            if (itemSkinInfo !== null) {
                itemSkin = itemSkinInfo[0].split("_")[1];
                itemWear = itemSkinInfo[0].split("_")[2];
            }
        }

        let isStrange = item.attr("data-quality_elevated") === "11";
        let itemKillstreak = item.attr("data-ks_tier");
        let isFestivized = item.attr("data-original-title")?.toLowerCase().indexOf("festivized") !== -1;

        // Get the full item SKU, and be sure to remove any pesky whitespaces
        return `${itemDefIndex};\
    ${itemQuality}\
    ${isUncraftable ? ';uncraftable' : ''}\
    ${itemEffectID ? `;u${itemEffectID}` : ''}\
    ${itemSkinInfo ? `;w${itemWear};pk${itemSkin}` : ''}\
    ${isStrange ? ';strange' : ''}\
    ${itemKillstreak ? `;kt-${itemKillstreak}` : ''}\
    ${isFestivized ? ';festive' : ''}`
            .replace(/\s/g,'');
    }

})();
