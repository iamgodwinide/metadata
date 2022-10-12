const router = require("express").Router();


router.use("/:name", (req, res) => {
    const { name } = req.params;
    if (!name) return res.set("Content-type", "image/svg+xml").send(
        `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:bx="https://boxy-svg.com" viewBox="0 0 500 500" width="500" height="500">
        <defs>
          <linearGradient id="gradient-3-0" gradientUnits="userSpaceOnUse" x1="252.494" y1="-2.772" x2="252.494" y2="505.543" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#gradient-3"/>
          <linearGradient id="gradient-3" bx:pinned="true">
            <stop offset="0.35" style="stop-color: #00bfc7; "/>
            <stop offset="1" style="stop-color:#9c57c9; "/>
          </linearGradient>
          <linearGradient id="gradient-3-1" gradientUnits="userSpaceOnUse" x1="252.494" y1="-2.772" x2="252.494" y2="505.543" xlink:href="#gradient-3"/>
        </defs>
        <rect x="-1.109" y="-2.772" width="507.206" height="508.315" style="fill: url(#gradient-3-0); stroke: url(#gradient-3-1);"/>
        <text style="fill: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 70px; letter-spacing:3px;white-space: pre;text-align:center;width:100%" text-anchor="middle" x="50%" y="55%">.xyz</text>
      </svg>`
    )

    else return res.set("Content-type", "image/svg+xml").send(`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:bx="https://boxy-svg.com" viewBox="0 0 500 500" width="500" height="500">
        <defs>
            <linearGradient id="gradient-3-0" gradientUnits="userSpaceOnUse" x1="252.494" y1="-2.772" x2="252.494" y2="505.543" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#gradient-3"/>
            <linearGradient id="gradient-3" bx:pinned="true">
            <stop offset="0.35" style="stop-color: #00bfc7; "/>
            <stop offset="1" style="stop-color:#9c57c9; "/>
            </linearGradient>
            <linearGradient id="gradient-3-1" gradientUnits="userSpaceOnUse" x1="252.494" y1="-2.772" x2="252.494" y2="505.543" xlink:href="#gradient-3"/>
        </defs>
        <rect x="-1.109" y="-2.772" width="507.206" height="508.315" style="fill: url(#gradient-3-0); stroke: url(#gradient-3-1);"/>
        <text style="fill: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 70px; letter-spacing:3px;white-space: pre;text-align:center;width:100%" text-anchor="middle" x="50%" y="55%">${name}.xyz</text>
    </svg>
    `)
})


module.exports = router;