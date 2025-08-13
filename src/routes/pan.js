import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// Load the scraped form structure
const formStructure = JSON.parse(
  fs.readFileSync("./udyam_form_structure.json", "utf8")
);

// Find the PAN field name dynamically
const panField =
  formStructure?.step2?.find((field) =>
    field.name.toLowerCase().includes("pan")
  )?.name || "pan";

router.post("/", (req, res) => {
  const pan = req.body[panField];

  // PAN validation: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)
  const isValid = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/.test(pan);

  if (!isValid) {
    return res.status(400).json({
      valid: false,
      error: "Invalid PAN format (e.g., ABCDE1234F)",
    });
  }

  return res.status(200).json({ valid: true });
});

export default router;
