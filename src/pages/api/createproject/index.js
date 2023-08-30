// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "../../../lib/supabase"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { image_path, project_name } = JSON.parse(req.body)
    console.log("llooooooooooooooom", req.body)
    console.log(project_name, image_path)

    const { data: imageData, error: inserError } = await supabase.from("projects").insert([
      {
        project_name: project_name,
        project_image: image_path,
      },
    ])
    if (inserError) {
      return res.status(500).json({ error: "Database insertion failed" })
    }
    return res.status(200).json({ success: true, data: imageData })
  }
  return res.status(405).json({ error: "Method not allowed" })
}
