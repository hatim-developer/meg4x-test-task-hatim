import { TowerStore } from "../stores/TowerStore";

export class TowerBuildingViewModel {
  private _towerStore: TowerStore;

  constructor() {
    // * shared TowerStore instance
    this._towerStore = TowerStore.getInstance();
  }

  public getSummoningObservable() {
    return this._towerStore.getIsSummoningObservable();
  }

  public getActivateTowerObservable() {
    return this._towerStore.getActivateTowerObservable();
  }

  public showTowerPanel() {
    return this._towerStore.activateTower();
  }
}
