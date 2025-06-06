const FeatureCard = ({ title, description, icon }) => (
    <div className="group relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl blur-sm group-hover:blur-none transition-all duration-300" />
      
      {/* Card */}
      <div className="relative bg-black/60 border border-cyan-400/20 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 h-full">
        {/* Icon */}
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4 text-black font-bold text-xl">
          {icon}
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
        
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
  
export default FeatureCard;
