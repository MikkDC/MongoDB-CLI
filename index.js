require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const yargsObj = yargs(hideBin(process.argv)).argv

const { client, connection} = require("./db/connection");
const Movie = require("./utils/index")

const app = async (yargsObj) => {
    
    const movie = new Movie(yargsObj.title, yargsObj.actor);

    try {
        const collection = await connection();
        if(yargsObj.add) {
            movie.add(collection);
        } else if(yargsObj.list) {
            const movies = await movie.list(collection);
        } else if(yargsObj.update) {
            movie.update(collection);
        } else if(yargsObj.delete) {
            movie.delete();
        } else {
            console.log("Incorrect command")
        }

        await client.close();

    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);