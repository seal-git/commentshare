export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: "gray",
        values: [
            {
                name: "white",
                value: "#ffffff"
            },
            {
                name: "gray",
                value: "#e5e5e5"
            },
            {
                name: "black",
                value: "#000000"
            }
        ]
    }
}