// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "../../../lib/supabase";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
          const { data: entries, error } = await supabase
            .from("projects")
            .select("*");

          if (error) {
            return res.status(500).json({ error: "Failed to fetch entries" });
          }
          // console.log('11111111111111',entries)
          const dataWithImages = await Promise.all(
            entries.map(async (entry) => {
              const { data: image, error: storageError } = await supabase.storage
                .from("88-images")
                .getPublicUrl(entry.project_image);

              if (storageError) {
                return { ...entry, storageObject: null };
              }

              return { ...entry, image };
            })
          );
          // console.log('222',dataWithImages)


          return res.status(200).json({data:dataWithImages});
        } catch (error) {
          return res.status(500).json({ error: "Failed to fetch entries" });
        }
      }

      return res.status(405).json({ error: "Method not allowed" });
    }
