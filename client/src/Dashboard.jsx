import React, { useState } from 'react';
import { Plus, UploadCloud, X, FileText } from 'lucide-react';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  
  // Projects ලැයිස්තුව තබා ගැනීමට Array එකක්
  const [projects, setProjects] = useState([]);

  const handleCreate = () => {
    if (projectName.trim()) {
      // අලුත් Project එකක් Object එකක් විදියට Array එකට එකතු කිරීම
      const newProject = {
        id: Date.now(),
        name: projectName,
        date: new Date().toLocaleDateString()
      };
      
      setProjects([...projects, newProject]); // පරණ ඒවාට අලුත් එක එකතු කරනවා
      setProjectName('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans relative">
      {/* --- Navigation Bar --- */}
      <nav className="flex justify-between items-center px-12 py-5 border-b border-gray-100">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tight text-slate-900">resume</span>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full mt-2"></div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-gray-500 text-sm font-medium">Hi, Nethma charuni</span>
          <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-50 transition-all">
            Logout
          </button>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto px-12 py-16">
        {/* Top Section: Buttons */}
        <div className="flex gap-8 mb-16">
          <div 
            onClick={() => setIsModalOpen(true)}
            className="w-52 h-72 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/40 transition-all group"
          >
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
              <Plus className="text-white w-7 h-7 stroke-[3px]" />
            </div>
            <span className="text-blue-600 font-bold text-sm tracking-wide">Create Resume</span>
          </div>

          <div className="w-52 h-72 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 hover:bg-purple-50/40 transition-all group">
            <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-purple-100 group-hover:scale-110 transition-transform">
              <UploadCloud className="text-white w-6 h-6 stroke-[2.5px]" />
            </div>
            <span className="text-purple-600 font-bold text-sm tracking-wide">Upload Existing</span>
          </div>
        </div>

        {/* --- Projects Display Section (පල්ලෙහායින් පෙනෙන කොටස) --- */}
        <div className="border-t border-gray-100 pt-10">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Recent Projects</h2>
          
          {projects.length === 0 ? (
            <p className="text-gray-400 italic">No projects created yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow group">
                  <div className="w-full h-32 bg-white rounded-xl mb-4 flex items-center justify-center border border-slate-50">
                    <FileText className="text-slate-200 w-12 h-12 group-hover:text-blue-200 transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-700 truncate">{project.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">Created on {project.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* --- Modal (Popup) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md relative animate-in fade-in zoom-in duration-200">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-6 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Create New Resume</h2>
            <p className="text-gray-500 text-sm mb-6">Give a name for your new project</p>
            <input 
              type="text"
              value={projectName}
              placeholder="Ex: Software Engineer Role"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
              onChange={(e) => setProjectName(e.target.value)}
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 text-gray-600 font-semibold hover:bg-gray-50 rounded-lg">Cancel</button>
              <button 
                onClick={handleCreate}
                disabled={!projectName.trim()}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all shadow-md shadow-blue-200"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;