import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  // Your Next.js config here
  experimental: {
    reactCompiler: false
  }
}

export default withPayload(nextConfig)
