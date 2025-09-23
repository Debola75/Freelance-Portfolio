// Smooth scroll and active nav
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        // Smooth scroll
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
        }
    });
});
// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    navUl.classList.toggle('open');
});
// Close nav on link click (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navUl.classList.remove('open');
    });
});
// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if(window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Modal Project Slideshow
const projects = [
    {
        img: "Capture 2.PNG",
        title: "Portfolio Website",
        desc: "Personal portfolio to showcase my work and skills."
    },
    {
        img: "Efficient Landing-page.PNG",
        title: "E-commerce Store",
        desc: "Modern online store with payment integration."
    },
    {
        img: "Capture4.PNG",
        title: "Form Registration",
        desc: "Responsive registration form with CMS features."
    }
];
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
let currentProject = 0;
function showModal(index) {
    currentProject = index;
    modalImg.src = projects[index].img;
    modalTitle.textContent = projects[index].title;
    modalDesc.textContent = projects[index].desc;
    modal.classList.add('active');
}
document.querySelectorAll('.modal-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => showModal(idx));
});
modalClose.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
    if(e.target === modal) modal.classList.remove('active');
});
modalPrev.addEventListener('click', () => {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    showModal(currentProject);
});
modalNext.addEventListener('click', () => {
    currentProject = (currentProject + 1) % projects.length;
    showModal(currentProject);
});
// Certificate Modal JS
document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openCertificate');
    const modal = document.getElementById('certificateModal');
    const closeBtn = document.getElementById('closeCertificate');

    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
// form submission (demo)
document.querySelector('.contact-form').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        await fetch('https://formspree.io/f/xdoqzqoq', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        });
        alert('Thank you for reaching out!');
        form.reset();
    } catch (error) {
        alert('There was an error submitting the form. Please try again.');
    }
});