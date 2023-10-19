import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    //clear the view
    this.clear();

    //render the data
    fullList.list.forEach((item) => {
      //create li item
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      //create check box
      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbox";
      check.id = item.id;
      check.tabIndex = 0;
      check.checked = item.checked;

      //append checkbox to li
      li.append(check);

      //add event listener to checkbox
      check.addEventListener("change", () => {
        item.checked = !item.checked;
        fullList.save();
      });

      //add label
      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;

      //aapend the label to li
      li.append(label);

      //create button
      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.textContent = "X";

      //put the button into LI
      li.append(button);

      //event listener the button
      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      this.ul.append(li);
    });
  }
}
