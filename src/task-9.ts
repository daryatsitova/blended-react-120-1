interface Container<T> {
    items: T[];
    addItem(newItem: T): void;
    getItems(index:number): T;
}

const numberContainer: Container<number> = {
    items: [],
    addItem(newItem) { 
        this.items.push(newItem);
    },
    getItems(index) {
        return this.items[index];
    }
}

const stringContainer: Container<string> = {
    items: [],
    addItem(newItem) {
        this.items.push(newItem);
     },
    getItems(index) {
        return this.items[index];
    }
}

numberContainer.addItem(12);
numberContainer.addItem(24);
numberContainer.getItems(0);

stringContainer.addItem("Hello");
stringContainer.addItem("tototo");
stringContainer.getItems(0);


function getLastElement<T>(obj: Container<T>): T {
    return obj.items[obj.items.length - 1];
}

console.log(numberContainer);
console.log(stringContainer);
console.log(numberContainer.getItems(0)); 
console.log(stringContainer.getItems(0));

console.log(getLastElement(numberContainer));
console.log(getLastElement(stringContainer));