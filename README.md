<div align="center" id="readmekit">
  <img src="./client/logos/readme-kit-logo-name-c.png" alt="Readme Kit Logo" width="55%" />
  <h3>Readme Kit</h3>
  <p><i>Search, preview and copy <code>shields.io</code> badges for your README in seconds.</i></p>

  <p>
    <a href="#features">Features</a> ·
    <a href="#quick-start">Quick Start</a> ·
    <a href="#badge-categories">Badge Categories</a> ·
    <a href="#json-schema">JSON Schema</a> ·
    <a href="#roadmap">Roadmap</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-3178C6?style=for-the-badge&logo=javascript&logoColor=white" />
    <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" />
     <img src="https://img.shields.io/badge/Badges-449%2B-8A2BE2?style=for-the-badge&logo=shieldsdotio&logoColor=white" />
  </p>
</div>

---

Readme Kit is a small web app that helps you build a beautiful README quickly.

> 🌐 **Live right now – you can use it here:** [Readme Kit](https://readme-kit.vercel.app/)

Instead of hunting for `shields.io` URLs and tweaking them by hand, you can:

- search for a language / framework / tool,
- preview multiple styles live,
- and copy the ready-to-paste HTML/Markdown snippet with one click.

---

<a id="features"></a>
## ✨ Features

- 🔍 **Smart search**  
  Search badges by name, technology, or keyword (e.g. `react`, `docker`, `cuda`).

- 🎨 **Multiple styles per badge**  
  Each badge comes with several common styles like:
  `for-the-badge`, `flat`, `flat-square`, `plastic`, `social`, etc.

- 👀 **Live preview**  
  Every style is rendered in a preview grid so you can visually pick what fits your README.

- 📋 **One-click copy**  
  Click any style to copy the underlying HTML/Markdown snippet straight to your clipboard.

- 🧩 **Config-driven data**  
  All badges are defined in JSON files. Adding new tech badges is as simple as editing a JSON entry.

- ⚡ **Modern stack**  
  Built with React + Vite and a simple, dark UI focused on speed and ergonomics.

---

<a id="quick-start"></a>
## 🚀 Quick Start

> Replace `USER` / `REPO` with your GitHub username & repository if you want.

```bash
# Clone the repo
git clone https://github.com/USER/readme-kit.git
cd readme-kit

# Install dependencies
npm install
# or
pnpm install

```
Then open the printed URL (usually `http://localhost:5173`) in your browser.

# Start dev server
npm run dev

## 🧑‍💻 Usage

1. Open the app in your browser.
2. Use the **search bar** to look for:
   - languages (`python`, `go`, `c++`, `rust`…)
   - frameworks (`react`, `nestjs`, `kubernetes`…)
   - tools (`docker`, `github actions`, `grafana`…)
3. Pick a **category** if you want (e.g. *Programming Languages*, *DevOps*, *Databases*).
4. Hover over any badge style to see the **raw code snippet**.
5. Click the **copy** button to copy the HTML/Markdown snippet to your clipboard.
6. Paste it directly into your GitHub README, documentation, or website.

The app is completely frontend-only: no external API keys or backend setup required.

<a id="badge-categories"></a>

## 🎨 Badge Categories

Readme Kit organizes badges into logical categories so you don't drown in one giant list.

Some of the main categories:

- Programming Languages  
- Frontend Frameworks  
- Backend Frameworks  
- Machine Learning / Data  
- LLM Models  
- Cloud & Container / DevOps  
- Databases  
- Testing  
- Monitoring & Analytics  
- Security  
- Mobile Development  
- Game Engines  
- Package Managers  
- API Tools  
- Software Distribution  
- Project Status & Misc  

To keep this README clean, only a few small examples are shown below.  
The full list lives in the app and in the JSON config files.

### Programming Languages (examples)

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white"/>
</div>

### Frontend Frameworks (examples)

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=FFFFFF"/>
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"/>
</div>

### DevOps & Cloud (examples)

<div align="center">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/>
</div>

### Badge Styles (for a single tech)

To illustrate how Readme Kit handles multiple styles for the **same** badge,
here is `C++` rendered in the five common `shields.io` styles:

<div align="center">
  <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white"/>
  <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white"/>
  <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white"/>
  <img src="https://img.shields.io/badge/C++-00599C?style=plastic&logo=cplusplus&logoColor=white"/>
  <img src="https://img.shields.io/badge/C++-00599C?style=social&logo=cplusplus"/>
</div>


<!--
<details>
  <summary><b>Show all raw badge examples (very long)</b></summary>
</details>
-->
<a id="json-schema"></a>

## 🧱 JSON Schema

Badges are defined using a simple JSON structure.  
A typical entry looks like this:

```json
{
  "name": "C++",
  "searchTerms": ["c++", "cpp", "cplusplus"],
  "styles": [
    {
      "name": "for-the-badge",
      "code": "<img src=\"https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white\"/>"
    },
    {
      "name": "flat",
      "code": "<img src=\"https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white\"/>"
    },
    {
      "name": "flat-square",
      "code": "<img src=\"https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white\"/>"
    },
    {
      "name": "plastic",
      "code": "<img src=\"https://img.shields.io/badge/C++-00599C?style=plastic&logo=cplusplus&logoColor=white\"/>"
    },
    {
      "name": "social",
      "code": "<img src=\"https://img.shields.io/badge/C++-00599C?style=social&logo=cplusplus\"/>"
    }
  ]
}

```

### Adding a new badge

1. Find the relevant JSON file for the category  
   (e.g. `languages.json`, `frontend.json`, `devops.json`, …).

2. Add a new object with:
   - `name`: Display name for the tech/tool.  
   - `searchTerms`: Extra keywords that should match in search.  
   - `styles`: An array of `{ name, code }` objects, one per style.

3. The `code` field should contain a ready-to-paste HTML snippet (or Markdown)  
   that uses `https://img.shields.io/...`.

4. Save the file and restart the dev server if necessary.

5. Your badge should now appear in the search UI.

---

## 🧰 Tech Stack

- **Frontend:** React, Vite, JavaScript  
- **Styling:** Tailwind CSS / utility-first classes  
- **Icons:** lucide-react  
- **Data:** Static JSON badge definitions  
- **Tooling:** ESLint, Prettier (optional, depending on your setup)

<a id="roadmap"></a>

## 🗺 Roadmap

Planned / nice-to-have features:

- [ ] Favorite badges & collections  
- [ ] Export badge sets as a Markdown section  
- [ ] Dark / light theme previews for badges  
- [ ] Toggle between HTML / Markdown output  
- [ ] In-app editor for quickly building custom `shields.io` URLs  

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/awesome-thing`.
3. Make your changes and add tests if needed.
4. Run the app and check everything still works.
5. Open a PR with a clear description of what you changed.

You can also open an issue if you:

- want a new badge/category added,  
- find a broken `shields.io` URL,  
- or have an idea for improving the UI.

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [`LICENSE`](./LICENSE) file for more details.

