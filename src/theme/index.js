import { defaultTheme } from '@commonground/design-system'

const tokens = {
    ...defaultTheme.tokens,
    containerWidth: '992px',
}

const theme = {
    ...defaultTheme,
    tokens,
    breakpoints: Object.values(defaultTheme.breakpoints)
    .splice(1)
    .map((bp) => `${bp}px`),
}

export default theme
