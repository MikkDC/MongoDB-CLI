class Movie {
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }

    async add(collection) {
        await collection.insertOne(this);
    }
    async list(collection) {
        return await collection.find({}).toArray();
    }
    // --update then --title="" --newtitle=""
    async update(collection) {
        await collection.updateOne(
        { title: this.title },
        { $set: { title: this.newtitle } }
        );
        console.log("update success")
    }
    // --delete  and then --title="" or --actor"""
    async delete(collection) {
        await collection.deleteOne({title: this.title, actor: this.actor});
    }
};

module.exports = Movie