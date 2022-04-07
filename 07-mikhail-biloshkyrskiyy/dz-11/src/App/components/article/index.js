import React from 'react'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { getActiveArticleId } from 'selectors'

import Item from 'components/article/item'
import Codemirror from 'components/codemirror'

const Article = ({ list, activeArticleId }) => {

    const renderList = (key, item, extended) =>
        <Item item={item} extended={extended} key={key}>
            <Codemirror example={item.example}/>
        </Item>

    return (
        <>
            {list.map((item, key) => activeArticleId === item.id ?
                renderList(key, item, true)
                : renderList(key, item, false))
            }
        </>
    )
}

const mapStateToProps = (state, ownProps) => ({
    activeArticleId: getActiveArticleId(ownProps)
})

export default compose(
    withRouter,
    connect(mapStateToProps, null)
)(Article)