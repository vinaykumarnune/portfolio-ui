/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: ()=> {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ]
      },
    reactStrictMode:true,
    modularizeImports:{
        "@mui/icons-material":{
            transform:"@mui/icons-material/{{members}}"
        }
    }
}

module.exports = nextConfig
