class Meal {
    constructor(id, category_id, name, imageUrl, description, price){
        this.id = id;
        this.name = name;
        this.category_id = category_id;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

export default Meal