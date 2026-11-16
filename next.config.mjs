import nextra from 'nextra'

const withNextra = nextra({})
export default withNextra({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
})
