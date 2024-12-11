/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: {
		files: ["*.html", "./src/**/*.rs", "./input.css"],
	},
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				opensans: ["Open Sans", "sans-serif"],
				robotomono: ["Roboto Mono", "monospace"],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				success: {
					DEFAULT: "hsl(var(--success))",
					foreground: "hsl(var(--success-foreground))",
				},
				info: {
					DEFAULT: "hsl(var(--info))",
					foreground: "hsl(var(--info-foreground))",
				},
				warning: {
					DEFAULT: "hsl(var(--warning))",
					foreground: "hsl(var(--warning-foreground))",
				},
				error: {
					DEFAULT: "hsl(var(--error))",
					foreground: "hsl(var(--error-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				// Accordion
				accordionDown: {
					from: { height: "0" },
					to: { height: "var(--primitive-collapsible-content-height)" },
				},
				accordionUp: {
					from: { height: "var(--primitive-collapsible-content-height)" },
					to: { height: "0" },
				},

				//  ------------- 👇 [ANIMATE] 👇 ------------- //
				"rubberBand-v0": {
					from: { transform: "scale3d(1, 1, 1)" },
					"30%": { transform: "scale3d(1.25, 0.75, 1)" },
					"40%": { transform: "scale3d(0.75, 1.25, 1)" },
					"50%": { transform: "scale3d(1.15, 0.85, 1)" },
					"65%": { transform: "scale3d(0.95, 1.05, 1)" },
					"75%": { transform: "scale3d(1.05, 0.95, 1)" },
					to: {
						transform: "scale3d(1, 1, 1)",
					},
				},
				swingV0: {
					from: { transform: "rotate(3deg)" },
					to: { transform: "rotate(-3deg)" },
				},
				scale: {
					from: { opacity: "0", transform: "scale(0)" },
					to: { opacity: "1", transform: "scale(1)" },
				},
				flashV0: {
					"from, 50%, to": { opacity: "1" },
					"25%, 75%": { opacity: "0" },
				},
				shakeV0: {
					"0%": { transform: "translate(1px, 1px) rotate(0deg)" },
					"10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
					"20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
					"30%": { transform: "translate(3px, 2px) rotate(0deg)" },
					"40%": { transform: "translate(1px, -1px) rotate(1deg)" },
					"50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
					"60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
					"70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
					"80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
					"90%": { transform: "translate(1px, 2px) rotate(0deg)" },
					"100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
				},
				rise: {
					from: { transform: "translate(0, 20%) scale(0.8)" },
					to: { transform: "translate(0, 0) scale(1)" },
				},
				slideUp: {
					from: { transform: "translateY(10px)" },
					to: { transform: "translateY(0)" },
				},
				slideDown: {
					from: { transform: "translateY(-10px)" },
					to: { transform: "translateY(0)" },
				},
				slideLeft: {
					from: { transform: "translateX(-10px)" },
					to: { transform: "translateX(0)" },
				},
				slideRight: {
					from: { transform: "translateX(10px)" },
					to: { transform: "translateX(0)" },
				},
				slideDownAndFade: {
					from: {
						opacity: "0",
						transform: "translateY(-10px)",
					},
					to: {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				slideLeftAndFade: {
					from: { opacity: "0", transform: "translateX(-10px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				slideUpAndFade: {
					from: { opacity: "0", transform: "translateY(10px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideRightAndFade: {
					from: { opacity: "0", transform: "translateX(10px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				jiggleV0: {
					"0%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(4deg)" },
					"100%": { transform: "rotate(-4deg)" },
				},
				// TODO
				// pop: {
				//   "0%": {
				//     transform: "scale(1)",
				//   },
				//   "50%": {
				//     transform: "scale(1.07)",
				//   },
				//   "100%": {
				//     transform: "scale(1)",
				//   },
				// },
				vibrate: {
					"0%": { transform: "translateY(0)" },
					"10%": { transform: "translateY(-3px)" },
					"20%": { transform: "translateY(0px)" },
					"30%": { transform: "translateY(3px)" },
					"40%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-3px)" },
					"60%": { transform: "translateY(0px)" },
					"70%": { transform: "translateY(3px)" },
					"80%": { transform: "translateY(0px)" },
					"90%": { transform: "translateY(-3px)" },
					"100%": { transform: "translateY(0)" },
				},
				// TODO: V2
				fadeOutDownV2: {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(20px)" },
				},
				backgroundShine: {
					from: { backgroundPosition: "0 0" },
					to: { backgroundPosition: "-200% 0" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				fadeOut: {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				slideInTop: {
					"0%": { transform: "translateY(-20px)" },
					"100%": { transform: "translateY(0)" },
				},
				slideInBottom: {
					"0%": { transform: "translateY(20px)" },
					"100%": { transform: "translateY(0)" },
				},
				slideOutTop: {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-20px)" },
				},
				slideOutBottom: {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(20px)" },
				},
				zoomIn: {
					"0%": { opacity: "0", transform: "scale(.5)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				zoomOut: {
					"0%": { opacity: "1", transform: "scale(1)" },
					"100%": { opacity: "0", transform: "scale(.5)" },
				},
				rotate90: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(90deg)" },
				},
				rotate180: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(180deg)" },
				},
				rotate360: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				flipHorizontal: {
					"0%": { transform: "rotateY(0deg)" },
					"100%": { transform: "rotateY(180deg)" },
				},
				flipVertical: {
					"0%": { transform: "rotateX(0deg)" },
					"100%": { transform: "rotateX(180deg)" },
				},
				bounceCustom: {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0)" },
				},
				swing: {
					"0%": { transform: "rotate(0deg)" },
					"50%": { transform: "rotate(15deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
				wobble: {
					"0%": { transform: "translateX(0)" },
					"15%": { transform: "translateX(-20px)" },
					"30%": { transform: "translateX(20%)" },
					"45%": { transform: "translateX(-15%)" },
					"60%": { transform: "translateX(20px)" },
					"75%": { transform: "translateX(-5%)" },
					"100%": { transform: "translateX(0)" },
				},
				pulseCustom: {
					"0%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.1)" },
					"100%": { transform: "scale(1)" },
				},
				shake: {
					"0%": { transform: "translateX(0)" },
					"25%": { transform: "translateX(-10px)" },
					"50%": { transform: "translateX(10px)" },
					"75%": { transform: "translateX(-10px)" },
					"100%": { transform: "translateX(0)" },
				},
				tada: {
					"0%": { transform: "scale(1)" },
					"10%": { transform: "scale(0.9) rotate(-3deg)" },
					"20%": { transform: "scale(0.9) rotate(-3deg)" },
					"30%": { transform: "scale(1.1) rotate(3deg)" },
					"40%": { transform: "scale(1.1) rotate(-3deg)" },
					"50%": { transform: "scale(1.1) rotate(3deg)" },
					"60%": { transform: "scale(1.1) rotate(-3deg)" },
					"70%": { transform: "scale(1.1) rotate(3deg)" },
					"80%": { transform: "scale(1.1) rotate(-3deg)" },
					"90%": { transform: "scale(1.1) rotate(3deg)" },
					"100%": { transform: "scale(1) rotate(0)" },
				},
				jump: {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
					"100%": { transform: "translateY(0)" },
				},
				hang: {
					"0%": { transform: "translateY(-20px)" },
					"50%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-20px)" },
				},
				rollIn: {
					"0%": { transform: "translateX(-20px) rotate(-120deg)" },
					"100%": { transform: "translateX(0) rotate(0)" },
				},
				rollOut: {
					"0%": { transform: "translateX(0) rotate(0)" },
					"100%": { transform: "translateX(20px) rotate(120deg)" },
				},
				float: {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0)" },
				},
				sink: {
					"0%": { transform: "translateY(-10px)" },
					"50%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-10px)" },
				},
				flash: {
					"0%": { opacity: "1" },
					"50%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				jiggle: {
					"0%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
					"100%": { transform: "rotate(-3deg)" },
				},
				rubberBand: {
					"0%": { transform: "scale(1)" },
					"30%": { transform: "scale(1.25)" },
					"40%": { transform: "scale(0.75)" },
					"50%": { transform: "scale(1.15)" },
					"65%": { transform: "scale(0.95)" },
					"75%": { transform: "scale(1.05)" },
					"100%": { transform: "scale(1)" },
				},
				slideInLeft: {
					"0%": { transform: "translateX(-20px)" },
					"100%": { transform: "translateX(0)" },
				},
				slideInRight: {
					"0%": { transform: "translateX(20px)" },
					"100%": { transform: "translateX(0)" },
				},
				slideOurLeft: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-20px)" },
				},
				slideOutLeft: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(20px)" },
				},
				spinClockwise: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				spinCounterClockwise: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(-360deg)" },
				},
				flipX: {
					"0%": { transform: "scaleX(1)" },
					"50%": { transform: "scaleX(-1)" },
					"100%": { transform: "scaleX(1)" },
				},
				flipY: {
					"0%": { transform: "scaleY(1)" },
					"50%": { transform: "scaleY(-1)" },
					"100%": { transform: "scaleY(1)" },
				},
				blink: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				pop: {
					"0%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.1)" },
					"100%": { transform: "scale(1)" },
				},
				expandHorizontally: {
					"0%": { transform: "scaleX(0)" },
					"100%": { transform: "scaleX(1)" },
				},
				contractHorizontally: {
					"0%": { transform: "scaleX(1)" },
					"100%": { transform: "scaleX(0)" },
				},
				expandVertically: {
					"0%": { transform: "scaleY(0)" },
					"100%": { transform: "scaleY(1)" },
				},
				contractVertically: {
					"0%": { transform: "scaleY(1)" },
					"100%": { transform: "scaleY(0)" },
				},
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				fadeInDown: {
					"0%": { opacity: "0", transform: "translateY(-20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				fadeInLeft: {
					"0%": { opacity: "0", transform: "translateX(20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				fadeInRight: {
					"0%": { opacity: "0", transform: "translateX(-20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				fadeOutUp: {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(-20px)" },
				},
				fadeOutLeft: {
					"0%": { opacity: "1", transform: "translateX(0)" },
					"100%": { opacity: "0", transform: "translateX(-20px)" },
				},
				fadeOutRight: {
					"0%": { opacity: "1", transform: "translateX(0)" },
					"100%": { opacity: "0", transform: "translateX(20px)" },
				},
				sway: {
					"0%": { transform: "rotate(0deg)" },
					"50%": { transform: "rotate(15deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
				flipInX: {
					"0%": { opacity: "0", transform: "rotateY(90deg)" },
					"100%": { opacity: "1", transform: "rotateY(0deg)" },
				},
				flipInY: {
					"0%": { opacity: "0", transform: "rotateX(90deg)" },
					"100%": { opacity: "1", transform: "rotateX(0deg)" },
				},
				flipOutX: {
					"0%": { opacity: "1", transform: "rotateY(0deg)" },
					"100%": { opacity: "0", transform: "rotateY(90deg)" },
				},
				flipOutY: {
					"0%": { opacity: "1", transform: "rotateX(0deg)" },
					"100%": { opacity: "0", transform: "rotateX(90deg)" },
				},
				rotateIn: {
					"0%": { opacity: "0", transform: "rotate(-90deg)" },
					"100%": { opacity: "1", transform: "rotate(0deg)" },
				},
				rotateOut: {
					"0%": { opacity: "1", transform: "rotate(0deg)" },
					"100%": { opacity: "0", transform: "rotate(90deg)" },
				},
				slideRotateIn: {
					"0%": { opacity: "0", transform: "translateX(-20px) rotate(-90deg)" },
					"100%": { opacity: "1", transform: "translateX(0) rotate(0deg)" },
				},
				slideRotateOut: {
					"0%": { opacity: "1", transform: "translateX(0) rotate(0deg)" },
					"100%": { opacity: "0", transform: "translateX(20px) rotate(90deg)" },
				},
				heartbeat: {
					"0%": { transform: "scale(1)" },
					"25%": { transform: "scale(1.1)" },
					"50%": { transform: "scale(1)" },
					"75%": { transform: "scale(0.9)" },
					"100%": { transform: "scale(1)" },
				},
				blurredFadeIn: {
					"0%": { filter: "blur(5px)", opacity: "0" },
					"100%": { filter: "blur(0)", opacity: "1" },
				},
				horizontalVibration: {
					"0%": { transform: "translateX(0)" },
					"25%": { transform: "translateX(5px)" },
					"50%": { transform: "translateX(-5px)" },
					"75%": { transform: "translateX(5px)" },
					"100%": { transform: "translateX(0)" },
				},
				rotationalWave: {
					"0%": { transform: "rotate(0deg)" },
					"25%": { transform: "rotate(10deg)" },
					"50%": { transform: "rotate(-10deg)" },
					"75%": { transform: "rotate(10deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
				skew: {
					"0%": { transform: "skew(0deg)" },
					"100%": { transform: "skew(20deg)" },
				},
				bounceVertical: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
				},
				bounceHorizontal: {
					"0%, 100%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(20px)" },
				},
				tiltHorizontal: {
					"0%": { transform: "rotateY(0deg)" },
					"50%": { transform: "rotateY(20deg)" },
					"100%": { transform: "rotateY(0deg)" },
				},
				squeeze: {
					"0%, 100%": { transform: "scale(1, 1)" },
					"50%": { transform: "scale(1.1, 0.9)" },
				},
				slideUpFade: {
					"0%": { opacity: "0", transform: "translateY(50px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				bounceFadeIn: {
					"0%": { transform: "scale(0.5)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				swingDropIn: {
					"0%": { transform: "rotate(-30deg) translateY(-50px)", opacity: "0" },
					"100%": { transform: "rotate(0deg) translateY(0)", opacity: "1" },
				},
				pulseFadeIn: {
					"0%": { transform: "scale(0.9)", opacity: "0" },
					"50%": { transform: "scale(1.05)", opacity: "0.5" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				//  ------------- 👆 [ANIMATE] 👆 ------------- //

				// Blurry blob
				popBlob: {
					"0%": { transform: "scale(1)" },
					"33%": { transform: "scale(1.2)" },
					"66%": { transform: "scale(0.8)" },
					"100%": { transform: "scale(1)" },
				},
				// Oribiting items
				rotateFull: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				// Toast
				trackToastDuration: {
					"0%": { transform: "scaleX(1)" },
					"100%": { transform: "scaleX(0)" },
				},
				// Card Feature
				move: {
					"0%": { transform: "translateX(-200px)" },
					"100%": { transform: "translateX(200px)" },
				},
				// Rays background
				rays: {
					from: { backgroundPosition: "50% 50%, 50% 50%" },
					to: { backgroundPosition: "350% 50%, 350% 50%" },
				},
				// Linear effect (https://www.builder.io/blog/stagger-text-animation-tailwind)
				slidein: {
					from: { opacity: "0", transform: "translateY(-10px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				// Marquee
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				marqueeVertical: {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
				// Logo section
				logoSection: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - 4rem))" },
				},
				// Beam Border
				beamBorder: {
					"100%": { "offset-distance": "100%" },
				},
				// Button (extended)
				shine: {
					from: { backgroundPosition: "200% 0" },
					to: { backgroundPosition: "-200% 0" },
				},
				// Button heartbeatV0
				heartbeatV0: {
					"0%": {
						"box-shadow": '0 0 0 0 theme("colors.red.500")',
						transform: "scale(1)",
					},
					"50%": {
						"box-shadow": '0 0 0 7px theme("colors.red.500/0")',
						transform: "scale(1.05)",
					},
					"100%": {
						"box-shadow": '0 0 0 0 theme("colors.red.500/0")',
						transform: "scale(1)",
					},
				},
				// Text Gradient Effect
				gradient: {
					to: {
						backgroundPosition: "var(--bg-size) 0",
					},
				},
				// Text Shimmer Effect
				shimmer: {
					"0%, 90%, 100%": {
						"background-position": "calc(-100% - var(--shimmer-width)) 0",
					},
					"30%, 60%": {
						"background-position": "calc(100% + var(--shimmer-width)) 0",
					},
				},
				// Orbiting Circles
				orbit: {
					"0%": {
						transform:
							"rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
					},
					"100%": {
						transform:
							"rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
					},
				},
				// Background Ripple
				ripple: {
					"0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
					"50%": { transform: "translate(-50%, -50%) scale(0.9)" },
				},
				// Background Retro
				grid: {
					"0%": { transform: "translateY(-50%)" },
					"100%": { transform: "translateY(0)" },
				},
				// Meteor effect
				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					},
				},
				// Inifnite Moving Cards
				scroll: {
					to: { transform: "translate(calc(-50% - 0.5rem))" },
				},
				// Parallax Carousel
				parallax: {
					"0%": { objectPosition: "center" },
					"100%": { objectPosition: "0 0" },
				},
				// Stepper
				collapsibleDown: {
					from: { height: "0" },
					to: { height: "var(--radix-collapsible-content-height)" },
				},
				collapsibleUp: {
					from: { height: "var(--radix-collapsible-content-height)" },
					to: { height: "0" },
				},
				// From Shadcn Extension (page.tsx)
				fadeUp: {
					from: { opacity: "0", transform: "translateY(10px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				// Tailwind Scroll only (page.tsx)
				fadeOutDown: {
					from: { opacity: "1", transform: "translateY(0)" },
					to: { opacity: "0", transform: "translateY(40%)" },
				},
				makeItBigger: {
					"0%": { transform: "translateY(0%)" },
					"80%": { transform: "translateY(-30%)" },
					"90%": { transform: "translateY(-10%) scale(1.75)" },
					"100%": {
						transform: "translateY(0%) scale(2)",
						// opacity: 0.3, // TODO: fix (number not assignable string)
						// zIndex: -1,  // TODO: fix (number not assignable string)
					},
				},
				// syntax UI
				skewScroll: {
					"0%": {
						transform:
							"rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)",
					},
					"100%": {
						transform:
							"rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)",
					},
				},
				// Aceternity Radar
				radarSpin: {
					from: { transform: "rotate(20deg)" },
					to: { transform: "rotate(380deg)" },
				},
				// Aceternity Spotlight
				spotlight: {
					"0%": {
						opacity: "0",
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: "1",
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
				// Aceternity Gradient
				moveHorizontal: {
					"0%": { transform: "translateX(-50%) translateY(-10%)" },
					"50%": { transform: "translateX(50%) translateY(10%)" },
					"100%": { transform: "translateX(-50%) translateY(-10%)" },
				},
				moveInCircle: {
					"0%": { transform: "rotate(0deg)" },
					"50%": { transform: "rotate(180deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				moveVertical: {
					"0%": { transform: "translateY(-50%)" },
					"50%": { transform: "translateY(50%)" },
					"100%": { transform: "translateY(-50%)" },
				},
				textSlide: {
					"0%, 16%": {
						transform: "translateY(0%)",
					},
					"20%, 36%": {
						transform: "translateY(-16.66%)",
					},
					"40%, 56%": {
						transform: "translateY(-33.33%)",
					},
					"60%, 76%": {
						transform: "translateY(-50%)",
					},
					"80%, 96%": {
						transform: "translateY(-66.66%)",
					},
					"100%": {
						transform: "translateY(-83.33%)",
					},
				},
				textSlide2: {
					"0%, 40%": {
						transform: "translateY(0%)",
					},
					"50%, 90%": {
						transform: "translateY(-33.33%)",
					},
					"100%": {
						transform: "translateY(-66.66%)",
					},
				},
				textSlide3: {
					"0%, 26.66%": {
						transform: "translateY(0%)",
					},
					"33.33%, 60%": {
						transform: "translateY(-25%)",
					},
					"66.66%, 93.33%": {
						transform: "translateY(-50%)",
					},
					"100%": {
						transform: "translateY(-75%)",
					},
				},
				textSlide4: {
					"0%, 20%": {
						transform: "translateY(0%)",
					},
					"25%, 45%": {
						transform: "translateY(-20%)",
					},
					"50%, 70%": {
						transform: "translateY(-40%)",
					},
					"75%, 95%": {
						transform: "translateY(-60%)",
					},
					"100%": {
						transform: "translateY(-80%)",
					},
				},
				textSlide5: {
					"0%, 16%": {
						transform: "translateY(0%)",
					},
					"20%, 36%": {
						transform: "translateY(-16.66%)",
					},
					"40%, 56%": {
						transform: "translateY(-33.33%)",
					},
					"60%, 76%": {
						transform: "translateY(-50%)",
					},
					"80%, 96%": {
						transform: "translateY(-66.66%)",
					},
					"100%": {
						transform: "translateY(-83.33%)",
					},
				},
				textSlide6: {
					"0%, 13.33%": {
						transform: "translateY(0%)",
					},
					"16.66%, 30%": {
						transform: "translateY(-14.28%)",
					},
					"33.33%, 46.66%": {
						transform: "translateY(-28.57%)",
					},
					"50%, 63.33%": {
						transform: "translateY(-42.85%)",
					},
					"66.66%, 80%": {
						transform: "translateY(-57.14%)",
					},
					"83.33%, 96.66%": {
						transform: "translateY(-71.42%)",
					},
					"100%": {
						transform: "translateY(-85.71%)",
					},
				},
				textSlide7: {
					"0%, 11.43%": {
						transform: "translateY(0%)",
					},
					"14.28%, 25.71%": {
						transform: "translateY(-12.5%)",
					},
					"28.57%, 40%": {
						transform: "translateY(-25%)",
					},
					"42.85%, 54.28%": {
						transform: "translateY(-37.5%)",
					},
					"57.14%, 68.57%": {
						transform: "translateY(-50%)",
					},
					"71.42%, 82.85%": {
						transform: "translateY(-62.5%)",
					},
					"85.71%, 97.14%": {
						transform: "translateY(-75%)",
					},
					"100%": {
						transform: "translateY(-87.5%)",
					},
				},
				textSlide8: {
					"0%, 10%": {
						transform: "translateY(0%)",
					},
					"12.5%, 22.5%": {
						transform: "translateY(-11.11%)",
					},
					"25%, 35%": {
						transform: "translateY(-22.22%)",
					},
					"37.5%, 47.5%": {
						transform: "translateY(-33.33%)",
					},
					"50%, 60%": {
						transform: "translateY(-44.44%)",
					},
					"62.5%, 72.5%": {
						transform: "translateY(-55.55%)",
					},
					"75%, 85%": {
						transform: "translateY(-66.66%)",
					},
					"87.5%, 97.5%": {
						transform: "translateY(-77.77%)",
					},
					"100%": {
						transform: "translateY(-88.88%)",
					},
				},
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden",
					},
					"100%": {
						width: "100%",
					},
				},
				blinkTyping: {
					"50%": {
						borderColor: "transparent",
					},
					"100%": {
						borderColor: "white",
					},
				},
				radarMini: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			animation: {
				//  ------------- 👇 [ANIMATE] 👇 ------------- //
				backgroundShine: "backgroundShine 2s linear infinite",
				blink: "blink 0.5s",
				blurredFadeIn: "blurredFadeIn 0.9s ease-in-out",
				bounceFadeIn: "bounceFadeIn 0.6s ease-out",
				bounceHorizontal: "bounceHorizontal 0.6s ease-in-out",
				bounceVertical: "bounceVertical 0.6s ease-in-out",
				bounceCustom: "bounceCustom 1s ease-in-out", // TODO: check
				contractHorizontally: "contractHorizontally 0.6s ease-out",
				contractVertically: "contractVertically 0.6s ease-out",
				expandHorizontally: "expandHorizontally 0.6s ease-out",
				expandVertically: "expandVertically 0.6s ease-out",
				fadeIn: "fadeIn 0.6s ease-in",
				fadeInDown: "fadeInDown 0.6s ease-in-out",
				fadeInLeft: "fadeInLeft 0.6s ease-in-out",
				fadeInRight: "fadeInRight 0.6s ease-in-out",
				fadeInUp: "fadeInUp 0.6s ease-in-out",
				fadeOut: "fadeOut 0.6s ease-out",
				fadeOutDownV2: "fadeOutDownV2 0.6s ease-out", // TODO: v2
				"fadeOutDown-v3": "fadeOutDown-v3 0.6s ease-out", // TODO: v3
				fadeOutLeft: "fadeOutLeft 0.6s ease-out",
				fadeOutRight: "fadeOutRight 0.6s ease-out",
				fadeOutUp: "fadeOutUp 0.6s ease-out",
				flash: "flash 1s ease-in-out",
				flashV0: "flashV0 1s cubic-bezier(0.4, 0, 0.2, 1)",
				float: "float 1s ease-in-out",
				flipHorizontal: "flipHorizontal 1s ease-in-out",
				flipInX: "flipInX 0.6s ease-out",
				flipInY: "flipInY 0.6s ease-out",
				flipOutX: "flipOutX 0.6s ease-out",
				flipOutY: "flipOutY 0.6s ease-out",
				flipVertical: "flipVertical 1s ease-in-out",
				flipX: "flipX 0.6s ease-out",
				flipY: "flipY 0.6s ease-out",
				hang: "hang 1s ease-in-out",
				heartbeat: "heartbeat 0.6s ease-out",
				horizontalVibration: "horizontalVibration 0.3s linear infinite",
				jiggle: "jiggle 0.5s ease-in-out",
				jiggleV0: "jiggleV0 0.3s ease-in-out", // TODO v0
				jump: "jump 1s ease-in-out",
				//
				pop: "pop 0.6s ease-out", // TODO
				pulseCustom: "pulseCustom 1s ease-in-out", // TODO: custom
				pulseFadeIn: "pulseFadeIn 0.6s ease-out",
				rise: "rise 400ms cubic-bezier(0.4, 0, 0.2, 1)",
				rollIn: "rollIn 1s ease-in-out",
				rollOut: "rollOut 1s ease-in-out",
				rotate180: "rotate180 1s ease-in-out",
				rotate360: "rotate360 1s linear",
				rotate90: "rotate90 1s ease-in-out",
				rotateIn: "rotateIn 0.6s ease-out",
				rotateOut: "rotateOut 0.6s ease-out",
				rotationalWave: "rotationalWave 2s ease-in-out infinite",
				rubberBand: "rubberBand 1s ease-in-out",
				"rubberBand-v0": "rubberBand-v0 2s cubic-bezier(0.4, 0, 0.2, 1)", // TODO
				scale: "scale 400ms cubic-bezier(0.4, 0, 0.2, 1)", // TODO
				shake: "shake 0.5s ease-in-out",
				shakeV0: "shakeV0 400ms cubic-bezier(0.4, 0, 0.2, 1)", // TODO
				sink: "sink 1s ease-in-out",
				skew: "skew 0.5s ease-in-out",
				slideDown: "slideDown 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideDownAndFade:
					"slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideInBottom: "slideInBottom 0.6s ease-out",
				slideInLeft: "slideInLeft 0.6s ease-out",
				slideInRight: "slideInRight 0.6s ease-out",
				slideInTop: "slideInTop 0.6s ease-out",
				slideLeft: "slideLeft 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideLeftAndFade:
					"slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideOutBottom: "slideOutBottom 0.6s ease-out",
				slideOurLeft: "slideOurLeft 0.6s ease-out",
				slideOutLeft: "slideOutLeft 0.6s ease-out",
				slideOutTop: "slideOutTop 0.6s ease-out",
				slideRight: "slideRight 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideRightAndFade:
					"slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideRotateIn: "slideRotateIn 0.6s ease-out",
				slideRotateOut: "slideRotateOut 0.6s ease-out",
				slideUp: "slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpFade: "slideUpFade 0.6s ease-out",
				spinClockwise: "spinClockwise 0.6s linear",
				spinCounterClockwise: "spinCounterClockwise 0.6s linear",
				sway: "sway 0.6s ease-out",
				swing: "swing 1s ease-in-out",
				swingDropIn: "swingDropIn 0.6s ease-out",
				swingV0: "swingV0 400ms ease-in-out",
				squeeze: "squeeze 0.6s ease-in-out",
				tada: "tada 1s ease-in-out",
				tiltHorizontal: "tiltHorizontal 0.6s ease-in-out",
				vibrate: "vibrate 0.4s ease-in-out",
				wobble: "wobble 1s ease-in-out",
				zoomIn: "zoomIn 0.6s ease-out",
				zoomOut: "zoomOut 0.6s ease-out",
				//  ------------- 👆 [ANIMATE] 👆 ------------- //

				// Blurry blob
				popBlob: "popBlob 5s infinite",
				// Toast
				trackToastDuration: "trackToastDuration ease-in-out forwards",
				// Card Feature
				move: "move 5s linear infinite",
				// Checbox
				"checkbox-pulse": "pulse 500ms ease-in-out",
				// Rays background
				rays: "rays 60s linear infinite",
				// Linear effect (https://www.builder.io/blog/stagger-text-animation-tailwind)
				slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
				// Marquee
				marquee: "marquee var(--duration) linear infinite",
				marqueeVertical: "marqueeVertical var(--duration) linear infinite",
				// Beam Border
				beamBorder: "beamBorder calc(var(--duration)*1s) infinite linear",
				// Button (extended)
				shine: "shine 8s ease-in-out infinite",
				// Logo section
				logoSection: "logoSection 30s linear infinite",
				// Button heartbeatV0
				heartbeatV0: "heartbeatV0 2s infinite ease-in-out", // TODO V0
				// Text Gradient Effect
				gradient: "gradient 8s linear infinite",
				// Text Shimmer Effect
				shimmer: "shimmer 8s infinite",
				// Orbiting Circles
				orbit: "orbit calc(var(--duration)*1s) linear infinite",
				// Background Ripple
				ripple: "ripple 3400ms ease infinite",
				// Background Retro
				grid: "grid 15s linear infinite",
				// Demo Carousel Dribble
				slide:
					"slide calc(var(--card-number) * var(--card-speed)) linear infinite",
				// Infinite Moving Cards
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
				// Parallax Carousel
				parallax: "parallax linear both",
				// From Shadcn extension
				fadeUp: "fadeUp 0.5s ease-in-out",
				// Shadcn accordion
				accordionDown: "accordionDown 0.2s ease-out",
				accordionUp: "accordionUp 0.2s ease-out",
				// Stepper
				collapsibleDown: "collapsibleDown 0.2s ease-out",
				collapsibleUp: "collapsibleUp 0.2s ease-out",
				// Aceternity Gradient
				first: "moveVertical 30s ease infinite",
				second: "moveInCircle 20s reverse infinite",
				third: "moveInCircle 40s linear infinite",
				fourth: "moveHorizontal 40s ease infinite",
				fifth: "moveInCircle 20s ease infinite",
				// Aceternity Radar
				radarSpin: "radarSpin 10s linear infinite",
				// Aceternity Spotlight
				spotlight: "spotlight 2s ease .75s 1 forwards",
				// syntax UI
				skewScroll: "skewScroll 20s linear infinite",
				// Tailwind Scroll only
				fadeOutDown: "fadeOutDown linear forwards",
				makeItBigger: "makeItBigger linear forwards",
				// Meteor effect
				"meteor-effect": "meteor 5s linear infinite",
				textSlide: "textSlide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
				textSlide2: "textSlide2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
				textSlide3: "textSlide3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
				textSlide4: "textSlide4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
				textSlide5: "textSlide5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
				textSlide6: "textSlide6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite",
				textSlide7: "textSlide7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
				textSlide8: "textSlide8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite",
				typing:
					"typing 2s steps(20) infinite alternate, blinkTyping .7s infinite",
				radarMini: "radarMini 2s linear infinite",
			},
			supports: {
				// Tailwind scroll only
				"no-scroll-driven-animations": "not(animation-timeline: scroll())",
			},
			boxShadow: {
				input:
					"0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)",
			},
			// For sticky-cursor (hover:scale-300)
			scale: {
				300: "3",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
