import sanityClient from '@sanity/client'

// const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'ugxtyz2k',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})

export default client