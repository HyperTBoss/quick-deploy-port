import * as React from "react"
import GlobalThemeStyles from '../components/components-ui/GlobalThemeStyles'
import Seo from "../components/seo"

const NotFoundPage = () => (
  <>
  <GlobalThemeStyles/>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
