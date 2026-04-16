import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, phone, type, msg } = req.body;

  const text = `🚚 Новая заявка:
Имя: ${name}
Телефон: ${phone}
Тип: ${type}
Груз: ${msg}`;

  await fetch("https://api.telegram.org/bot8633180088:AAHnQLObBs5pCQfHEOu2m9cKJV-24lIVVUk/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: "1118097651",
      text
    })
  });

  res.json({ ok: true });
});

app.listen(3000, () => console.log("Server started"));
