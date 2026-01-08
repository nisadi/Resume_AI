import React,{useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import { dummyResumeData } from "../assets/assets";
import { ArrowLeft, Briefcase, GraduationCap, Sparkles, User, FileText, Folder, ChevronLeft, ChevronRight } from "lucide-react";
import PersonalInfoForm from "../components/PersonalInfoForm";


const ResumeBuilder = () => {

    const {resumeId} = useParams()

    const [resumeData, setResumeData] = useState({
      _id: "",
      title: "",
      personal_info: {},
      professinal_summary: "",
      experience: [],
      education: [],
      project: [],
      skills: [],
      template: "classic",
      accent_color: "#3B82F6",
      public: false,
    });

    const loadExistingResume = async () => {
        const resume = dummyResumeData.find(resumeId)
        if(resume){
            setResumeData(resume)
            document.title = resume.title
        }
    }

    const[activeSectionIndex, setActiveSectionIndex] = useState(0)
    const[removeBackground, setRemoveBackground] = useState(false);

    const section = [
      { id: "personal", name: "Personal info", icon: User },
      { id: "summery", name: "Summery", icon: FileText },
      { id: "experience", name: "Experience", icon: Briefcase },
      { id: "education", name: "Education", icon: GraduationCap },
      { id: "projects", name: "Projects", icon: Folder },
      { id: "skills", name: "skills", icon: Sparkles}
    ];

    const activeSection = section[activeSectionIndex]
    



    useEffect(() => {
        loadExistingResume()
    },[])
    return (
      <div>
        <div className="px-3 py-6 text-xs">
          <Link
            to={"/app"}
            className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-al"
          >
            <ArrowLeft className="size-4" />
            Back to dashboard
          </Link>
        </div>

        <div className="max-w-8xl mx-auto px-5 py-3 pb-8 ">
          <div className="grid lg:grid-cols-12 gap-4">
            {/* Left Panel - Form*/}
            <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
                {/* progress bar using activeSectionIndex*/}
                <hr className="absolute top-0 left-0 right-0  border-2 border-gray-200" />
                <hr
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-2000"
                  style={{
                    width: `${
                      (activeSectionIndex * 100) / (section.length - 1)
                    }%`,
                  }}
                />

                {/* Section Navigation */}

                <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                  <div></div>
                  <div className="flex items-center">
                    {activeSectionIndex !== 0 && (
                      <button
                        onClick={() =>
                          setActiveSectionIndex((prevIndex) =>
                            Math.max(prevIndex - 1, 0)
                          )
                        }
                        className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50
                            transition-all"
                        disabled={activationIndex === 0}
                      >
                        <ChevronLeft className="size-4" /> Previous
                      </button>
                    )}
                    <button
                      onClick={() =>
                        setActiveSectionIndex((prevIndex) =>
                          Math.min(prevIndex + 1, section.length - 1)
                        )
                      }
                      className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50
                            transition-all ${activeSectionIndex === section.length -1 && 'opacity-50'}`}
                      disabled={activeSectionIndex === section.length - 1}>
                      Next <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Form Content */}
                <div className="space-y-6">
                    {activeSection.id === 'personal' && (
                        <PersonalInfoForm data={resumeData.personal_info} onChange={(data)=>setResumeData(prev => ({...prev, personal_info:data}))}
                        removeBackground={removeBackground} setRemoveBackground={setRemoveBackground}/>
                    )}
                </div>
              </div>
            </div>

            {/*right Panel - Form*/}
            <div></div>
          </div>
        </div>
      </div>
    );
}

export default ResumeBuilder