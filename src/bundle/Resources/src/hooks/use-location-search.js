import { useEffect, useState } from 'react'
import { useSymfonyContext } from '../context/symfony'
import { client, promiseAllWrapper } from '../utils/api'

export default function useLocationSearch(coordinates) {
  const { siteaccess, contentType, maxDistance, baseUrl } = useSymfonyContext()
  const [resultList, setResultList] = useState([])
  const [isNew, setIsNew] = useState(false)

  useEffect(() => {
    if (coordinates.length > 0) {
      let isFresh = true
      setIsNew(false)
      const [latitude, longitude] = coordinates
      client(`search/${contentType}/${maxDistance}/${latitude}/${longitude}`, {
        headers: {
          Accept: 'application/vnd.ez.api.ContentList+json',
          'X-Siteaccess': siteaccess,
        },
      })
        .then(data => normalizeContentList(data, baseUrl))
        .then(result => {
          if (isFresh) {
            setResultList(result)
            setIsNew(true)
          }
        })
      return () => (isFresh = false)
    }
  }, [coordinates])

  return [resultList, isNew]

  function normalizeContentList(data, baseUrl) {
    const ContentList = data.ContentList.ContentInfo
    if (ContentList.length > 0) {
      return Promise.all(
        promiseAllWrapper(ContentList, siteaccess, baseUrl)
      ).then(html =>
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
