# ⚛️ React Component Library

A lightweight, reusable component library built from scratch with **React** and **Vite** — featuring Buttons, Cards, and Modals with multiple variants and prop-driven customisation.

> 🎓 Built as a demo assignment for **CodeAlpha Internship** by **Hiba Shaukat**

---

## 🧩 Components

| Component | Variants | Key Props |
|-----------|----------|-----------|
| **Button** | primary, secondary, danger, success, ghost | `variant`, `size`, `loading`, `disabled`, `icon` |
| **Card**   | default, outlined, filled, flat | `image`, `badge`, `title`, `description`, `footer` |
| **Modal**  | sm, md, lg | `isOpen`, `onClose`, `title`, `size`, `footer` |

---

## 🚀 Installation

```bash
git clone https://github.com/YOUR_USERNAME/react-component-library.git
cd react-component-library
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📖 Usage

```jsx
import { Button, Card, Modal } from './components';
```

### Button
```jsx
<Button variant="primary" size="md" onClick={() => alert('Hi!')}>Click Me</Button>
<Button variant="danger" loading>Deleting...</Button>
<Button disabled>Not Available</Button>
```
**Props:** `variant` · `size` · `loading` · `disabled` · `icon` · `onClick`

---

### Card
```jsx
<Card
  image="https://example.com/photo.jpg"
  badge="New" badgeColor="green"
  subtitle="Category"
  title="Card Title"
  description="Short description here."
  footer={<Button size="sm">Read More</Button>}
/>
```
**Props:** `variant` · `image` · `badge` · `badgeColor` · `title` · `description` · `footer` · `hoverable`

---

### Modal
```jsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open</Button>

<Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  size="md"
  footer={
    <>
      <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
    </>
  }
>
  <p>Modal content goes here.</p>
</Modal>
```
**Props:** `isOpen` · `onClose` · `title` · `size` (sm/md/lg) · `footer` · `showCloseButton`

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Button/   (Button.jsx, Button.css, index.js)
│   ├── Card/     (Card.jsx, Card.css, index.js)
│   ├── Modal/    (Modal.jsx, Modal.css, index.js)
│   └── index.js
├── App.jsx       ← live demo/showcase
└── App.css
```

---

## 🛠️ Tech Stack

- React 18 · Vite · CSS3 (no UI framework dependencies)

---

## 👩‍💻 Author

**Hiba Shaukat** — Web Engineering Student · CodeAlpha Intern
