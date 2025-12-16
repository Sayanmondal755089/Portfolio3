import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../CSS/Gallery.css";

const IMAGES = {
  personal: [
    { id: 1, caption: "Digha Beach 🌲🌫️", photos: ["/sayan1.jpg", "/photo4.jpg"] },
    { id: 2, caption: "College Life.", photos: ["/Personal.jpg", "/photo3.jpg", "/photo7.jpg", "photo8.jpg"] },
    { id: 3, caption: "Photos.", photos: ["/photo5.jpg", "/photo6.jpg"] },
  ],
  projects: [
    { id: 1, caption: "SGC Movie Downloader", photos: ["/SGCmovie.png", "/SG2.jpg"] },
    { id: 2, caption: "Personal Finance App", photos: ["/profilex.jpeg", "/profilex2.jpeg", "/profilex3.jpeg", "/profilex4.jpeg"] },
  ],
  achievements: [
    { id: 1, caption: "Solved LeetCode questions 🏆!", photos: ["/leetcode.png"] },
    { id: 2, caption: "School Topper 🤖", photos: ["/Topper.jpg"] },
  ],
};

// 3D Gallery Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const galleryItemVariants = {
  hidden: { 
    y: 100, 
    rotateX: -90, 
    opacity: 0,
    scale: 0.8 
  },
  visible: { 
    y: 0, 
    rotateX: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
  hover: {
    y: -20,
    rotateY: 10,
    rotateX: 5,
    scale: 1.05,
    z: 50,
    boxShadow: "0 30px 80px rgba(124,58,237,0.3)",
    transition: { duration: 0.3 }
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    rotateY: 5,
    z: 20,
    transition: { duration: 0.3 }
  }
};

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) => setZoom({ img: post.photos[index], post, index });
  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex = (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.div
      className="gallery-3d-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 🌟 3D Title */}
      <motion.h1 
        className="gallery-title"
        initial={{ opacity: 0, y: -50, rotateX: 90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        3D Gallery
      </motion.h1>

      {/* 🧭 3D Tabs */}
      <div className="tabs-3d">
        {["personal", "projects", "achievements"].map((type) => (
          <motion.button
            key={type}
            className={`tab-3d ${tab === type ? 'active' : ''}`}
            onClick={() => setTab(type)}
            whileHover={{ 
              scale: 1.1, 
              rotateX: 10, 
              y: -5,
              background: "linear-gradient(145deg, var(--accent), var(--accent-2))"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* 🖼️ 3D Gallery Grid */}
      <motion.div 
        className="gallery-grid-3d"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="tab-content-3d"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {IMAGES[tab].map((post, postIndex) => (
              <motion.div
                key={post.id}
                className={`gallery-post-3d ${post.photos.length > 1 ? "multi" : "single"}`}
                variants={galleryItemVariants}
                whileHover="hover"
                custom={postIndex}
              >
                <motion.h3 className="post-caption">{post.caption}</motion.h3>
                
                <div className="images-3d-container">
                  {post.photos.map((src, i) => (
                    <motion.div
                      key={i}
                      className="image-wrapper-3d"
                      onClick={() => openZoom(post, i)}
                      whileHover="hover"
                    >
                      <motion.img
                        src={src}
                        alt={`Gallery ${tab} ${i}`}
                        variants={imageVariants}
                        className="gallery-image-3d"
                        style={{
                          perspective: '1000px',
                          transformStyle: 'preserve-3d'
                        }}
                      />
                      <div className="image-overlay-3d">
                        <span>View</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* 🔍 3D Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="modal-backdrop-3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeZoom}
          >
            <motion.div
              className="modal-content-3d"
              initial={{ scale: 0.3, rotateX: 90, y: 50 }}
              animate={{ scale: 1, rotateX: 0, y: 0 }}
              exit={{ scale: 0.3, rotateX: 90, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="close-btn-3d"
                onClick={closeZoom}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X />
              </motion.button>
              
              <motion.img
                src={zoom.img}
                alt="Zoomed"
                className="zoomed-image-3d"
                animate={{
                  rotateY: Math.sin(Date.now() / 1000) * 2,
                  rotateX: Math.sin(Date.now() / 1500) * 1
                }}
                transition={{
                  rotateY: { duration: 4, repeat: Infinity },
                  rotateX: { duration: 6, repeat: Infinity }
                }}
              />

              {zoom.post?.photos.length > 1 && (
                <>
                  <motion.button
                    className="nav-btn-3d prev"
                    onClick={prevImage}
                    whileHover={{ scale: 1.2, x: -5 }}
                  >
                    <ChevronLeft />
                  </motion.button>
                  <motion.button
                    className="nav-btn-3d next"
                    onClick={nextImage}
                    whileHover={{ scale: 1.2, x: 5 }}
                  >
                    <ChevronRight />
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
