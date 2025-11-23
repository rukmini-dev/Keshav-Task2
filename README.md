📁 Project Structure
C:.
│   gulpfile.js
│   package.json
│
└───src
    ├───assets
    │   └─── (images, css, js, etc.)
    └───templates
        │   index.njk
        │   about.njk
        │   contact.njk


After building, the output will be generated in:

dist/
    index.html
    about.html
    contact.html
    assets/

🛠️ Setup Instructions
1️⃣ Install Dependencies

Make sure you have Node.js installed.

Then run:

npm install

▶️ Running the Project
Start development mode (auto-build + watch):
gulp

Build only once (no watch):
gulp build

🌐 Open Your Website

After running the build, open:

dist/index.html


Double-click the file OR run in terminal:

start dist/index.html


(If you're using PowerShell.)

📦 What This Gulp Setup Does

✔ Compiles Nunjucks (.njk) → HTML
✔ Copies all assets to /dist/assets
✔ Watches files for changes
✔ Auto-refresh friendly workflow

📜 License

This project is free to use. Customize it as you like!
