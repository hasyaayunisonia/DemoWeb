import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../features/auth/authSlice';
import LoginForm from './components/LoginForm';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = (token: string, username: string) => {
    dispatch(setAuth({ token, username }));
    login(username, token);
    navigate('/dashboard');
  };

  // Generate stable particles once
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      size: 40 + Math.random() * 40, // 40-80px
      startX: Math.random() * window.innerWidth,
      startY: Math.random() * window.innerHeight,
      deltaX: (Math.random() - 0.5) * 100, // -50 to 50 px
      deltaY: (Math.random() - 0.5) * 100, // -50 to 50 px
      duration: 12 + Math.random() * 8, // 12-20s
      delay: Math.random() * 5,
      color: 'rgba(255, 255, 255, 0.5)', // white
    }));
  }, []);

  return (
    <AnimatePresence>
      {/* Animated Gradient Background */}
      <motion.div
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -3,
          background: 'linear-gradient(270deg, #a18cd1, #fbc2eb, #fbc2eb, #a18cd1)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Subtle Blurred Blobs */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          width: 250,
          height: 250,
          background: 'rgba(255, 200, 255, 0.25)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          top: '15%',
          left: '20%',
          zIndex: -2,
        }}
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          width: 200,
          height: 200,
          background: 'rgba(200, 255, 255, 0.25)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          bottom: '20%',
          right: '20%',
          zIndex: -2,
        }}
      />

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: p.startX, y: p.startY }}
          animate={{ x: p.startX + p.deltaX, y: p.startY + p.deltaY }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: p.delay,
          }}
          style={{
            position: 'fixed',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            filter: 'blur(10px)', // smooth blur
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)', // SUBTLE GLOW
            zIndex: -1,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Login Card */}
      <motion.div
        className="min-h-screen flex justify-center items-center transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 items-center p-8 rounded-xl shadow-xl bg-white dark:bg-gray-900 w-full max-w-sm"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-gray-300"
          >
            Login
          </motion.h2>
          <motion.div variants={itemVariants} className="w-full">
            <LoginForm onSuccess={handleSuccess} />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
