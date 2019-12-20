import React from 'react'
import * as R from 'ramda'

import Item from 'components/menu/item'

export default ({ list }) => {
    
    const renderList = (key, item) => <Item item={item} key={key} />

    return (
        <>
            {list.map((item, key) => renderList(key, item))}
        </>
    )
}