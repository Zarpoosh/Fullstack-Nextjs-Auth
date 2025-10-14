import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // این باعث میشه خطاهای ESLint در زمان build نادیده گرفته بشن
    ignoreDuringBuilds: true,
  },
  /* سایر تنظیمات در صورت نیاز */
};

export default nextConfig;
