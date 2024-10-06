module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gradientColorStops: {
        skin: {
          gradientStart: 'var(--gradient-primary)',
          gradientMid: 'var(--gradient-mid)',
          gradientEnd: 'var(--gradient-secondary)',
        }
      },
      textColor: {
        skin: {
          textDefault: 'var(--text-white)'
        }
      }
    },
  },
  plugins: [],
}