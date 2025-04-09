import { Router } from "express";
import { callGrok } from "../services/grok.services.js";

const generativeRouter = new Router();

generativeRouter.post("/generate", async (req, res) => {
    const { subject, gradelevel, topic } = req.body;
    console.log({ subject, gradelevel, topic });
  
    const prompt = `Create a Lesson Plan for these entities: ${topic},  ${gradelevel}, ${subject} || and generate the response in JSON:
    {
        topic, 
        objective, 
        target_audience, 
        duration, 
        introductions: {
            definition
        }, 
        methods, 
        examples, 
        quiz: {
            give qustions & answer compulsary, 
        }, 
        application
    }
    Give only a clean JSON response in this format, without markdown or commentary.`;
  
    const rawResponse = await callGrok(prompt);
  
    const cleaned = rawResponse
      .replace(/<think>[\s\S]*?<\/think>/gi, "") 
      .replace(/```json|```/g, "")              
      .trim();
  
    try {
      const json = JSON.parse(cleaned);
      res.json(json);
    } catch (err) {
      console.error("Failed to parse JSON:", err);
      res.status(400).json({ error: "Invalid JSON returned from Grok", raw: rawResponse });
    }
  });

export default generativeRouter;