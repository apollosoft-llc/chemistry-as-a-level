import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy Google GenAI Client
let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("Warning: GEMINI_API_KEY is not set. AI features will operate in fallback mode.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "dummy-key",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Explain Concept in Mongolian & English
app.post("/api/ai/explain", async (req, res) => {
  try {
    const { topic, chapterNumber, chapterTitle, language = "mn", difficulty = "core" } = req.body;
    const ai = getAI();

    const systemPrompt = `You are an elite Cambridge International AS & A Level Chemistry (9701) teacher and examiner.
Your objective is to help high school students rapidly understand complex chemistry concepts with exceptional clarity, precision, and Cambridge-aligned rigor.
Language of response: ${language === "mn" ? "Mongolian (with essential English scientific terms in parentheses)" : "English"}.

Structure the response clearly using Markdown:
1. 🎯 **Гол санаа / Core Concept (Summary in 2-3 sentences)**
2. 🔬 **Дэлгэрэнгүй тайлбар & Зүй тогтол / Detailed Mechanism & Principles** (Explain why things happen at atomic/electronic/thermodynamic level).
3. 📐 **Гол тэгшитгэл ба томьёо / Key Equations & Formulae** (formatted neatly with state symbols if applicable).
4. 💡 **Энгийн төсөөлөл / Intuitive Analogy / Real-world context** (Makes it unforgettable).
5. ⚠️ **Шалгалтад гаргадаг нийтлэг алдаа / Common Exam Pitfalls & Examiner Tips** (What Cambridge mark schemes strictly penalise).
6. 📝 **Жишээ бодлого & Бодолт / Worked Example with Mark Scheme Breakdown**.`;

    const userPrompt = `Topic: "${topic}" from Chapter ${chapterNumber}: "${chapterTitle}". Difficulty focus: ${difficulty}.
Please provide a high-yield, structured, and easy-to-digest guide so the student masters this topic in 5 minutes.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.3,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error generating explanation:", error);
    res.status(500).json({ error: error.message || "Failed to generate explanation" });
  }
});

// Step-by-Step Chemistry Problem Solver
app.post("/api/ai/solve", async (req, res) => {
  try {
    const { problemText, problemType, language = "mn" } = req.body;
    const ai = getAI();

    const systemPrompt = `You are a Cambridge 9701 Chemistry Chief Examiner and Master Tutor.
Solve the following Chemistry problem step-by-step according to official Cambridge mark schemes (showing clear working, formula substitutions, units, state symbols, and significant figures).
Response Language: ${language === "mn" ? "Mongolian (with English terms/working)" : "English"}.

Output Format:
- **Асуултын дүн шинжилгээ / Question Analysis**: Given values, target quantity, required formulas.
- **Алхам алхмаар бодолт / Step-by-Step Working**: Show intermediate units, canceling, calculations.
- **Эцсийн хариу / Final Answer**: With appropriate significant figures and units (e.g., kJ mol⁻¹, mol dm⁻³, s⁻¹).
- **Cambridge Онооны хуваарилалт / Mark Scheme Breakdown**: [1] mark for formula, [1] mark for working, [1] mark for answer with units.
- **Анхаарах зүйл / Key Takeaway / Examiner Tip**: Critical pitfalls to avoid.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `Problem (${problemType || "General"}):\n${problemText}`,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error solving problem:", error);
    res.status(500).json({ error: error.message || "Failed to solve problem" });
  }
});

// Interactive AI Tutor Chat
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { messages, currentChapter, language = "mn" } = req.body;
    const ai = getAI();

    const formattedContents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const systemInstruction = `You are "ChemBot 9701", an inspiring, encouraging, and razor-sharp AI tutor specialized in Cambridge International AS & A Level Chemistry (Syllabus 9701).
Current Context: Chapter "${currentChapter || "General Chemistry"}".
Target Audience: Mongolian high school students preparing for Cambridge AS/A Level exams.
Language: Respond in ${language === "mn" ? "Mongolian with standard English chemical names and formulas" : "English"}.
Traits:
- Clear, supportive, pedagogically sound, uses emojis sparingly for emphasis.
- Uses LaTeX-friendly formatting or clean subscripts/superscripts for formulas (e.g. H₂SO₄, [Cu(NH₃)₄(H₂O)₂]²⁺, ΔH⦵, Kc, Kp, E°).
- Always provides the scientific reason (electron configuration, effective nuclear charge, orbital overlap, Gibbs energy, entropy, etc.).
- Keeps explanations concise unless asked for deep dives.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.4,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error in AI chat:", error);
    res.status(500).json({ error: error.message || "Failed to process chat message" });
  }
});

// Custom Exam Question Generator
app.post("/api/ai/generate-question", async (req, res) => {
  try {
    const { chapterNumber, chapterTitle, paperType = "Paper 1 (MCQ)", difficulty = "Medium", language = "mn" } = req.body;
    const ai = getAI();

    const prompt = `Generate a realistic Cambridge 9701 exam question for Chapter ${chapterNumber}: ${chapterTitle}.
Paper Type: ${paperType}
Difficulty: ${difficulty}
Language of explanation: ${language === "mn" ? "Mongolian and English" : "English"}

Return the question in JSON format matching this schema:
{
  "question": "The question prompt text...",
  "options": ["A: ...", "B: ...", "C: ...", "D: ..."] (if MCQ, else empty array),
  "correctAnswer": "A" or text,
  "marks": 2,
  "markScheme": ["Point 1", "Point 2"],
  "explanationMn": "Mongolian explanation...",
  "explanationEn": "English explanation...",
  "examinerTip": "Key tip for exams..."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.5,
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Error generating question:", error);
    res.status(500).json({ error: error.message || "Failed to generate question" });
  }
});

// Vite Middleware for development / Static files for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Cambridge Chemistry 9701 Server running on http://localhost:${PORT}`);
  });
}

startServer();
