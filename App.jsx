import React, { useState } from "react";

function StarRating({ name, label, value = 0, onChange }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium text-gray-700">{label}</label>
      <div className="flex gap-2 text-2xl">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className="cursor-pointer transition-transform hover:scale-110"
            style={{ color: star <= (hover || value) ? "gold" : "lightgray" }}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onChange(name, star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStarChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! Check console.");
  };

  const yesNo = ["Yes", "No"];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">TLT Intern Program Evaluation</h1>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* SECTION: BASIC INFO */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Basic Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input name="firstName" onChange={handleChange} className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input name="lastName" onChange={handleChange} className="w-full p-2 border rounded" required />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm mb-1">Personal Email</label>
              <input name="email" onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mt-4">
              <label className="block text-sm mb-1">Major or Field of Study</label>
              <input name="major" onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mt-4">
              <label className="block text-sm mb-1">Intern Position at TLT</label>
              <select name="position" onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="">Select Position</option>
                
                <option>Accounting/Business Services</option> <option>AI Ethics and Bias Auditor Basics</option> <option>American Sign Language (ASL)</option> <option>App Development</option> <option>Campus Liaiso</option> <option>Cyber Security Basics</option> <option>Data Research</option> <option>Development/Community Outreach</option> <option>Digital Marketing</option> <option>E-Learning/Instructional Design</option> <option>Environmental Science</option> <option>Exercise Scienc</option> <option>Fashion Design</option> <option>GIS Basics</option> <option>Grant Writing</option> <option>Graphic Design</option> <option>Human Resource</option> <option>Impact Management </option> <option>Marketing </option> <option>Operations-Policies & Procedures</option> <option>Program Coordination </option> <option>Project Management Coordinator</option> <option>Social Media</option> <option>Supply Chain & Logistics</option> <option>Video Coordination</option> <option>Visual Communications</option> <option>Website Development </option>


              </select>
            </div>
          </div>

          {/* SECTION: EXPERIENCE */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Experience</h2>

            <select name="experience" onChange={handleChange} className="w-full p-2 border rounded mb-4">
              <option value="">Overall Experience</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
            </select>

            <div className="space-y-4">
              {[
                { key: "valuableExperience", label: "Was the work valuable to your academic studies?" },
                { key: "responsibilities", label: "Were responsibilities aligned with your coursework?" },
                { key: "initiative", label: "Were you able to take initiative?" },
                { key: "supervisorInteraction", label: "Did your supervisor engage regularly?" },
                { key: "supervisorAvailability", label: "Was your supervisor available when needed?" },
                { key: "leadershipSkills", label: "Did you develop leadership skills?" },
                { key: "anotherJob", label: "Were you working another job/internship?" },
                { key: "academicPrepared", label: "Did your academic program prepare you?" }
              ].map((q) => (
                <div key={q.key} className="flex justify-between items-center">
                  <span className="text-sm">{q.label}</span>
                  <select name={q.key} onChange={handleChange} className="p-2 border rounded">
                    <option value="">Select</option>
                    {yesNo.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: FEEDBACK */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Feedback</h2>

            <textarea name="mentorFeedback" placeholder="Mentor feedback" onChange={handleChange} className="w-full p-2 border rounded mb-3" />
            <input name="projectCount" placeholder="Number of projects" onChange={handleChange} className="w-full p-2 border rounded mb-3" />
            <textarea name="software" placeholder="Software access needed" onChange={handleChange} className="w-full p-2 border rounded mb-3" />
            <textarea name="skills" placeholder="Skills developed" onChange={handleChange} className="w-full p-2 border rounded" />
          </div>

          {/* SECTION: RATINGS */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Ratings</h2>

            <StarRating name="confidence" label="I feel confident speaking professionally" value={formData.confidence} onChange={handleStarChange} />
            <StarRating name="communication" label="I communicate clearly in a team" value={formData.communication} onChange={handleStarChange} />
            <StarRating name="leadershipUnderstanding" label="I understand leadership concepts" value={formData.leadershipUnderstanding} onChange={handleStarChange} />
            <StarRating name="problemSolving" label="I can solve problems effectively" value={formData.problemSolving} onChange={handleStarChange} />
            <StarRating name="jobReadiness" label="I feel ready for internship or job tasks" value={formData.jobReadiness} onChange={handleStarChange} />
            <StarRating name="projectRating" label="Rate the projects assigned to you" value={formData.projectRating} onChange={handleStarChange} />
            <StarRating name="recommendProgram" label="Would you recommend the program?" value={formData.recommendProgram} onChange={handleStarChange} />
            <StarRating name="mentorValue" label="Value of 1x1 mentor sessions" value={formData.mentorValue} onChange={handleStarChange} />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Submit Survey
          </button>
        </form>
      </div>
    </div>
  );
}




