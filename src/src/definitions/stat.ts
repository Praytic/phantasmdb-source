export interface IStatInfo {
    readonly name: String;
    readonly description: String;
    readonly icon: String;
}

export enum EStat {
    CRITICALITY = 'Criticality',
    AGILITY = 'Agility',
    ADRENALINE = 'Adrenaline',
    PREPARATION = 'Preparation',
    SORCERY = 'Sorcery',
    SPIRIT = 'Spirit',
    REFLECTION = 'Reflection',
    INTELLECT = 'Intellect',
    STRENGTH = 'Strength',
    WISDOM = 'Wisdom',
    DEFENCE = 'Defence',
    BLOCK = 'Block',
    EVASION = 'Evasion',
    PARRY = 'Parry',
    REGENERATION = 'Regeneration',
    SPEED = 'Speed',
    VAMPIRISM = 'Vampirism',
    HARDINESS = 'Hardiness',
    WILL = 'Will',
    AVOIDANCE = 'Avoidance',
    FIRE_RESISTANCE = 'Fire Resistance',
    FROST_RESISTANCE = 'Frost Resistance',
    ARCANE_RESISTANCE = 'Arcane Resistance',
    NATURE_RESISTANCE = 'Nature Resistance',
    HOLY_RESISTANCE = 'Holy Resistance',
    SHADOW_RESISTANCE = 'Shadow Resistance'
}

export const STAT_DESCRIPTIONS: { [key in EStat] : IStatInfo } = {
    [EStat.CRITICALITY]: {
        name: 'Criticality',
        description: 'Increased physical critical strike chance.',
        icon: 'assets/icons/stats/btncriticalstrike.png'
    },
    [EStat.AGILITY]: {
        name: 'Agility',
        description: 'Increased attack speed.',
        icon: 'assets/icons/stats/btnwindwalkon.png'
    },
    [EStat.ADRENALINE]: {
        name: 'Adrenaline',
        description: 'Decreased cooldown for spells with cooldown less than 30s.',
        icon: 'assets/icons/stats/btnbloodlust.png'
    },
    [EStat.PREPARATION]: {
        name: 'Preparation',
        description: 'Decreased cooldown for spells with cooldown greater or equal than 30s.',
        icon: 'assets/icons/stats/btnetherealformon.png'
    },
    [EStat.SORCERY]: {
        name: 'Sorcery',
        description: 'Increased magical critical strike chance.',
        icon: 'assets/icons/stats/btncharm.png'
    },
    [EStat.SPIRIT]: {
        name: 'Spirit',
        description: 'Increased mana regeneration.',
        icon: 'assets/icons/stats/btnbrilliance.png'
    },
    [EStat.REFLECTION]: {
        name: 'Reflection',
        description: 'Reflect incoming damage.',
        icon: 'assets/icons/stats/btnthornshield.png'
    },
    [EStat.INTELLECT]: {
        name: 'Intellect',
        description: 'Increased mana pool.',
        icon: 'assets/icons/stats/btnpriestadept.png'
    },
    [EStat.STRENGTH]: {
        name: 'Strength',
        description: 'Increased damage for attacks dealing more than 10% of enemy HP.',
        icon: 'assets/icons/stats/btngolemthunderclap.png'
    },
    [EStat.WISDOM]: {
        name: 'Wisdom',
        description: 'Increased essence drop.',
        icon: 'assets/icons/stats/btnmagicalsentry.png'
    },
    [EStat.DEFENCE]: {
        name: 'Defence',
        description: 'Decreased incoming physical damage.',
        icon: 'assets/icons/stats/btnleatherupgradethree.png'
    },
    [EStat.BLOCK]: {
        name: 'Block',
        description: 'Chance to block 30% of incoming damage.',
        icon: 'assets/icons/stats/btndefend.png'
    },
    [EStat.EVASION]: {
        name: 'Evasion',
        description: 'Chance to evade damage.',
        icon: 'assets/icons/stats/btnevasion.png'
    },
    [EStat.PARRY]: {
        name: 'Parry',
        description: 'Chance to parry incoming attacks.',
        icon: 'assets/icons/stats/btnparry.png'
    },
    [EStat.REGENERATION]: {
        name: 'Regeneration',
        description: 'Increased health regeneration.',
        icon: 'assets/icons/stats/btnregenerate.png'
    },
    [EStat.SPEED]: {
        name: 'Speed',
        description: 'Increased movement speed.',
        icon: 'assets/icons/stats/btnbootsofspeed.png'
    },
    [EStat.VAMPIRISM]: {
        name: 'Vampirism',
        description: 'Heal per enemy hit.',
        icon: 'assets/icons/stats/btnvampiricaura.png'
    },
    [EStat.HARDINESS]: {
        name: 'Hardiness',
        description: 'Decreased incoming damage from auto attacks.',
        icon: 'assets/icons/stats/btnhumanwatchtower.png'
    },
    [EStat.WILL]: {
        name: 'Will',
        description: 'Increased chance to resist control effects.',
        icon: 'assets/icons/stats/btngenericspellimmunity.png'
    },
    [EStat.AVOIDANCE]: {
        name: 'Avoidance',
        description: 'Decreased incoming damage from AOE sources.',
        icon: 'assets/icons/stats/btnbanish.png'
    },
    [EStat.FIRE_RESISTANCE]: {
        name: 'Fire Resistance',
        description: 'Decreased incoming fire damage.',
        icon: 'assets/icons/stats/btnimmolationon.png'
    },
    [EStat.FROST_RESISTANCE]: {
        name: 'Frost Resistance',
        description: 'Decreased incoming frost damage.',
        icon: 'assets/icons/stats/btnfrost.png'
    },
    [EStat.ARCANE_RESISTANCE]: {
        name: 'Arcane Resistance',
        description: 'Decreased incoming arcane damage.',
        icon: 'assets/icons/stats/btnwispsplode.png'
    },
    [EStat.NATURE_RESISTANCE]: {
        name: 'Nature Resistance',
        description: 'Decreased incoming nature damage.',
        icon: 'assets/icons/stats/btnentanglingroots.png'
    },
    [EStat.HOLY_RESISTANCE]: {
        name: 'Holy Resistance',
        description: 'Decreased incoming holy damage.',
        icon: 'assets/icons/stats/btnholybolt.png'
    },
    [EStat.SHADOW_RESISTANCE]: {
        name: 'Shadow Resistance',
        description: 'Decreased incoming shadow damage.',
        icon: 'assets/icons/stats/btndoom.png'
    },
};
