import type { Config } from "tailwindcss";
// import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  mode: "jit",
	theme: {
		extend: {
      flex: {
        "side-extended": "0 1 20%",
        "100": "0 1 100%"
      },
			colors: {
				"rich-black": "rgba(13, 31, 45, 1)",
				"paynes-gray": "rgba(84, 106, 123, 1)",
        "french-gray": "rgba(194, 202, 221, 1)",
				"cadet-gray": "rgba(158, 163, 176, 1)",
				"misty-rose": "rgba(250, 225, 223, 1)",
				"desert-sand": "rgba(228, 195, 173, 1)",
        "carrot-orange": "rgba(233, 142, 35, 1)",
        // FIRST SET
        "cal-poly-green": "rgba(42, 77, 20, 1)",
        "office-green": "rgba(49, 123, 34, 1)",
        "emerald": "rgba(103, 224, 163, 1)",
        "aquamarine": "rgba(124, 240, 189, 1)",
        "celadon": "rgba(175, 249, 201, 1)",
        // SECOND SET
        "sunset": "rgba(237, 203, 150, 1)",
        "apricot": "rgba(247, 196, 165, 1)",
        "mountbatten-pink": "rgba(158, 118, 130, 1)",
        "english-violet": "rgba(96, 87, 112, 1)",
        "english-violet-2": "rgba(77, 72, 97, 1)",
        // TERZO SET
        "peach-yellow": "rgba(252, 222, 156, 1)",
        "sandy-brown": "rgba(255, 165, 82, 1)",
        "burnt-orange": "rgba(186, 86, 36, 1)",
        "dark-purple": "rgba(56, 29, 42, 1)",
        "tea-green": "rgba(196, 214, 176, 1)"
			},
      width: {
        "circle-big": "70.69vw",
        "circle-small": "54.44vw"
      },
      height: {
        "circle-big": "70.69vw",
        "circle-small": "54.44vw"
      },
      padding: {
        "bottom-full": "100%"
      }
		},
	},
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./utils/**/*.{js,ts}",
    "./App.{js,ts,vue",
    "./app.{js,ts,vue}",
    "./Error.{js,ts,vue}",
    "./error.{js,ts,vue}",
    "./app.config.{js,ts}",
  ]
};
