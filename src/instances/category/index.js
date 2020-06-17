class CategoryFactory {
    getCategories(data) {
       let category = [];
       
        for(let i = -2; i <= 2; i++) {
            if(i === 2) { 
                category.push(new VeryProductive(data));    
            }
    
            else if(i === 1) {
                category.push(new Productive(data));    
            }
    
            else if(i === 0) {
                category.push(new Neutral(data));  
            }
    
            else if(i === -1) {
                category.push(new Distracting(data));  
            }
    
            else if(i === -2) {
                category.push(new VeryDistracting(data));  
            }
        }
        return category;
    }
}

class Category {
    constructor(data) {
        this.data = data;  
    }
    getItems(){
        return this.data.filter(el => el[5] === this.id);
    }
    getTotalSeconds() {
        let items = this.items;
        if(!items[0]) {
            return 0;
        }
        return items.reduce((curr, next)=> {
            return curr + parseInt(next[1]);
        }, 0)
    }
    logItems() {
       return this.data;
    }
    getTopThree() {
        let res = '';
        for(let i = 0; i < 4; i++) {
            if(!this.items[i]){
                continue;
            }
            if(i == 3) {
                res += this.items[i][3]
                res += '...';
            }
            else {
                res += this.items[i][3]
                res += ',';
            }
        }
        return res;
    }
}

class VeryProductive extends Category{
    constructor(data) {
        super(data);
        this.id = 2;
        this.title = 'Very Productive';
        this.categoryName = 'very-productive';
        this.items = this.getItems();
    }   
}

class Productive extends Category{
    constructor(data) {
        super(data);
        this.id = 1;
        this.title = 'Productive';
        this.categoryName = 'productive';
        this.items = this.getItems();
    }
}

class Neutral extends Category{
    constructor(data) {
        super(data);
        this.id = 0;
        this.title = 'Neutral';
        this.categoryName = 'neutral';
        this.items = this.getItems();
    }
}

class Distracting extends Category{
    constructor(data) {
        super(data);
        this.id = -1;
        this.title = 'Distracting';
        this.categoryName = 'distracting';
        this.items = this.getItems();
    }
}

class VeryDistracting extends Category{
    constructor(data) {
        super(data);
        this.id = -2;
        this.title = 'VeryDistracting';
        this.categoryName = 'very-distracting';
        this.items = this.getItems();
    }
}

export default CategoryFactory