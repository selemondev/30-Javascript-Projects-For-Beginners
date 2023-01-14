const box = document.querySelector(".box");
document.addEventListener("keydown", (e) => {
  let keyName = e.key === 32 ? "Space" : e.key;
  box.querySelector(".key-code").innerText = e.key;
  box.querySelector(".key-name").innerText = keyName.toUpperCase();
  box.querySelector(".key span").innerText = keyName;
  box.querySelector(".code span").innerText = e.which;  
  box.classList.add("active");
});

// coded by 'codingnepal' and modified and updated by 'selemondev'