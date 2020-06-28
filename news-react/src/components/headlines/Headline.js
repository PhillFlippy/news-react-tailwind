import React from 'react'
import PropTypes from 'prop-types'

function Headline({title, author, source, image, description}) {
    return (
<div className="min-w-full lg:max-w-full lg:flex mt-10 justify-center shadow-sm">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${image})`}} title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8 items-center">
      <p className="text-sm text-gray-600 flex items-center">
         {source}
      </p>
    <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src={image} alt="Avatar of Jonathan Reinink" />
      <div className="text-sm">
    <p className="text-gray-900 leading-none">{author}</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div>
    )
}

Headline.propTypes = {

}

export default Headline

