const menuBtn=document.querySelector('.menu-btn');
const mobileMenu=document.querySelector('.mobile-menu');

if(menuBtn&&mobileMenu){
  const setMenu=(open)=>{
    mobileMenu.classList.toggle('open',open);
    menuBtn.setAttribute('aria-expanded',String(open));
    menuBtn.setAttribute('aria-label',open?'Close menu':'Open menu');
  };

  menuBtn.addEventListener('click',()=>setMenu(!mobileMenu.classList.contains('open')));
  mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape')setMenu(false);
  });

  window.addEventListener('resize',()=>{
    if(window.innerWidth>860)setMenu(false);
  });
}

const els=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  },{threshold:.08});
  els.forEach(el=>obs.observe(el));
}else{
  els.forEach(el=>el.classList.add('visible'));
}
