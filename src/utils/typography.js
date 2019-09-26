import typographyStyles from "../fonts/fonts-main.scss"

import Typography from "typography"
import wordpress2016Theme from "typography-theme-wordpress-2016"

const typography = new Typography(wordpress2016Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
