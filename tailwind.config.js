module.exports = {
  purge: [],
  theme: {
    animations: {
      // defaults to {}; the following are examples
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
      jump: {
        "0%": {
          transform: "translateY(0%)",
        },
        "50%": {
          transform: "translateY(-100%)",
        },
        "100%": {
          transform: "translateY(0%)",
        },
      },
    },
    animationDuration: {
      // defaults to these values
      default: "1s",
      "0s": "0s",
      "1s": "1s",
      "2s": "2s",
      "3s": "3s",
      "4s": "4s",
      "5s": "5s",
    },
    animationTimingFunction: {
      // defaults to these values
      default: "ease",
      linear: "linear",
      ease: "ease",
      "ease-in": "ease-in",
      "ease-out": "ease-out",
      "ease-in-out": "ease-in-out",
    },
    animationDelay: {
      // defaults to these values
      default: "0s",
      "0s": "0s",
      "1s": "1s",
      "2s": "2s",
      "3s": "3s",
      "4s": "4s",
      "5s": "5s",
    },
    animationIterationCount: {
      // defaults to these values
      default: "infinite",
      once: "1",
      infinite: "infinite",
    },
    animationDirection: {
      // defaults to these values
      default: "normal",
      normal: "normal",
      reverse: "reverse",
      alternate: "alternate",
      "alternate-reverse": "alternate-reverse",
    },
    animationFillMode: {
      // defaults to these values
      default: "none",
      none: "none",
      forwards: "forwards",
      backwards: "backwards",
      both: "both",
    },
    animationPlayState: {
      // defaults to these values
      running: "running",
      paused: "paused",
    },

    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "screen-1/2": "50vh",
        "screen-1/4": "25vh",
        "screen-3/4": "75vh",
      },
    },
  },
  variants: {
    // all the following default to ['responsive']
    animations: ["responsive"],
    animationDuration: ["responsive"],
    animationTimingFunction: ["responsive"],
    animationDelay: ["responsive"],
    animationIterationCount: ["responsive"],
    animationDirection: ["responsive"],
    animationFillMode: ["responsive"],
    animationPlayState: ["responsive"],
    mixBlendMode: ["responsive"],
    backgroundBlendMode: ["responsive"],
    isolation: ["responsive"],
  },
  plugins: [
    require("tailwindcss-animations"),
    require("tailwindcss-blend-mode")(), // no options to configure
  ],
}
