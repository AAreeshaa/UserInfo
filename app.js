
const users = [
  {
    name: "Lee Min Hoo",
    occupation: "Actor ",
    streak: true,
    profileImage:
      "download (2).jpg"
  },

  {
    name: "Millie Bobby",
    occupation: "Actress and Model",
    streak: false,
    profileImage:
      "download (3).jpg"
  },

  {
    name: "Elon Musk",
    occupation: "CEO",
    streak: true,
    profileImage:
      "download (1).jpg"
  },
  {
    name: "Christiano Ronaldo",
    occupation: "Footballer",
    streak: true,
    profileImage: "download.jpg"

  },];

function getUsers() {
  const main = document.getElementById("main");

  setTimeout(() => {
    users.forEach(function (item) {
      const div = document.createElement("div");
      div.classList.add("user");
      main.append(div);

      const img = document.createElement("img");
      img.classList.add("img");
      img.src = item.profileImage;
      div.append(img);

      const div2 = document.createElement("div");
      const p = `<p class="p-1">${item.name}</p>
        <p class="p-2">${item.occupation}</p>`
      div2.innerHTML = p
      div.append(div2)
    });

    document.getElementById("loader").innerHTML = ""
  }, 2000);
}

getUsers();
