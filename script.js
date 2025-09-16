const STORE_KEY = 'docvault_documents';
const documentsContainer = document.getElementById('documents-container');
const addModal = document.getElementById('add-modal');
const modalOverlay = document.getElementById('modal-overlay');

document.addEventListener('DOMContentLoaded', loadDocuments);

function showAddModal() {
  addModal.classList.add('active');
  modalOverlay.classList.add('active');
}

function closeModal() {
  addModal.classList.remove('active');
  modalOverlay.classList.remove('active');
}

function saveDocument() {
  const name = document.getElementById('doc-name').value;
  const expiry = document.getElementById('doc-expiry').value;
  const fileInput = document.getElementById('doc-file');
  const file = fileInput.files[0];

  if (!name || !file) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const fileData = e.target.result;

    const newDoc = {
      id: Date.now(),
      name,
      expiry: expiry || null,
       fileData,
      type: file.type
    };

    const stored = localStorage.getItem(STORE_KEY);
    const documents = stored ? JSON.parse(stored) : [];

    documents.push(newDoc);
    localStorage.setItem(STORE_KEY, JSON.stringify(documents));

    closeModal();
    loadDocuments();
  };

  reader.readAsDataURL(file);
}

function loadDocuments() {
  documentsContainer.innerHTML = '';

  const stored = localStorage.getItem(STORE_KEY);
  if (!stored) return;

  const documents = JSON.parse(stored);

  documents.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'document-card';
    card.innerHTML = `
      <h4>${doc.name}</h4>
      ${doc.expiry ? `<div class="expiry">Vence: ${formatDate(doc.expiry)}</div>` : ''}
      <div style="margin-top: 10px; font-size: 0.8em;">${doc.type.includes('pdf') ? '📄 PDF' : '📷 Imagen'}</div>
    `;
    card.onclick = () => previewDocument(doc);
    documentsContainer.appendChild(card);
  });

  checkExpiringSoon(documents);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES');
}

function checkExpiringSoon(documents) {
  const soon = documents.filter(doc => {
    if (!doc.expiry) return false;
    const expiryDate = new Date(doc.expiry);
    const today = new Date();
    const diffTime = expiryDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays >= 0;
  });

  if (soon.length > 0) {
    alert(`⚠️ ¡Atención! ${soon.length} documento(s) vencen en menos de 7 días.`);
  }
}

function previewDocument(doc) {
  const win = window.open('', '_blank');
  win.document.write(`
    <html>
      <head><title>${doc.name}</title></head>
      <body style="margin:0; background:#f0f0f0; display:flex; justify-content:center; align-items:center; height:100vh;">
        ${doc.type.includes('pdf') 
          ? `<embed src="${doc.data}" type="application/pdf" width="100%" height="100%" />`
          : `<img src="${doc.data}" style="max-width:100%; max-height:100vh; object-fit:contain;" />`
        }
      </body>
    </html>
  `);
}