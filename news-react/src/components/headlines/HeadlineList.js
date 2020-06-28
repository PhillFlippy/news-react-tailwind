import React from 'react'
import PropTypes from 'prop-types'
import Headline from './Headline';
function HeadlineList({data}) {
    if(data.length === 0){
        return (
            <div className="left-menu"><div>No headlines to show</div></div>
        )
    }
    return (
        <div className="items-center flex content-center xl:flex-col w-1/2 justify-center mx-auto">
            {data.map((article, index) => 
                <Headline  source={article.source.name} author={article.author} image={article.urlToImage} title={article.title} description={article.description} key={index} />
            )}
        </div>
    )
}

HeadlineList.propTypes = {
data: PropTypes.array.isRequired
}

export default HeadlineList

