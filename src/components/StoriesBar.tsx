import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Heart, Users } from 'lucide-react';

const stories = [
  { icon: <Star className="story-icon" />, label: 'GIRL' },
  { icon: <Sparkles className="story-icon" />, label: 'NEW DROP' },
  { icon: <Heart className="story-icon" />, label: 'FOR THEM' },
  { icon: <Users className="story-icon" />, label: 'CLIENTES' },
];

export const StoriesBar: React.FC = () => {
  return (
    <section className="stories-section">
      <div className="container">
        <div className="stories-bar">
          {stories.map((story, i) => (
            <motion.div
              key={story.label}
              className="story-item fade-in-up"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
                delay: i * 0.08,
              }}
            >
              <div className="story-ring">
                <div className="story-inner">
                  {story.icon}
                </div>
              </div>
              <span className="story-label">{story.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
