export const API_DATAGOUV = 'https://api-adresse.data.gouv.fr/search/'
export const API_EZGEODATAGOUV = '/api/ezp/v2/ez_geo_data_gouv/'

export function client(
  endpoint,
  { body, output = 'json', ...customConfig } = {}
) {
  const headers = {
    json: { 'Content-Type': 'application/json' },
    text: { 'Content-Type': 'text/html' },
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers[output],
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body = JSON.stringify(body)
  }
  return window
    .fetch(
      new URL(endpoint, document.location.origin + API_EZGEODATAGOUV).href,
      config
    )
    .then(response => {
      if (response.ok) {
        return response[output]()
      } else {
        return Promise.reject(response.statusText)
      }
    })
}

export function promiseAllWrapper(ContentList, siteaccess, baseUrl) {
  return ContentList.reduce(
    (promises, ContentInfo) => [
      ...promises,
      client(
        `${baseUrl}ez_geo_data_gouv/view/content/${ContentInfo.Content._id}/line/${ContentInfo._distance}`,
        {
          output: 'text',
        }
      ),
    ],
    []
  )
}
