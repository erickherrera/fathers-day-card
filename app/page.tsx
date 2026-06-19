export default function FathersDayCard() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl transition-transform hover:scale-105">
        <h1 className="mb-4 text-4xl font-extrabold text-blue-600">
          Happy Father's Day!
        </h1>
        <p className="mb-6 text-lg text-slate-700">
          Thanks for everything you do. 
        </p>
        
        {/* You can add a personal photo or custom illustration here */}
        <div className="mx-auto mb-6 h-48 w-full rounded-xl bg-slate-200 flex items-center justify-center">
          <span className="text-slate-500">[Insert Embarrassing Photo Here]</span>
        </div>

        <p className="text-sm font-medium text-slate-500">
          Love, <br />
          Your Favorite Son
        </p>
      </div>
    </main>
  );
}