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
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions about tech communities in Cameroon? Want to list your
            community? We're here to help.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

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
                  className="w-full px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-button whitespace-nowrap flex items-center justify-center"
                >
                  <i className="ri-github-line ri-lg mr-2"></i>
                  Send Message via GitHub
                </button>
              </form>
            </div>
          </div>

          <div className="w-full md:w-1/2" id="add-community">
            <div className="bg-gray-50 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Submit Your Community</h3>
              <p className="text-gray-600 mb-6">
                Are you running a tech community in Cameroon? Get it listed on
                our platform to increase visibility and connect with more
                members.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mt-1 mr-4 flex-shrink-0">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Free Listing</h4>
                    <p className="text-gray-600 text-sm">
                      Basic community profile with essential information
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mt-1 mr-4 flex-shrink-0">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Event Promotion</h4>
                    <p className="text-gray-600 text-sm">
                      Share your community events on our calendar
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mt-1 mr-4 flex-shrink-0">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Networking Opportunities
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Connect with other communities and potential partners
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mt-1 mr-4 flex-shrink-0">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Resource Access</h4>
                    <p className="text-gray-600 text-sm">
                      Get access to exclusive resources for community growth
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCommunitySubmit}
                className="w-full px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-button whitespace-nowrap flex items-center justify-center"
              >
                <i className="ri-community-line ri-lg mr-2"></i>
                Submit Your Community
              </button>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    <i className="ri-twitter-x-line"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    <i className="ri-whatsapp-line"></i>
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
