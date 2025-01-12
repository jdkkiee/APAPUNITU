// Inisialisasi total statistik
let totalBooks = 0;
let totalArticles = 0;
let totalPages = 0;
let totalQuestions = 0;
let totalWrongAnswers = 0;

// Ambil elemen HTML
const form = document.getElementById("study-form");
const totalBooksElem = document.getElementById("total-books");
const totalArticlesElem = document.getElementById("total-articles");
const totalPagesElem = document.getElementById("total-pages");
const totalQuestionsElem = document.getElementById("total-questions");
const totalWrongAnswersElem = document.getElementById("total-wrong-answers");

// Fungsi untuk memperbarui statistik
function updateStatistics() {
  totalBooksElem.textContent = totalBooks;
  totalArticlesElem.textContent = totalArticles;
  totalPagesElem.textContent = totalPages;
  totalQuestionsElem.textContent = totalQuestions;
  totalWrongAnswersElem.textContent = totalWrongAnswers;
}

// Tambahkan event listener untuk form
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil nilai input
  const books = parseInt(document.getElementById("books").value) || 0;
  const articles = parseInt(document.getElementById("articles").value) || 0;
  const pages = parseInt(document.getElementById("pages").value) || 0;
  const questions = parseInt(document.getElementById("questions").value) || 0;
  const wrongAnswers = parseInt(document.getElementById("wrong-answers").value) || 0;

  // Tambahkan ke total
  totalOBATFOKUS += books;
  totalEnglishBreamfast += articles;
  totalPages += pages;
  totalQuestions += questions;
  totalWrongAnswers += wrongAnswers;

  // Perbarui statistik
  updateStatistics();

  // Reset form
  form.reset();
});