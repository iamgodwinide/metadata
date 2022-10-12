const router = require("express").Router();


router.use("/:name", (req, res) => {
    const { name } = req.params;
    return res.json({
        "name": `${name}.xyz`,
        "image": `https://metadata.loveblazersmobile.com/image/${name}`,
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
        "background_image": `https://metadata.loveblazersmobile.com/image/${name}`,
        "image_url": `https://metadata.loveblazersmobile.com/image/${name}`
    });
})


module.exports = router;