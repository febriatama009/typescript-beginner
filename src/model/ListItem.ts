export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  //id setter and getter
  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  //item setter and getter
  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this._item = item;
  }

  //checked setter and getter
  get checked(): boolean {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked;
  }
}