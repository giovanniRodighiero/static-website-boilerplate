const config = require('./globalConfig');

const homepage = {
    "metatags": {
        "preventIndexing": config.preventIndexing,
        "lang": "en",
        "title": "My company",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus in, neque quisquam tempora illum eligendi voluptatibus eius earum ipsum! Eligendi vel molestias exercitationem iure corporis voluptas eveniet veniam eius.",
        "image": config.address + "/images/placeholder.png",
        "ogTitle": "My company",
        "ogDescription": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus in, neque quisquam tempora illum eligendi voluptatibus eius earum ipsum! Eligendi vel molestias exercitationem iure corporis voluptas eveniet veniam eius.",
        "ogSiteName": "My company",
        "ogUrl": config.address,
        "twitterTitle": "My company",
        "twitterDescription": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus in, neque quisquam tempora illum eligendi voluptatibus eius earum ipsum! Eligendi vel molestias exercitationem iure corporis voluptas eveniet veniam eius."
    },
    "title": "My company",
    "services": {
        "title": "our services",
        "list": [
            {
                "title": "service one",
                "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus in, neque quisquam tempora illum eligendi voluptatibus eius earum ipsum! Eligendi vel molestias exercitationem iure corporis voluptas eveniet veniam eius."
            },
            {
                "title": "service two",
                "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus in, neque quisquam tempora illum eligendi voluptatibus eius earum ipsum! Eligendi vel molestias exercitationem iure corporis voluptas eveniet veniam eius."
            },
            {
                "title": "service three",
                "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus in, neque quisquam tempora illum eligendi voluptatibus eius earum ipsum! Eligendi vel molestias exercitationem iure corporis voluptas eveniet veniam eius."
            }
        ]
    }
    
}

module.exports = homepage;