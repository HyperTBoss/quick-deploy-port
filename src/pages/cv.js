import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"
import GlobalThemeStyles from '../components/components-ui/GlobalThemeStyles'
import Divider from "../components/components-ui/Divider"

const cv = () => (
  <>
    <GlobalThemeStyles/>
    <Seo title="CV" />
    <h1>Hi, and thanks for coming here.</h1>
    <p>Welcome to the CV Page</p>
    <Divider></Divider>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default cv
