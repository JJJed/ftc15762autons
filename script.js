// Auton Data (Example)
const autonData = [
    {
        title: "Auton 1 (Blue Backdrop)",
        tags: ["Blue", "Backdrop"],
        videos: ["videos/auton1/left.webm", "videos/auton1/middle.webm", "videos/auton1/right.webm"]
    },
    {
        title: "Auton 2 (Blue Backdrop)",
        tags: ["Blue", "Backdrop"],
        videos: ["videos/auton2/left.webm", "videos/auton2/middle.webm", "videos/auton2/right.webm"]
    },
    {
        title: "Auton 3 (Red Backdrop)",
        tags: ["Red", "Backdrop"],
        videos: ["videos/auton3/left.webm", "videos/auton3/middle.webm", "videos/auton3/right.webm"]
    },
    {
        title: "Auton 4 (Red Backdrop)",
        tags: ["Red", "Backdrop"],
        videos: ["videos/auton4/left.webm", "videos/auton4/middle.webm", "videos/auton4/right.webm"]
    },
    // ... Add more auton data with tags "Red" and "Blue" (and their subcategories)
];

// Function to create the grid item for each auton
function createAutonItem(auton) {
    const item = document.createElement('div');
    item.classList.add('auton-item');

    const title = document.createElement('h3');
    title.innerText = auton.title;
    item.appendChild(title);

    // Create Table Structure
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    ['Left', 'Middle', 'Right'].forEach(columnTitle => {
        const th = document.createElement('th');
        th.innerText = columnTitle;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    const videoRow = document.createElement('tr');
    auton.videos.forEach((videoUrl, index) => {
        const td = document.createElement('td');
        const video = document.createElement('video');
        video.muted = true; 
        video.src = videoUrl;
        td.appendChild(video);
        videoRow.appendChild(td);
    });
    table.appendChild(videoRow);

    item.appendChild(table); // Add table instead of video container

    return item;
}



// Filter functionality with subcategories
const filterButtons = document.querySelectorAll('.filter-controls button');
const subFilterContainer = document.querySelector('.filter-controls-sub');
const autonGrid = document.getElementById('auton-grid');

// Primary Category Filters
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        clearAutons();

        const selectedTag = button.dataset.tag;
        updateSubFilters(selectedTag);
        loadAutons(selectedTag, 'all');

        // Add event Listener for sub-filter buttons
        subFilterContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const selectedSubtag = event.target.dataset.subtag;
                clearAutons();
                loadAutons(selectedTag, selectedSubtag);
            }
        });
    });
});


// Subcategory Filter - Click on container (to handle all/none selection)
/*subFilterContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const selectedTag = filterButtons.find(button => button.dataset.tag === event.target.dataset.tag).dataset.tag;
    const selectedSubtag = event.target.dataset.subtag;
    console.log(selectedSubtag);
    loadAutons(selectedTag, selectedSubtag);
  }
});*/

// Helper Functions
function updateSubFilters(selectedTag) {
  subFilterContainer.innerHTML = ''; // Clear existing sub-filters

  if (selectedTag === 'all') {
    // Show "All" button only
    const allButton = document.createElement('button');
    allButton.innerText = 'All';
    allButton.dataset.tag = 'all';
    allButton.dataset.subtag = 'all';
    subFilterContainer.appendChild(allButton);
  } else {
    // Show "Backdrop" and "Wing" buttons for the selected tag
    const subtags = ['Backdrop', 'Wing'];
    subtags.forEach(subtag => {
      const button = document.createElement('button');
      button.innerText = subtag;
      button.dataset.tag = selectedTag;
      button.dataset.subtag = subtag;
      subFilterContainer.appendChild(button);
    });
  }
}

function loadAutons(tag, subtag) {
    autonData.forEach(auton => {
      if ((tag === 'all' || auton.tags[0] === tag) && (subtag === 'all' || auton.tags[1] === subtag)) { // Updated Condition
        const item = createAutonItem(auton);
        autonGrid.appendChild(item);
      }
    });

    // Add hover listeners to videos
    const videos = document.querySelectorAll('.auton-item video'); 
    videos.forEach(video => {
      video.addEventListener('mouseenter', () => video.play()); 
      video.addEventListener('mouseleave', () => video.pause()); 
    });
  }
  

function clearAutons() {
  autonGrid.innerHTML = '';
}

// Initial Load - Add event listeners after creating the elements
document.addEventListener('DOMContentLoaded', () => {
    updateSubFilters('all');
    loadAutons('all', 'all'); 
  
    
  });