export interface IStatInfo {
    readonly id: String;
    readonly name: String;
    readonly description: String;
    readonly icon: String;
}

export enum EStat {
    CRITICALITY = 'criticality',
    AGILITY = 'agility',
    ADRENALINE = 'adrenaline',
    PREPARATION = 'preparation',
    SORCERY = 'sorcery',
    SPIRIT = 'spirit',
    REFLECTION = 'reflection',
    INTELLECT = 'intellect',
    STRENGTH = 'strength',
    WISDOM = 'wisdom',
    DEFENCE = 'defence',
    BLOCK = 'block',
    EVASION = 'evasion',
    PARRY = 'parry',
    REGENERATION = 'regeneration',
    SPEED = 'speed',
    VAMPIRISM = 'vampirism',
    HARDINESS = 'hardiness',
    WILL = 'will',
    AVOIDANCE = 'avoidance',
    FIRE_RESISTANCE = 'fire-resistance',
    FROST_RESISTANCE = 'frost-resistance',
    ARCANE_RESISTANCE = 'arcane-rsistance',
    NATURE_RESISTANCE = 'nature-resistance',
    HOLY_RESISTANCE = 'holy-resistance',
    SHADOW_RESISTANCE = 'shadow-resistance'
}

export const STAT_DESCRIPTIONS: { [key in EStat] : IStatInfo } = {
    [EStat.CRITICALITY]: {
        id: EStat.CRITICALITY,
        name: 'Criticality',
        description: 'Increased physical critical strike chance.',
        icon: 'assets/icons/stats/btncriticalstrike.png'
    },
    [EStat.AGILITY]: {
        id: EStat.AGILITY,
        name: 'Agility',
        description: 'Increased attack speed.',
        icon: 'assets/icons/stats/btnwindwalkon.png'
    },
    [EStat.ADRENALINE]: {
        id: EStat.ADRENALINE,
        name: 'Adrenaline',
        description: 'Decreased cooldown for spells with cooldown less than 30s.',
        icon: 'assets/icons/stats/btnbloodlust.png'
    },
    [EStat.PREPARATION]: {
        id: EStat.PREPARATION,
        name: 'Preparation',
        description: 'Decreased cooldown for spells with cooldown greater or equal than 30s.',
        icon: 'assets/icons/stats/btnetherealformon.png'
    },
    [EStat.SORCERY]: {
        id: EStat.SORCERY,
        name: 'Sorcery',
        description: 'Increased magical critical strike chance.',
        icon: 'assets/icons/stats/btncharm.png'
    },
    [EStat.SPIRIT]: {
        id: EStat.SPIRIT,
        name: 'Spirit',
        description: 'Increased mana regeneration.',
        icon: 'assets/icons/stats/btnbrilliance.png'
    },
    [EStat.REFLECTION]: {
        id: EStat.REFLECTION,
        name: 'Reflection',
        description: 'Reflect incoming damage.',
        icon: 'assets/icons/stats/btnthornshield.png'
    },
    [EStat.INTELLECT]: {
        id: EStat.INTELLECT,
        name: 'Intellect',
        description: 'Increased mana pool.',
        icon: 'assets/icons/stats/btnpriestadept.png'
    },
    [EStat.STRENGTH]: {
        id: EStat.STRENGTH,
        name: 'Strength',
        description: 'Increased damage for attacks dealing more than 10% of enemy HP.',
        icon: 'assets/icons/stats/btngolemthunderclap.png'
    },
    [EStat.WISDOM]: {
        id: EStat.WISDOM,
        name: 'Wisdom',
        description: 'Increased essence drop.',
        icon: 'assets/icons/stats/btnmagicalsentry.png'
    },
    [EStat.DEFENCE]: {
        id: EStat.DEFENCE,
        name: 'Defence',
        description: 'Decreased incoming physical damage.',
        icon: 'assets/icons/stats/btnleatherupgradethree.png'
    },
    [EStat.BLOCK]: {
        id: EStat.BLOCK,
        name: 'Block',
        description: 'Chance to block 30% of incoming damage.',
        icon: 'assets/icons/stats/btndefend.png'
    },
    [EStat.EVASION]: {
        id: EStat.EVASION,
        name: 'Evasion',
        description: 'Chance to evade damage.',
        icon: 'assets/icons/stats/btnevasion.png'
    },
    [EStat.PARRY]: {
        id: EStat.PARRY,
        name: 'Parry',
        description: 'Chance to parry incoming attacks.',
        icon: 'assets/icons/stats/btnparry.png'
    },
    [EStat.REGENERATION]: {
        id: EStat.REGENERATION,
        name: 'Regeneration',
        description: 'Increased health regeneration.',
        icon: 'assets/icons/stats/btnregenerate.png'
    },
    [EStat.SPEED]: {
        id: EStat.SPEED,
        name: 'Speed',
        description: 'Increased movement speed.',
        icon: 'assets/icons/stats/btnbootsofspeed.png'
    },
    [EStat.VAMPIRISM]: {
        id: EStat.VAMPIRISM,
        name: 'Vampirism',
        description: 'Heal per enemy hit.',
        icon: 'assets/icons/stats/btnvampiricaura.png'
    },
    [EStat.HARDINESS]: {
        id: EStat.HARDINESS,
        name: 'Hardiness',
        description: 'Decreased incoming damage from auto attacks.',
        icon: 'assets/icons/stats/btnhumanwatchtower.png'
    },
    [EStat.WILL]: {
        id: EStat.WILL,
        name: 'Will',
        description: 'Increased chance to resist control effects.',
        icon: 'assets/icons/stats/btngenericspellimmunity.png'
    },
    [EStat.AVOIDANCE]: {
        id: EStat.AVOIDANCE,
        name: 'Avoidance',
        description: 'Decreased incoming damage from AOE sources.',
        icon: 'assets/icons/stats/btnbanish.png'
    },
    [EStat.FIRE_RESISTANCE]: {
        id: EStat.FIRE_RESISTANCE,
        name: 'Fire Resistance',
        description: 'Decreased incoming fire damage.',
        icon: 'assets/icons/stats/btnimmolationon.png'
    },
    [EStat.FROST_RESISTANCE]: {
        id: EStat.FROST_RESISTANCE,
        name: 'Frost Resistance',
        description: 'Decreased incoming frost damage.',
        icon: 'assets/icons/stats/btnfrost.png'
    },
    [EStat.ARCANE_RESISTANCE]: {
        id: EStat.ARCANE_RESISTANCE,
        name: 'Arcane Resistance',
        description: 'Decreased incoming arcane damage.',
        icon: 'assets/icons/stats/btnwispsplode.png'
    },
    [EStat.NATURE_RESISTANCE]: {
        id: EStat.NATURE_RESISTANCE,
        name: 'Nature Resistance',
        description: 'Decreased incoming nature damage.',
        icon: 'assets/icons/stats/btnentanglingroots.png'
    },
    [EStat.HOLY_RESISTANCE]: {
        id: EStat.HOLY_RESISTANCE,
        name: 'Holy Resistance',
        description: 'Decreased incoming holy damage.',
        icon: 'assets/icons/stats/btnholybolt.png'
    },
    [EStat.SHADOW_RESISTANCE]: {
        id: EStat.SHADOW_RESISTANCE,
        name: 'Shadow Resistance',
        description: 'Decreased incoming shadow damage.',
        icon: 'assets/icons/stats/btndoom.png'
    },
};
