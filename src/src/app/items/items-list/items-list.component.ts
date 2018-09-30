import { Component, OnInit } from '@angular/core';
import { ITEMS, EItemType, EItemRarity } from '../../../definitions/item';
import { STAT_DESCRIPTIONS, EStat } from '../../../definitions/stat';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  readonly STAT_DESCRIPTIONS = STAT_DESCRIPTIONS;

  readonly STATS = EStat;
  readonly ITEM_TYPES = EItemType;
  readonly ITEM_RARITIES = EItemRarity;

  readonly STAT_KEYS = Object.keys(this.STATS);
  readonly ITEM_TYPE_KEYS = Object.keys(this.ITEM_TYPES);
  readonly ITEM_RARITY_KEYS = Object.keys(this.ITEM_RARITIES);

  readonly STAT_VALUES = Object.values(this.STATS);
  readonly ITEM_TYPE_VALUES = Object.values(this.ITEM_TYPES);
  readonly ITEM_RARITY_VALUES = Object.values(this.ITEM_RARITIES);

  ITEMS = ITEMS;

  // Creates a map with all keys of EItemType and corresponding values equal to false.
  // See https://stackoverflow.com/a/43626263
  private filterType: { [type in EItemType] : boolean }
    = Object.assign({}, ...(Object.values(EItemType).map(key => ({[key] : false}))));

  // Same as above.
  private filterRarity: { [rarity in EItemRarity]: boolean }
    = Object.assign({}, ...(Object.values(EItemRarity).map(key => ({[key] : false}))));

  // Same as above.
  private filterStats: { [stat in EStat]: boolean }
    = Object.assign({}, ...(Object.values(EStat).map(key => ({[key] : false}))));


  private updateFilter(): void {
    this.ITEMS = ITEMS;
    if (Object.values(this.filterType).filter(i => i).length > 0) {
      this.ITEMS = this.ITEMS.filter(item => (this.filterType[item.type]));
    }
    if (Object.values(this.filterRarity).filter(i => i).length > 0) {
      this.ITEMS = this.ITEMS.filter(item => (this.filterRarity[item.rarity]));
    }
    if (Object.values(this.filterStats).filter(i => i).length > 0) {
      this.ITEMS = this.ITEMS.filter(item => {
        for (const statData of item.stats) {
          const stat = statData[0];
          if (this.filterStats[stat]) {
            return true;
          }
        }
        return false;
      });
    }
  }
  constructor() { }

  ngOnInit() {
    this.updateFilter();
  }

}
