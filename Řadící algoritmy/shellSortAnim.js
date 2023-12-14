class ShellSort extends sortAnim{

    async sortAsc() {
        for (let gap = this.array.length >> 1; gap > 0; gap >>= 1) {
            for (let i = gap; i < this.array.length; i++) {
                this.setCompareColor(this.columns[j / 2]);
                this.setCompareColor(this.columns[j]);
                let j = i - gap;
                this.setDefaultColor(this.columns[j / 2]);
                this.setDefaultColor(this.columns[j]);
                await this.sleep(500);
                while(j>=0 && this.arrayOfValues[j] > value) {
                    this.setCompareColor(j);
                }
            }
        }
    }
}