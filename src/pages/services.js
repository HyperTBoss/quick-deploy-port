import React from 'react'
import { Link } from "gatsby"
import GlobalThemeStyles from '../components/components-ui/GlobalThemeStyles'
import Seo from "../components/seo"

function services() {
    return (
        <>
            <Seo/>
            <GlobalThemeStyles></GlobalThemeStyles>
            <Link to="/">Go back to the homepage</Link>
        </>
    )
}

export default services
