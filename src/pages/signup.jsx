import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ShoppingBag,
  ChromeIcon as Google,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { slideUp, buttonHover, fadeIn } from '../components/animations/MotionPresets';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: '',
    color: ''
  });

  // Email validation regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Password strength checker
  const checkPasswordStrength = (password) => {
    if (!password) {
      return { score: 0, label: '', color: '' };
    }

    let score = 0;
    
    // Length check
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    
    // Character variety checks
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;
    
    // Cap at 4 for cleaner UI
    score = Math.min(score, 4);
    
    const strengthMap = {
      0: { label: 'Weak', color: 'bg-red-500' },
      1: { label: 'Fair', color: 'bg-orange-500' },
      2: { label: 'Good', color: 'bg-yellow-500' },
      3: { label: 'Strong', color: 'bg-primary-500' },
      4: { label: 'Very Strong', color: 'bg-green-500' }
    };
    
    return {
      score,
      label: strengthMap[score].label,
      color: strengthMap[score].color
    };
  };

  // Real-time validation
  useEffect(() => {
    const newErrors = {};

    // Full Name validation
    if (touched.fullName) {
      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required';
      } else if (formData.fullName.length < 2) {
        newErrors.fullName = 'Name must be at least 2 characters';
      } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
        newErrors.fullName = 'Name can only contain letters';
      }
    }

    // Email validation
    if (touched.email) {
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Password validation
    if (touched.password) {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
    }

    // Confirm password validation
    if (touched.confirmPassword) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    // Terms agreement
    if (touched.agreeTerms && !agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
    
    // Update password strength
    if (formData.password) {
      const strength = checkPasswordStrength(formData.password);
      setPasswordStrength(strength);
    }
    
  }, [formData, agreeTerms, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
      agreeTerms: true,
    });

    if (!isValid) return;

    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Navigate to login page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    setIsLoading(true);
    // Simulate Google OAuth
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to home page after successful Google signup
      navigate('/');
    }, 1500);
  };

  const getFieldStatus = (fieldName) => {
    if (!touched[fieldName]) return 'neutral';
    return errors[fieldName] ? 'error' : 'success';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 flex items-center justify-center p-4 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200 opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 opacity-20 blur-3xl"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <motion.div variants={slideUp} className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="relative">
              <ShoppingBag className="w-8 h-8 text-primary-600" />
              <motion.div
                className="absolute -inset-1 bg-primary-400 rounded-full opacity-20 blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              MarketMosaic
            </span>
          </Link>
        </motion.div>

        {/* Sign Up Card */}
        <motion.div
          variants={slideUp}
          className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden"
        >
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500" />
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join 50,000+ smart shoppers</p>
          </div>

          {/* Google Sign Up */}
          <motion.button
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-md transition-all duration-300 group relative overflow-hidden mb-6"
          >
            <Google className="w-5 h-5 text-primary-600" />
            <span className="text-gray-700 font-medium">Sign up with Google</span>
          </motion.button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                  getFieldStatus('fullName') === 'error' ? 'text-red-400' :
                  getFieldStatus('fullName') === 'success' ? 'text-green-500' :
                  'text-gray-400'
                }`} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none transition-all ${
                    getFieldStatus('fullName') === 'error' 
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                      : getFieldStatus('fullName') === 'success'
                      ? 'border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-100'
                      : 'border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
                  }`}
                  placeholder="John Doe"
                />
                {getFieldStatus('fullName') === 'success' && (
                  <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
                {getFieldStatus('fullName') === 'error' && (
                  <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                )}
              </div>
              {errors.fullName && touched.fullName && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                  getFieldStatus('email') === 'error' ? 'text-red-400' :
                  getFieldStatus('email') === 'success' ? 'text-green-500' :
                  'text-gray-400'
                }`} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none transition-all ${
                    getFieldStatus('email') === 'error' 
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                      : getFieldStatus('email') === 'success'
                      ? 'border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-100'
                      : 'border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
                  }`}
                  placeholder="you@example.com"
                />
                {getFieldStatus('email') === 'success' && (
                  <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
                {getFieldStatus('email') === 'error' && (
                  <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                )}
              </div>
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                  getFieldStatus('password') === 'error' ? 'text-red-400' :
                  getFieldStatus('password') === 'success' ? 'text-green-500' :
                  'text-gray-400'
                }`} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none transition-all ${
                    getFieldStatus('password') === 'error' 
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                      : getFieldStatus('password') === 'success'
                      ? 'border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-100'
                      : 'border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1 h-1 mb-1">
                    {[0, 1, 2, 3].map((level) => (
                      <div
                        key={level}
                        className={`flex-1 h-full rounded-full transition-all ${
                          level < passwordStrength.score 
                            ? passwordStrength.color 
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    Strength: <span className="font-medium">{passwordStrength.label}</span>
                  </p>
                </div>
              )}
              
              {errors.password && touched.password && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                  getFieldStatus('confirmPassword') === 'error' ? 'text-red-400' :
                  getFieldStatus('confirmPassword') === 'success' ? 'text-green-500' :
                  'text-gray-400'
                }`} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none transition-all ${
                    getFieldStatus('confirmPassword') === 'error' 
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                      : getFieldStatus('confirmPassword') === 'success'
                      ? 'border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-100'
                      : 'border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => {
                  setAgreeTerms(e.target.checked);
                  setTouched(prev => ({ ...prev, agreeTerms: true }));
                }}
                className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <Link to="/terms" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.agreeTerms && touched.agreeTerms && (
              <p className="text-red-500 text-xs flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.agreeTerms}
              </p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading || !isValid}
              {...buttonHover}
              className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-lg shadow-primary-500/30 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group mt-2"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span className="ml-2">Creating account...</span>
                </div>
              ) : (
                <span className="flex items-center justify-center">
                  Create Account
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </motion.button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600 pt-2">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium hover:underline transition-colors">
                Sign in
              </Link>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;