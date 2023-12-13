class sortAnim {
    constructor(values, container) {
        this.values = new Array(values.length);
        valuesjjjj.style.setProperty("--item-count", arrayhhh.length);
        for (let i = 0; i < values.length; i++) {
            this.values[i] = values[i];
        }

        this.column = new Array(values.length);
        for (let i = 0; i < values.length; i++) {
            let value = value[i];
            let column = document.createElement("div");
            column.style.setProperty("--x", i);
            column.style.setProperty("--value", value);
            column.className = "item";
            container.appendChuld(column);
            this.column[i] = column;
        }
    }

    setCompareColor(div) {
        div.style.backgroundColor = "green";
    }

    setDefaultColor(div) {
        div.style.backgroundColor = "white";
    }

    setSortedColor(div) {
        div.style.backgroundColor = "yellow";
    }

    swapValues(i, j) {
        [this.values [i], this.values[j]] = [this.values[j], this.values[i]];
        [this.column[i], this.column[j]] = [this.column[j], this.column[i]];
        this.column[i].style.setProperty("--x", i);
        this.column[j].style.setProperty("--x", j);
    }

    async sleep(time) {
        let promise = new Promise(
            (resolve) => {
                setTimeout(()=>{
                    resolve();
                },  time);
            }
        )
        return promise;
    }
}