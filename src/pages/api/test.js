// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { APP_URL } from "@/config/app-config"
// import { getKnex } from "@/database"
// import { createCredentials, getMeetingUrl } from "@/utils"

export default async function handler(req , res) {
  if (req.method === "POST") {
    // Process a POST request
    //Create meeting api

    res.status(201).json({ success: true, })
  } else {
    

    res.status(200).json({ success: true,  })
  }
}
