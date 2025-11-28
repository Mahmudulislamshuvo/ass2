import { useState } from "react";

const MainContent = ({ bookmarks }) => {
  const [passwordToggle, setPasswordToggle] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const lowercaseQuery = searchQuery.toLowerCase();

  const filteredBookmarks = bookmarks.filter((data) => {
    const matchUrl = data.websiteURL.toLowerCase().includes(lowercaseQuery);
    const matchUsername = data.username.toLowerCase().includes(lowercaseQuery);
    const matchCategory = data.catagory?.toLowerCase().includes(lowercaseQuery);
    console.log(matchUrl, matchUsername, matchCategory);

    return matchUrl || matchUsername || matchCategory;
  });

  return (
    <div>
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          {/* <!-- Search, Sort, and Filter Buttons --> */}
          <section className="rounded-3xl border border-neutral-800  from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              {/* <!-- Search Bar --> */}
              <label className="relative flex-1">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search saved credentials"
                  className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 transition focus:border-blue-500 focus:bg-neutral-950 focus:outline-none"
                />
              </label>

              <div className="flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 4h18l-8 8v6l-4 4v-8z"
                    ></path>
                  </svg>
                  Sort by
                </button>
              </div>
            </div>
          </section>

          {/* <!-- Password Cards Grid --> */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredBookmarks?.map((data, i) => (
              <article
                key={i}
                className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      style={{ color: data.faviconColor }}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-blue-500/10 text-sm font-semibold uppercase`}
                    >
                      Fb
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold capitalize">
                        {
                          data.websiteURL
                            .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                            .split(".")[0]
                        }
                      </h3>
                      <p className="text-xs uppercase tracking-wide text-neutral-500">
                        Social
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-400">
                  {data.websiteURL.split("//")[1]}
                </p>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                    <dt className="text-xs uppercase tracking-wide text-neutral-500">
                      Username
                    </dt>
                    <dd className="text-neutral-50">{data.username}</dd>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
                    <dt className="text-xs uppercase tracking-wide text-neutral-500">
                      Password
                    </dt>
                    <dd className="flex items-center gap-2 text-neutral-50">
                      {/* <span>{passwordToggle ? data.password : "••••••••"}</span> */}
                      <span>
                        {passwordToggle === i ? data.password : "••••••••"}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          // যদি আগে থেকেই এই কার্ডটি খোলা থাকে, তাহলে বন্ধ করে দাও (null)
                          // আর যদি না থাকে, তাহলে এই কার্ডের index সেট করো (i)
                          setPasswordToggle(passwordToggle === i ? null : i);
                        }}
                        className="text-xs font-semibold text-blue-400 cursor-pointer"
                      >
                        {passwordToggle === i ? "Hide" : "Reveal"}
                      </button>
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
            {searchQuery.length > 0 && filteredBookmarks.length === 0 && (
              <p className="text-center text-sm text-neutral-500 col-span-full py-10">
                No credentials match your search "{searchQuery}".
              </p>
            )}
          </div>
          {bookmarks.length === 0 && (
            /* --- EMPTY STATE DESIGN --- */
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-800 bg-neutral-900/30 py-20 text-center">
              {/* Icon Container */}
              <div className="mb-6 rounded-full bg-neutral-800/50 p-6 ring-1 ring-neutral-700/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10 text-neutral-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white">
                No bookmarks saved yet
              </h3>
              <p className="mt-2 max-w-sm text-sm text-neutral-500">
                Your saved items will appear here. Fill out the form above to
                add your first credential.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MainContent;
