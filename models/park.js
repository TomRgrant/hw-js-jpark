const Park = function (name, price, dinoCollection) {
    this.name = name
    this.price = price
    this.dinoCollection = dinoCollection
}

Park.prototype.addDino = function (park, dino) {
    park.dinoCollection.push(dino)
}

Park.prototype.removeDino = function (park) {
    park.dinoCollection.splice()
}

Park.prototype.mostAttracted = function (park) {
    for (let dino of park.dinoCollection) {
        let mostAttracted
        if (dino.guestsAttractedPerDay > mostAttracted.guestsAttractedPerDay) {
            mostAttracted = dino
        }
    }
    return this.mostAttracted
}





module.exports = Park