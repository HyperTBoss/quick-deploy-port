import React from 'react'
import { Link } from "gatsby"
import GlobalThemeStyles from '../components/components-ui/GlobalThemeStyles'
import Divider from "../components/components-ui/Divider"
import Seo from "../components/seo"

function aboutPage() {
    return (
        <>
        <Seo title="about"/>
        <GlobalThemeStyles/>
            <h1>Napa De Doo</h1>
            <p>A new page~</p>
            <Divider></Divider>
            <h2>Some lorem</h2>
            <p>loremReprehenderit esse cupidatat veniam amet sunt est adipisicing pariatur consectetur. Sint culpa ut commodo irure esse. Deserunt laboris est adipisicing qui pariatur eu enim adipisicing sunt. Consectetur sit aliquip est nisi nostrud enim mollit officia ad ad exercitation amet aute non. Velit irure qui aliquip in officia id velit veniam culpa do sit. Magna laboris sint minim commodo nulla non nostrud minim laboris pariatur.
                Ullamco aliqua quis in dolore. Dolor ex elit Lorem ipsum cillum. Eiusmod veniam quis anim esse tempor deserunt fugiat. Incididunt sunt est commodo velit qui amet veniam excepteur nisi excepteur commodo.
                Veniam sint aliqua exercitation consectetur ex est ad amet culpa amet. Exercitation dolore ex incididunt consectetur est laboris qui consectetur. Culpa commodo proident officia duis excepteur Lorem. Sint dolor laborum laborum veniam aliqua occaecat.
                Ex eiusmod tempor aute officia velit. Excepteur dolor dolore incididunt culpa veniam officia Lorem enim reprehenderit. Do fugiat ipsum aliqua sunt minim reprehenderit laboris adipisicing esse sit ea ipsum commodo incididunt.
                Ullamco proident culpa voluptate labore labore dolor duis do. Sit elit consectetur adipisicing aute minim eu. Tempor irure cillum commodo ut laboris non quis reprehenderit veniam enim duis proident. Dolore esse duis duis nulla minim cillum minim nisi duis occaecat labore nulla. Officia elit veniam culpa magna ea.
            </p>

            <Link to="/">Go back to the homepage</Link>
        </>
    )
}

export default aboutPage
