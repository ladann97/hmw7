class Media {
    constructor (artMedia) {
        this.mediaType = artMedia
    }
    description() {
        return 'one of art media is => ' + this.mediaType;
    }
}

class Book extends Media {
    constructor (artMedia, name) {
        super(artMedia);
        this.bookName = name
    }
    show() {
        return this.description() + ' , the name of the book : ' + this.bookName;
    }
}

class Film extends Media {
    constructor (artMedia, name) {
        super(artMedia);
        this.filmName = name
    }
    introduce() {
        return this.description() + ' , the name of the film : ' + this.filmName;
    }
}