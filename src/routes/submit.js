import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { aadhaarNumber, panNumber, businessName, businessType } = req.body
    if (!aadhaarNumber) {
      return res.status(400).json({ error: "aadhaarNumber is required" });
    }
    if (!panNumber) {
      return res.status(400).json({ error: "panNumber is required" });
    }
    if (!businessName) {
      return res.status(400).json({ error: "businessName is required" });
    }
    if (!businessType) {
      return res.status(400).json({ error: "businessType is required" });
    }

    //check if the adhaar aready exists
    const existingAdhaar = await prisma.registration.findUnique({
      where: {
        aadhaarNumber,
      }
    })
    if (existingAdhaar) {
      return res.status(400).json({ error: "Aadhaar number already exists" });
    } 
    //check if the pan aready exists
    const existingPan = await prisma.registration.findUnique({
      where: {
        panNumber,
      }
    })
    if (existingPan) {
      return res.status(402).json({ error: "Pan number already exists" });
    } 

    const newRegistration = await prisma.registration.create({
      data: {
        aadhaarNumber,
        panNumber,
        businessName,
        businessType
      }
    })
    
    res.status(201).json(newRegistration)
  } catch (error) {
    console.error('Error saving registration:', error)
    res.status(500).json({ error: 'Failed to save registration' })
  }
})

export default router