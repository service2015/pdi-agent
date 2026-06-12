# PDI AI Agent — คู่มือ Deploy บน Vercel

## ขั้นตอนที่ 1 — อัปโหลดขึ้น GitHub

1. ไปที่ github.com → New repository
2. ชื่อ: `pdi-agent` → Private → Create
3. ลากโฟลเดอร์ `pdi-deploy` ทั้งหมดอัปโหลดขึ้น GitHub

## ขั้นตอนที่ 2 — เชื่อม Vercel

1. ไปที่ vercel.com → Sign up ด้วย GitHub
2. กด "Add New Project"
3. เลือก repository `pdi-agent`
4. กด Deploy

## ขั้นตอนที่ 3 — ใส่ API Keys

ใน Vercel Dashboard → Project → Settings → Environment Variables

| Key | Value |
|-----|-------|
| ANTHROPIC_API_KEY | sk-ant-api03-... |
| ELEVENLABS_API_KEY | sk_... |
| BUFFER_ACCESS_TOKEN | 9KDFw... |

## ขั้นตอนที่ 4 — Redeploy

กด Deployments → Redeploy → ได้ URL ใช้งานได้เลย

## โครงสร้างไฟล์
```
pdi-deploy/
├── vercel.json
├── README.md
├── public/
│   └── index.html
└── api/
    ├── claude.js
    ├── voice.js
    ├── buffer.js
    └── buffer-profiles.js
```
