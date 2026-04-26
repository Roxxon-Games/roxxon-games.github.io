import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Smartphone, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

function GameCard({ image, title, description, features, platform, rating, playStoreUrl, webUrl, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-300 cursor-pointer',
        className
      )}
      onClick={() => {
        const url = webUrl || playStoreUrl;
        if (url) {
          if (webUrl) {
            window.location.href = url;
          } else {
            window.open(url, '_blank', 'noopener,noreferrer');
          }
        }
      }}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent opacity-80" />
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-sm text-foreground/80">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1.5 text-xs uppercase tracking-[0.24em] text-primary">
            <Smartphone className="h-3 w-3" />
            {platform}
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
            <Star className="h-3 w-3 text-yellow-400" />
            {rating}
          </div>
        </div>

        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">{description}</p>

        <ul className="mb-6 space-y-2">
          {(features ?? []).slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-foreground/80">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <a
            href={webUrl || playStoreUrl}
            target={webUrl ? "_self" : "_blank"}
            rel={webUrl ? "" : "noopener noreferrer"}
            className="inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-[1rem] bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.45),0_0_40px_rgba(59,130,246,0.25)] hover:scale-[1.03] active:scale-[0.98]"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Play Now</span>
            <Gamepad2 className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default GameCard;
