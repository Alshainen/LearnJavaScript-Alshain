const chest = 2;
const maxChestItem = 3;
const minChestItem = 1;

const itemName = [`Wooden Sword`, `Legendary Sword`, `GOD Sword`, `Rock Sword`];
const itemValue = [8, 500, 10000, 20];
const itemRate = [80, 10, 0.5, 70];
const maxInventory = 10;
let inventory = [];
let inventoryValue = 0;
let wallet = 0;

function randomItem() {
    return Math.random() - 0.5;
}

function money(...moneyValue) {
    let total = 0;
    for (const value of moneyValue) {
        total += value;
    }
    return total;
}

function itemDrop() {
    let itemGotIndex;
    do {
        itemGotIndex = [];
        for (let i = 0; i < itemName.length; i++) {
            let roll = Math.random() * 100;
            if (roll < itemRate[i]) {
                itemGotIndex.push(i);
            }
        }
    } while (itemGotIndex.length < minChestItem || itemGotIndex.length > maxChestItem);

    itemGotIndex.sort(randomItem);

    const freeSlot = maxInventory - inventory.length;
    if (itemGotIndex.length > freeSlot) {
        itemGotIndex = itemGotIndex.slice(0, freeSlot);
    }

    let itemGot = [];
    for (let i = 0; i < itemGotIndex.length; i++) {
        const idx = itemGotIndex[i];
        inventory.push(itemName[idx]);
        inventoryValue = money(inventoryValue, itemValue[idx]);
        itemGot.push(itemName[idx]);
    }

    return itemGot;
}

function buttonChest(index) {
    document.getElementsByClassName(`buttonChest`)[index].onclick = function () {
        document.getElementsByClassName(`reward`)[index].textContent = inventory.length >= maxInventory ? `Barang Penuh` : itemDrop().join(`\n`);
        document.getElementById(`itemCount`).textContent = `Item: ${inventory.length}/${maxInventory}`;
        document.getElementById(`inventoryItem`).textContent = inventory;
        document.getElementById(`sellButton`).textContent = `Sh${inventoryValue}`;
    }
}

document.getElementById(`sellButton`).onclick = function () {
    wallet += inventoryValue;
    inventoryValue = 0;
    inventory.splice(0);
    document.getElementById(`itemCount`).textContent = `Item: ${inventory.length}/${maxInventory}`;
    document.getElementById(`money`).textContent = `Sh${wallet}`;
    document.getElementById(`inventoryItem`).textContent = ``;
    document.getElementById(`sellButton`).textContent = `Sh${inventoryValue}`;
}

for (let i = 0; i < chest; i++) {
    buttonChest(i);
}


// Nilai = 100/100