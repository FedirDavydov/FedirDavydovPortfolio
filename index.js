const benefitsData = [
  {
    title: "Functional",
    image: "/Assets/Functional.svg",
    description: "Streamlines your digital operations with intuitive navigation and robust features, enhancing user experience and performance."
  },
  {
    title: "Simple",
    image: "/Assets/Simple.svg",
    description: "Boasts a clean design and straightforward layout, ensuring users effortlessly find what they need without confusion or clutter."
  },
  {
    title: "Appropriate",
    image: "/Assets/Appropriate.svg",
    description: "Tailored to meet your brand's unique needs and audience expectations, fostering a relevant and engaging online presence."
  },
  {
    title: "Accessible",
    image: "/Assets/Accessible.svg",
    description: "Compliant with accessibility standards, providing equal access for all users, regardless of their abilities or devices."
  }
];

const benefitsListElement = document.querySelector('.benefits-list');

benefitsListElement.innerHTML = '';

const createBenefitElement = (benefit) => {
  return `
      <div class="benefit">
          <div class="benefit-header">
              <img src="${benefit.image}" alt="${benefit.title}">
              <h3>${benefit.title}</h3>
          </div>
          <p class="benefit-body">
              ${benefit.description}
          </p>
      </div>
  `;
};

benefitsData.forEach(benefit => {
  benefitsListElement.innerHTML += createBenefitElement(benefit);
});

const statsList = document.querySelector('.stats-list');


const statsData = [
  { image: '/Assets/Award.svg', text: '#1 web designer of 2023 in the Uxcel global rankings' },
  { image: '/Assets/Palette.svg', text: '100+ design projects completed' },
  { image: '/Assets/Figma Filled.svg', text: '1000+ people use my design templates' },
  { image: '/Assets/Upwork.svg', text: 'Ex. Upwork Top Rated freelancer' },
  { image: '/Assets/LinkedIn Filled.svg', text: ' 50,000+ impressions on LinkedIn' }
];

statsData.forEach(stat => {
  const statElement = document.createElement('div');
  statElement.classList.add('stat');

  const img = document.createElement('img');
  img.src = stat.image;
  img.alt = 'Stat image';
  statElement.appendChild(img);

  const text = document.createElement('p');
  text.textContent = stat.text;
  statElement.appendChild(text);

  statsList.appendChild(statElement);
});

document.addEventListener('DOMContentLoaded', function () {
  const questionData = [
    {
      title: "What is your pricing model?",
      content: "My pricing model is tailored to meet the needs of a diverse range of clients and projects. I offer both hourly rates and fixed project fees, depending on the nature and scope of the work. After our initial consultation, where I learn more about your specific requirements and objectives, I’ll provide you with a detailed proposal outlining the project costs. Rest assured, I aim for transparency and affordability in all my pricing structures."
    },
    {
      title: "How fast will you deliver the design?",
      content: "Absolutely! I specialize in website redesigns and can help you create a modern, user-friendly, and conversion-focused website that reflects your brand and resonates with your target audience. During the consultation, we can discuss your redesign goals and budget to craft a customized plan."
    },
    {
      title: "Can you redesign my website?",
      content: "My free website audit provides a comprehensive analysis of your website's strengths and weaknesses. It covers aspects like design, usability, SEO, and mobile responsiveness. You'll receive a detailed report with actionable recommendations to improve your website's performance and user experience."
    },
    {
      title: "What is included in a free website audit?",
      content: "By the end of our collaboration, you can expect a stunning website that meets your business goals and objectives."
    },
    {
      title: "What can I expect by the end of the project?",
      content: "My pricing model is tailored to meet the needs of a diverse range of clients and projects. I offer both hourly rates and fixed project fees, depending on the nature and scope of the work. After our initial consultation, where I learn more about your specific requirements and objectives, I’ll provide you with a detailed proposal outlining the project costs. Rest assured, I aim for transparency and affordability in all my pricing structures."
    },

  ];

  function createQuestionElement(question) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionHeader = document.createElement('div');
    questionHeader.classList.add('question-header');
    questionHeader.addEventListener('click', function () {
      questionDiv.classList.toggle('active');
    });

    const questionTitle = document.createElement('h3');
    questionTitle.textContent = question.title;

    const arrowImg = document.createElement('img');
    arrowImg.src = '/Assets/Arrow down.svg';
    arrowImg.alt = 'toggle arrow';
    arrowImg.classList.add('question-arrow');

    const questionBody = document.createElement('div');
    questionBody.classList.add('question-body');

    const questionText = document.createElement('p');
    questionText.textContent = question.content;

    questionHeader.appendChild(questionTitle);
    questionHeader.appendChild(arrowImg);

    questionBody.appendChild(questionText);

    questionDiv.appendChild(questionHeader);
    questionDiv.appendChild(questionBody);

    return questionDiv;
  }

  const questionList = document.getElementById('questionList');

  questionData.forEach(function (question) {
    const questionElement = createQuestionElement(question);
    questionList.appendChild(questionElement);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question');

  questions.forEach(function (question) {
    const header = question.querySelector('.question-header');
    header.addEventListener('click', function () {
      questions.forEach(function (otherQuestion) {
        if (otherQuestion !== question) {
          otherQuestion.classList.remove('active');
          otherQuestion.querySelector('.question-body').style.display = 'none';
        }
      });

      const body = question.querySelector('.question-body');
      body.style.display = body.style.display === 'block' ? 'none' : 'block';

      header.classList.toggle('active');
    });
  });
});

const footer = document.querySelector('.footer');

const links = [
  {
    url: 'https://www.linkedin.com/in/fedir-davydov/',
    imageSrc: '/Assets/LinkedIn.svg',
    text: 'LinkedIn'
  },

  {
    url: 'https://www.behance.net/fedirdavydov',
    imageSrc: '/Assets/Behance.svg',
    text: 'Behance'
  },

  {
    url: 'https://www.figma.com/@fedir_davydov',
    imageSrc: '/Assets/Figma.svg',
    text: 'Templates'
  },

  {
    url: 'https://www.dropbox.com/scl/fi/gxftzkmmmi2gudvk45772/Fedir_Davydov_Resume.pdf?rlkey=qh7e9j6uisac02757777lcogb&dl=0',
    imageSrc: '/Assets/Resume.svg',
    text: 'Resume'
  },
];

links.forEach(link => {
  const linkElement = document.createElement('a');
  linkElement.classList.add('footer-link');
  linkElement.href = link.url;

  if (link.imageSrc) {
    const image = document.createElement('img');
    image.src = link.imageSrc;
    image.alt = link.text;
    linkElement.appendChild(image);
  }

  const text = document.createElement('p');
  text.textContent = link.text;
  linkElement.appendChild(text);

  footer.querySelector('.footer-links').appendChild(linkElement);
});