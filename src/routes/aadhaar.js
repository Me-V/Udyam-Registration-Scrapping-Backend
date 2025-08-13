import express from "express";
import fs from "fs";

const router = express.Router();

// Load scraped form structure
const formStructure = JSON.parse(
  fs.readFileSync("./udyam_form_structure.json", "utf8")
);

// Find the Aadhaar field name from scraped data
const aadhaarField = formStructure?.step1?.find(
  field => field.name.toLowerCase().includes("aadhaar")
)?.name || "aadhaar";

router.post("/", (req, res) => {
  const aadhaar = req.body[aadhaarField];

  // Simple validation
  const isValid = /^[2-9]{1}[0-9]{11}$/.test(aadhaar);

  if (!isValid) {
    return res.status(400).json({
      valid: false,
      error: "Invalid Aadhaar number format",
    });
  }

  return res.status(200).json({ valid: true });
});

export default router;
