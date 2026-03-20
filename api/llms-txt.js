export default async function handler(req, res) {
  try {
    const response = await fetch("https://cdn.aisitemap.ai/uprock-llms-config-vercel-app/llms.txt");
    if (!response.ok) {
      return res.status(502).send("Failed to fetch llms.txt");
    }
    const content = await response.text();
    
    // إضافة كود التحقق الخاص بك في نهاية الملف لكي يقرأه UpRock
    const finalContent = content + "\n\n";
    
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(finalContent);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
