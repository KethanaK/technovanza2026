/**
 * TECHNOVANZA 2026 - Refined Digital Ecosystem Canvas
 * Department of Computer Science and Applications
 *
 * Clean, sophisticated, non-cluttered futuristic background:
 * - Controlled particle count for optimal elegance and readability
 * - Delicate glowing network connections
 * - Rare subtle light streaks and pulsing server hubs
 * - Subtle floating tech glyphs
 * - Smooth mouse physics and responsive screen resizing
 */

(function () {
  'use strict';

  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) return;

  const CONFIG = {
    bgGradCenter: '#090e24',
    bgGradMid: '#050816',
    bgGradEdge: '#03040a',
    desktopParticleCount: 55,
    mobileParticleCount: 24,
    desktopGlyphCount: 6,
    mobileGlyphCount: 3,

    connectionDistance: 135,
    mouseRadius: 140,
    mouseTetherDist: 150,

    cyanNeon: '#00f0ff',
    purpleNeon: '#b026ff',
    greenNeon: '#00ff9d',
    lineCyanRgb: '0, 240, 255',
    linePurpleRgb: '176, 38, 255',

    symbols: ['</>', '{ }', '[ ]', '<>', '01', '10', 'AI', '#', '=>']
  };

  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrameId = null;
  let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const mouse = {
    x: null,
    y: null,
    isHovering: false,
    radius: CONFIG.mouseRadius
  };

  let particles = [];
  let glyphs = [];
  let lightStreaks = [];
  let packets = [];
  let energyWaves = [];

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  function handleResize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = document.documentElement.clientWidth || window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);

    initEntities();
  }

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = initial ? randomBetween(0, width) : (Math.random() > 0.5 ? -10 : width + 10);
      this.y = initial ? randomBetween(0, height) : randomBetween(0, height);
      this.vx = randomBetween(-0.35, 0.35);
      this.vy = randomBetween(-0.3, 0.3);
      if (Math.abs(this.vx) < 0.08) this.vx = this.vx < 0 ? -0.15 : 0.15;
      if (Math.abs(this.vy) < 0.08) this.vy = this.vy < 0 ? -0.15 : 0.15;

      this.baseRadius = randomBetween(1.2, 2.2);
      this.radius = this.baseRadius;
      this.pulsePhase = randomBetween(0, Math.PI * 2);
      this.pulseSpeed = randomBetween(0.02, 0.035);

      const typeRand = Math.random();
      this.type = typeRand > 0.78 ? 1 : (typeRand > 0.65 ? 2 : 0);
      this.alpha = randomBetween(0.35, 0.75);

      this.isHub = Math.random() < 0.06;
      if (this.isHub) {
        this.baseRadius = randomBetween(3.0, 4.2);
        this.radius = this.baseRadius;
        this.ringRotation = randomBetween(0, Math.PI * 2);
      }
    }

    update() {
      if (!isReducedMotion) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -15) this.x = width + 15;
        if (this.x > width + 15) this.x = -15;
        if (this.y < -15) this.y = height + 15;
        if (this.y > height + 15) this.y = -15;

        this.pulsePhase += this.pulseSpeed;
        this.radius = this.baseRadius + Math.sin(this.pulsePhase) * (this.isHub ? 1.0 : 0.4);

        if (this.isHub) {
          this.ringRotation += 0.015;
        }

        if (mouse.isHovering && mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.2;
            this.x -= (dx / dist) * force;
            this.y -= (dy / dist) * force;
          }
        }
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0.6, this.radius), 0, Math.PI * 2);

      let color = CONFIG.cyanNeon;
      if (this.type === 1) color = CONFIG.purpleNeon;
      if (this.type === 2) color = CONFIG.greenNeon;

      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = this.isHub ? 10 : 4;
      ctx.fill();

      if (this.isHub) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.ringRotation);

        ctx.beginPath();
        const r1 = this.radius * 2.2;
        ctx.arc(0, 0, r1, 0, Math.PI * 1.5);
        ctx.strokeStyle = `rgba(${this.type === 1 ? CONFIG.linePurpleRgb : CONFIG.lineCyanRgb}, 0.3)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      }

      ctx.restore();
    }
  }

  class LightStreak {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = randomBetween(-50, width * 0.7);
      this.y = randomBetween(-50, height * 0.5);
      this.length = randomBetween(80, 160);
      this.speed = randomBetween(4, 7);
      this.angle = Math.PI / 4 + randomBetween(-0.1, 0.1);
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.alpha = randomBetween(0.4, 0.75);
      this.color = Math.random() > 0.5 ? CONFIG.cyanNeon : CONFIG.purpleNeon;
      this.isDead = false;
    }

    update() {
      if (!isReducedMotion) {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.008;

        if (this.alpha <= 0 || this.x > width + 200 || this.y > height + 200) {
          this.isDead = true;
        }
      }
    }

    draw() {
      if (this.alpha <= 0) return;
      ctx.save();
      const tailX = this.x - Math.cos(this.angle) * this.length;
      const tailY = this.y - Math.sin(this.angle) * this.length;

      const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
      grad.addColorStop(0, 'rgba(0, 240, 255, 0)');
      grad.addColorStop(1, this.color === CONFIG.cyanNeon ? `rgba(0, 240, 255, ${this.alpha})` : `rgba(176, 38, 255, ${this.alpha})`);

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();

      ctx.restore();
    }
  }

  class FloatingGlyph {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = initial ? randomBetween(20, width - 20) : randomBetween(0, width);
      this.y = initial ? randomBetween(20, height - 20) : (height + 25);
      this.text = CONFIG.symbols[Math.floor(Math.random() * CONFIG.symbols.length)];
      this.vy = -randomBetween(0.18, 0.35);
      this.vx = randomBetween(-0.1, 0.1);
      this.fontSize = Math.floor(randomBetween(11, 13));
      this.alpha = randomBetween(0.18, 0.38);
      this.phase = randomBetween(0, Math.PI * 2);
      this.color = Math.random() > 0.5 ? CONFIG.cyanNeon : CONFIG.purpleNeon;
    }

    update() {
      if (!isReducedMotion) {
        this.y += this.vy;
        this.x += this.vx;
        this.phase += 0.015;
        this.currentAlpha = this.alpha + Math.sin(this.phase) * 0.08;

        if (this.y < -30) {
          this.reset(false);
        }
      }
    }

    draw() {
      ctx.save();
      ctx.font = `500 ${this.fontSize}px 'Space Grotesk', monospace`;
      const alpha = Math.max(0.08, Math.min(0.6, this.currentAlpha || this.alpha));
      ctx.fillStyle = this.color === CONFIG.cyanNeon ? `rgba(0, 240, 255, ${alpha})` : `rgba(176, 38, 255, ${alpha})`;
      ctx.fillText(this.text, this.x, this.y);
      ctx.restore();
    }
  }

  class DataPacket {
    constructor(p1, p2) {
      this.p1 = p1;
      this.p2 = p2;
      this.progress = 0;
      this.speed = randomBetween(0.012, 0.025);
      this.color = Math.random() > 0.4 ? CONFIG.cyanNeon : CONFIG.greenNeon;
      this.isDead = false;
    }

    update() {
      this.progress += this.speed;
      if (this.progress >= 1) {
        this.isDead = true;
      }
    }

    draw() {
      const curX = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
      const curY = this.p1.y + (this.p2.y - this.p1.y) * this.progress;

      ctx.save();
      ctx.beginPath();
      ctx.arc(curX, curY, 2.0, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    }
  }

  class EnergyWave {
    constructor(x, y) {
      this.x = x !== undefined ? x : randomBetween(width * 0.2, width * 0.8);
      this.y = y !== undefined ? y : randomBetween(height * 0.2, height * 0.8);
      this.radius = 4;
      this.maxRadius = randomBetween(120, 200);
      this.alpha = 0.25;
      this.speed = randomBetween(0.5, 0.9);
      this.isDead = false;
    }

    update() {
      this.radius += this.speed;
      this.alpha = (1 - this.radius / this.maxRadius) * 0.25;
      if (this.radius >= this.maxRadius) {
        this.isDead = true;
      }
    }

    draw() {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 240, 255, ${this.alpha})`;
      ctx.lineWidth = 1.0;
      ctx.stroke();
      ctx.restore();
    }
  }

  function initEntities() {
    const isMobile = width < 768;
    const pCount = isMobile ? CONFIG.mobileParticleCount : CONFIG.desktopParticleCount;
    const gCount = isMobile ? CONFIG.mobileGlyphCount : CONFIG.desktopGlyphCount;

    particles = [];
    for (let i = 0; i < pCount; i++) {
      particles.push(new Particle());
    }

    glyphs = [];
    for (let i = 0; i < gCount; i++) {
      glyphs.push(new FloatingGlyph());
    }

    lightStreaks = [];
    packets = [];
    energyWaves = [];
  }

  function drawBackground() {
    const bgGrad = ctx.createRadialGradient(
      width * 0.5, height * 0.35, 60,
      width * 0.5, height * 0.5, Math.max(width, height) * 0.85
    );
    bgGrad.addColorStop(0, CONFIG.bgGradCenter);
    bgGrad.addColorStop(0.5, CONFIG.bgGradMid);
    bgGrad.addColorStop(1, CONFIG.bgGradEdge);

    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

  }

  function drawCursorAura() {
    if (!mouse.isHovering || mouse.x === null) return;

    ctx.save();
    const auraGrad = ctx.createRadialGradient(
      mouse.x, mouse.y, 0,
      mouse.x, mouse.y, mouse.radius
    );
    auraGrad.addColorStop(0, 'rgba(0, 240, 255, 0.14)');
    auraGrad.addColorStop(0.5, 'rgba(176, 38, 255, 0.04)');
    auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = auraGrad;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawNetworkLines() {
    const connDist = CONFIG.connectionDistance;
    const len = particles.length;

    for (let i = 0; i < len; i++) {
      const p1 = particles[i];

      for (let j = i + 1; j < len; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connDist) {
          const alpha = (1 - dist / connDist) * 0.28;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          const colorRgb = (p1.type === 1 || p2.type === 1) ? CONFIG.linePurpleRgb : CONFIG.lineCyanRgb;
          ctx.strokeStyle = `rgba(${colorRgb}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          if (packets.length < 8 && Math.random() < 0.0014) {
            packets.push(new DataPacket(p1, p2));
          }
        }
      }

      if (mouse.isHovering && mouse.x !== null) {
        const mdx = p1.x - mouse.x;
        const mdy = p1.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < CONFIG.mouseTetherDist) {
          const mAlpha = (1 - mdist / CONFIG.mouseTetherDist) * 0.38;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${mAlpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    }
  }

  function render() {
    drawBackground();
    drawCursorAura();

    if (lightStreaks.length < 1 && Math.random() < 0.006) {
      lightStreaks.push(new LightStreak());
    }
    for (let i = lightStreaks.length - 1; i >= 0; i--) {
      lightStreaks[i].update();
      lightStreaks[i].draw();
      if (lightStreaks[i].isDead) {
        lightStreaks.splice(i, 1);
      }
    }

    for (let i = energyWaves.length - 1; i >= 0; i--) {
      energyWaves[i].update();
      energyWaves[i].draw();
      if (energyWaves[i].isDead) {
        energyWaves.splice(i, 1);
      }
    }

    for (let i = 0; i < glyphs.length; i++) {
      glyphs[i].update();
      glyphs[i].draw();
    }

    drawNetworkLines();

    for (let i = packets.length - 1; i >= 0; i--) {
      packets[i].update();
      packets[i].draw();
      if (packets[i].isDead) {
        packets.splice(i, 1);
      }
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    animationFrameId = requestAnimationFrame(render);
  }

  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isHovering = true;
  }, { passive: true });

  window.addEventListener('mouseleave', function () {
    mouse.isHovering = false;
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('click', function (e) {
    if (energyWaves.length < 3) {
      energyWaves.push(new EnergyWave(e.clientX, e.clientY));
    }
  });

  window.addEventListener('touchmove', function (e) {
    if (e.touches && e.touches[0]) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      mouse.isHovering = true;
    }
  }, { passive: true });

  window.addEventListener('touchend', function () {
    mouse.isHovering = false;
    mouse.x = null;
    mouse.y = null;
  });

  let resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 100);
  });

  window.addEventListener('orientationchange', function () {
    setTimeout(handleResize, 150);
  });

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  motionQuery.addEventListener('change', function (e) {
    isReducedMotion = e.matches;
  });

  handleResize();
  render();

  window.TechnovanzaCanvas = {
    triggerWave: function (x, y) {
      energyWaves.push(new EnergyWave(x || width / 2, y || height / 2));
    }
  };
})();
