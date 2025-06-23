export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-24 space-y-12 md:space-y-0">
          <div>
            <h3 className="font-bold text-black text-xl mb-4 text-left">About</h3>
            <ul className="space-y-2 text-gray-400 text-left">
              <li><a href="#">Company Overview</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press & Media</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black text-xl mb-4 text-left">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-left">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Webinars & Events</a></li>
              <li><a href="#">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black text-xl mb-4 text-left">Support & Contact</h3>
            <ul className="space-y-2 text-gray-400 text-left">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Technical Support</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Community Forum</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-24 border-t border-gray-300 w-full" />
      <div className="max-w-5xl mx-auto px-4 py-10 flex items-center justify-center text-gray-500 text-sm">
        <div className="flex items-center justify-center mr-5 text-center">
          ©2024 @weframetech · All rights reserved.
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <a href="#">Term of use</a>
          <a href="#">Privacy policy</a>
          <a href="#">Security</a>
        </div>
      </div>
    </footer>
  );
} 