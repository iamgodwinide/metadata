const express = require("express");
const server = express();
const https = require("https");


server.use("/:name", (req, res) => {
    const { name } = req.params;
    console.log(name);
    if (!name) return res.status(400).json({
        msg: "Please provide a name"
    });
    https.get(`https://metadata.ethername.domains/metadata/${name}`)
    return res.json({
        "name": `${name}.xyz`,
        "image": `https://metadata.ethername.domains/ether_images/${name}.jpg`,
        "description": `${name}.xyz, an ether name.`,
        "attributes": [
            {
                "trait_type": "Character Set",
                "display_type": "string",
                "value": "Mixed"
            }
        ],
        "name_length": 0,
        "segment_length": 0,
        "url": `https://metadata.loveblazersmobile.com/${name}.xyz`,
        "version": 0,
        "background_image": `https://metadata.ethername.domains/ether_images/${name}.jpg`,
        "image_url": `https://metadata.ethername.domains/ether_images/${name}.jpg`
    });
})

const PORT = 5567;

server.listen(PORT, () => console.log(`server started on port ${PORT}`));