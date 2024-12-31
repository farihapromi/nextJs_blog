/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:'/user',
                destination:'/',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
