const mapImg = document.querySelector('#map-container img');
const kingdomInfo = document.querySelector('#kingdom-info');


const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);


const areas = document.querySelectorAll('map area');
areas.forEach((area) => {
  area.addEventListener('mouseenter', handleMouseEnter);
  area.addEventListener('mouseleave', handleMouseLeave);
  area.addEventListener('mousemove', handleMouseMove);
  area.addEventListener('click', showKingdomInfo);
});

function handleMouseEnter(event) {
    tooltip.textContent = event.target.dataset.kingdom;
    tooltip.style.display = 'block';
  }

function handleMouseLeave() {
  tooltip.style.display = 'none';
}

function handleMouseMove(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  
  const tooltipX = mouseX + 10 < windowWidth - tooltipWidth ? mouseX + 10 : mouseX - tooltipWidth - 10;
  const tooltipY = mouseY + 10 < windowHeight - tooltipHeight ? mouseY + 10 : mouseY - tooltipHeight - 10;

  tooltip.style.left = `${tooltipX}px`;
  tooltip.style.top = `${tooltipY}px`;
}


function showKingdomInfo(event) {
  event.preventDefault();
  const kingdom = event.target.dataset.kingdom;
  const info = event.target.dataset.info;
  const image = event.target.dataset.image;

  
  if (kingdomInfo.style.display === 'block' && kingdomInfo.dataset.kingdom === kingdom) {
    
    kingdomInfo.style.animation = 'slide-in 1.5s forwards';

    
    setTimeout(() => {
      kingdomInfo.style.display = 'none';
      kingdomInfo.style.animation = '';
    }, 1500);
  } else {
    kingdomInfo.innerHTML = `<h3>${kingdom}</h3><img src="${image}" alt="Ruling House"><p>${info}</p>`;
    kingdomInfo.style.display = 'block';
    kingdomInfo.dataset.kingdom = kingdom;
  }
}
