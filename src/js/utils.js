export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: "UTC",
  })
}


export function SortDocs(docs, {
  filterDashboard = true, // Ensure we only show "Dashboard" type
  sortByTitle = true,     // Enable title sorting
} = {}) {
  let filteredDocs = docs;

  // Filter only Dashboard-type documents if required
  if (filterDashboard) {
    filteredDocs = docs.filter(doc => doc.data.type === "Dashboard");
  }

  // Sort by title alphabetically
  if (sortByTitle) {
    filteredDocs.sort((a, b) => {
      const titleA = a.data.title ? a.data.title.trim().toLowerCase() : "";
      const titleB = b.data.title ? b.data.title.trim().toLowerCase() : "";
      return titleA.localeCompare(titleB);
    });
  }

  return filteredDocs;
}
