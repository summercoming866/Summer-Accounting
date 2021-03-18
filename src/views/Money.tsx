import Layout from '../components/Layout'
import React from 'react'
import styled from 'styled-components'
import TagSection from './Money/TagSection'
import NotesSection from './Money/NotesSection'
import NumberPadSection from './Money/NumberPadSection'
import CategorySection from './Money/CategorySection'

const MyLayout = styled(Layout)`
    display:flex;
    flex-direction:column;
`
function Money() {
    return (
        <MyLayout>
            <TagSection />
            <NotesSection />
            <CategorySection />

            <NumberPadSection />

        </MyLayout>
    );
}
export default Money