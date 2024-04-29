import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@mantine/form', '@mantine/dates', '@mantine/charts', '@mantine/notifications' , '@mantine/tiptap', '@mantine/code-highlight', '@mantine/dropzone', '@mantine/carousel', '@mantine/spotlight', '@mantine/modals', '@mantine/nprogress'],
  },
});
