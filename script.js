// Auton Data (Example)
const autonData = [
    {
        title: "Auton 1 (Blue Backdrop)",
        tags: ["Blue", "Backdrop"],
        videos: ["videos/auton1/left.webm", "videos/auton1/middle.webm", "videos/auton1/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK ON LEFT",
        points: 50,
        tested: "TESTED"
    },
    {
        title: "Auton 2 (Blue Backdrop)",
        tags: ["Blue", "Backdrop"],
        videos: ["videos/auton2/left.webm", "videos/auton2/middle.webm", "videos/auton2/right.webm"],
        pseudocode: "\nDROP YELLOW PIXEL ON BACKDROP\nDROP PURPLE PIXEL ON SPIKE MARK\nPICK UP 2 WHITE PIXELS\nPARK ON LEFT",
        points: 50,
        tested: "NOT TESTED"
    },
    {
        title: "Auton 3 (Red Backdrop)",
        tags: ["Red", "Backdrop"],
        videos: ["videos/auton3/left.webm", "videos/auton3/middle.webm", "videos/auton3/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK ON RIGHT",
        points: 50,
        tested: "TESTED"
    },
    {
        title: "Auton 4 (Red Backdrop)",
        tags: ["Red", "Backdrop"],
        videos: ["videos/auton4/left.webm", "videos/auton4/middle.webm", "videos/auton4/right.webm"],
        pseudocode: "\nDROP YELLOW PIXEL ON BACKDROP\nDROP PURPLE PIXEL ON SPIKE MARK\nPICK UP 2 WHITE PIXELS\nPARK ON RIGHT",
        points: 50,
        tested: "NOT TESTED"
    },
    {
        title: "Auton 5 (Blue Backdrop)",
        tags: ["Blue", "Backdrop"],
        videos: ["videos/auton5/left.webm", "videos/auton5/middle.webm", "videos/auton5/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK ON RIGHT",
        points: 50,
        tested: "NOT TESTED"
    },
    {
        title: "Auton 6 (Red Backdrop)",
        tags: ["Red", "Backdrop"],
        videos: ["videos/auton6/left.webm", "videos/auton6/middle.webm", "videos/auton6/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK ON LEFT",
        points: 50,
        tested: "NOT TESTED"
    },
    {
        title: "Auton 7 (Blue Backdrop)",
        tags: ["Blue", "Backdrop"],
        videos: ["videos/auton7/left.webm", "videos/auton7/middle.webm", "videos/auton7/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK IN CENTER",
        points: 50,
        tested: "NOT TESTED"
    },
    {
        title: "Auton 8 (Red Backdrop)",
        tags: ["Red", "Backdrop"],
        videos: ["videos/auton8/left.webm", "videos/auton8/middle.webm", "videos/auton8/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK IN CENTER",
        points: 50,
        tested: "NOT TESTED"
    },
    {
        title: "Auton 9 (Blue Wing)",
        tags: ["Blue", "Wing"],
        videos: ["videos/auton9/left.webm", "videos/auton9/middle.webm", "videos/auton9/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK IN CENTER",
        points: 50,
        tested: "NOT TESTED"
    },
    {
        title: "Auton 10 (Blue Wing)",
        tags: ["Blue", "Wing"],
        videos: ["videos/auton10/left.webm", "videos/auton10/middle.webm", "videos/auton10/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK ON LEFT",
        points: 50,
        tested: "NOT TESTED"
    },
    {
        title: "Auton 11 (Blue Wing)",
        tags: ["Blue", "Wing"],
        videos: ["videos/auton11/left.webm", "videos/auton11/middle.webm", "videos/auton11/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK ON RIGHT",
        points: 50,
        tested: "TESTED"
    },
    {
        title: "Auton 12 (Red Wing)",
        tags: ["Red", "Wing"],
        videos: ["videos/auton12/left.webm", "videos/auton12/middle.webm", "videos/auton12/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK IN CENTER",
        points: 50,
        tested: "NOT TESTED"
    },
    {
        title: "Auton 13 (Red Wing)",
        tags: ["Red", "Wing"],
        videos: ["videos/auton13/left.webm", "videos/auton13/middle.webm", "videos/auton13/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK ON RIGHT",
        points: 50,
        tested: "NOT TESTED"
    },
    {
        title: "Auton 14 (Red Wing)",
        tags: ["Red", "Wing"],
        videos: ["videos/auton14/left.webm", "videos/auton14/middle.webm", "videos/auton14/right.webm"],
        pseudocode: "DROP PURPLE PIXEL ON SPIKE MARK\nDROP YELLOW PIXEL ON BACKDROP\nPARK ON LEFT",
        points: 50,
        tested: "TESTED"
    }
    
];

// Function to create the grid item for each auton
function createAutonItem(auton) {
    const item = document.createElement('div');
    item.classList.add('auton-item');
    item.classList.add(auton.tags[0])

    const title = document.createElement('h3');
    const title_text = auton.title + " - " + auton.points + " points ";
    //const title_text = auton.title + " - " + auton.points + " points " + "(" + auton.tested + ")";
    title.innerText = title_text;
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

    const pseudocode = document.createElement('p');
    pseudocode.innerText = auton.pseudocode;
    item.appendChild(pseudocode);


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
    /*const allButton = document.createElement('button');
    allButton.innerText = 'All';
    allButton.dataset.tag = 'all';
    allButton.dataset.subtag = 'all';
    subFilterContainer.appendChild(allButton);*/
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