# Home Improvement Planner

A static GitHub Pages-ready home improvement planner for rooms, projects, budgets, source photos, reference images, and AI rendering ideas.

## Project Structure

- `index.html` is the page shell.
- `src/data/projects.js` is the main place to edit rooms, project cards, budgets, timeline items, materials, and rendering prompts.
- `src/css/styles.css` contains the visual design.
- `src/js/script.js` renders the data into the page.
- `assets/site/` stores page-level images such as the lot diagram.
- `assets/uploads/` is for real photos you take of rooms, walls, cabinets, fixtures, and exterior areas.
- `assets/renderings/` is for generated design concepts and final selected options.
- `assets/references/` is for research images, property screenshots, inspiration, and external visual references.
- `docs/` is for quotes, measurements, notes, permits, receipts, and planning documents.

## Rendering Workflow

1. Add current photos to `assets/uploads/`.
2. Add or update a rendering idea in `src/data/projects.js`.
3. Generate options from the real photo and saved prompt.
4. Save useful outputs into `assets/renderings/`.
5. Keep the selected direction connected to the room or project card.

## View Locally

Open `index.html` in a browser.

## Publish On GitHub Pages

1. Create a new GitHub repository.
2. Add these files to the repository root.
3. In GitHub, go to `Settings` > `Pages`.
4. Set the source to your default branch and the root folder.
5. Save, then use the GitHub Pages URL once it finishes deploying.
