import React, { useState } from "react";
import { CONTACT_SUBJECTS } from "../../utils/constants";
import LoadingSpinner from "../common/LoadingSpinner";

const ContactHub = () => {
  // GitHub repository URL
  const GITHUB_REPO = "https://github.com/Nde-Dilan/community-finder";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create GitHub issue URL with form data pre-filled
    const issueTitle = `[CONTACT] ${formData.subject} - ${formData.name}`;
    const issueBody = `## Contact Information
**Name:** ${formData.name}
**Email:** ${formData.email}
**Subject:** ${formData.subject}

## Message
${formData.message}

---
*This issue was created from the Community Finder contact form.*`;

    const githubUrl = `${GITHUB_REPO}/issues/new?title=${encodeURIComponent(
      issueTitle
    )}&body=${encodeURIComponent(issueBody)}&labels=contact,needs-response`;

    window.open(githubUrl, "_blank", "noopener,noreferrer");
  };

  const handleCommunitySubmit = () => {
    const communityUrl = `${GITHUB_REPO}/issues/new?template=community-submission.md&labels=community-submission,needs-review`;
    window.open(communityUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            Have questions about tech communities in Cameroon? Want to list your
            community? We're here to help.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Us</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded pr-8 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]"
                  >
                    {CONTACT_SUBJECTS.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]"
                    placeholder="Type your message here..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 md:px-6 py-2 md:py-3 bg-[var(--primary)] text-white font-medium rounded-button whitespace-nowrap flex items-center justify-center text-sm md:text-base"
                >
                  <i className="ri-github-line ri-lg mr-2"></i>
                  Send Message via GitHub
                </button>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2" id="add-community">
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Submit Your Community</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                Are you running a tech community in Cameroon? Get it listed on
                our platform to increase visibility and connect with more
                members.
              </p>

              <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mt-1 mr-3 md:mr-4 flex-shrink-0">
                    <i className="ri-check-line ri-sm md:ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">Free Listing</h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Basic community profile with essential information
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mt-1 mr-3 md:mr-4 flex-shrink-0">
                    <i className="ri-check-line ri-sm md:ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">Event Promotion</h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Share your community events on our calendar
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mt-1 mr-3 md:mr-4 flex-shrink-0">
                    <i className="ri-check-line ri-sm md:ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">
                      Networking Opportunities
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Connect with other communities and potential partners
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mt-1 mr-3 md:mr-4 flex-shrink-0">
                    <i className="ri-check-line ri-sm md:ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">Resource Access</h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Get access to exclusive resources for community growth
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCommunitySubmit}
                className="w-full px-4 md:px-6 py-2 md:py-3 bg-[var(--primary)] text-white font-medium rounded-button whitespace-nowrap flex items-center justify-center text-sm md:text-base"
              >
                <i className="ri-community-line ri-lg mr-2"></i>
                Submit Your Community
              </button>

              <div className="mt-6 md:mt-8">
                <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Connect With Us</h4>
                <div className="flex space-x-3 md:space-x-4">
                  <a
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    <i className="ri-twitter-x-line ri-sm md:ri-base"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    <i className="ri-facebook-fill ri-sm md:ri-base"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    <i className="ri-linkedin-fill ri-sm md:ri-base"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    <i className="ri-instagram-line ri-sm md:ri-base"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    <i className="ri-whatsapp-line ri-sm md:ri-base"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHub;
