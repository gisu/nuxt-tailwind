module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {},
  variants: {},
  plugins: [
    require('./.tailwind/transforms')(),
    require('./.tailwind/extra')(),
    require('./.tailwind/aspectratio')(),
    require('./.tailwind/container')(),
    require('./.tailwind/transition')()
  ]
}
