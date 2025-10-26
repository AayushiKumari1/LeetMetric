# LeetMetric

**LeetMetric** is a web-based LeetCode stats visualizer that lets users easily track their coding progress by simply entering their LeetCode username.  
It fetches real-time data from the LeetCode GraphQL API and displays detailed problem-solving statistics using a clean, interactive UI.

---

## Features

-  **Search by Username** — Enter your LeetCode username to fetch personalized stats.  
- **Real-time Progress Visualization** — Displays the number of solved problems categorized by *Easy*, *Medium*, and *Hard* difficulty levels.  
-  **Dynamic Progress Circles** — Visual indicators that fill according to your completion percentage.  
-  **Submission Stats Cards** — Shows total submissions across all difficulty levels.  
-  **Responsive UI** — Modern, minimal interface designed with pure HTML, CSS, and JavaScript.

---

## How It Works

1. The user enters their **LeetCode username**.  
2. JavaScript validates the input and sends a request to the **LeetCode GraphQL API** via a **proxy** to avoid CORS issues.  
3. The app retrieves:  
   - Total questions (Easy, Medium, Hard)  
   - User’s accepted and total submission stats  
4. The data is dynamically displayed as:  
   - Circular progress charts  
   - Detailed submission cards  

---

##  Tech Stack

Technology 
Frontend - HTML5, CSS3, JavaScript (Vanilla) 
API - LeetCode GraphQL API 
Proxy - CORS Anywhere 

---

