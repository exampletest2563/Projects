(function() {
    const list = document.getElementsByClassName('navigation-list')[0];
    const categories = Object.keys(data);

    categories.forEach(category => {
        let listItemElement = document.createElement('li');
        let spanElement = document.createElement('span');
        spanElement.classList.add('link-name');
        spanElement.addEventListener('click', function() {
            let wrapper = document.getElementsByClassName('main')[0];
            wrapper.innerHTML = '';

            let currentCategory = this.innerHTML.toLocaleLowerCase();
            let links = data[currentCategory].links;

            links.forEach(link => {
                let card = document.createElement('div');
                card.classList.add('card');
                let url = document.createElement('div');
                url.classList.add('url');
                url.append(link.url);
                let description = document.createElement('div');
                description.classList.add('description');
                description.append(link.description);

                card.append(url);
                card.append(description);
                wrapper.append(card);
            });
        });

        spanElement.append(category[0].toUpperCase() + category.substring(1));
        listItemElement.innerHTML = data[category].svg;
        listItemElement.append(spanElement);
        list.append(listItemElement);
    });
})();