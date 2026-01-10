import { FaStar, FaGithub, FaCodeBranch, FaDownload } from 'react-icons/fa'
import { personalInfo } from '../../data/personalInfo'

/**
 * Testimonials Section Component
 * Client testimonials and GitHub stats
 */
function Testimonials() {
  // Placeholder testimonials - replace with real ones
  const testimonials = [
    {
      name: 'Client Name',
      role: 'CEO, Company Name',
      content:
        'Emmanuel delivered an exceptional project on time and within budget. His technical expertise and communication skills are outstanding.',
      rating: 5,
    },
    {
      name: 'Client Name',
      role: 'CTO, Company Name',
      content:
        'Working with Emmanuel was a pleasure. He understood our requirements perfectly and provided clean, maintainable code.',
      rating: 5,
    },
    {
      name: 'Client Name',
      role: 'Founder, Startup Name',
      content:
        'The automation solution Emmanuel built saved us hours of work daily. Highly recommend for any technical project.',
      rating: 5,
    },
  ]

  // Placeholder GitHub stats - replace with real API data
  const githubStats = {
    repositories: 50,
    contributions: 1200,
    stars: 350,
    followers: 150,
  }

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8" style={{
      background: 'linear-gradient(to bottom right, rgb(255 255 255), rgb(248 250 252 / 0.6), rgb(239 246 255 / 0.3))',
    }}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials & Social Proof</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            What clients say and my GitHub contributions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <FaGithub className="text-5xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">GitHub Contributions</h3>
            <p className="text-blue-100">
              Check out my open-source contributions and projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{githubStats.repositories}</div>
              <div className="text-blue-100">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{githubStats.contributions}</div>
              <div className="text-blue-100">Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{githubStats.stars}</div>
              <div className="text-blue-100">Stars</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{githubStats.followers}</div>
              <div className="text-blue-100">Followers</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto"
            >
              <FaGithub /> Visit GitHub Profile
            </a>
          </div>
        </div>

        {/* Project Success Metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {personalInfo.name.split(' ')[0].length}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
