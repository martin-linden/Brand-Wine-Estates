import Typography from "typography"

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    googleFonts: [
        { name: "Bai Jamjuree", styles: [700] },
        { name: "Muli", styles: [400, 700, 800] },
        { name: "Assistant", styles: [200, 300, 400, 600, 700] },
        { name: "PT Serif", styles: [200, 300, 400, 600, 700] },
    ],
    headerFontFamily: ["Muli", "sans-serif"],
    bodyFontFamily: ["Muli", "serif"],
})

export default typography