import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Gamepad2, Download, Sparkles, ShieldCheck, Zap, Star, Palette, Linkedin } from 'lucide-react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import GameCard from './components/GameCard.jsx';
import { Button } from '@/components/ui/button';

function App() {
  const games = [
    {
      title: 'Adventure of Sphere',
      image: '/adventure-of-sphere.jpg',
      description: 'The original sphere adventure that started it all with classic gameplay and retro charm.',
      features: ['Classic gameplay', 'Engaging puzzles', 'Retro charm', 'Nostalgic experience'],
      platform: 'Android',
      rating: '4.7',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ROXXONGames.AOS'
    },
    {
      title: 'Adventure of Sphere II',
      image: '/adventure-of-sphere-2.jpg',
      description: 'Roll through challenging puzzles and obstacles in this physics-based adventure sequel.',
      features: ['Physics-based gameplay', 'Creative level design', 'Smooth controls', 'Unlockable skins'],
      platform: 'Android',
      rating: '4.4',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ROXXONGames.AdventureofSphere2'
    },
    {
      title: 'Angry Dragons',
      image: '/angry-dragons.png',
      description: 'Epic dragon battles with addictive gameplay mechanics that keep you coming back for more.',
      features: ['Fast-paced action', 'Multiple dragon types', 'Challenging levels', 'Power-up system'],
      platform: 'Android',
      rating: '4.2',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.roxxongames.angrydragons'
    }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>ROXXON Games - Creating Addictive Mobile Games</title>
        <meta name="description" content="Indie game studio crafting fun, challenging, and engaging mobile gaming experiences. Play Angry Dragons, Adventure of Sphere, and more." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          {/* Hero Section */}
          <section id="home" className="relative min-h-[95vh] overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.11),transparent_28%),linear-gradient(180deg,rgba(11,12,25,0.94),rgba(16,17,32,0.88))]" />
            <div className="absolute left-10 top-24 h-60 w-60 rounded-full bg-primary/15 blur-3xl opacity-80" />
            <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)] pointer-events-none" />

            <div className="relative mx-auto flex min-h-[95vh] max-w-7xl flex-col justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="relative mx-auto max-w-3xl"
              >
                <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-primary shadow-sm shadow-primary/10">
                  <Gamepad2 className="h-4 w-4" />
                  Indie game studio
                </div>

                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                  Crafting Games <span className="neon-text-purple">You Can’t Put Down</span>
                </h1>

                <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  ROXXON Games builds polished mobile titles with fast loops, bold neon style, and playable moments that feel rewarding from the first tap.
                </p>

                <div className="mx-auto flex max-w-fit flex-col items-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    onClick={(e) => scrollToSection(e, '#games')}
                    className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3 text-lg text-primary-foreground shadow-[0_0_40px_rgba(168,85,247,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
                  >
                    Play Our Games 🎮
                    <Sparkles className="ml-2 h-5 w-5" />
                  </Button>
                  <a
                    href="#why"
                    onClick={(e) => scrollToSection(e, '#why')}
                    className="text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-secondary"
                  >
                    Why play our games?
                  </a>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_25px_70px_rgba(168,85,247,0.18)]">
                    <p className="text-xs uppercase tracking-[0.26em] text-primary">FAST UPDATES</p>
                    <p className="mt-3 text-xl font-semibold text-white">Regular improvements</p>
                    <p className="mt-2 text-sm text-muted-foreground">We keep refining gameplay and fixing issues based on feedback.</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_25px_70px_rgba(168,85,247,0.18)]">
                    <p className="text-xs uppercase tracking-[0.26em] text-primary">GAME DESIGN</p>
                    <p className="mt-3 text-xl font-semibold text-white">Simple and engaging</p>
                    <p className="mt-2 text-sm text-muted-foreground">Easy to start, with challenges that keep you playing.</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_25px_70px_rgba(168,85,247,0.18)]">
                    <p className="text-xs uppercase tracking-[0.26em] text-primary">PLAYER FOCUS</p>
                    <p className="mt-3 text-xl font-semibold text-white">Built for fun sessions</p>
                    <p className="mt-2 text-sm text-muted-foreground">Designed for short, enjoyable play anytime.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Games Section */}
          <section id="games" className="py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
              >
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Games</h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Discover our collection of mobile titles built for quick sessions, addictive combos, and replayable progression.
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {games.map((game) => (
                  <GameCard key={game.title} {...game} />
                ))}
              </div>
            </div>
          </section>

          {/* Why Play Section */}
          <section id="why" className="py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="mb-12 text-center"
              >
                <span className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">
                  Why play our games
                </span>
                <h2 className="mt-4 text-4xl font-bold md:text-5xl">Bold gameplay, simple controls, endless replay.</h2>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="group rounded-[2rem] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_25px_80px_rgba(168,85,247,0.15)]">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Easy to learn, hard to master</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Quick controls and deep systems give every player room to improve.
                  </p>
                </div>

                <div className="group rounded-[2rem] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_25px_80px_rgba(168,85,247,0.15)]">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Fast-paced gameplay</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Rapid-fire action and quick sessions keep every round exciting.
                  </p>
                </div>

                <div className="group rounded-[2rem] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_25px_80px_rgba(168,85,247,0.15)]">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Skill-based challenges</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Every level rewards precision, timing, and strategy.
                  </p>
                </div>

                <div className="group rounded-[2rem] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_25px_80px_rgba(168,85,247,0.15)]">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Palette className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Unique visual style</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Bold neon gradients and polished UI give each game a memorable look.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-card py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-6 text-4xl font-bold md:text-5xl">About ROXXON Games</h2>
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                      ROXXON Games is an independent mobile game studio dedicated to creating engaging and addictive gaming experiences. We believe in the power of simple yet challenging gameplay that keeps players coming back for more.
                    </p>
                    <p className="text-muted-foreground">
                      Our mission is to craft games that are easy to pick up but hard to master, combining intuitive controls with progressively challenging levels that test your skills and reflexes.
                    </p>
                    <p className="text-muted-foreground">
                      From physics-based puzzlers to action-packed adventures, each game is designed with care and attention to detail, ensuring a polished experience that players can enjoy anywhere, anytime.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
                      <Gamepad2 className="mx-auto mb-3 h-10 w-10 text-primary" />
                      <div className="text-3xl font-bold">3</div>
                      <div className="text-sm text-muted-foreground">Games Published</div>
                    </div>
                    <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-6 text-center">
                      <Download className="mx-auto mb-3 h-10 w-10 text-secondary" />
                      <div className="text-3xl font-bold">47.2K+</div>
                      <div className="text-sm text-muted-foreground">Total Downloads</div>
                    </div>
                    <div className="col-span-2 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
                      <Sparkles className="mx-auto mb-3 h-10 w-10 text-primary" />
                      <div className="text-3xl font-bold">4.3★</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section id="contact" className="py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
              >
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">Meet the Developer</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-3xl"
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-12">
                  <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
                    <div className="flex-shrink-0">
                      <div className="h-40 w-40 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 p-1 shadow-[0_8px_32px_rgba(168,85,247,0.12)]">
                        <img
                          src="/founder.jpg"
                          alt="Rafeeq Pasha"
                          className="h-full w-full rounded-lg object-cover object-[center_20%] scale-105"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="mb-2 text-3xl font-bold">Rafeeq Pasha</h3>
                      <p className="mb-4 text-lg font-medium text-primary">Indie Game Developer – ROXXON Games</p>
                      <p className="leading-relaxed text-muted-foreground">
                        With a passion for creating engaging mobile experiences, Rafeeq founded ROXXON Games to bring innovative and addictive gameplay to players worldwide. His vision combines creative game design with technical excellence to deliver polished, fun experiences that stand out in the mobile gaming landscape.
                      </p>
                      <a
                        href="https://www.linkedin.com/in/rafeeq-pasha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(168,85,247,0.45),0_0_40px_rgba(59,130,246,0.25)] active:scale-[0.98]"
                      >
                        <Linkedin className="h-4 w-4" />
                        View LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
