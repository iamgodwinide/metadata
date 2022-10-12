const router = require("express").Router();


router.use("/:name", (req, res) => {
    const { name } = req.params;
    return res.json({
        "name": `${name}.xyz`,
        "image": `https://xyznameservice.xyz/image/${name}`,
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
        "url": `https://xyznameservice.xyz/${name}.xyz`,
        "version": 0,
        "background_image": `https://xyznameservice.xyz/image/${name}`,
        "image_url": `https://xyznameservice.xyz/image/${name}`
    });
})


module.exports = router;