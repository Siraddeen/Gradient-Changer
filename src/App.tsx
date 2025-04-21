function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* Multiple dynamic gradient layers */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_#FF6B6B_0%,_#4ECDC4_50%,_#FF6B6B_100%)] animate-gradient-move"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_#45B7D1_0%,_#96CEB4_50%,_#45B7D1_100%)] animate-gradient-move animation-delay-2000"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_#FFEEAD_0%,_#FF6B6B_50%,_#FFEEAD_100%)] animate-gradient-move animation-delay-4000"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_#4ECDC4_0%,_#45B7D1_50%,_#4ECDC4_100%)] animate-gradient-move animation-delay-6000"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_#96CEB4_0%,_#FFEEAD_50%,_#96CEB4_100%)] animate-gradient-move animation-delay-8000"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-4 bg-black/30 backdrop-blur-sm">
          {/* <div className="text-white text-2xl font-bold">vethalle</div> */}
          <div className="flex gap-4">
            <button className="text-white hover:text-pink-300 transition-colors">
              Home
            </button>
            <button className="text-white hover:text-pink-300 transition-colors">
              Explore
            </button>
            <button className="text-white hover:text-pink-300 transition-colors">
              Contact
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-pink-300 transition-colors">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Connect with the World
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Join our community of millions of users sharing their stories and
              experiences.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-pink-300 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chat Feature */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-white text-2xl mb-4">💬 Chat</div>
              <p className="text-white/80">
                Connect with friends and family through our secure messaging
                system.
              </p>
            </div>

            {/* Like Feature */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-white text-2xl mb-4">❤️ Like</div>
              <p className="text-white/80">
                Show appreciation for posts and content that inspire you.
              </p>
            </div>

            {/* Share Feature */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-white text-2xl mb-4">📤 Share</div>
              <p className="text-white/80">
                Spread your thoughts and experiences with the world.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/30 backdrop-blur-sm mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-white/60 hover:text-white">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-white">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-white/60 hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Community</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-white/60 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-white">
                      Forums
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-white">
                      Events
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/60 hover:text-white">
                    Twitter
                  </a>
                  <a href="#" className="text-white/60 hover:text-white">
                    Facebook
                  </a>
                  <a href="#" className="text-white/60 hover:text-white">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
