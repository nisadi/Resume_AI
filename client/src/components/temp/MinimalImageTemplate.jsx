import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const profileImage =
    typeof data.personal_info?.image === "string"
      ? data.personal_info.image
      : data.personal_info?.image
      ? URL.createObjectURL(data.personal_info.image)
      : null;

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800">
      <div className="grid grid-cols-3">
        {/* Profile Image */}
        <div className="col-span-1 py-10 text-center">
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover mx-auto"
              style={{ border: `4px solid ${accentColor}` }}
            />
          )}
        </div>

        {/* Name & Profession */}
        <div className="col-span-2 flex flex-col justify-center py-10 px-8">
          <h1 className="text-4xl font-bold tracking-widest">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          {data.personal_info?.profession && (
            <p className="uppercase text-sm tracking-widest text-zinc-600">
              {data.personal_info.profession}
            </p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="col-span-1 border-r border-zinc-300 p-6 pt-0">
          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-sm font-semibold tracking-widest mb-3">
              CONTACT
            </h2>

            <div className="space-y-2 text-sm">
              {data.personal_info?.phone && (
                <div className="flex gap-2">
                  <Phone size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.phone}</span>
                </div>
              )}

              {data.personal_info?.email && (
                <div className="flex gap-2">
                  <Mail size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.email}</span>
                </div>
              )}

              {data.personal_info?.location && (
                <div className="flex gap-2">
                  <MapPin size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.location}</span>
                </div>
              )}

              {data.personal_info?.linkedin && (
                <a
                  href={data.personal_info.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2"
                >
                  <Linkedin size={14} style={{ color: accentColor }} />
                  <span>LinkedIn</span>
                </a>
              )}

              {data.personal_info?.github && (
                <a
                  href={data.personal_info.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2"
                >
                  <Github size={14} style={{ color: accentColor }} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </section>

          {/* Skills */}
          {data.skills?.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold tracking-widest mb-3">
                SKILLS
              </h2>
              <ul className="space-y-1 text-sm">
                {data.skills.map((skill, i) => (
                  <li key={i}>• {skill}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* Main Content */}
        <main className="col-span-2 p-8 pt-0">
          {/* Summary */}
          {data.professional_summary && (
            <section className="mb-8">
              <h2
                className="text-sm font-semibold tracking-widest mb-3"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>
              <p className="leading-relaxed whitespace-pre-line">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience?.length > 0 && (
            <section className="mb-8">
              <h2
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>

              <div className="space-y-6">
                {data.experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{exp.position}</h3>
                      <span className="text-xs">
                        {formatDate(exp.start_date)} –{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>

                    <p className="text-sm" style={{ color: accentColor }}>
                      {exp.company}
                    </p>

                    {exp.description && (
                      <div className="whitespace-pre-line text-sm mt-2">
                        {exp.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/*Education*/}
          {data.education?.length > 0 && (
            <section className="mb-8">
              <h2
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: accentColor }}
              >
                EDUCATION
              </h2>

              <div className="space-y-4">
                {data.education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-sm">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-sm text-zinc-600">{edu.institution}</p>
                      {edu.gpa && (
                        <p className="text-xs text-zinc-500">GPA: {edu.gpa}</p>
                      )}
                    </div>

                    <span className="text-xs text-zinc-500">
                      {formatDate(edu.graduation_date)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.project?.length > 0 && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest mb-3"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>

              {data.project.map((p, i) => (
                <div key={i} className="mb-4">
                  <h3 className="font-medium">{p.name}</h3>
                  {p.type && <p className="text-xs text-zinc-600">{p.type}</p>}
                  {p.description && (
                    <div className="whitespace-pre-line text-sm">
                      {p.description}
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
