🧮 LeetMetric

LeetMetric is a web-based LeetCode stats visualizer that lets users easily track their coding progress by simply entering their LeetCode username. It fetches real-time data from the LeetCode GraphQL API and displays detailed problem-solving statistics using a clean, interactive UI.

🚀 Features

🔍 Search by Username — Enter your LeetCode username to fetch personalized stats.

📊 Real-time Progress Visualization — Displays the number of solved problems categorized by Easy, Medium, and Hard difficulty levels.

🧩 Dynamic Progress Circles — Visual progress indicators that fill according to your completion percentage.

📈 Submission Stats Cards — Shows total submissions across all difficulty levels.

💡 Responsive UI — Modern, minimal interface designed with pure HTML, CSS, and JavaScript.

🧠 How It Works

The user enters a LeetCode username.

JavaScript validates the input and sends a request to the LeetCode GraphQL API via a proxy to avoid CORS issues.

The app retrieves:

Total questions (Easy, Medium, Hard)

User’s accepted and total submission stats

Data is dynamically displayed as circular progress charts and detailed submission cards.

🧰 Tech Stack

Frontend: HTML5, CSS3, JavaScript (Vanilla)

API: LeetCode GraphQL API

Proxy: CORS Anywhere

No frameworks or external libraries required

⚙️ Installation & Usage

Clone this repository:

git clone https://github.com/your-username/LeetMetric.git
cd LeetMetric


Open index.html in your browser.

Enter your LeetCode username and click Search.

💡 Tip: If CORS issues occur, ensure the proxy (https://cors-anywhere.herokuapp.com/) is enabled or replace it with your own.

📸 Preview

📂 Project Structure
LeetMetric/
│
├── index.html      # Main HTML structure
├── style.css       # Styling for UI and progress visuals
└── index.js        # Core logic and API interaction
