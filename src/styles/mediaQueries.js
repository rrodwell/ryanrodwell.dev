export const breakpoints = {
  min: 321,
  mobile: 414,
  tablet: 768,
  desktop: 1024,
  max: 1440,
}

export const mediaQueries = {
  min: `@media (max-width: ${breakpoints.min}px)`,
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  desktop: `@media (max-width: ${breakpoints.desktop}px)`,
  max: `@media (max-width: ${breakpoints.max}px)`,
}
