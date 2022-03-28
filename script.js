const List = function (element, listItems) {
  console.log(element);
  this.pageSize = listItems.length;
  this.currentPage = 1;
  function render(start, end) {
    let htmlContent =
      '<table class="tab"><tr><th>rollno</th><th>Name</th><th>Email</th></tr><tbody id="tableBody"></tbody></table>';
    $(element).html(htmlContent);
    let html1 = document.getElementById("tableBody");

    document.getElementById("pageNum").innerText = count;
    for (let i = start; i < end; i++) {
      html1.innerHTML += `<tr><td>${listItems[i].rollno}</td> <td>${listItems[i].name}</td><td>${listItems[i].email}</td></tr>`;
    }
    // let htmlContent1 = `<button class='first'>first</button><button class='prev'>prev</button>${this.currentPage}<button class='next'>next</button><button class='last'>last</button>`;

    // element.innerHTML += htmlContent1;
  }
  let count = 1;
  let start = 0;
  let perPageContent = 5;
  let end = perPageContent;

  render(start, end);
  let x = document.getElementById("sel");

  x.addEventListener("change", (e) => {
    console.log(e.currentTarget.value);
    perPageContent = Number(e.currentTarget.value);
    render(0, perPageContent);
    end = perPageContent;
  });

  //let y = getElementById("pageNum");

  this.navigateFirst = function () {
    console.log("First");
    start = 0;
    end = perPageContent;
    render(start, end);
    currentPage = 1;
    count = 1;
  };
  this.navigateLast = function () {
    this.currentPage = this.pageSize;
    //builtTable();

    console.log("Last");
    end = this.pageSize;
    start = end - perPageContent;
    console.log(start, end);
    render(start, end);
  };
  this.navigatePrev = function () {
    if (this.currentPage == 1) return;
    this.currentPage = this.currentPage - 1;
    //builtTable();
    console.log("Prev");
    start = start - perPageContent;
    end = end - perPageContent;
    count -= 1;
    render(start, end);
  };
  this.navigateNext = function () {
    let totalPage = listItems.length / this.pageSize;
    if (this.currentPage == totalPage) return;
    this.currentPage = this.currentPage + 1;
    console.log("Next");
    //console.log(perPageContent, start, end);
    //builtTable();
    start = start + perPageContent;
    end = end + perPageContent;
    console.log(start, end);
    count = count + 1;
    console.log(count);
    render(start, end);
  };
  this.changeShow = function () {
    this.pageSize = document.getElementsByClassName("sel");
    //builtTable();
    this.render();
  };
  $(".first").on("click", this.navigateFirst);
  $(".last").on("click", this.navigateLast);
  $(".prev").on("click", this.navigatePrev);
  $(".next").on("click", this.navigateNext);
  $(".sel").on("change", this.changeShow);
};

// List.prototype.render=function(){

// };

// }

// List();

// const listObj = new List(document.getElementById('elementId'), students);

// listObj.render();

// let rowelement = document.createElement('tr');
// rowelement.innerHTML = "<td>1</td><td>Paras</td><td>paras.jain@unthinkable.co</td>"
// document.getElementById("tableBody").append(rowelement);
// document.getElementById("tablefoot").append()
//console.log(document.querySelector('#top').textContent);
// console.log(document.querySelector('#top').textContent);;
