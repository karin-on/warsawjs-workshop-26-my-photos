export class Image {
    constructor(path, gallery) {
        this.path = path;
        this.gallery = gallery;
    }

    show () {
        let image = document.createElement('img');
        image.setAttribute('src', this.path);
        this.gallery.appendChild(image);

        this.img = image;
        image.addEventListener('click', () => this.markOrUnmarkAsFav());   //tu muszę stworzyć funkcję, która wywoła mi funckję markOrUnmarkAsFav, bo inaczej this wewnątrz metody markOrUnmarkAsFav będzie wskazywać na coś innego niż chcę. This nie może być przekazany przez referencję (referencją by było ('click', this.markOrUnmarkAsFav))
    }

    markOrUnmarkAsFav () {
        this.img.classList.toggle('image--favourite');
    }

    isFav () {
        return this.img.classList.contains('image--favourite');
    }

    hide () {
        this.img.style.display= 'none';
    }
}
