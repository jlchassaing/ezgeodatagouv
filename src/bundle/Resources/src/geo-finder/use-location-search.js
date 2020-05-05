import { useEffect, useState } from 'react'
import { client, promiseAllWrapper } from '../utils/api'

export default function useLocationSearch(
  coordinates,
  siteaccess,
  contentType,
  maxDistance
) {
  const [resultList, setResultList] = useState([])
  useEffect(() => {
    if (coordinates.length > 0) {
      let isFresh = true
      const [latitude, longitude] = coordinates
      client(`search/${contentType}/${maxDistance}/${latitude}/${longitude}`, {
        headers: {
          Accept: 'application/vnd.ez.api.ContentList+json',
          'X-Siteaccess': siteaccess,
        },
      })
        .then(data => normalizeContentList(data))
        .then(result => {
          if (isFresh) setResultList(result)
        })
      return () => (isFresh = false)
    }
  }, [coordinates])

  return resultList

  function normalizeContentList(data) {
    const ContentList = data.ContentList.ContentInfo
    if (ContentList.length > 0) {
      return Promise.all(promiseAllWrapper(ContentList, siteaccess)).then(
        html =>
          ContentList.reduce(
            (acc, ContentInfo, index) => [
              ...acc,
              {
                _id: ContentInfo.Content._id,
                _href: ContentInfo.Content._href,
                name: ContentInfo.Content.TranslatedName,
                distance: ContentInfo._distance,
                html: html[index],
                loc: ContentInfo.Content.CurrentVersion.Version.Fields.field.find(
                  field => field.fieldTypeIdentifier === 'ezgmaplocation'
                ).fieldValue,
              },
            ],
            []
          )
      )
    } else {
      return []
    }
  }
}
