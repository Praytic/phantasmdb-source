import { EStat } from './stat';

export enum EItemType {
    WEAPON = 'Weapon',
    ARMOR = 'Armor',
    RELIC = 'Relic',
}

export enum EItemRarity {
    NORMAL = 'Normal',
    RARE = 'Rare',
}

export type ItemStatValue = [EStat, Number];

export type IItemEffect = String;

export interface IItem {
    name: String;
    icon: String;
    stats?: ItemStatValue[];
    effects?: IItemEffect[];
    dropLevel?: Number;
    rarity: EItemRarity;
    type: EItemType;
}

export const ITEMS: IItem[] = [{
    name: 'Iron Sword',
    icon: 'assets/icons/items/btnsteelmelee.png',
    stats: [
        [EStat.AGILITY, 50],
        [EStat.ADRENALINE, 25],
        [EStat.PARRY, 25]
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.WEAPON,
    dropLevel: 1
}, {
    name: 'Iron Axe',
    icon: 'assets/icons/items/btnorcmeleeupone.png',
    stats: [
        [EStat.CRITICALITY, 30],
        [EStat.STRENGTH, 70],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.WEAPON,
    dropLevel: 1
}, {
    name: 'Adrenaline Rush',
    icon: 'assets/icons/items/btnberserkfortrolls.png',
    stats: [
        [EStat.ADRENALINE, 40],
        [EStat.AGILITY, 30],
        [EStat.REGENERATION, 30],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.WEAPON,
    dropLevel: 1
}, {
    name: 'Blood Moon',
    icon: 'assets/icons/items/btnspiritwalkeradepttraining.png',
    stats: [
        [EStat.VAMPIRISM, 100],
        [EStat.SHADOW_RESISTANCE, 20],
    ],
    rarity: EItemRarity.RARE,
    type: EItemType.WEAPON,
    dropLevel: 1
}, {
    name: 'Healthstone',
    icon: 'assets/icons/items/btnhealthstone.png',
    stats: [
        [EStat.REGENERATION, 50],
        [EStat.WILL, 25],
        [EStat.FIRE_RESISTANCE, 50],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.ARMOR,
    dropLevel: 1
}, {
    name: 'Ring of Regeneration',
    icon: 'assets/icons/items/btnringskull.png',
    stats: [
        [EStat.REGENERATION, 75],
        [EStat.ARCANE_RESISTANCE, 50],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.ARMOR,
    dropLevel: 1
}, {
    name: 'Leather Armor',
    icon: 'assets/icons/items/btnleatherupgradeone.png',
    stats: [
        [EStat.HARDINESS, 40],
        [EStat.EVASION, 40],
        [EStat.NATURE_RESISTANCE, 40],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.ARMOR,
    dropLevel: 1
}, {
    name: 'Necklace of Dryad',
    icon: 'assets/icons/items/btnnecklace.png',
    stats: [
        [EStat.WILL, 100],
        [EStat.ARCANE_RESISTANCE, 50],
        [EStat.FIRE_RESISTANCE, 50],
        [EStat.FROST_RESISTANCE, 50],
        [EStat.HOLY_RESISTANCE, 50],
        [EStat.NATURE_RESISTANCE, 50],
        [EStat.SHADOW_RESISTANCE, 50],
        [EStat.VAMPIRISM, -50],
        [EStat.REGENERATION, -50],
    ],
    rarity: EItemRarity.RARE,
    type: EItemType.ARMOR,
    dropLevel: 1
}, {
    name: 'Enchanted Gem',
    icon: 'assets/icons/items/btnenchantedgemstone.png',
    stats: [
        [EStat.ARCANE_RESISTANCE, 40],
        [EStat.FIRE_RESISTANCE, 40],
        [EStat.FROST_RESISTANCE, 40],
        [EStat.HOLY_RESISTANCE, 40],
        [EStat.NATURE_RESISTANCE, 40],
        [EStat.SHADOW_RESISTANCE, 40],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.RELIC,
    dropLevel: 1
}, {
    name: 'Warlock Skull',
    icon: 'assets/icons/items/btnguldanskull.png',
    stats: [
        [EStat.SORCERY, 50],
        [EStat.VAMPIRISM, 50],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.RELIC,
    dropLevel: 1
}, {
    name: 'Pandaren Earth Spirit',
    icon: 'assets/icons/items/btnearthbrewmaster.png',
    stats: [
        [EStat.CRITICALITY, -50],
        [EStat.AGILITY, 75],
        [EStat.STRENGTH, 75],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.RELIC,
    dropLevel: 1
}, {
    name: 'Broken Heart',
    icon: 'assets/icons/items/BTNItem1_1.png',
    stats: [
        [EStat.WISDOM, 75],
    ],
    effects: [
        'Hearts don\'t work.',
        'Max. health +20%.',
        'Get 40% more loot.'
    ],
    rarity: EItemRarity.RARE,
    type: EItemType.RELIC,
    dropLevel: 1
}, {
    name: 'Staff of Magicka',
    icon: 'assets/icons/items/btnwitchdoctoradept.png',
    stats: [
        [EStat.SORCERY, 50],
        [EStat.SPIRIT, 30],
        [EStat.INTELLECT, 20],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.WEAPON,
    dropLevel: 2
}, {
    name: 'Pearwood Flute',
    icon: 'assets/icons/items/btnalleriaflute.png',
    stats: [
        [EStat.AGILITY, 40],
        [EStat.CRITICALITY, 40],
        [EStat.NATURE_RESISTANCE, 40],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.WEAPON,
    dropLevel: 2
}, {
    name: 'Nailed Hammer',
    icon: 'assets/icons/items/btnbasicstruct.png',
    stats: [
        [EStat.STRENGTH, 60],
        [EStat.HARDINESS, 40],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.WEAPON,
    dropLevel: 2
}, {
    name: 'Unholy Glove',
    icon: 'assets/icons/items/btnadvancedunholystrength.png',
    stats: [
        [EStat.ADRENALINE, 50],
        [EStat.PREPARATION, 50],
        [EStat.HOLY_RESISTANCE, 30],
    ],
    rarity: EItemRarity.RARE,
    type: EItemType.WEAPON,
    dropLevel: 2
}, {
    name: 'Wooden Shield',
    icon: 'assets/icons/items/btnsteelarmor.png',
    stats: [
        [EStat.BLOCK, 50],
        [EStat.AVOIDANCE, 50],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.ARMOR,
    dropLevel: 2
}, {
    name: 'Unlucky Skull',
    icon: 'assets/icons/items/btnskeletonwarrior.png',
    stats: [
        [EStat.VAMPIRISM, 50],
        [EStat.SHADOW_RESISTANCE, 50],
        [EStat.NATURE_RESISTANCE, 50],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.ARMOR,
    dropLevel: 2
}, {
    name: 'Boots of Speed',
    icon: 'assets/icons/items/btnbootsofspeed.png',
    stats: [
        [EStat.SPEED, 70],
        [EStat.EVASION, 30],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.ARMOR,
    dropLevel: 2
}, {
    name: 'Hood of Sorceress',
    icon: 'assets/icons/items/btnjaina.png',
    stats: [
        [EStat.SPIRIT, 100],
    ],
    rarity: EItemRarity.RARE,
    type: EItemType.ARMOR,
    dropLevel: 2
}, {
    name: 'Memorized Things',
    icon: 'assets/icons/items/btnmanual3.png',
    stats: [
        [EStat.WISDOM, 60],
        [EStat.SORCERY, 40],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.RELIC,
    dropLevel: 2
}, {
    name: 'Vampiric Blood',
    icon: 'assets/icons/items/BTNItem2_2.png',
    stats: [
        [EStat.VAMPIRISM, 200],
        [EStat.REGENERATION, -100],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.RELIC,
    dropLevel: 2
}, {
    name: 'Warlock Hood',
    icon: 'assets/icons/items/BTNItem2_3.png',
    stats: [
        [EStat.SORCERY, 150],
        [EStat.WISDOM, -50],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.RELIC,
    dropLevel: 2
}, {
    name: 'Unquenched Rage',
    icon: 'assets/icons/items/BTNItem2_1.png',
    stats: [
    ],
    effects: [
        'Rage Machine',
    ],
    rarity: EItemRarity.RARE,
    type: EItemType.RELIC,
    dropLevel: 2
}, {
    name: 'Arcanite Spear',
    icon: 'assets/icons/items/btnarcaniteranged.png',
    stats: [
        [EStat.PREPARATION, 60],
        [EStat.REFLECTION, 40],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.WEAPON,
    dropLevel: 3
}, {
    name: 'Club of Ogre Shaman',
    icon: 'assets/icons/items/btngnollcommandaura.png',
    stats: [
        [EStat.INTELLECT, 50],
        [EStat.STRENGTH, 30],
        [EStat.WISDOM, 20],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.WEAPON,
    dropLevel: 3
}, {
    name: 'Wand of Cyclone',
    icon: 'assets/icons/items/btnwandofcyclone.png',
    stats: [
        [EStat.SPEED, 60],
        [EStat.DEFENCE, 40],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.WEAPON,
    dropLevel: 3
}, {
    name: 'Dull Blade',
    icon: 'assets/icons/items/BTNItem3_1.png',
    stats: [
        [EStat.CRITICALITY, 70],
    ],
    effects: [
        'Chance to slow enemies.'
    ],
    rarity: EItemRarity.RARE,
    type: EItemType.WEAPON,
    dropLevel: 3
}, {
    name: 'Dragonhide Armor',
    icon: 'assets/icons/items/btnleatherupgradethree.png',
    stats: [
        [EStat.HARDINESS, 40],
        [EStat.DEFENCE, 40],
        [EStat.FIRE_RESISTANCE, 40],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.ARMOR,
    dropLevel: 3
}, {
    name: 'Shield of Happiness',
    icon: 'assets/icons/items/btnunholyarmor.png',
    stats: [
        [EStat.REFLECTION, 60],
        [EStat.BLOCK, 40],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.ARMOR,
    dropLevel: 3
}, {
    name: 'Bodus Pirate',
    icon: 'assets/icons/items/btnseagiant.png',
    stats: [
        [EStat.PARRY, 40],
        [EStat.EVASION, 30],
        [EStat.BLOCK, 30],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.ARMOR,
    dropLevel: 3
}, {
    name: 'Immortality',
    icon: 'assets/icons/items/BTNItem3_2.png',
    stats: [
    ],
    effects: [
        '+20% Max. hitpoints.'
    ],
    rarity: EItemRarity.RARE,
    type: EItemType.ARMOR,
    dropLevel: 3
}, {
    name: 'Racoon',
    icon: 'assets/icons/items/btnracoon.png',
    stats: [
        [EStat.SPEED, 60],
        [EStat.PREPARATION, 40],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.RELIC,
    dropLevel: 3
}, {
    name: 'Antistupidity Coat',
    icon: 'assets/icons/items/btnresistmagic.png',
    stats: [
        [EStat.INTELLECT, 40],
        [EStat.SPIRIT, 40],
        [EStat.PARRY, 30],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.RELIC,
    dropLevel: 3
}, {
    name: 'Antics',
    icon: 'assets/icons/items/btnpandataunt.png',
    stats: [
        [EStat.REFLECTION, 50],
        [EStat.HARDINESS, 50],
    ],
    rarity: EItemRarity.NORMAL,
    type: EItemType.RELIC,
    dropLevel: 3
}, {
    name: 'Divine Fist',
    icon: 'assets/icons/items/BTNItem3_3.png',
    stats: [
    ],
    effects: [
        '+35% bonus damage to autoattacks.'
    ],
    rarity: EItemRarity.RARE,
    type: EItemType.RELIC,
    dropLevel: 3
}, ];
