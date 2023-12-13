class InsertionSortAnim extends sortAnim {
    async sortAsc() {
        for (let i = 1; i < this.values.length; i++) {
            let j = i - 1;
            while(j >= 0 && this.values[j] > this.values[j + 1]) {
                this.setCompareColor(this.columns[j + 1]);
                this.setCompareColor(this.columns[j]);
                await this.sleep(500);
                this.setDefaultColor(this.columns[j + 1]);
                this.setDefaultColor(this.columns[j]);
                this.swapValues(j, j+ 1);
                j--;
            }
        }
    }
}
