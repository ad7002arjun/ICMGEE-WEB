document.addEventListener('DOMContentLoaded', function() {
  // Topics data
  const topics = [
    'Machine Learning',
    'Deep Learning',
    'Intelligent and Knowledge-Based Systems',
    'Expert Systems',
    'Geographic Information Systems',
    'Intrusion Detection',
    'Agents and Multi-agent Systems',
    'Natural Language Processing',
    'Signal Processing',
    'Computer Vision',
    'Virtual Reality',
    'Augmented Reality',
    'Hybrid and Nonlinear Systems',
    'Intelligent Control',
    'Context-aware Pervasive Systems',
    'Bioinformatics',
    'Fuzzy Logic',
    'Data Mining',
    'Big Data',
    'Internet of Things (IoT)',
    'Internet of Services',
    'Smart Manufacturing',
    'Smart Devices and Products',
    'Smart Logistics',
    'Smart City',
    'Cyber-physical Systems',
    'Robotics and Automation',
    'Support Systems for Industry 5.0',
    'Mobile Computing',
    'Cloud Computing for Industry 5.0',
    'Security'
  ];

  // Timeline data
  const timelineData = [
    {
      date: '15.1.2025',
      title: 'Paper Submission Deadline',
      description: 'Last day to submit your research papers'
    },
    {
      date: '15.2.2025',
      title: 'Acceptance Notification',
      description: 'Authors will be notified of acceptance decisions'
    },
    {
      date: '29.2.2025',
      title: 'Last Date of Registration',
      description: 'Final day to register for the conference'
    },
    {
      date: '22.3.2025',
      title: 'Conference Date',
      description: 'The Industry 5.0 Conference begins'
    }
  ];

  // DOM Elements
  const menuToggle = document.getElementById('menuToggle');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const sideMenu = document.getElementById('sideMenu');
  const overlay = document.getElementById('overlay');
  const menuItems = document.querySelectorAll('.menu-item');
  const scrollToTopics = document.getElementById('scrollToTopics');
  const techBackground = document.querySelector('.tech-background');
  const topicsColumns = document.querySelectorAll('.topics-column');
  const timeline = document.querySelector('.timeline');
  const submissionForm = document.getElementById('submissionForm');
  const fileInput = document.getElementById('file');
  const fileName = document.getElementById('fileName');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  // Menu Toggle
  function toggleMenu() {
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }

  menuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Smooth Scrolling
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      const section = document.getElementById(sectionId);
      
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Update active menu item
        menuItems.forEach(menuItem => {
          menuItem.classList.remove('active');
        });
        this.classList.add('active');
        
        // Close menu on mobile
        toggleMenu();
      }
    });
  });

  scrollToTopics.addEventListener('click', function() {
    document.getElementById('topics').scrollIntoView({ behavior: 'smooth' });
  });

  // Create tech background elements
  function createTechBackground() {
    // Create dots
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement('div');
      dot.classList.add('tech-dot');
      
      const size = Math.random() * 10 + 5;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.top = `${top}%`;
      dot.style.left = `${left}%`;
      dot.style.animation = `float ${duration}s linear infinite`;
      dot.style.animationDelay = `${delay}s`;
      
      techBackground.appendChild(dot);
    }
    
    // Create lines
    for (let i = 0; i < 15; i++) {
      const line = document.createElement('div');
      line.classList.add('tech-line');
      
      const width = Math.random() * 100 + 50;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 5;
      const duration = Math.random() * 8 + 5;
      
      line.style.width = `${width}px`;
      line.style.top = `${top}%`;
      line.style.left = `${left}%`;
      line.style.transform = `rotate(${rotation}deg)`;
      line.style.animation = `pulse ${duration}s ease-in-out infinite`;
      line.style.animationDelay = `${delay}s`;
      
      techBackground.appendChild(line);
    }
  }

  // Populate topics grid
  function populateTopics() {
    const midpoint = Math.ceil(topics.length / 2);
    const leftColumnTopics = topics.slice(0, midpoint);
    const rightColumnTopics = topics.slice(midpoint);
    
    function createTopicItems(columnTopics, column) {
      columnTopics.forEach(topic => {
        const topicItem = document.createElement('div');
        topicItem.classList.add('topic-item');
        
        const topicDot = document.createElement('div');
        topicDot.classList.add('topic-dot');
        
        const topicText = document.createElement('span');
        topicText.classList.add('topic-text');
        topicText.textContent = topic;
        
        topicItem.appendChild(topicDot);
        topicItem.appendChild(topicText);
        column.appendChild(topicItem);
      });
    }
    
    createTopicItems(leftColumnTopics, topicsColumns[0]);
    createTopicItems(rightColumnTopics, topicsColumns[1]);
  }

  // Create timeline
  function createTimeline() {
    timelineData.forEach((item, index) => {
      const timelineItem = document.createElement('div');
      timelineItem.classList.add('timeline-item');
      timelineItem.style.animationDelay = `${index * 0.2}s`;
      
      const timelineDot = document.createElement('div');
      timelineDot.classList.add('timeline-dot');
      
      const timelineContent = document.createElement('div');
      timelineContent.classList.add('timeline-content');
      
      const timelineDate = document.createElement('div');
      timelineDate.classList.add('timeline-date');
      
      const calendarIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      calendarIcon.setAttribute('width', '20');
      calendarIcon.setAttribute('height', '20');
      calendarIcon.setAttribute('viewBox', '0 0 24 24');
      calendarIcon.setAttribute('fill', 'none');
      calendarIcon.setAttribute('stroke', 'currentColor');
      calendarIcon.setAttribute('stroke-width', '2');
      calendarIcon.setAttribute('stroke-linecap', 'round');
      calendarIcon.setAttribute('stroke-linejoin', 'round');
      
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', '3');
      rect.setAttribute('y', '4');
      rect.setAttribute('width', '18');
      rect.setAttribute('height', '18');
      rect.setAttribute('rx', '2');
      rect.setAttribute('ry', '2');
      
      const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line1.setAttribute('x1', '16');
      line1.setAttribute('y1', '2');
      line1.setAttribute('x2', '16');
      line1.setAttribute('y2', '6');
      
      const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line2.setAttribute('x1', '8');
      line2.setAttribute('y1', '2');
      line2.setAttribute('x2', '8');
      line2.setAttribute('y2', '6');
      
      const line3 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line3.setAttribute('x1', '3');
      line3.setAttribute('y1', '10');
      line3.setAttribute('x2', '21');
      line3.setAttribute('y2', '10');
      
      calendarIcon.appendChild(rect);
      calendarIcon.appendChild(line1);
      calendarIcon.appendChild(line2);
      calendarIcon.appendChild(line3);
      
      const dateText = document.createElement('h3');
      dateText.textContent = item.date;
      
      timelineDate.appendChild(calendarIcon);
      timelineDate.appendChild(dateText);
      
      const timelineTitle = document.createElement('h4');
      timelineTitle.classList.add('timeline-title');
      timelineTitle.textContent = item.title;
      
      const timelineDescription = document.createElement('p');
      timelineDescription.classList.add('timeline-description');
      timelineDescription.textContent = item.description;
      
      timelineContent.appendChild(timelineDate);
      timelineContent.appendChild(timelineTitle);
      timelineContent.appendChild(timelineDescription);
      
      timelineItem.appendChild(timelineDot);
      timelineItem.appendChild(timelineContent);
      
      timeline.appendChild(timelineItem);
    });
  }

  // File input handling
  fileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
      fileName.textContent = this.files[0].name;
    } else {
      fileName.textContent = 'Click to upload your paper';
    }
  });

  // Form submission
  submissionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    
    // Simulate success after 1.5 seconds
    setTimeout(() => {
      submitButton.textContent = 'Submit Paper';
      successMessage.classList.remove('hidden');
      
      // Reset form after success
      setTimeout(() => {
        this.reset();
        fileName.textContent = 'Click to upload your paper';
        submitButton.disabled = false;
        successMessage.classList.add('hidden');
      }, 3000);
    }, 1500);
  });

  // Scroll spy for menu
  function updateActiveMenuItem() {
    const sections = ['home', 'topics', 'submission', 'dates', 'contact'];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === section) {
              item.classList.add('active');
            }
          });
          break;
        }
      }
    }
  }

  window.addEventListener('scroll', updateActiveMenuItem);

  // Intersection Observer for animations
  const observeElements = (elements, className) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    elements.forEach(el => observer.observe(el));
  };

  // Initialize
  createTechBackground();
  populateTopics();
  createTimeline();
  
  // Observe timeline items for animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  observeElements(timelineItems, 'fade-in');
  
  // Ad
}
)



function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}