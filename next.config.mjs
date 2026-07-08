const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

/** @type {import("next").NextConfig} */
const nextConfig = {
  // Removes the X-Powered-By: Next.js response header

  // Enabled by default, kept explicit
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",

        // Restricts optimization to your own Cloudinary account when env exists
        pathname: cloudName ? `/${cloudName}/**` : "/**",
      },
    ],

    /* ---------------------------------------------------------------------- */
    /* Modern Formats                                                         */
    /* ---------------------------------------------------------------------- */

    // WebP is a strong default for your laptop website
    formats: ["image/webp"],

    /* ---------------------------------------------------------------------- */
    /* Allowed Image Qualities — required/recommended for Next.js 16          */
    /* ---------------------------------------------------------------------- */

    qualities: [60, 75, 85],

    /* ---------------------------------------------------------------------- */
    /* Responsive Widths                                                      */
    /* ---------------------------------------------------------------------- */

    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],

    imageSizes: [32, 48, 64, 96, 128, 256, 384],

    /* ---------------------------------------------------------------------- */
    /* Image Cache                                                            */
    /* ---------------------------------------------------------------------- */

    /* ---------------------------------------------------------------------- */
    /* Security / Resource Limits                                             */
    /* ---------------------------------------------------------------------- */

    // Cloudinary normally should not redirect image requests
    maximumRedirects: 0,

    // Prevent very large remote images from consuming excessive server memory
    maximumResponseBody: 10_000_000,
  },
};

export default nextConfig;
