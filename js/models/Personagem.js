class Personagem {
    constructor(id, name, description, thumb, comics, series, stories, events){
        this._id = id;
        this._name = name;
        this._description = description;
        this._thumbnail = thumb;
        this._comics = comics;
        this._series = series;
        this._stories = stories;
        this._events = events;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get description(){
        return this._description;
    }

    get thumbnail(){
        return `${this._thumbnail.path}.${this._thumbnail.extension}`;
    }

    get comics(){
        return this._comics;
    }

    get series(){
        return this._series;
    }

    get stories(){
        return this._stories;
    }

    get events(){
        return this._events;
    }
}