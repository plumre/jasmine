const presets = [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", {"modules": false}]
]
const plugins = [
    [
        "component",
        {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
        }
    ]
]

module.exports = {
    presets,
    plugins
}
