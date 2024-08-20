import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="bg-gray-900 text-gray-400 py-4 mt-12">
  <div className="container mx-auto text-center">
    <p>&copy; {new Date().getFullYear()} Alishba Naveed. All Rights Reserved.</p>
    <div className="mt-2 flex justify-center space-x-4">
      <Link href="https://www.linkedin.com/in/alishba-naveed-a9ab38251/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
        LinkedIn
      </Link>
      <Link href="https://github.com/alishba241?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
        GitHub
      </Link>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer

