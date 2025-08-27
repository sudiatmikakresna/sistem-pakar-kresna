import { Button } from "@/components/ui/button"

const presentations = [
  {
    title: "Pertemuan 1",
    url: "https://app.presentations.ai/view/Rg3EGU2RZ4"
  },
  {
    title: "Pertemuan 2", 
    url: "https://app.presentations.ai/view/LUFNhKrGXc"
  },
  {
    title: "Pertemuan 3",
    url: "https://app.presentations.ai/view/yXSbfOLkbk"
  },
  {
    title: "Pertemuan 4",
    url: "https://app.presentations.ai/view/QzXB7jKWeH"
  },
  {
    title: "Pertemuan 5",
    url: "https://gamma.app/docs/PERTEMUAN-5-Mesin-Inferensi-Forward-Chaining-hxju5f8pjizujwl"
  },
  {
    title: "Pertemuan 6",
    url: "https://gamma.app/docs/PERTEMUAN-6-Mesin-Inferensi-Backward-Chaining-s71rivpqzfp2yh7"
  },
  {
    title: "Pertemuan 7",
    url: "https://gamma.app/docs/PERTEMUAN-7-Uncertainty-Certainty-Factors-sytoqash4eb8brd"
  },
  {
    title: "Pertemuan 8",
    url: "https://gamma.app/docs/PERTEMUAN-8-Fuzzy-Logic-dalam-Sistem-Pakar-m672p828kl1whpx"
  },
  {
    title: "Pertemuan 9",
    url: "https://gamma.app/docs/PERTEMUAN-9-Knowledge-Acquisition-tm8ikpaqz68mxv6"
  },
  {
    title: "Pertemuan 10",
    url: "https://gamma.app/docs/PERTEMUAN-10-Knowledge-Validation-Verification-3ne0pyjgo0gxd62"
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <section className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              Kresna Sudiatmika, S.Kom. M.T
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Software Engineer
            </p>
            <div className="w-24 h-1 bg-slate-800 mx-auto mt-8"></div>
          </div>
        </section>

        {/* Presentations Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-800 text-center mb-12">
            Course Materials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentations.map((presentation, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  {presentation.title}
                </h3>
                <Button 
                  onClick={() => window.open(presentation.url, '_blank')}
                  className="w-full"
                  variant="default"
                >
                  View Presentation
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App