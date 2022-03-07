/** @format */
const KEYS = {
  documents: "documents",
  DocumentId: "documentId",
};

export const getBP = () => [
  { id: "A", title: "A" },
  { id: "B", title: "B" },
  { id: "C", title: "C" },
  { id: "D", title: "D" },
  { id: "E", title: "E" },
  { id: "F", title: "F" },
  { id: "G", title: "G" },
  { id: "H", title: "H" },
  { id: "I", title: "I" },
];

export const getDuree = () => [
  { id: "3", title: "3 mois" },
  { id: "6", title: "6 mois" },
  { id: "12", title: "12 mois" },
  { id: "24", title: "24 mois" },
  { id: "36", title: "36 mois" },
];

export function insertDocument(data) {
  let documents = getAllDocument();
  data["id"] = generateDocumentId();
  documents.push(data);
  localStorage.setItem(KEYS.documents, JSON.stringify(documents));
}

export function updateDocument(data) {
  let documents = getAllDocument();
  let recordIndex = documents.findIndex(x => x.id === data.id);
  documents[recordIndex] = { ...data }
  localStorage.setItem(KEYS.documents, JSON.stringify(documents));
}

export function generateDocumentId() {
  if (localStorage.getItem(KEYS.DocumentId) === null)
    localStorage.setItem(KEYS.DocumentId, "0");
  var id = parseInt(localStorage.getItem(KEYS.DocumentId));
  localStorage.setItem(KEYS.DocumentId, (++id).toString());
  return id;
}

export function getAllDocument() {
  if (localStorage.getItem(KEYS.documents) === null)
    localStorage.setItem(KEYS.documents, JSON.stringify([]));
  let documents = JSON.parse(localStorage.getItem(KEYS.documents));
  //let BPs = getBP();
  return documents.map((x) => ({
    ...x,
    //BanquePopulaire: BPs[x.BanquePopulaire - 1].title,
  }));
}