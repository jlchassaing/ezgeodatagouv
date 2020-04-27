import React from 'react'

const ResultList = ({ list, currentIndex, changeIndex, coords }) => {
  return list.length > 0
    ? list.map((item, index) => (
        <div
          className={`ezgeodatagouv__line__wrapper${
            index === currentIndex ? '--selected' : ''
          }`}
          key={item._id}
          onClick={() => changeIndex(index)}
          dangerouslySetInnerHTML={{ __html: item.html }}
        />
      ))
    : null
}

export default ResultList
