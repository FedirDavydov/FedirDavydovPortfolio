//Benefits

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

//Reviews

const reviewsData = [
  {
    imageSrc: "./Images/Client Image.webp",
    reviewText: "«Fedir is a talented designer with communication skills and great UI knowledge. He is a hard-working team player who delivers on time. I recommend him»",
    clientInfo: "Cristian"
  },
  {
    imageSrc: "./Images/Client Image 2.webp",
    reviewText: "«It was great to work with Fedir! His professionalism was 10 out of 10 and the result exceeded my expectations. I will recommend him to my colleagues and partners!»",
    clientInfo: "Yury"
  },
  {
    imageSrc: "./Assets/Client Image.svg",
    reviewText: "«Fedir was one of the best people we have worked with on Upwork. His communication skills were excellent and his responsiveness allowed us to be really engaged in the design process»",
    clientInfo: "Varun"
  }
];

function renderReviews() {
  const reviewsWrapper = document.getElementById("reviewsWrapper");

  reviewsData.forEach(review => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    reviewElement.innerHTML = `
      <img src="${review.imageSrc}" alt="client image">
      <p class="review-text">${review.reviewText}</p>
      <p class="client-info">${review.clientInfo}</p>
    `;

    reviewsWrapper.appendChild(reviewElement);
  });
}

renderReviews();

//Process

const processSteps = [
  {
    imageSrc: "./Assets/1.svg",
    title: "Discovery call",
    description: "Every successful project begins with a detailed discovery call. This initial conversation is a pivotal moment where I dive deep into understanding your brand, your vision, and your specific needs. It\'s an opportunity for me to explore your goals, target audience, and any challenges you\’re facing. This step ensures that we\'re perfectly aligned from the start, setting a solid foundation for your project\’s success."
  },

  {
    imageSrc: "./Assets/2.svg",
    title: "Wireframes",
    description: "This is where we start bringing your ideas to life. Think of wireframes as the blueprint of your website. It's like sketching out a map before building the real deal. I’ll outline the basic structure, layout, and elements of your pages. It's all about planning where everything goes, making sure it all makes sense for you and your visitors. This step saves us time down the road and makes sure we're on the same page from the get-go."
  },

  {
    imageSrc: "./Assets/3.svg",
    title: "Concepts",
    description: "With a solid plan in place, it's time to bring creativity to the forefront. In the concept stage, I translate wireframes into visually compelling design concepts. This step is all about experimentation and innovation, as I explore different color schemes, typography, and imagery that align with your brand identity. You'll have the opportunity to review these concepts and provide feedback, ensuring our vision is perfectly in tune."
  },

  {
    imageSrc: "./Assets/4.svg",
    title: "Design",
    description: "I translate your vision into an effective, cohesive, and aesthetically-pleasing digital presence. My thoughtful designs connect with your audience at an emotional level through visual storytelling. I ensure the user experience aligns seamlessly with your messaging. The final design intuitively guides your customers on a journey tailored to prompt action."
  },

  {
    imageSrc: "./Assets/5.svg",
    title: "Development",
    description: "I take your approved designs and expertly code them into a fully functioning website. I use clean, efficient code and web best practices so your site loads fast and looks great on all devices. My development skills bring your vision to life with quality and care, delivering a custom site you can rely on to achieve your goals."
  },

  {
    imageSrc: "./Assets/6.svg",
    title: "Hand off",
    description: "Since I built your website using custom code, I handle all updates and changes rather than handing off that responsibility. This ensures your site continues running smoothly and securely. Whenever you need any modifications - big or small - simply let me know and I will make them for you. With me taking care of the complex backend work, you can focus on your business while trusting your website is in good hands."
  },

];

const processGrid = document.querySelector('.process-grid');

processSteps.forEach((step) => {
  const processStep = document.createElement('div');
  processStep.classList.add('process-step');
  
  const processStepHeader = document.createElement('div');
  processStepHeader.classList.add('process-step-header');
  
  const img = document.createElement('img');
  img.src = step.imageSrc;
  img.alt = "Number";
  
  const h3 = document.createElement('h3');
  h3.textContent = step.title;
  
  const paragraph = document.createElement('p');
  paragraph.textContent = step.description;
  
  processStepHeader.appendChild(img);
  processStepHeader.appendChild(h3);
  
  processStep.appendChild(processStepHeader);
  processStep.appendChild(paragraph);
  
  processGrid.appendChild(processStep);
});

//Stats

const statsList = document.querySelector('.stats-list');


const statsData = [
  { image: '/Assets/Award.svg', text: '#1 web designer in the Uxcel global rankings' },
  { image: '/Assets/Certificate.svg', text: 'Certified user interface designer' },
  { image: '/Assets/Figma Filled.svg', text: '1000+ people use my design templates' },
  { image: '/Assets/Upwork.svg', text: 'Ex. Upwork Top Rated freelancer' },
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

//FAQ

document.addEventListener('DOMContentLoaded', function () {
  const questionData = [
    {
      title: "What is your pricing model?",
      content: "My pricing model is tailored to meet the needs of a diverse range of clients and projects. I offer both hourly rates and fixed project fees, depending on the nature and scope of the work. After our initial consultation, where I learn more about your specific requirements and objectives, I’ll provide you with a detailed proposal outlining the project costs. Rest assured, I aim for transparency and affordability in all my pricing structures."
    },
    {
      title: "How fast will you deliver the design?",
      content: "The timeline for delivering a design can vary based on a few key factors including the complexity of the project, the number of revisions needed, and our current workload. Typically, for a standard web design project, you can expect to see an initial concept within 5-10 business days after I've received all the necessary information and materials."
    },
    {
      title: "Do you work with complex projects?",
      content: "Of course! I enjoy tackling difficult design tasks and creating visually appealing designs that prioritize user experience. I specialize in delivering high-quality design solutions for complex projects, focusing mainly on design rather than development. While I can handle both aspects for simpler projects, my strength lies in designing intricate ones."
    },
    {
      title: "Can you redesign my website?",
      content: "Absolutely! I specialize in website redesigns and can help you create a modern, user-friendly, and conversion-focused website that reflects your brand and resonates with your target audience. During the consultation, we can discuss your redesign goals and budget to craft a customized plan."
    },
    {
      title: "What is included in a free website audit?",
      content: "My free website audit provides a comprehensive analysis of your website's strengths and weaknesses. It covers aspects like design, usability, SEO, and mobile responsiveness. You'll receive a detailed report with actionable recommendations to improve your website's performance and user experience."
    },
    {
      title: "What can I expect by the end of the project?",
      content: "By the end of our collaboration, you can expect a stunning website that meets your business goals and objectives."
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

//Footer

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
    url: 'https://www.dropbox.com/scl/fi/hmkj8k9s13mvlkjpeteu1/Fedir_Davydov_Resume_2024.pdf?rlkey=h07uov5sssmucfejnkx24nyvw&dl=0',
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
    image.alt = 'Social media icon';
    linkElement.appendChild(image);
  }

  const text = document.createElement('p');
  text.textContent = link.text;
  linkElement.appendChild(text);

  footer.querySelector('.footer-links').appendChild(linkElement);
});