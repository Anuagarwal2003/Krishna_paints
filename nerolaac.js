// document.addEventListener('DOMContentLoaded', () => {
//     const tabs = ['intro', 'spices', 'herbs']; // Add more tab names as needed
  
//     function showTab(tabName) {
//       const tabLink = document.querySelector(`a[href="#${tabName}"]`);
//       const tabContent = document.querySelector(`#${tabName}`);
  
//       if (tabLink && tabContent) {
//         const allTabLinks = document.querySelectorAll('.nav-tabs a');
  
//         allTabLinks.forEach((link) => {
//           link.classList.remove('active');
//         });
  
//         tabLink.classList.add('active');
  
//         const allTabContents = document.querySelectorAll('.tab-content .tab-pane');
  
//         allTabContents.forEach((content) => {
//           content.classList.remove('active');
//         });
  
//         tabContent.classList.add('active');
//       }
//     }
  
//     // Attach click event listener to the divs
//     document.querySelectorAll('.my-colour').forEach((div, index) => {
//       div.addEventListener('click', () => {
//         showTab(tabs[index]);
//       });
//     });
//   });