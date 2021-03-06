const config = require('./globalConfig');

const about = {
    "metatags": {
        "preventIndexing": config.preventIndexing,
        "lang": "en",
        "title": "About us",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus in, neque quisquam tempora illum eligendi voluptatibus eius earum ipsum! Eligendi vel molestias exercitationem iure corporis voluptas eveniet veniam eius.",
        "image": config.address + "/images/placeholder.png",
        "ogTitle": "My company",
        "ogDescription": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus in, neque quisquam tempora illum eligendi voluptatibus eius earum ipsum! Eligendi vel molestias exercitationem iure corporis voluptas eveniet veniam eius.",
        "ogSiteName": "My company",
        "ogUrl": config.address,
        "twitterTitle": "My company",
        "twitterDescription": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus in, neque quisquam tempora illum eligendi voluptatibus eius earum ipsum! Eligendi vel molestias exercitationem iure corporis voluptas eveniet veniam eius."
    },
    "title": "About us",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellendus in, neque quisquam tempora illum eligendi voluptatibus eius earum ipsum! Eligendi vel molestias exercitationem iure corporis voluptas eveniet veniam eius."
};

module.exports = about;