export default function Features() {
  const features = [
    { title: "Real-Time Analytics", desc: "Get instant insights with live dashboards." },
    { title: "Bank-Grade Security", desc: "End-to-end encryption, 2FA, GDPR compliance." },
    { title: "Customizable Reports", desc: "Export audit-ready reports for review." }
  ];

  return (
    <section className="grid md:grid-cols-3 gap-6 px-6 py-16 bg-white">
      {features.map((f, i) => (
        <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h4 className="text-2xl font-bold mb-2">{f.title}</h4>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
