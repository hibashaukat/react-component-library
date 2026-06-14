import { useState } from 'react';
import { Button, Card, Modal } from './components';
import './App.css';

export default function App() {
  const [modal, setModal] = useState({ open: false, type: '' });

  const openModal = (type) => setModal({ open: true, type });
  const closeModal = () => setModal({ open: false, type: '' });

  return (
    <div className="app">

      {/* Header */}
      <header className="app-header">
        <div className="app-header__inner">
          <span className="app-header__logo">⚛</span>
          <div>
            <h1 className="app-header__title">React Component Library</h1>
            <p className="app-header__sub">Buttons · Cards · Modals — by Hiba Shaukat</p>
          </div>
        </div>
      </header>

      <main className="app-main">

        {/* ─── BUTTONS ─── */}
        <section className="section">
          <div className="section__label">01</div>
          <h2 className="section__title">Buttons</h2>
          <p className="section__desc">Five variants × three sizes. Supports loading state, disabled state, and icons.</p>

          <div className="demo-block">
            <h4 className="demo-block__heading">Variants</h4>
            <div className="row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div className="demo-block">
            <h4 className="demo-block__heading">Sizes</h4>
            <div className="row row--align-center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div className="demo-block">
            <h4 className="demo-block__heading">States</h4>
            <div className="row">
              <Button disabled>Disabled</Button>
              <Button loading>Loading…</Button>
              <Button variant="primary" icon="🚀">With Icon</Button>
            </div>
          </div>
        </section>

        {/* ─── CARDS ─── */}
        <section className="section">
          <div className="section__label">02</div>
          <h2 className="section__title">Cards</h2>
          <p className="section__desc">Four variants with optional image, badge, subtitle, and footer slots.</p>

          <div className="cards-grid">
            {/* Card 1 — with image */}
            <Card
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
              badge="React"
              badgeColor="purple"
              subtitle="Web Development"
              title="Build Modern UIs"
              description="Learn to create responsive, accessible components with React and modern CSS."
              footer={
                <>
                  <Button size="sm" variant="primary">Read More</Button>
                  <Button size="sm" variant="ghost">Save</Button>
                </>
              }
            />

            {/* Card 2 — outlined */}
            <Card
              variant="outlined"
              badge="New"
              badgeColor="green"
              subtitle="Career"
              title="Land Your First Tech Job"
              description="A practical guide for students transitioning from university to the industry."
              footer={
                <>
                  <Button size="sm" variant="success">Apply Now</Button>
                </>
              }
            />

            {/* Card 3 — filled */}
            <Card
              variant="filled"
              badge="Hot"
              badgeColor="red"
              subtitle="Design"
              title="Figma to React Workflow"
              description="Convert your Figma designs into production-ready React components seamlessly."
              footer={
                <>
                  <Button size="sm" variant="secondary">Explore</Button>
                </>
              }
            />
          </div>
        </section>

        {/* ─── MODALS ─── */}
        <section className="section">
          <div className="section__label">03</div>
          <h2 className="section__title">Modals</h2>
          <p className="section__desc">Three sizes. Closes on overlay click, Escape key, or close button.</p>

          <div className="row">
            <Button variant="primary" onClick={() => openModal('info')}>Open Info Modal</Button>
            <Button variant="danger"  onClick={() => openModal('confirm')}>Open Confirm Modal</Button>
            <Button variant="ghost"   onClick={() => openModal('form')}>Open Form Modal</Button>
          </div>

          {/* Info Modal */}
          <Modal
            isOpen={modal.open && modal.type === 'info'}
            onClose={closeModal}
            title="What is this Library?"
            size="md"
            footer={<Button onClick={closeModal}>Got it!</Button>}
          >
            <p>This is a custom React component library built from scratch — no third-party UI dependencies.</p>
            <p style={{ marginTop: '12px' }}>It includes <strong>Buttons</strong>, <strong>Cards</strong>, and <strong>Modals</strong> with multiple variants and prop-driven customisation.</p>
          </Modal>

          {/* Confirm Modal */}
          <Modal
            isOpen={modal.open && modal.type === 'confirm'}
            onClose={closeModal}
            title="Confirm Action"
            size="sm"
            footer={
              <>
                <Button variant="ghost"  onClick={closeModal}>Cancel</Button>
                <Button variant="danger" onClick={closeModal}>Yes, Delete</Button>
              </>
            }
          >
            <p>Are you sure you want to delete this item? This action cannot be undone.</p>
          </Modal>

          {/* Form Modal */}
          <Modal
            isOpen={modal.open && modal.type === 'form'}
            onClose={closeModal}
            title="Get in Touch"
            size="md"
            footer={
              <>
                <Button variant="ghost"   onClick={closeModal}>Cancel</Button>
                <Button variant="primary" onClick={closeModal}>Send Message</Button>
              </>
            }
          >
            <div className="modal-form">
              <label>Name
                <input type="text" placeholder="Your full name" />
              </label>
              <label>Email
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>Message
                <textarea rows={4} placeholder="Write your message…" />
              </label>
            </div>
          </Modal>
        </section>

      </main>

      <footer className="app-footer">
        Made with ❤️ by <strong>Hiba Shaukat</strong> ·  Internship
      </footer>
    </div>
  );
}
