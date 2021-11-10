import { query } from 'webkit/api'

export const PROJECTS_QUERY = `
query allProjects($slugs: [String]){
  allProjects(selector:{baseProjects:[{slugs:$slugs}]}) {
    slug
    name
    ticker
    priceUsd
	}
}
`

const accessor = ({ allProjects }) => allProjects
export function queryProjects(slugs) {
  return query(PROJECTS_QUERY, {
    variables: {
      slugs,
    },
  }).then(accessor)
}
